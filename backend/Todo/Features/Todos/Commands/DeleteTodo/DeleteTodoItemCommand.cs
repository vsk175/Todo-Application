using MediatR;

namespace Todo.Features.Todos.Commands.DeleteTodo
{
    public record DeleteTodoItemCommand(Guid Id) : IRequest<bool>;
}
