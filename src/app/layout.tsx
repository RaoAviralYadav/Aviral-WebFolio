import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins", 
});

export const metadata = {
  title: "Aviral Yadav",
  description:
    "Portfolio website of Aviral Yadav – Full Stack Developer, AI/ML Enthusiast, and Creative Technologist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-brandBlack text-brandWhite font-sans">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
