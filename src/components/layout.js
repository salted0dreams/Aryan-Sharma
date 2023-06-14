import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className="bg-zinc-900 bg-dotted-spacing-8 bg-dotted-zinc-700 h-full font-mono scroll-smooth">
            <Header />
            <main>{children}</main>
            <hr className="border-zinc-500 h-full m-auot" />
            <Footer />
        </div>
    );
}