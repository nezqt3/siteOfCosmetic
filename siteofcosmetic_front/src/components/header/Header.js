import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './header.css'

export default function Header() {

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
        <header className={scrollY > 50 ? 'header scroll' : 'header'}>
            <nav className="navigation">
            <p>Header</p>
            </nav>
        </header>
    )
}