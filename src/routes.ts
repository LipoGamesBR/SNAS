import { Router } from "express";
import { createFileController } from "./useCases/CreateFile";
import { createUserController } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/createfile', (request, response) => {
    return createFileController.handle(request, response);
})

export {router}