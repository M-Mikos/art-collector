import { Outlet, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Header from "../Header/Index";
import SideNavigation from "../SideNavigation/Index";
import Footer from "../Footer/Index";
import LoadingIndicator from "../UI/LoadingIndicator";
import PopupNotification from "../UI/PopupNotification";
import Modal from "../UI/Modal";
import AddCollection from "../CollectionsList/AddCollection";
import Lightbox from "../Artwork/Lightbox";
import classes from "./Index.module.css";

/**
 * Component for organizing application content.
 * Component displays modal and notification components conditionally, based on current UI state (stored in the Redux store).
 * Component updates UI state when user hits bottom of the main container (for uploading more search results as infinite scroll)
 * Gets collections data from React Redux state.
 * @returns JSX code with root component.
 */

function RootLayout() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const isNotification = useSelector(
    (state) => state.ui.popupNotification.display
  );
  const notificationMessage = useSelector(
    (state) => state.ui.popupNotification.message
  );
  const notificationLink = useSelector(
    (state) => state.ui.popupNotification.link
  );
  const isModal = useSelector((state) => state.ui.modal.display);
  const modalData = useSelector((state) => state.ui.modal.data);
  const onBottom = useSelector((state) => state.ui.onBottom);

  const scrollHandler = (element) => {
    const bottomHit =
      element.target.scrollHeight - element.target.scrollTop <=
      element.target.clientHeight + 1;
    if (bottomHit) dispatch(uiActions.setOnBottomTrue());
    if (!bottomHit && onBottom === true) dispatch(uiActions.setOnBottomFalse());
  };

  return (
    <div className={classes.root__container}>
      <div className={classes.root__header}>
        <Header />
      </div>
      <div className={classes.root__sidebar}>
        <SideNavigation />
      </div>
      <main className={classes.root__main} onScroll={scrollHandler}>
        {navigation.state === "idle" && <Outlet />}
        {navigation.state === "loading" && <LoadingIndicator />}
      </main>
      <div className={classes.root__footer}>
        <Footer />
      </div>
      {isNotification && (
        <PopupNotification link={notificationLink}>
          {notificationMessage}
        </PopupNotification>
      )}
      {isModal && (
        <Modal>
          {modalData.mode === "add" || modalData.mode === "edit" ? (
            <AddCollection
              mode={modalData.mode}
              currentTitle={modalData.currentTitle}
              currentDescription={modalData.currentDescription}
              collectionId={modalData.collectionId}
            />
          ) : (
            modalData.mode === "lightbox" && (
              <Lightbox imgId={modalData.imgId} />
            )
          )}
        </Modal>
      )}
    </div>
  );
}

export default RootLayout;
