import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className="bg-zinc-900 bg-dotted-spacing-8 bg-dotted-zinc-700 h-full font-mono">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}