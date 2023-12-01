// API & artwork data fetching configuration

export const API_URL = "https://api.artic.edu/api/v1/artworks";
export const IIIF_URL = "https://www.artic.edu/iiif/2";
export const ARTWORKS_URL = "https://www.artic.edu/artworks/";
export const ARTWORKS_URL_DEFAULT_SUFFIX = "/full/843,/0/default.jpg";
export const ARTWORKS_URL_THUMBNAIL_SUFFIX = "/full/300,/0/default.jpg";
export const ARTWORKS_URL_LARGE_SUFFIX = "/full/1686,/0/default.jpg";
export const THUMBNAIL_PROPS =
  "id,title,image_id,alt_text,artist_title,date_display";
export const ARTWORK_PROPS =
  "id,title,image_id,alt_text,artist_title,date_display,medium_display,place_of_origin,style_title,term_titles,dimensions";

// Error and notification messages

export const NO_RESULTS_MESSAGE = "No results.";
export const NO_MORE_RESULTS_MESSAGE = "No more results.";
export const EMPTY_COLLECTION_MESSAGE = "Empty collection.";
export const EMPTY_FAVOURITES_LIST_MESSAGE = "The list is empty.";
export const EMPTY_COLLECTIONS_LIST_MESSAGE = "No collections";
export const ADD_COLLECTION_MESSAGE = "New collection added.";
export const DELETE_COLLECTION_MESSAGE = "Collection deleted.";
export const EDIT_COLLECTION_MESSAGE = "Collection edited.";
export const ADD_TO_FAVOURITES_MESSAGE = "Added to favourites.";
export const REMOVE_FROM_FAVOURITES_MESSAGE = "Removed from favourites.";
export const ADD_TO_COLLECTION_MESSAGE = "Added to collection.";
export const REMOVE_FROM_COLLECTION_MESSAGE = "Removed from collection.";

// Content

export const WELCOME_BANNER_TITLE = "Welcome, Art Collector";
export const WELCOME_BANNER_CONTENT =
  "Create your own art collections, choose your favorite works. Explore the extraordinary fine art resources gathered by The Art Institute of Chicago.";
export const ADD_COLLECTION_FOMR_TITLE = "Create new collection";
export const EDIT_COLLECTION_FOMR_TITLE = "Edit collection";

// User Interface settings

export const POPUP_NOTIFICATION_TIMEOUT = 2000;
export const LIGHTBOX_ZOOM_LEVEL = 3;
export const INFINITE_SCROLL_DEBOUNCE_TIME = 1000;
