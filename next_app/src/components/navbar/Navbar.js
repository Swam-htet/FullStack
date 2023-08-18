import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className={'navbar-brand'}>
                    <Link href="/" className={'nav-link'}>
                        LOGO
                    </Link>
                </div>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/" className={'nav-link'}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className={'nav-link'}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
