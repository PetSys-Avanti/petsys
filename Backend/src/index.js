import express from "express";
import cors from "cors";
import { router } from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3002, () => {
    console.log('Running server');
})
