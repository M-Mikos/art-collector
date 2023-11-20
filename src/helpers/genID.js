/**
 * Function for generating pseudo-random 4-digit ID
 * @returns {number} Pseudo-random 4-digit ID.
 */

export default function genID() {
  return Math.floor(Math.random() * Date.now())
    .toString()
    .slice(-4);
}
