import { Request, Response } from "express";
import { CreateFileUseCase } from "./CreateFileUseCase";


export class CreateFileController{
    constructor(
        private createFileUseCase: CreateFileUseCase,
    ){}

    async handle(request: Request, response: Response): Promise<Response>{
        const { name, path, content } = request.body;

        try{
            await this.createFileUseCase.execute({
                name,
                path,
                content
            })
            return response.status(201).send();

        }catch(err){
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}