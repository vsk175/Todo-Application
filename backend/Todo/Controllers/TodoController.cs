using MediatR;
using Microsoft.AspNetCore.Mvc;
using Todo.Features.Todos.Commands.AddTodo;
using Todo.Features.Todos.Commands.DeleteTodo;
using Todo.Features.Todos.Commands.UpdateTodo;
using Todo.Features.Todos.DTOs;
using Todo.Features.Todos.Queries.Todo;
using Todo.Features.Todos.Queries.TodoList;

namespace Todo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TodoController(IMediator mediator)
        {
            _mediator = mediator;
        }

        // POST: api/todo
        [HttpPost]
        public async Task<ActionResult<TodoDto>> AddTodo([FromBody] CreateTodoDto dto)
        {
            var result = await _mediator.Send(new AddTodoItemCommand(dto));
            return CreatedAtAction(nameof(GetTodoById), new { id = result.Id }, result);
        }

        // GET api/todo/{id}
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<TodoDto>> GetTodoById(Guid id)
        {
            var todo = await _mediator.Send(new GetTodoByIdQuery(id));
            if (todo == null)
                return NotFound();
            return Ok(todo);
        }

        // GET: api/todo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoDto>>> GetTodos()
        {
            var query = new GetTodoListQuery();
            var todos = await _mediator.Send(query);
            return Ok(todos);
        }

        // PUT api/todo/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTodo(Guid id, [FromBody] CreateTodoDto dto)
        {
            var result = await _mediator.Send(new UpdateTodoItemCommand(id, dto.Title));

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        // DELETE api/todo/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodo(Guid id)
        {
            var result = await _mediator.Send(new DeleteTodoItemCommand(id));

            if (!result)
                return NotFound();

            return NoContent();
        }
    }
}
