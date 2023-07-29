import { selectModal, selectModalRetryButton } from "./constants/selectors.js";

export function openModal() {
  selectModal.style.display = null;
  selectModal.removeAttribute("aria-hidden");
  selectModal.setAttribute("aria-modal", "true");
  selectModalRetryButton.addEventListener("click", function () {
    document.querySelectorAll(".piece").forEach((piece) => piece.remove());
    selectModal.style = "display: none";
    selectModal.setAttribute("arria-hidden", "true");
    selectModal.setAttribute("aria-modal", "false");
  });
}
