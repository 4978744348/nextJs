import Link from 'next/link';

export default () => (
    <header className = "Header">
    <img src='/static/nextJs.jpg'/>
        <nav>
            <Link href ="/">
                <a>Home</a>
            </Link>

            <Link href="/about">
                <a>About</a>
            </Link>

            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
    </header>
);