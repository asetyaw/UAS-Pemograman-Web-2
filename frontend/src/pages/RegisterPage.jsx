import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRegister } from "@/hooks/useAuth";
import { Sword } from "lucide-react";

export default function RegisterPage() {

    const navigate = useNavigate();
    const { mutate: register } = useRegister();

    const [form,setForm]=useState({

        name:"",
        email:"",
        password:"",
        confirmPassword:""

    });

    function handleChange(e){

        setForm({

            ...form,
            [e.target.name]:e.target.value

        });

    }

    function handleSubmit(e) {
        e.preventDefault();

        const { name, email, password, confirmPassword } = form;

        if (!name || !email || !password) {
            toast.error("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        register({
            name,
            email,
            password
        }, {
            onSuccess() {
                toast.success("Account created successfully!");
                navigate("/login");
            },
            onError(error) {
                toast.error(error?.response?.data?.message || "Registration failed.");
            }
        });
    }

    return(

        <div className="min-h-screen flex items-center justify-center bg-background">

            <form

                onSubmit={handleSubmit}

                className="bg-muted rounded-2xl shadow-xl w-full max-w-md p-8 space-y-5">

                <div className="text-center">

                    <Sword
                        size={48}
                        className="mx-auto text-amber-500"
                    />

                    <h1 className="text-4xl font-bold mt-3">

                        QUEST

                    </h1>

                    <p className="text-slate-500">

                        Become an Adventurer

                    </p>

                </div>

                <input

                    name="name"

                    placeholder="Name"

                    className="w-full border rounded-xl p-3"

                    onChange={handleChange}

                />

                <input

                    name="email"

                    placeholder="Email"

                    className="w-full border rounded-xl p-3"

                    onChange={handleChange}

                />

                <input

                    type="password"

                    name="password"

                    placeholder="Password"

                    className="w-full border rounded-xl p-3"

                    onChange={handleChange}

                />

                <input

                    type="password"

                    name="confirmPassword"

                    placeholder="Confirm Password"

                    className="w-full border rounded-xl p-3"

                    onChange={handleChange}

                />

                <button

                    className="w-full py-3 rounded-xl bg-amber-500 text-white">

                    Register

                </button>

                <p className="text-center text-sm">

                    Already have an account?

                    <Link

                        to="/login"

                        className="text-amber-600 ml-2 font-semibold">

                        Login

                    </Link>

                </p>

            </form>

        </div>

    )

}