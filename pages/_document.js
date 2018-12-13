import Document, { Head, Main, NextScript } from 'net/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
    // static getInitialProps({renderPage}) {
    //     const {html, head, errorHtml, chunks} = renderPage();
    //     const styles = flush()
    //     return {html, head, errorHtml, chunks, styles};
    // }

    render(){
        return(
            <html>
                <Head>
                    <meta name="viewpoer" content="width=device-width"/>
                <link rel="stylesheet" href="/static/style.css" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}