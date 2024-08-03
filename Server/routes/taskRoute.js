const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.post("/todo", async (req, res) => {
  const { description, title, endgoal, userId } = req.body;
console.log(req.body);
  if (!description || !title || !endgoal || !userId) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newTask = await prisma.task.create({
      data: { description, title, endgoal, userId },
    });
    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ error: "Failed to create task" });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ error: "User ID is missing" });
  }

  try {
    const tasks = await prisma.task.findMany({
      where: { userId },
    });
    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { description, title, endgoal } = req.body;

  if (!description || !title || endgoal === undefined) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { description, title, endgoal },
    });
    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.put("/completed/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  if (completed === undefined) {
    return res.status(400).json({ error: "Completed field is required" });
  }

  try {
    const updatedTask = await prisma.task.update({
      where: { id },
      data: { completed },
    });
    res.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "Failed to update task" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.task.delete({ where: { id } });
    res.status(204).send(); // No content
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;