import { Outlet } from "react-router";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FloatingActionButton } from "@/app/components/FloatingActionButton";
import { useEffect } from "react";

export function RootLayout() {
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[110px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}