import { useState } from 'react'
import styles from './header.module.css'
import Link from '../link/link'
import { FaBars } from "react-icons/fa6";
import { FaX } from 'react-icons/fa6';
import { useLanguage } from '../context/languageContext';
import Button from '../button/button';





function Header() {
    const { t, setLanguage, language } = useLanguage()
    const [menuOpen, setMenuOpen] = useState(false)

    const headerLinks: {
        label: string, destination: string
    }[] = [
            { label: t("home"), destination: '#home' },
            { label: t("projects"), destination: '#projects' },
            { label: t("about"), destination: '#about' },
            { label: t("skills"), destination: '#skills' },
            { label: t("contact"), destination: '#contact' },
        ]

    function toggleMenu() {
        setMenuOpen((prev) => !prev)
    }

    return (
        <nav className={`px-5 w-full block  fixed top-0 z-50 ${styles.header}`}>
            <div className={`flex h-16 mx-auto w-full justify-between ${styles.headerWrapper}`}>
                <a className='flex items-center text-3xl font-semibold text-white' href='#'>Marcus Buzette</a>
                <div className='hidden tablet:flex text-white items-center gap-3'>
                    {
                        headerLinks.map((headerLink) => {
                            return (<Link key={headerLink.label} href={headerLink.destination}>{headerLink.label}</Link>);
                        })
                    }
                    <Button
                        onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                    >
                        {t("switchLang")}
                    </Button>
                </div>
                <div className='flex tablet:hidden cursor-pointer items-center justify-end text-white'>
                    <button onClick={toggleMenu}>
                        {menuOpen ? (
                            <FaX className='h-8 w-8' />
                        ) : (
                            <FaBars className='h-8 w-8' />
                        )}
                    </button>
                </div>
                <div
                    className={`
                    tablet:hidden fixed top-0 right-0 h-full w-3/5
                    flex flex-col items-center justify-start pt-16 gap-6 text-white text-2xl 
                    transform transition-transform duration-500
                    ${menuOpen ? 'translate-x-0 z-10' : 'translate-x-full'} ${styles.header}
                    `} >
                    {headerLinks.map((headerLink) => (
                        <a
                            key={headerLink.label}
                            href={headerLink.destination}
                            onClick={() => setMenuOpen(false)} // fecha ao clicar
                            className="hover:text-red-400 transition-colors"
                        >
                            {headerLink.label}
                        </a>
                    ))}
                    <Button
                        onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                    >
                        {t("switchLang")}
                    </Button>
                </div>

                {/* OVERLAY ESCURO ATRÁS DO MENU */}
                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm tablet:hidden"
                        onClick={toggleMenu}
                    />
                )}
            </div>
        </nav>
    )
}

export default Header