import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { ConfirmDeleteDialog } from '../confirm-delete-dialog/confirm-delete-dialog';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  todos: Todo[] = [];
  newTaskTitle: string = '';
  editingTodoId: string | null | undefined = null;
  updatedTitle: string = '';
  backendAvailable = true;

  constructor(
    private todoService: TodoService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
  this.todoService.getTodos().subscribe({
    next: (todos) => {
      this.todos = todos;
    },
    error: () => {
      this.backendAvailable = false;
    }
  });
}

  // Add New Todo Item
  addTodoItem(): void {
    const title = this.newTaskTitle.trim();
    if (!title) return;
    const newTodo: Todo = { title };
    this.todoService.addTodo(newTodo).subscribe((addedTodo) => {
      this.todos.push(addedTodo);
      this.newTaskTitle = '';
    });
  }

  // Editing Todo Item
  startEdit(todo: Todo): void {
    this.editingTodoId = todo.id;
    this.updatedTitle = todo.title;
  }

  // Updating Todo Item
  saveEdit(todo: Todo): void {
    const updatedTodo = { ...todo, title: this.updatedTitle };
    this.todoService.updateTodo(updatedTodo).subscribe((updated) => {
      const index = this.todos.findIndex((t) => t.id === updated.id);
      if (index > -1) this.todos[index] = updated;
      this.cancelEdit();
    });
  }

  // Cancel Todo Item Updation
  cancelEdit(): void {
    this.editingTodoId = null;
    this.updatedTitle = '';
  }

  // Confirm Delete Dialog
  confirmAndDelete(todo: Todo): void {
    if (!todo.id) return;
    const dialogRef = this.dialog.open(ConfirmDeleteDialog);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.deleteTodoItem(todo);
      }
    });
  }

  // Delete Todo Item
  deleteTodoItem(todo: Todo): void {
    this.todoService.deleteTodo(todo.id!).subscribe(() => {
      this.todos = this.todos.filter((t) => t.id !== todo.id);

      // Show snackbar with title
      this.snackBar.open(`Task "${todo.title}" deleted`, 'Close', {
        duration: 3000,
      });
    });
  }
}
