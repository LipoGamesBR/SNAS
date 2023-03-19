import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";
import { MySession } from '../../types/SessionTypes'

export class LoginUserController{
    constructor(
        private LoginUserUseCase: LoginUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body;
        const session = request.session as MySession

        if(session.email) return response.status(400).json({
            message : 'You already logged.'
        })

        try{
            await this.LoginUserUseCase.execute({
                email,
                password
            })

            session.email = email

            response.redirect('/') 
            return response.status(201)
        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}