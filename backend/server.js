import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow all localhost origins during development
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl) or matching origins
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.json({ status: "Server is running" }));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);