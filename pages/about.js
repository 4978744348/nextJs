import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
    <Layout title="about the app">

        <h1>About</h1>
        <p>this about page</p>
        <p>
            <Link href="/contact">
                <a>go to contact</a>
            </Link>
        </p>


    </Layout>
)

export default About