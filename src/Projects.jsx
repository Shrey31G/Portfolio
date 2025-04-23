

export const Projects = () => {
    return (
        <div className="flex flex-col h-screen w-full overflow-hidden justify-center items-center bg-white dark:bg-black dark:text-white">
            <div className="grid grid-cols-1 h-[80vh] w-[80vw] gap-6">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <a target="_blank" className="flex items-center gap-1" href="https://pay-haven-user-app.vercel.app/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right size-6"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                            <h3 className="text-lg font-semibold">PayHaven</h3>
                        </a>
                        <p className=" text-sm">Feb 2025 - March 2025</p>

                        <p className="w-fit">
                            Created a payment solution using Next.js, Express, and PostgreSQL with three integrated components: wallet interface, payment gateway, and verification service. Implemented webhook-based verification and secure auth`entication with TypeScript and NextAuth while maintaining complete data consistency.
                        </p>

                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <a target="_blank" className="flex gap-2 items-center" href="https://write-x-six.vercel.app/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right size-6"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                                <h3 className="text-lg font-semibold">WriteX</h3>
                            </a>

                            <p className=" text-sm">Jan 2025 - Feb 2025</p>

                            <p className="w-full">
                                Built a social media platform with Next.js and TypeScript that enables users to create and share posts with others. Implemented PostgreSQL and Prisma for the backend, deployed on Cloudflare Workers for improved performance. Focused on responsive UI design and seamless user experience with consistent uptime.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}