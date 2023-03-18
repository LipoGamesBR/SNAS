import express from "express";
import { router } from "./routes";
import session from "express-session";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import { User } from "./entities/User";

dotenv.config()

const app = express()


app.use(
    session({
        secret: process.env.SecretKey,
        resave: false,
        saveUninitialized: false,
    })
)

declare module 'express-session' {
    interface SessionData {
        user: User;
    }
}

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/web'))
app.use(express.json())

app.use(router)

export {app}