using MediatR;
using Todo.Repositories;

namespace Todo.Features.Todos.Commands.DeleteTodo
{
    public class DeleteTodoItemCommandHandler : IRequestHandler<DeleteTodoItemCommand, bool>
    {
        private readonly TodoRepository _repository;

        public DeleteTodoItemCommandHandler(TodoRepository repository)
        {
            _repository = repository;
        }

        public Task<bool> Handle(DeleteTodoItemCommand request, CancellationToken cancellationToken)
        {
            var todo = _repository.GetTodoItemById(request.Id);
            if (todo == null)
            {
                return Task.FromResult(false);
            }

            _repository.DeleteTodoItem(request.Id);
            return Task.FromResult(true);
        }
    }

}
