function detectHittingBottom() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    return true;
  }
}
export default detectHittingBottom;
