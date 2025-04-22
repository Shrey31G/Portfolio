import { ThemeProvider, useDarkMode } from "../context/ThemeContext"

export const BasicResume = () => {
    const { darkMode, setDarkMode } = useDarkMode();
    return (
        <>

            <div className="flex flex-col bg-white h-screen w-screen dark:bg-black dark:text-white">
                <div className="flex h-2/3  items-center justify-center">
                    <div className="flex flex-col bg-white dark:bg-black h-1/2 w-[80%] md:w-[60%]">
                        <div className="flex-col mt-6">
                            <div className="flex justify-between">
                                <div className="text-3xl font-mono ">
                                    Hi,I'm Shrey
                                </div>
                                <div className="flex justify-between gap-6">
                                    <div className="flex gap-2">
                                        <a target="_blank" href="https://x.com/Shrey31G" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full relative transition-all duration-300">
                                            <
                                                svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 scale-90" fill="none" viewBox="0 0 1200 1220"><path fill="currentColor" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path></svg>
                                        </a>

                                        <a target="_blank" href="https://github.com/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full relative transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 scale-90" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.334-5.466-5.931 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.805 5.628-5.475 5.921.43.372.823 1.104.823 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
                                            </svg>

                                        </a>

                                        <a target="_blank" href="https://www.linkedin.com/in/shrey-gangwar-712233225/" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full relative transition-all duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 scale-90" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.452 20.452h-3.554v-5.568c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.446-2.136 2.939v5.668H9.356V9h3.414v1.561h.048c.476-.899 1.637-1.85 3.369-1.85 3.601 0 4.266 2.368 4.266 5.448v6.293zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.995 20.452H3.678V9h3.317v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723v20.555C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.278V1.723C24 .77 23.2 0 22.225 0z" />
                                            </svg>
                                        </a>
                                        <button onClick={() => setDarkMode(!darkMode)}
                                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full relative transition-all duration-300 hover:cursor-pointer">
                                            {/* Light Icon */}
                                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${darkMode ? "scale-0 dark:scale-0" : "scale-100"}`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="12" cy="12" r="4"></circle>
                                                    <path d="M12 2v2"></path>
                                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                                    <path d="M20 12h2"></path>
                                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                                    <path d="M12 20v2"></path>
                                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                                    <path d="M2 12h2"></path>
                                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                                </svg>
                                            </div>

                                            {/* Dark Icon */}
                                            <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${darkMode ? "scale-100" : "scale-0"}`}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <h2 className="">
                                22, M | Kanpur, India | SWE
                            </h2>
                        </div>
                        <div className="mt-6">
                            I blend design and code to build awesome stuff on the web. My sweet spot is crafting slick frontends and designing intuitive user experiences.
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>

        </>
    )
}