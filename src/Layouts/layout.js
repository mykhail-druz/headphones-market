import React from "react";
import { Navbar, Footer } from "~/components";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </>
  );
}
export default Layout;
