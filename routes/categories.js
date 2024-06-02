// routes/categories.js
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  const category = await prisma.category.create({
    data: { name },
  });

  res.json(category);
});

module.exports = router;
