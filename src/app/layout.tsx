import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

//Data Nav
const elementsNav = [
  { url: "/", name: "Inicio" },
  { url: "#", name: "Tienda" },
  { url: "./pets", name: "Mascotas" },
  { url: "#", name: "Login" },
];

// Data Footer
const elementsFooter = [
  { url: "/", name: "Gatos" },
  { url: "/", name: "Perros" },
  { url: "/", name: "Pagos" },
  { url: "/", name: "Servicios" },
  { url: "/", name: "Accesorios" },
];

let socialElements = [
  {
    url: "https://web.whatsapp.com/",
    iconUrl: "./icon-whatsapp.svg",
    alt: "ruta whatsapp",
    className: "hover:bg-green-500",
  },
  {
    url: "https://mail.google.com/mail/u/0/#inbox",
    iconUrl: "./icon-mail.svg",
    alt: "ruta mail",
    className: "hover:bg-yellow-400",
  },
  {
    url: "https://www.linkedin.com/learning/?originalSubdomain=ec",
    iconUrl: "./icon-linkedin.svg",
    alt: "ruta linkedin",
    className: "hover:bg-blue-400",
  },
  {
    url: "https://twitter.com/?lang=es",
    iconUrl: "./icon-twitter.svg",
    alt: "ruta twitter",
    className: "hover:bg-black",
  },
  {
    url: "https://www.instagram.com/",
    iconUrl: "./icon-instagram.svg",
    alt: "ruta instagram",
    className: "hover:bg-red-600",
  },
  {
    url: "https://www.facebook.com/?locale=es_LA",
    iconUrl: "./icon-facebook.svg",
    alt: "ruta facebook",
    className: "hover:bg-blue-600",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Nav elements={elementsNav} />
        </header>
        <main className="min-h-screen mt-16">{children}</main>
        <footer className="mt-auto">
          <Footer elements={elementsFooter} socialElements={socialElements} />
        </footer>
      </body>
    </html>
  );
}
