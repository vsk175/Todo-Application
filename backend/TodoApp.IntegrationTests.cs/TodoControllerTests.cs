using FluentAssertions;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using System.Net;
using System.Net.Http.Json;
using Todo.Features.Todos.DTOs;



namespace TodoApp.IntegrationTests.cs
{
    public class TodoControllerTests : IClassFixture<WebApplicationFactory<Program>>
    {
        private readonly HttpClient _client;

        public TodoControllerTests(WebApplicationFactory<Program> factory)
        {
            _client = factory.CreateClient();
        }

        [Fact]
        public async Task AddTodo_ShouldReturnCreatedTodo()
        {
            // Arrange
            var createDto = new CreateTodoDto("Integration Test Task");

            // Act
            var response = await _client.PostAsJsonAsync("/api/todo", createDto);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.Created);

            var todo = await response.Content.ReadFromJsonAsync<TodoDto>();
            todo.Should().NotBeNull();
            todo!.Title.Should().Be(createDto.Title);
            todo.Id.Should().NotBeEmpty();
        }

        [Fact]
        public async Task GetTodos_ShouldReturnList()
        {
            // Act
            var response = await _client.GetAsync("/api/todo");

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var todos = await response.Content.ReadFromJsonAsync<TodoDto[]>();
            todos.Should().NotBeNull();
        }
    }
}
