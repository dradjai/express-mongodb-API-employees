import express from 'express';
import cors from 'cors';

import { addEmployee, getAllEmployees, deleteEmployee, updateEmployee } from './src/employees.js';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());


//APIs

app.post('/employees', addEmployee);
app.get('/employees', getAllEmployees);
app.delete('/employees/:id', deleteEmployee);
app.patch('/employees/:docId', updateEmployee);

app.listen(PORT, console.log(`Listening on http://localhost:${PORT}...`));