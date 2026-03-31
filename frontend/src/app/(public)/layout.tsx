import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import PageTransition from "@/components/ui/PageTransition";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <FloatingActions />
        </>
    );
}
