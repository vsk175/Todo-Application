using Todo.Features.Todos.Commands.UpdateTodo;
using Todo.Models;
using Todo.Repositories;

namespace TodoApp.Tests
{
    public class UpdateTodoItemCommandHandlerTests
    {
        private readonly TodoRepository _repository;
        private readonly UpdateTodoItemCommandHandler _handler;

        public UpdateTodoItemCommandHandlerTests()
        {
            _repository = new TodoRepository();
            _handler = new UpdateTodoItemCommandHandler(_repository);
        }

        [Fact]
        public async Task Handle_ShouldReturnUpdatedTodoDto_WhenItemExists()
        {
            // Arrange
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Old Title" };
            _repository.AddTodoItem(todo);

            var newTitle = "Updated Title";
            var command = new UpdateTodoItemCommand(todo.Id, newTitle);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(todo.Id, result.Id);
            Assert.Equal(newTitle, result.Title);

            // Also verify repository item updated
            var updatedTodo = _repository.GetTodoItemById(todo.Id);
            Assert.NotNull(updatedTodo);
            Assert.Equal(newTitle, updatedTodo.Title);
        }

        [Fact]
        public async Task Handle_ShouldReturnNull_WhenItemDoesNotExist()
        {
            // Arrange
            var command = new UpdateTodoItemCommand(Guid.NewGuid(), "Any Title");

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.Null(result);
        }
    }
}
