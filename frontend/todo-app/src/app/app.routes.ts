import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';


export const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodoList }
];
