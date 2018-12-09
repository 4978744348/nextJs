import Link from 'next/link';

const About = () => (
    <div>
        
        <h1>About</h1>
        <p>this about page</p>
        <p>
            <Link href="/contact">
                <a>go to contact</a>
            </Link>
        </p>
        <button>
            <a href="/">back</a>
        </button>

    </div>
)

export default About