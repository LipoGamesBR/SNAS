import { Session } from 'express-session'

interface MySession extends Session{
    email?: string;
} 

export { MySession }