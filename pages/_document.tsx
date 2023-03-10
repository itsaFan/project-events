import Document, {Html, Head, Main, NextScript} from "next/document";


export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <div id="overlays" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}