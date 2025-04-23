import { Link } from "react-router-dom"
import './App.css'
import { DarkModeToggler } from "./components/DarkModeToggler"
import { SoloTyping } from "./components/SoloTyping"

export const Home = () => {
    console.log("bruh how many?")
    return (
        <>
            <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center dark:bg-black dark:text-white">
                <div className="mb-20">
                    <SoloTyping text="CHOOSE ONE" />
                </div>
                <div className="flex gap-16">

                    <div className=" flex flex-col items-center">
                        <Link to="/basic" className=" px-6 py-2  font-semibold text-2xl border-x-2 rounded-md">
                            Basic Resume
                        </Link>
                    </div>

                    <div className=" flex flex-col items-center">

                        <Link to="/2d"
                            className="px-6 py-2 font-semibold text-2xl border-x-2 rounded-md">
                            2d-Game Resume(web only)
                        </Link>
                    </div>

                </div>

                <div className="mt-5">
                    <DarkModeToggler />
                </div>
            </div>
        </>
    )
}
