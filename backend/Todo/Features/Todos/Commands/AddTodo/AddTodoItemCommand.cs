using MediatR;
using Todo.Features.Todos.DTOs;

namespace Todo.Features.Todos.Commands.AddTodo
{
    public record AddTodoItemCommand(CreateTodoDto Dto) : IRequest<TodoDto>;
}
