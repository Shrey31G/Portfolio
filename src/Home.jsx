import { Link } from "react-router-dom"
import './App.css'
import { DarkModeToggler } from "./components/DarkModeToggler"
import { SoloTyping } from "./components/SoloTyping"

export const Home = () => {
    return (
        <>
            <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center dark:bg-black dark:text-white">
                <div className="my-10">
                    <SoloTyping text="CHOOSE ONE" />
                </div>
                <div className="flex gap-16">

                    <div className="relative flex flex-col items-center">

                        <div className="absolute -inset-x-4 bottom-0 h-16 blur-xl bg-blue-600/80 rounded-full z-0"></div>
                        <Link to="/basic" className="relative z-10 px-6 py-2  font-semibold">
                            Basic Resume
                        </Link>
                    </div>


                    <div className="relative flex flex-col items-center">
                        <div className="absolute -inset-x-4 bottom-0 h-16 blur-xl bg-red-600/80 rounded-full z-0"></div>
                        <Link to="/2d"
                            className="relative z-10 px-6 py-2 font-semibold">
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
