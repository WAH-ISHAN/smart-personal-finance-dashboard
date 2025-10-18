require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const expensesRouter = require('./src/routes/expenses');
app.use('/api/expenses', expensesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});