using Todo.Features.Todos.Queries.Todo;
using Todo.Models;
using Todo.Repositories;

namespace TodoApp.Tests
{
    public class GetTodoByIdQueryHandlerTests
    {
        private readonly TodoRepository _repository;
        private readonly GetTodoByIdQueryHandler _handler;

        public GetTodoByIdQueryHandlerTests()
        {
            _repository = new TodoRepository();
            _handler = new GetTodoByIdQueryHandler(_repository);
        }

        [Fact]
        public async Task Handle_ReturnsTodoDto_WhenTodoExists()
        {
            // Arrange
            var todo = new TodoItem { Id = Guid.NewGuid(), Title = "Test Task" };
            _repository.AddTodoItem(todo);
            var query = new GetTodoByIdQuery(todo.Id);

            // Act
            var result = await _handler.Handle(query, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(todo.Id, result!.Id);
            Assert.Equal(todo.Title, result.Title);
        }

        [Fact]
        public async Task Handle_ReturnsNull_WhenTodoDoesNotExist()
        {
            // Arrange
            var query = new GetTodoByIdQuery(Guid.NewGuid());

            // Act
            var result = await _handler.Handle(query, CancellationToken.None);

            // Assert
            Assert.Null(result);
        }
    }
}
