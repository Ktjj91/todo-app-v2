import {tasks} from "@/lib/tasks";

export default async function Home() {
    const data = await tasks();
    console.log(data)
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
