import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileContactBar from "./MobileContactBar";
import ScrollProgress from "./ScrollProgress";

export default function Layout() {
  return (
    <div className="min-h-screen bg-carbon text-structural">
      <ScrollProgress />
      <Header />
      <main className="pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}