import Link from 'next/link';


const Contact = () => (
    <div>
        <Link href="/">
            <button>Home</button>
        </Link>
        <h1>Contact</h1>
        <p>contact page</p>

        <Link prefetch href="/about">
            <button>back</button>
        </Link>

    </div>
)

export default Contact;