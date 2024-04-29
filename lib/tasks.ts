import {db} from "@/lib/kysely";
import {seed} from "@/lib/generate-table-Tasks";

export async  function  tasks() {
    let task;
    try {
        task = await db.selectFrom("tasks").selectAll().execute();
        return task;

    } catch (e:any) {
        if (e.message === `relation "tasks" does not exist`) {
            console.log(
                'Tasks does not exist, creating and seeding it with dummy data now...'
            )
            await seed();
            task = await db.selectFrom("tasks").selectAll().execute();
            return task;

        } else {
            throw new e
        }
    }
}