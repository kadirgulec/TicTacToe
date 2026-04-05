# Tic-Tac-Toe (Minimax Study)

A clean implementation of Tic-Tac-Toe designed to explore the mechanics of the Minimax algorithm. This project serves as a practical deep-dive into recursive decision-making and game state evaluation.

## 🎯 Project Purpose
I developed this repository to gain a fundamental understanding of the Minimax algorithm. The goal was to move beyond theoretical knowledge and see how a recursive search can be used to create an "unbeatable" opponent in a zero-sum game.

## 🧠 How it Works
The AI utilizes the Minimax strategy to determine its next move:

* **Recursive Search:** The algorithm simulates every possible move until it reaches a terminal state (Win, Loss, or Draw).
* **Heuristic Scoring:** It assigns a value to these states (e.g., +10 for a win, -10 for a loss, 0 for a draw).
* **Optimal Play:** The AI chooses the move that maximizes its own minimum gain, assuming the opponent is also playing optimally.

## 🚀 Features
* **Unbeatable AI:** Play against a computer that never makes a mistake.
* **Algorithmic Transparency:** The code is structured to clearly show the transition between the board states and the recursive scoring logic.
* **Lightweight:** Minimal dependencies, focused purely on the logic of the game.

## 🛠️ Getting Started

### Installation
Clone the repository:
```bash
git clone [https://github.com/kadirgulec/TicTacToe.git](https://github.com/kadirgulec/TicTacToe.git)
```

Navigate to the project folder and open index.html file.

## 📝 Learning Outcomes
* Iplementation of recursive functions in a game environment.
* Understanding of tree structures and state-space search.
* Experience in debugging logic-heavy algorithms where every "node" counts.

License: MIT
