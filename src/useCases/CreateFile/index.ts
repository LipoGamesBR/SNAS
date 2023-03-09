import { CreateFileController } from "./CreateFileController";
import { CreateFileUseCase } from "./CreateFileUseCase";

const createFileUseCase = new CreateFileUseCase()

const createFileController = new CreateFileController(
    createFileUseCase
)

export {createFileUseCase, createFileController }