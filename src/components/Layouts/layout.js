import React from "react";
import { Navbar, Footer } from "~/components";

function Layout({ children }) {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen">
      <div className="tw-flex-1 tw-flex tw-flex-col container_top">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
