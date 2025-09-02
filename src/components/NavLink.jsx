import { Link, useLocation } from "react-router-dom";

export default function NavLink({ children }) {
    const location = useLocation();
    const path = location.pathname;
    const pageName = path === '/' ? 'home' : path.replace('/', '');
    
    return (
        <Link to={children == 'home' ? '/' : `${children}`} 
            className={`${children === pageName ? 'text-[var(--OrangeColor)]' : 'text-white'} text-[18px] font-semibold capitalize hover:text-[var(--OrangeColor)]`}>
            { children }
        </Link>
    )
}