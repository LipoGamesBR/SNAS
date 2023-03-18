import { SQLiteUserRepository } from "../../repositories/implementations/SQLiteUserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const sqliteuserrepository = new SQLiteUserRepository

const loginUserUseCase = new LoginUserUseCase(
    sqliteuserrepository,
)

const loginUserController = new LoginUserController(
    loginUserUseCase
)

export {loginUserController, loginUserUseCase}