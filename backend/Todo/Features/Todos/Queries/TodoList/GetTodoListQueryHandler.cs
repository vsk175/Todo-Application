using MediatR;
using Todo.Features.Todos.DTOs;
using Todo.Repositories;

namespace Todo.Features.Todos.Queries.TodoList
{
    public class GetTodoListQueryHandler : IRequestHandler<GetTodoListQuery, IEnumerable<TodoDto>>
    {
        private readonly TodoRepository _repository;

        public GetTodoListQueryHandler(TodoRepository repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<TodoDto>> Handle(GetTodoListQuery request, CancellationToken cancellationToken)
        {
            var todos = _repository.GetTodoList()
                .Select(todo => new TodoDto(todo.Id, todo.Title))
                .ToList()
                .AsReadOnly();

            return Task.FromResult((IEnumerable<TodoDto>)todos);
        }
    }
}
