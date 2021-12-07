import fs from "fs";
import { ExitStatus, SignatureKind } from "typescript";

const input = fs
  .readFileSync("day4/number_input.txt", "utf8")
  .split(",")
  .map((char) => parseInt(char));
const boards = fs.readFileSync("day4/boards_input.txt", "utf8").split("\n\n");
const arrayBoards: Array<Array<Array<number>>> = [];
for (let board of boards) {
  const boardArray = board.split("\n").map((row) =>
    row
      .split(" ")
      .map((char) => parseInt(char))
      .filter((number) => !Number.isNaN(number))
  );
  arrayBoards.push(boardArray);
}
let boardsCount = boards.length;
let wonList: number[] = [];

// findFirstWinning();
// findLastWinning();




function checkHorizontalBingo(row: Array<number>) {
  let sum = 0;
  for (let number of row) {
    sum += number;
  }
  return sum === -5;
}
function checkVerticalBingo(board: Array<Array<number>>) {
  let sum = 0;
  const columns = [0, 1, 2, 3, 4];
  for (let column of columns) {
    for (let row of board) {
      sum += row[column];
    }
    if (sum === -5) {
      return true;
    } else {
      sum = 0;
    }
  }
  return false;
}

function findLastWinning() {
  for (let bingoNumber of input) {
    for (let [boardIndex, board] of arrayBoards.entries()) {
      for (let [rowIndex, row] of board.entries()) {
        arrayBoards[boardIndex][rowIndex] = row.map((number) =>
          number === bingoNumber ? -1 : number
        );
        if (
          checkVerticalBingo(arrayBoards[boardIndex]) ||
          checkHorizontalBingo(arrayBoards[boardIndex][rowIndex])
        ) {
          if (!wonList.includes(boardIndex)) {
            wonList.push(boardIndex);
          }
          if (wonList.length === boardsCount) {
            let sum = 0;
            for (let row of arrayBoards[boardIndex]) {
              for (let number of row) {
                if (number !== -1) {
                  sum += number;
                }
              }
            }
            console.log(sum * bingoNumber);
            throw new Error("Bingo!");
          }
        }
      }
    }
  }
}

function findFirstWinning() {
  for (let bingoNumber of input) {
    for (let [boardIndex, board] of arrayBoards.entries()) {
      for (let [rowIndex, row] of board.entries()) {
        arrayBoards[boardIndex][rowIndex] = row.map((number) =>
          number === bingoNumber ? -1 : number
        );
        if (
          checkVerticalBingo(arrayBoards[boardIndex]) ||
          checkHorizontalBingo(arrayBoards[boardIndex][rowIndex])
        ) {
          let sum = 0;
          for (let row of arrayBoards[boardIndex]) {
            for (let number of row) {
              if (number !== -1) {
                sum += number;
              }
            }
          }
          console.log(sum * bingoNumber);
          throw new Error("Bingo!");
        }
      }
    }
  }
}
