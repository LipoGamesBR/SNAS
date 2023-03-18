import { response, Router } from "express";
import { request } from "http";
import path from "path";
import { createFileController } from "./useCases/CreateFile";
import { createUserController } from "./useCases/CreateUser";
import { loginUserController } from "./useCases/LoginUser";

const router = Router()

router.get('/login', (request, response) => {
    return response.sendFile(__dirname + "/web/login.html")
})

router.post('/login', (request, response) => {
    return loginUserController.handle(request, response);
})


router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/createfile', (request, response) => {
    return createFileController.handle(request, response);
})

export {router}