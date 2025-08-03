using MediatR;
using Todo.Features.Todos.DTOs;

namespace Todo.Features.Todos.Commands.UpdateTodo
{
    public record UpdateTodoItemCommand(Guid Id, string Title) : IRequest<TodoDto?>;
}
