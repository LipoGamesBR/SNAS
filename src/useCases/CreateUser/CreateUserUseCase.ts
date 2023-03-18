import bcrypt from "bcrypt"
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase{

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserDTO){

        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if( userAlreadyExists){
            throw new Error('User already exists.');
        }

        const user = new User(data);
        
        const hash = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, hash)

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu APP',
                email: 'equipe@meuapp.com',
            },
            subject: 'Seja bem-vindo',
            body: '<p>Voce já pode fazer login<p>'
        })
    }
}