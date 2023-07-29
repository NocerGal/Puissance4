import { openModal } from './modalHandler.js';
import {
  winnConditionNbrPiecesAligns,
  selectColClass,
  selectColorClass,
} from './constants/index_constants.js';

export function gamesRules() {
  let observer = new MutationObserver(checkWinConditions);
  var config = { attributes: true, childList: true };
  observer.observe(document.querySelector('h2'), config);
  observer.disconnect;
}

function checkWinConditions() {
  document
    .querySelectorAll('.piece')
    .forEach((piece, index) => verticalWinConditions(piece, index));
  document
    .querySelectorAll('.piece')
    .forEach((piece, index) => diagonalUpWinConditions(piece, index));
  document
    .querySelectorAll('.piece')
    .forEach((piece, index) => diagonalDownWinConditions(piece, index));
  document
    .querySelectorAll('.piece')
    .forEach((piece, index) => columnWinConditions(piece, index));
}

function columnWinConditions(piece) {
  let countWinCondition = 1;
  const focusedColumn = piece.parentElement;
  const arrFromFocusedColumn = Array.from(
    focusedColumn.querySelectorAll('.piece')
  );

  for (let i = arrFromFocusedColumn.length - 1; i >= 1; i--) {
    arrFromFocusedColumn[i].classList[1] ===
    arrFromFocusedColumn[i - 1].classList[1]
      ? countWinCondition++
      : (countWinCondition = 0);
    countWinCondition == 4 ? openModal() : null;
  }
}

function verticalWinConditions(piece) {
  const numberOfColumn = document.querySelector('.grille').childElementCount;
  const focusedColumn = piece.parentElement;
  const arrFromFocusedColumn = Array.from(
    focusedColumn.querySelectorAll('.piece')
  );
  let indexColumn = Array.from(
    document.querySelectorAll('.grille .column')
  ).findIndex((column) => column.classList[1] === focusedColumn.classList[1]);
  let indexPiece = arrFromFocusedColumn.findIndex((column) => column == piece);
  let countWinCondition = 0;

  for (let i = 0; 4 > i; i++) {
    try {
      document
        .querySelectorAll('.grille .column')
        [indexColumn + i].querySelectorAll('.piece')[indexPiece].classList[1] ==
      piece.classList[1]
        ? countWinCondition++
        : (countWinCondition = 0);
      countWinCondition == 4 ? openModal() : null;
    } catch (error) {
      countWinCondition = 0;
    }
  }
}

function diagonalUpWinConditions(piece) {
  const focusedColumn = piece.parentElement;
  const arrFromFocusedColumn = Array.from(
    focusedColumn.querySelectorAll('.piece')
  );
  let indexColumn = Array.from(
    document.querySelectorAll('.grille .column')
  ).findIndex((column) => column.classList[1] === focusedColumn.classList[1]);
  let indexPiece = arrFromFocusedColumn.findIndex((column) => column == piece);
  let countWinCondition = 0;

  for (let i = 0; 4 > i; i++) {
    try {
      document
        .querySelectorAll('.grille .column')
        [indexColumn + i].querySelectorAll('.piece')[indexPiece - i]
        .classList[1] == piece.classList[1]
        ? countWinCondition++
        : (countWinCondition = 0);
      countWinCondition == 4 ? openModal() : null;
      console.log('gagne en vertical ');
    } catch (error) {
      countWinCondition = 0;
    }
  }
}

function diagonalDownWinConditions(piece) {
  const focusedColumn = piece.parentElement;
  const arrFromFocusedColumn = Array.from(
    focusedColumn.querySelectorAll('.piece')
  );
  let indexColumn = Array.from(
    document.querySelectorAll('.grille .column')
  ).findIndex((column) => column.classList[1] === focusedColumn.classList[1]);
  let indexPiece = arrFromFocusedColumn.findIndex((column) => column == piece);
  let countWinCondition = 0;

  for (let i = 0; 4 > i; i++) {
    try {
      document
        .querySelectorAll('.grille .column')
        [indexColumn - i].querySelectorAll('.piece')[indexPiece - i]
        .classList[1] == piece.classList[1]
        ? countWinCondition++
        : (countWinCondition = 0);
      countWinCondition == 4 ? openModal() : null;
      console.log('gagne en vertical ');
    } catch (error) {
      countWinCondition = 0;
    }
  }
}
