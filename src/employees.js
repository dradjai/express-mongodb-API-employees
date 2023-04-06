import { database } from "./dbConnect.js";
import { ObjectId } from "mongodb";

const coll = database.collection('employees')

// Add employee

export async function addEmployee(req, res) {
  const employee = req.body;
  await coll.insertOne(employee);
  
  res.status(201).send({message: "employee added"});

}

// GET employees

export async function getAllEmployees(req, res) {
  
  const employees = await coll.find().toArray();

  res.status(201).send(employees);
}

// DELETE employee

export async function deleteEmployee(req, res) {

  const id = {"_id": new ObjectId(req.params.docId)}
  await coll.deleteOne(id);

  res.status(200).send({message: "employee deleted"});
}

export async function updateEmployee(req, res) {

  const id = {"_id": new ObjectId(req.params.docId)};
  const updatedValue = req.body;
  await coll.updateOne(id, {$set: updatedValue});

  res.status(201).send({message: "employee updated"});
}