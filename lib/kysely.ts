import { Generated } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'

interface Task{
    id:Generated<number>
    task:string
    createdAt:Generated<Date>
}


export interface Database {
    tasks:Task
}

export const db = createKysely<Database>();
export {sql} from "kysely"