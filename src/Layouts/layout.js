import React from "react";
import { Footer, Navbar } from "~/components";

export default function Layout({ children }) {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
