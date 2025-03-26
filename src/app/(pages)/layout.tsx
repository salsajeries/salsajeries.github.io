import Footer from "@/_components/Footer";
import Header from "@/_components/Header";
import "@/app/globals.css";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="m-5 flex flex-col min-h-screen">
      <Header />
      <div className="bg-custom-background text-custom-text flex-1">{children}</div>
      <Footer />
    </div>
  );
}
