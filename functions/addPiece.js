import {
  numberOfHeightSquare,
  yellowColor,
  redColor,
  yellowColorInFrench,
  redColorInFrench,
  playerTurnText,
  namePiece,
  selectAllColumns,
  textPlayerToPlay,
} from "./constants/index_constants.js";

export function addPieceInBoardGame() {
  sessionStorage.setItem("colorTurnToPlay", "color-yellow");

  selectAllColumns.forEach((colonne) =>
    colonne.addEventListener("click", playPiece)
  );
}

function playPiece(e) {
  let countNumberOfPieceHeight = e.target.childElementCount;
  if (e.target.classList[0] === namePiece) {
    countNumberOfPieceHeight = e.target.parentElement.childElementCount;
  }
  if (countNumberOfPieceHeight < numberOfHeightSquare) {
    createPiece(e);
  }
}

function createPiece(e) {
  if (e.target.classList[0] === namePiece) {
    clickOnPiece(e);
  } else {
    clickOnColumn(e);
  }
}

function clickOnColumn(e) {
  const createPiece = document.createElement("div");
  const selectedColonne = e.target.classList[1];
  const colorToAssign = sessionStorage.getItem("colorTurnToPlay");
  createPiece.classList = "piece " + colorToAssign + " " + selectedColonne;
  document.querySelector("." + selectedColonne).appendChild(createPiece);
  changeColorToAssign(colorToAssign);
}

function clickOnPiece(e) {
  const createPiece = document.createElement("div");
  const selectedColonne = e.target.parentElement.classList[1];
  const colorToAssign = sessionStorage.getItem("colorTurnToPlay");
  createPiece.classList =
    namePiece + " " + colorToAssign + " " + selectedColonne;
  document.querySelector("." + selectedColonne).appendChild(createPiece);
  changeColorToAssign(colorToAssign);
}

function changeColorToAssign(colorToAssign) {
  if (colorToAssign === yellowColor) {
    sessionStorage.setItem("colorTurnToPlay", redColor);
    playerTurnText.innerText = textPlayerToPlay + redColorInFrench;
  } else {
    sessionStorage.setItem("colorTurnToPlay", yellowColor);
    playerTurnText.innerText = textPlayerToPlay + yellowColorInFrench;
  }
}
