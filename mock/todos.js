module.exports = {
  'GET /api/todos': (req, res) => {
    // Return an array of todo objects
    res.json([
      { id: 1, title: 'Learn TNF' },
      { id: 2, title: 'Build Todo App' },
    ]);
  },
  'POST /api/todos': (req, res) => {
    // Create a new todo based on request payload
    // Mock scenario: just create an item with a random id
    const newTodo = { ...req.body, id: Date.now() };
    res.json(newTodo);
  },
  'PUT /api/todos/:id': (req, res) => {
    // Return updated version
    res.json({ id: Number(req.params.id), ...req.body });
  },
  'DELETE /api/todos/:id': (req, res) => {
    // Return success
    res.json({ success: true });
  },
};
