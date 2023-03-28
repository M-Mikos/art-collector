import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";

function RootLayout() {
  return (
    <div className="root__container">
      <div className="root__header">
        <Header />
      </div>
      <div className="root__sidebar">
        <SideNavigation />
      </div>
      <div className="root__main">
        <main>
          <Outlet />
        </main>
      </div>
      <div className="root__footer">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
