import { Router } from "express";
import { MySession } from "./types/SessionTypes";
import { createFileController } from "./useCases/CreateFile";
import { createUserController } from "./useCases/CreateUser";
import { loginUserController } from "./useCases/LoginUser";

const router = Router()

router.get('/', (request, response) => {
    const session = request.session as MySession;
    if(session.email)return response.sendFile(__dirname + "/web/pages/home.html")
    return response.sendFile(__dirname + "/web/pages/login.html")
})

router.get('/login', (request, response) => {
    const session = request.session as MySession;
    if(session.email)return response.sendFile(__dirname + "/web/pages/home.html")
    return response.sendFile(__dirname + "/web/pages/login.html")
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