import { useNavigate } from "react-router-dom"

export default function NavButton({ children }) {
    const navigate = useNavigate();
    
    return (
        <button onClick={() => { navigate(children) }}
            className={`text-[16px] font-semibold capitalize rounded-[8px] px-[16px] py-[18px]
            ${children == 'login' ? `text-[var(--WhiteColor)] bg-[var(--MainColor)] border-none
            hover:bg-[var(--WhiteColor)] hover:text-[var(--MainColor)] hover:border-1 hover:border-[var(--MainColor)] transition-all`
                :
            `text-[var(--MainColor)] bg-[var(--WhiteColor)] border-1 border-[var(--MainColor)]
            hover:bg-[var(--MainColor)] hover:text-[var(--WhiteColor)] transition-all`
            }
            `}>
            { children }
        </button>
    )
}