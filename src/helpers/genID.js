export default function genID() {
  return Math.floor(Math.random() * Date.now())
    .toString()
    .slice(-4);
}
