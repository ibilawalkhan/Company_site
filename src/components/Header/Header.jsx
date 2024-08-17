import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Container } from '../index'

function Header() {

    const navigate = useNavigate()

    const navItems = [
        {
            name: "Home",
            slug: "/"
        },
        {
            name: "About",
            slug: "/about"
        },
        {
            name: "Services",
            slug: "/services"
        },
        {
            name: "Blog",
            slug: "/about"
        },
        {
            name: "Contact",
            slug: "/contact"
        }
    ]

    return (
        <header className='py-3 shadow'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4 text-3xl'>
                        <Link to='/'>
                            {/* <Logo width='70px' /> */}
                            WAVENET
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => navigate(item.slug)}
                                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-400 rounded-full'
                                >{item.name}</button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header