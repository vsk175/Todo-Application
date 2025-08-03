using Todo.Models;

namespace Todo.Repositories
{
    public interface ITodoRepository
    {
        void AddTodoItem(TodoItem item);
        List<TodoItem> GetTodoList();
        TodoItem? GetTodoItemById(Guid id);
        void DeleteTodoItem(Guid id);
        void UpdateTodoItem(TodoItem item);
    }
}
