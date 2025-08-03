using MediatR;
using Todo.Features.Todos.DTOs;

namespace Todo.Features.Todos.Queries.TodoList
{
    public record GetTodoListQuery() : IRequest<IEnumerable<TodoDto>>;
}
