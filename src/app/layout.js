import { Inter } from "next/font/google";
import ResponsiveAppBar from "../Components/Navigation";
import Graphics from "../Components/Graphics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Register Sales",
  description: "Generacion de registros de ventas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar></ResponsiveAppBar>
        <div style={{ display: "flex" }}>
          <div style={{margin: "1rem 0rem"}}>{children}</div>
          <div style={{background: "#037971bb", height: "300px", margin: "1rem 2.2rem", borderRadius: "10px", width: "100%"}}>
            <Graphics></Graphics>
          </div>
        </div>
      </body>
    </html>
  );
}
