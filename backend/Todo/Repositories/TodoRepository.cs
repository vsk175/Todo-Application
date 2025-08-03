using Todo.Models;

namespace Todo.Repositories
{
    public class TodoRepository : ITodoRepository
    {
        private readonly List<TodoItem> _todos = new();

        public void AddTodoItem(TodoItem item)
        {
            _todos.Add(item);
        }

        public void DeleteTodoItem(Guid id)
        {
            var item = _todos.FirstOrDefault(t => t.Id == id);
            if (item != null)
                _todos.Remove(item);
        }

        public TodoItem? GetTodoItemById(Guid id) =>
            _todos.FirstOrDefault(t => t.Id == id);

        public List<TodoItem> GetTodoList() => _todos;

        public void UpdateTodoItem(TodoItem item)
        {
            var index = _todos.FindIndex(t => t.Id == item.Id);
            if (index != -1)
                _todos[index] = item;
        }
    }
}
