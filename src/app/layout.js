import "./globals.css";
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Thakur",
  description: "Bharat most Loved brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {montserrat.className} >
      <NavBar/>
        {children}
        </body>
    </html>
  );
}
