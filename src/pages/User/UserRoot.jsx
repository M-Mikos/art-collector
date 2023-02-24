import { Outlet } from "react-router-dom";
import Card from "../../components/UI/Card";
import UserNavigation from "../../components/User/UserNavigation";
import UserWelcomeBanner from "../../components/User/UserWelcomeBanner";

function UserLayout() {
  return (
    <>
      <Card>
        <UserWelcomeBanner />
      </Card>
      <UserNavigation />
      <Outlet />
    </>
  );
}

export default UserLayout;
