import express from "express";

import http from "http";

import httpLogger from "@/middleware/httpLogger.js";

import router from "@/router/index.js";

import { errorHandler } from "./helper/error.js";

const app: express.Application = express();

app.use(httpLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

// error handler

app.use(errorHandler);
const port = process.env.PORT || "8000";
app.set("port", port);

const server = http.createServer(app);

function onError(error: { syscall: string; code: string }) {
    if (error.syscall !== "listen") {
        throw error;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            process.exit(1);
            break;
        case "EADDRINUSE":
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
    console.info(`Server is listening on ${bind}`);
}

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
