import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is running",
  });
});
app.post("/api/auth/register", (req, res) => {
  const { email, name, password } = req.body;

  const token = jwt.sign(
    {
      email,
      name,
    },
    "4e10c5e36e700a14fcb21b5e8a6087b1c5f7a9c528ab147062115ac3a7f443d7116a7f40530f8a35cd06e7ec3ee8313100b60426d43807cfaacdce511b457e56",
  );
  res.status(201).json({
    message: "User created successfully",
    data: {
      name,
      email,
    },
    token,
  });
});

export default app;
