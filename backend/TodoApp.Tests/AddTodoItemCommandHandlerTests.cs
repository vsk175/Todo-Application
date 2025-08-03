using Todo.Features.Todos.Commands.AddTodo;
using Todo.Features.Todos.DTOs;
using Todo.Repositories;

namespace TodoApp.Tests
{
    public class AddTodoItemCommandHandlerTests
    {
        private readonly TodoRepository _repository;
        private readonly AddTodoItemCommandHandler _handler;

        public AddTodoItemCommandHandlerTests()
        {
            _repository = new TodoRepository();
            _handler = new AddTodoItemCommandHandler(_repository);
        }

        [Fact]
        public async Task Handle_ShouldAddTodoItemAndReturnDto()
        {
            // Arrange
            var dto = new CreateTodoDto("Test Task");
            var command = new AddTodoItemCommand(dto);

            // Act
            var result = await _handler.Handle(command, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(dto.Title, result.Title);
            Assert.True(result.Id != Guid.Empty);

            var itemFromRepo = _repository.GetTodoItemById(result.Id);
            Assert.NotNull(itemFromRepo);
            Assert.Equal(dto.Title, itemFromRepo!.Title);
        }
    }
}
