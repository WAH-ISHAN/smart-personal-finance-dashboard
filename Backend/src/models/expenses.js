// 🛠️  correct version of Backend/src/models/expenses.js
const { getConnetion } = require('../db/connection'); // getConnetion is Destructuring from connection.js

async function getAllExpenses() {           // name uses capital 'A'
  const conn = await getConnetion();
  const result = await conn.execute(`SELECT * FROM expenses`);
  await conn.close();
  return result.rows;
}

async function getExpenseById(id) {
  const conn = await getConnetion();
  const result = await conn.execute(`SELECT * FROM expenses WHERE id = :id`, [id]);
  await conn.close();
  return result.rows[0];
}

async function addExpense({ user_id, category, amount, description }) {
  // 👆 include `category` in parameters — otherwise reference error
  const conn = await getConnetion();
  const sql = `
    INSERT INTO expenses (user_id, category, amount, description, expense_date)
    VALUES (:user_id, :category, :amount, :description, SYSDATE)
  `;
  await conn.execute(sql, [user_id, category, amount, description], { autoCommit: true });
  await conn.close();
}

async function updateExpense(id, data) {
  const conn = await getConnetion();
  const sql = `
    UPDATE expenses
    SET category = :category, amount = :amount, description = :description
    WHERE id = :id
  `;
  await conn.execute(sql, [data.category, data.amount, data.description, id], { autoCommit: true });
  await conn.close();
}

async function deleteExpense(id) {
  const conn = await getConnetion();
  await conn.execute(`DELETE FROM expenses WHERE id = :id`, [id], { autoCommit: true });
  await conn.close();
}

module.exports = { getAllExpenses, getExpenseById, addExpense, updateExpense, deleteExpense };