import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";
import sqlite3 from "sqlite3";

export class SQLiteUserRepository implements IUsersRepository{

    private users: User
    private db: sqlite3.Database

    constructor(){
        this.db = new sqlite3.Database(':memory:');
        this.db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)')
    }

    async findByEmail(email: string): Promise<User> {
        this.db.all('SELECT * FROM users', (err, rows) => {
            console.log(rows);
        })
        return null
    }
    async save(user: User): Promise<void> {
        this.db.run('INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)', [user.id, user.name, user.email, user.password])
    }
}