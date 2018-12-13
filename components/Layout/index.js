import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default ({ children, title }) => (
    <div id = "root">
        <Head>
            <link rel="stylesheet" href="/static/style.css" />
            <title>{title}</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
);