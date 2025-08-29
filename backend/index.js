import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;

    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        user_id: "dhruvin_mehta_30072004",
        message: "Invalid input. 'data' must be a non-empty array.",
      });
    }

    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    const all_alphabets = [];

    let sum = 0;

    data.forEach((item) => {
      if (!isNaN(item) && item.trim() !== "") {
        const num = parseInt(item, 10);
        if (num % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += num;
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        all_alphabets.push(...item.split(""));
      } else {
        special_characters.push(item);
      }
    });

    const concat_string = all_alphabets
      .reverse()
      .map((char, index) =>
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
      )
      .join("");

    res.status(200).json({
      is_success: true,
      user_id: "dhruvin_mehta_30072004",
      email: "dhruvin.mehta2022@vitstudent.ac.in",
      roll_number: "22BCE0145",
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: sum.toString(),
      concat_string,
    });
  } catch (err) {
    res.status(500).json({ is_success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));