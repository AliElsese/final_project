import { Link } from "react-router-dom";
import NavLink from "../components/NavLink";
import NavButton from "../components/NavButton";

export default function Navbar() {
    return (
        <div className="w-full bg-white/20 py-[24px]">
            <nav className="flex items-center justify-between px-6">
                <div className="flex items-center space-x-[48px]">
                    <Link to='/'>
                        <img src="/imgs/Logo.svg" alt="" className="w-[115px] h-[32px]" />
                    </Link>
                    <div className="flex items-center space-x-[40px]">
                        <NavLink>home</NavLink>
                        <NavLink>books</NavLink>
                        <NavLink>about</NavLink>
                    </div>
                </div>
                <div className="hidden items-center space-x-[12px] md:flex">
                    <NavButton>login</NavButton>
                    <NavButton>signup</NavButton>                    
                </div>
            </nav>
        </div>
    )
}