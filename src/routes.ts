import { Router } from "express";
import path from "path";
import { send } from "process";
import { createFileController } from "./useCases/CreateFile";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.get('/', (request, response) => {
    return response.sendFile(path.resolve(__dirname + '/web/index.html'))
})

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/createfile', (request, response) => {
    return createFileController.handle(request, response);
})

export {router}