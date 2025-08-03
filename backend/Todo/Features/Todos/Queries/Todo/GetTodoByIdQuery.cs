using MediatR;
using Todo.Features.Todos.DTOs;

namespace Todo.Features.Todos.Queries.Todo
{
    public record GetTodoByIdQuery(Guid Id) : IRequest<TodoDto?>;
}
