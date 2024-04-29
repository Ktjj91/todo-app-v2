import {db} from "@/lib/kysely";
import {seed} from "@/lib/generate-table-Tasks";

export async  function  task() {
    let tasks;
    try {
        tasks = db.selectFrom("tasks").selectAll().execute();
        return tasks;

    } catch (e:any) {
        if (e.message === `relation "tasks" does not exist`) {
            console.log(
                'Tasks does not exist, creating and seeding it with dummy data now...'
            )
            await  seed();
            tasks = db.selectFrom("tasks").selectAll().execute();
            return tasks;

        } else {
            throw new e
        }
    }
}