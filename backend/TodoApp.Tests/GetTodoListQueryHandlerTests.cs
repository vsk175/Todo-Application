using Todo.Features.Todos.Queries.TodoList;
using Todo.Models;
using Todo.Repositories;

namespace TodoApp.Tests
{
    public class GetTodoListQueryHandlerTests
    {
        private readonly TodoRepository _repository;
        private readonly GetTodoListQueryHandler _handler;

        public GetTodoListQueryHandlerTests()
        {
            _repository = new TodoRepository();
            _handler = new GetTodoListQueryHandler(_repository);
        }

        [Fact]
        public async Task Handle_ReturnsAllTodoDtos()
        {
            // Arrange
            var todo1 = new TodoItem { Id = Guid.NewGuid(), Title = "Task 1" };
            var todo2 = new TodoItem { Id = Guid.NewGuid(), Title = "Task 2" };
            _repository.AddTodoItem(todo1);
            _repository.AddTodoItem(todo2);
            var query = new GetTodoListQuery();

            // Act
            var result = await _handler.Handle(query, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            var resultList = result.ToList();
            Assert.Equal(2, resultList.Count);

            Assert.Contains(resultList, t => t.Id == todo1.Id && t.Title == todo1.Title);
            Assert.Contains(resultList, t => t.Id == todo2.Id && t.Title == todo2.Title);
        }

        [Fact]
        public async Task Handle_ReturnsEmptyList_WhenNoTodos()
        {
            // Arrange
            var query = new GetTodoListQuery();

            // Act
            var result = await _handler.Handle(query, CancellationToken.None);

            // Assert
            Assert.NotNull(result);
            Assert.Empty(result);
        }
    }
}
