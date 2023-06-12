import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
    return (
        <div className="bg-zinc-900 bg-dotted-spacing-8 bg-dotted-zinc-700 h-full">
            <Header />
            <hr className="w-11/12 h-0.5 mx-auto my-2 bg-zinc-600 border-0 rounded" />
            <main>{children}</main>
            <hr  className="w-11/12 h-0.5 mx-auto my-2 bg-zinc-600 border-0 rounded " />
            <Footer />
        </div>
    );
}