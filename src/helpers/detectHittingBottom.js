function detectHittingBottom(el) {
  if (el.scrollTop === el.scrollHeight - el.offsetHeight) {
    return true;
  }
}
export default detectHittingBottom;
