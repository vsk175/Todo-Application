using Todo.Features.Todos.Commands.DeleteTodo;
using Todo.Models;
using Todo.Repositories;

namespace TodoApp.Tests
{
    public class DeleteTodoItemCommandHandlerTests
    {
        private readonly TodoRepository _repository;
        private readonly DeleteTodoItemCommandHandler _handler;

        public DeleteTodoItemCommandHandlerTests()
        {
            _repository = new TodoRepository();
            _handler = new DeleteTodoItemCommandHandler(_repository);
        }

        [Fact]
        public async Task Handle_ShouldReturnTrue_WhenItemExistsAndDeleted()
        {
            // Arrange
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Sample Task" };
            _repository.AddTodoItem(todo);
            var command = new DeleteTodoItemCommand(todo.Id);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.True(result);
            Assert.Null(_repository.GetTodoItemById(todo.Id));
        }

        [Fact]
        public async Task Handle_ShouldReturnFalse_WhenItemDoesNotExist()
        {
            // Arrange
            var nonExistentId = Guid.NewGuid();
            var command = new DeleteTodoItemCommand(nonExistentId);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.False(result);
        }
    }
}
