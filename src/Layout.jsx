import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/basic">Basic Resume</Link>
                    </li>

                    <li>
                        <Link to="/2d">2d-game Resume</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}