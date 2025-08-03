using Todo.Models;
using Todo.Repositories;

namespace TodoApp.Tests
{
    public class TodoRepositoryTests
    {

        private readonly TodoRepository _repository;

        public TodoRepositoryTests()
        {
            _repository = new TodoRepository();
        }

        [Fact]
        public void AddTodoItem_ShouldAddItemToList()
        {
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Test Task" };

            _repository.AddTodoItem(todo);
            var allTodos = _repository.GetTodoList();

            Assert.Contains(todo, allTodos);
        }

        [Fact]
        public void DeleteTodoItem_ShouldRemoveItemFromList()
        {
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Delete Me" };
            _repository.AddTodoItem(todo);

            _repository.DeleteTodoItem(todo.Id);
            var result = _repository.GetTodoList();

            Assert.DoesNotContain(todo, result);
        }

        [Fact]
        public void GetTodoItemById_ShouldReturnCorrectItem()
        {
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Find Me" };
            _repository.AddTodoItem(todo);

            var result = _repository.GetTodoItemById(todo.Id);

            Assert.NotNull(result);
            Assert.Equal(todo.Id, result.Id);
        }

        [Fact]
        public void GetTodoList_ShouldReturnAllItems()
        {
            var todo1 = new TodoItem { Id = Guid.NewGuid(), Title = "Task 1" };
            var todo2 = new TodoItem { Id = Guid.NewGuid(), Title = "Task 2" };
            _repository.AddTodoItem(todo1);
            _repository.AddTodoItem(todo2);

            var todos = _repository.GetTodoList();

            Assert.Equal(2, todos.Count);
            Assert.Contains(todo1, todos);
            Assert.Contains(todo2, todos);
        }

        [Fact]
        public void UpdateTodoItem_ShouldModifyExistingItem()
        {
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Old Title" };
            _repository.AddTodoItem(todo);

            var updated = new TodoItem { Id = todo.Id, Title = "New Title" };
            _repository.UpdateTodoItem(updated);

            var result = _repository.GetTodoItemById(todo.Id);
            Assert.NotNull(result);
            Assert.Equal("New Title", result.Title);
        }

        [Fact]
        public void UpdateTodoItem_WithInvalidId_ShouldDoNothing()
        {
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Valid" };
            _repository.AddTodoItem(todo);

            var updated = new TodoItem { Id = Guid.NewGuid(), Title = "Invalid" };
            _repository.UpdateTodoItem(updated);

            var all = _repository.GetTodoList();
            Assert.Single(all);
            Assert.Equal("Valid", all[0].Title);
        }
    }
}
