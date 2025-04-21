import { DarkModeToggler } from "../components/DarkModeToggler"
import { ThemeProvider } from "../context/ThemeContext"

export const BasicResume = () => {
    return (
        <>
            <ThemeProvider>
                <div className="flex flex-col bg-white h-screen w-screen dark:bg-black dark:text-white">
                <div>
                    Hey Shrey Gangwar, Here.
                </div>
                <div>
                    <DarkModeToggler />
                </div>
                </div>
            </ThemeProvider>
        </>
    )
}