import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController{
    constructor(
        private LoginUserUseCase: LoginUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body;

        try{
            await this.LoginUserUseCase.execute({
                email,
                password
            })

            return response.status(201).send()
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}