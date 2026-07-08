import toast from "react-hot-toast";
import { getUser } from "@/utils/auth";
export default function CreateQuestPage(){

    const user = getUser();

    function submit(e){

        e.preventDefault();

        toast.success("Quest Published!");

    }

    return(

        <form
            onSubmit={submit}
            className="bg-white rounded-xl shadow p-8 space-y-5">

            <h1 className="text-3xl font-bold">

                Create New Quest

            </h1>

            <input
                placeholder="Quest Title"
                className="border rounded-xl p-3 w-full"
            />

            <textarea

                rows="5"

                placeholder="Description"

                className="border rounded-xl p-3 w-full"

            />

            <input

                placeholder="Category"

                className="border rounded-xl p-3 w-full"

            />

            <input

                placeholder="Reward"

                className="border rounded-xl p-3 w-full"

            />

            <input

                placeholder="Location"

                className="border rounded-xl p-3 w-full"

            />

            <button

                className="bg-amber-500 text-white rounded-xl px-6 py-3">

                Publish Quest

            </button>

        </form>

    )

}