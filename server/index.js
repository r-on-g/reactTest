import express from "express"
import cors from "cors";
import mongoose from "mongoose";
import http from "http"
import taskRoutes from "./routes/tasks.js"
import userRoutes from "./routes/user.js"
import bodyParser from "body-parser";
import * as config from "./config.js"

//import ap from "./ap.js"

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use("/tasks",taskRoutes);
app.use("/user",userRoutes);

mongoose.connect(config.mongoDBUrl
).catch((error)=>console.log(error.message))

const server = http.createServer(app)
server.listen(PORT)


