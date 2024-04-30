const express = require("express");
const axios = require("axios");


const app = express();
const PORT = 8000;

//Routes
app.listen(PORT, () => {
  console.log("server running on", PORT);
});

let students = [];

app.get("/students", async (req, res) => {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/students");
    if (!response.ok) {
      throw Error("Network response was not ok");
    }
    const students = await response.json();
    return res.json(students);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data from the API");
  }
});



app.get("/students/:gender", async (req, res) => {
  try {
    const response = await fetch("https://freetestapi.com/api/v1/students");
    if (!response.ok) {
      throw Error("Network response was not ok");
    }
    const students = await response.json();
    const gender = String(req.params.gender.toLowerCase());
    // console.log(students);
    const student = await students.filter(
      (students) => students.gender.toLowerCase() === gender
    );
    // console.log(student);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    return res.json(student);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data from the API");
  }
});



