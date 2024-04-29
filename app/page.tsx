import {db} from "@/lib/kysely";
import {seed} from "@/lib/generate-table-Tasks";

export async  function  task() {
    "use server"
    let tasks;
    try {
        return  tasks = db.selectFrom("tasks").selectAll().execute();

    } catch (e:any) {
        if (e.message === `relation "tasks" does not exist`) {
            console.log(
                'Tasks does not exist, creating and seeding it with dummy data now...'
            )
            await  seed();
           return tasks = db.selectFrom("tasks").selectAll().execute();

        } else {
            throw new e
        }
    }
}
export default async function Home() {
  return (
    <main className=" min-h-screen min-w-screen  ">
      <h1 className="text-5xl text-center">Todo list</h1>
        <div>
            <form className="m-5"  action="">
                <input className=" w-full  rounded border" type="text" name="task" id="task"/>
                <button className=' transition ease-out hover:bg-blue-500 mt-5 h-20 w-full rounded bg-blue-600 text-white'>Send</button>
            </form>
        </div>


    </main>
  );
}
