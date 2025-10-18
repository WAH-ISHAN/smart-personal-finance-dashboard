const {getConnetion} = require('../db/connection'); //getConnetion is Destructuring from connection.js

async function getallExpenses(){//async function to handle promises
    const conn = await getConnetion(); // await use to wait for the promise
    const result = await conn.execute(`SELECT * FROM expenses`);
    await conn.close(); // Close the connection after the query is executed
    return result.rows;// return is a keyword used to send a value out from a function."
}

async function getConnetionById(id){//ID is the parameter passed to the function
    const conn = await getConnetion();
    const result = await conn.execute(`SELECT * FROM expenses WHERE id = :id`, [id]);
    await conn.close();
    return result.rows;

}