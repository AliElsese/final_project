import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
    const location = useLocation();
    const path = location.pathname;
    const pageName = path === '/' ? 'home' : path.replace('/', '');

    return (
        <div className="w-full h-[338px] bg-[url('/imgs/hero-bg.png')] bg-cover bg-center">
            <div className="w-full h-full bg-black/60">
                <Navbar />
                <div className="h-50 flex items-center justify-center capitalize text-white text-3xl font-bold">
                    { pageName }
                </div>
            </div>
        </div>
    )
}