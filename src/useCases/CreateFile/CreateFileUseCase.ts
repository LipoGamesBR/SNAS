import { ICreateFileDTO } from "./CreateFileDTO";
import * as fs from 'fs'

export class CreateFileUseCase{

    async execute(data: ICreateFileDTO){

        if(data.path.substring(data.path.length-1, data.path.length) != '/'){
            data.path = data.path + '/'
        }
        if(data.name.substring(0, 1) === '/'){
            data.name = data.name.substring(1)
        }

        if(fs.existsSync(data.path)){
            fs.writeFile(data.path+data.name, data.content, (error) => {
                if(error)console.log(error)
            })
        }else{
            throw new Error("Folder don't exists.")
        }
    }
}