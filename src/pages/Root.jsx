import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Index";
import Header from "../components/Header/Index";
import SideNavigation from "../components/SideNavigation/Index";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import PopupNotification from "../components/UI/PopupNotification";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/UI/Modal";
import AddCollection from "../components/CollectionsList/AddCollection";
import { uiActions } from "../store/ui-slice";
import Lightbox from "../components/Artwork/Lightbox";

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
    <div className="root__container">
      <div className="root__header">
        <Header />
      </div>
      <div className="root__sidebar">
        <SideNavigation />
      </div>
      <div className="root__main" onScroll={scrollHandler}>
        <main>
          {navigation.state === "loading" && <LoadingIndicator />}
          {navigation.state === "idle" && <Outlet />}
        </main>
      </div>
      <div className="root__footer">
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
