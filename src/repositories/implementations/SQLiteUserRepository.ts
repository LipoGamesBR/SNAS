import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import sqlite3 from "sqlite3";

export class SQLiteUserRepository implements IUsersRepository{
    private db: sqlite3.Database

    constructor(){
        this.db = new sqlite3.Database('database');
        //this.db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)')
    }

    async findByEmail(email: string): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            this.db.all<User>('SELECT * FROM users WHERE email = ?', email, (err, rows) => {
                if(err){
                    reject(new Error('Unexpected error.'));
                    return;
                }
                if(rows.length > 0){
                    const user: User = {
                        id: rows[0].id,
                        name: rows[0].name,
                        email: rows[0].email,
                        password: rows[0].password
                    }
                    resolve(user);
                }else{
                    resolve(null)
                }
            })
        })
    }
    async save(user: User): Promise<void> {
        this.db.run('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)', [user.id, user.name, user.email, user.password])
    }
}