import {sql,db} from "../lib/kysely";
export async function  seed() {
    const createTable = await db.schema
        .createTable('tasks')
        .ifNotExists()
        .addColumn('id','serial',(cb =>cb.primaryKey()))
        .addColumn('task',"varchar(255)",(cb) => cb.notNull())
        .addColumn('createdAt', sql`timestamp with time zone`, (cb) =>
            cb.defaultTo(sql`current_timestamp`))
        .execute()
    console.log(`Created "users" table`)
    const addTasks = await db.insertInto("tasks")
        .values([
            {
                task:"Sortir le chien"
            },
            {
                task:"faire c'est devoir"
            }
        ])
        .execute()
    console.log('Seeded database with 3 users')

    return {
        createTable,
        addTasks
    }


}