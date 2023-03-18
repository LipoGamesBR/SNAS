import { IUsersRepository } from "../../repositories/IUserRepository";
import { ILoginUserDTO } from "./LoginUserDTO";
import bcrypt from 'bcrypt'

export class LoginUserUseCase{
    constructor (
        private usersRepository: IUsersRepository
    ){}

    async execute(data: ILoginUserDTO){
        const user = await this.usersRepository.findByEmail(data.email)

        console.log(user)

        if(user){
            if(await bcrypt.compare(user.password, data.password)){
                console.log('logged')
            }else throw new Error('Password incorrect.');
        }else throw new Error('User dont exists.');
    }
}