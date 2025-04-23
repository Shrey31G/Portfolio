
export const Resume = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gray-100 dark:bg-black">
            <iframe
                src="/resume.pdf"
                className="w-11/12 h-[90vh] shadow-lg rounded-lg"
                title="Resume PDF" />
        </div>
    )
}