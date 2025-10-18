const model = require('../models/expenses');

// 😜 Get all expenses
exports.getAll = async (req, res) => {
  try {
    const rows = await model.getAllExpenses();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🙌 Get one expense by ID
exports.getById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await model.getExpenseById(id);
    res.json(data || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 😍 Add expense
exports.create = async (req, res) => {
  try {
    await model.addExpense(req.body);
    res.status(201).json({ message: 'Expense added' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 👌 Update expense
exports.update = async (req, res) => {
  try {
    await model.updateExpense(req.params.id, req.body);
    res.json({ message: 'Updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 😒 Delete expense
exports.remove = async (req, res) => {
  try {
    await model.deleteExpense(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};