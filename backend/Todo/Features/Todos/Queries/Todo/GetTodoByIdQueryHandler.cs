using MediatR;
using Todo.Features.Todos.DTOs;
using Todo.Repositories;

namespace Todo.Features.Todos.Queries.Todo
{
    public class GetTodoByIdQueryHandler : IRequestHandler<GetTodoByIdQuery, TodoDto?>
    {
        private readonly TodoRepository _repository;

        public GetTodoByIdQueryHandler(TodoRepository repository)
        {
            _repository = repository;
        }

        public Task<TodoDto?> Handle(GetTodoByIdQuery request, CancellationToken cancellationToken)
        {
            var todo = _repository.GetTodoItemById(request.Id);

            if (todo == null)
                return Task.FromResult<TodoDto?>(null);

            var dto = new TodoDto(todo.Id, todo.Title);
            return Task.FromResult<TodoDto?>(dto);
        }
    }
}
