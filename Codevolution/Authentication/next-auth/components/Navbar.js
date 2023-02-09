import Link from 'next/link'

function Navbar() {
    return (
        <nav className='header'>
            <h1 className='logo'>
                <a href='#'>NextAuth</a>
            </h1>
            <ul className={`main-nav`}>
                <li>
                    <Link href='/' legacyBehavior passHref >
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard' legacyBehavior passHref>
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link href='/blog' legacyBehavior passHref>
                        <a>Blog</a>
                    </Link>
                </li>
                <li>
                    <Link href='#' legacyBehavior passHref>
                        <a>Sign In</a>
                    </Link>
                </li>
                <li>
                    <Link href='#' legacyBehavior passHref>
                        <a>Sign out</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar