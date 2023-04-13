import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Index";
import Header from "../Header/Index";
import SideNavigation from "../SideNavigation/Index";
import LoadingIndicator from "../UI/LoadingIndicator";
import PopupNotification from "../UI/PopupNotification";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Modal";
import AddCollection from "../CollectionsList/AddCollection";
import { uiActions } from "../../store/ui-slice";
import Lightbox from "../Artwork/Lightbox";

import classes from "./Index.module.css";

function RootLayout() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Popup notification control
  const isNotification = useSelector(
    (state) => state.ui.popupNotification.display
  );
  const notificationMessage = useSelector(
    (state) => state.ui.popupNotification.message
  );

  // Modal control
  const isModal = useSelector((state) => state.ui.modal.display);

  const modalData = useSelector((state) => state.ui.modal.data);

  // Scroll to bottom of content
  const scrollHandler = (element) => {
    const onBottom =
      element.target.scrollHeight - element.target.scrollTop <=
      element.target.clientHeight;

    if (onBottom) {
      dispatch(uiActions.setContentBottomHit(true));
    } else {
      dispatch(uiActions.setContentBottomHit(false));
    }
  };

  return (
    <div className={classes["root__container"]}>
      <div className={classes["root__header"]}>
        <Header />
      </div>
      <div className={classes["root__sidebar"]}>
        <SideNavigation />
      </div>
      <main className={classes["root__main"]} onScroll={scrollHandler}>
        {navigation.state === "loading" && <LoadingIndicator />}
        {navigation.state === "idle" && <Outlet />}
      </main>
      <div className={classes["root__footer"]}>
        <Footer />
      </div>
      {isNotification && (
        <PopupNotification>{notificationMessage}</PopupNotification>
      )}
      {isModal && (
        <Modal>
          {(modalData.mode === "add" || modalData.mode === "edit") && (
            <AddCollection data={modalData} />
          )}
          {modalData.mode === "lightbox" && (
            <Lightbox imgId={modalData.imgId} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default RootLayout;
