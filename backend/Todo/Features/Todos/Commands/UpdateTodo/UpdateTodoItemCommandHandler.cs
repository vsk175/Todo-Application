using MediatR;
using Todo.Features.Todos.DTOs;
using Todo.Repositories;

namespace Todo.Features.Todos.Commands.UpdateTodo
{
    public class UpdateTodoItemCommandHandler : IRequestHandler<UpdateTodoItemCommand, TodoDto?>
    {
        private readonly TodoRepository _repository;

        public UpdateTodoItemCommandHandler(TodoRepository repository)
        {
            _repository = repository;
        }

        public Task<TodoDto?> Handle(UpdateTodoItemCommand request, CancellationToken cancellationToken)
        {
            var todo = _repository.GetTodoItemById(request.Id);

            if (todo == null)
                return Task.FromResult<TodoDto?>(null);

            todo.Title = request.Title;
            _repository.UpdateTodoItem(todo);
            var result = new TodoDto(todo.Id, todo.Title);
            return Task.FromResult<TodoDto?>(result);
        }
    }
}
