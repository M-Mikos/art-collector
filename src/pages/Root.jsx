import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";
import LoadingIndicator from "../components/UI/LoadingIndicator";

function RootLayout() {
  const navigation = useNavigation();

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
          {navigation.state === "loading" && <LoadingIndicator />}
          {navigation.state === "idle" && <Outlet />}
        </main>
      </div>
      <div className="root__footer">
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
