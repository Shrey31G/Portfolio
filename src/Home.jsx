import { Link } from "react-router-dom"
import './App.css'
import { DarkModeToggler } from "./components/DarkModeToggler"
import { SoloTyping } from "./components/SoloTyping"

export const Home = () => {
    return (
        <>
            <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center dark:bg-black dark:text-white">
                <SoloTyping text="CHOOSE ONE" />
                <div className="flex gap-6">
                    <Link to="/basic"
                        className=""
                    >Basic Resume</Link>
                    <Link to="/2d">2d-Game Resume(web only)</Link>
                </div>
                <div className="mt-5">
                    <DarkModeToggler />
                </div>
            </div>
        </>
    )
}
