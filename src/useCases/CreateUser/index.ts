import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SQLiteUserRepository } from "../../repositories/implementations/SQLiteUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider
const sqliteuserrepository = new SQLiteUserRepository


const createUserUseCase = new CreateUserUseCase(
    sqliteuserrepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export {createUserUseCase, createUserController}