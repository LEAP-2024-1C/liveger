import Header from "../components/header";
import Footer from "../components/footer";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="antialiased min-h-[100vh] flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
