import { selectButtonRestart } from "./constants/selectors.js";

export function restart() {
  selectButtonRestart.addEventListener("click", function () {
    document.querySelectorAll(".piece").forEach((piece) => piece.remove());
  });
}
