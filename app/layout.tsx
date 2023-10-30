import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/_globals.scss";
import Header from "@/components/Header";
import ToastProvider from "@/providers/ToastProvider";
import ScrollToTop from "@/utils/ScrollToTop";
import Footer from "@/components/Footer";
import SectionProvider from "@/providers/SectionProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import ThemeToggleBtn from "@/components/accessories/ThemeToggleBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthony | Personal Portfolio",
  description: "Anthony Massaad is a Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} light`}>
        <ScrollToTop>
          <ThemeProvider>
            <SectionProvider>
              <ToastProvider>
                <Header />
                {children}
                <ThemeToggleBtn />
                <Footer />
              </ToastProvider>
            </SectionProvider>
          </ThemeProvider>
        </ScrollToTop>
      </body>
    </html>
  );
}
