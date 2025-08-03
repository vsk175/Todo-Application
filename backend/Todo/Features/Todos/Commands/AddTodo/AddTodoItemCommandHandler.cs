using MediatR;
using Todo.Features.Todos.DTOs;
using Todo.Models;
using Todo.Repositories;

namespace Todo.Features.Todos.Commands.AddTodo
{
    public class AddTodoItemCommandHandler : IRequestHandler<AddTodoItemCommand, TodoDto>
    {
        private readonly TodoRepository _repository;

        public AddTodoItemCommandHandler(TodoRepository repository)
        {
            _repository = repository;
        }

        public Task<TodoDto> Handle(AddTodoItemCommand request, CancellationToken cancellationToken)
        {
            var dto = request.Dto;

            var todo = new TodoItem
            {
                Id = Guid.NewGuid(),
                Title = dto.Title,
            };

            _repository.AddTodoItem(todo);

            var result = new TodoDto(todo.Id, todo.Title);
            return Task.FromResult(result);
        }
    }
}
