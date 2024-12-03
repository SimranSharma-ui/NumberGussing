import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import useLogic from "./Logic";

const Home = () => {
  const {
    resetGame,
    round,
    handleGuess,
    player1Number,
    player2Number,
    gameOver,
    setPlayer1Number,
    setPlayer2Number,
    randomnumber,
    player1Score,
    player2Score,
  } = useLogic();

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showConfetti =
    player1Score > player2Score || player2Score > player1Score;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 py-10 px-5">
      <h1 className="text-4xl font-bold text-indigo-600 mb-5">
        Number Guessing Game
      </h1>

      {gameOver ? (
        <div className="text-center bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
          {showConfetti && <Confetti width={width} height={height} />}
          <h2 className="text-2xl font-semibold text-red-500 mb-4">
            Game Over!
          </h2>
          <h3 className="text-xl text-gray-700 mb-2">
            Player 1 Score: <span className="font-bold">{player1Score}</span>
          </h3>
          <h3 className="text-xl text-gray-700 mb-4">
            Player 2 Score: <span className="font-bold">{player2Score}</span>
          </h3>
          <h3 className="text-xl font-semibold text-green-500 mb-4">
            {player1Score > player2Score
              ? "Player 1 Wins!"
              : player2Score > player1Score
              ? "Player 2 Wins!"
              : "It's a Tie!"}
          </h3>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-gray-700 mb-5">
            Total Rounds 5!
          </h2>
          <h2 className="text-2xl font-semibold text-gray-700 mb-5">
            Round {round}
          </h2>
          <h3 className="text-lg font-medium text-gray-600 mb-5">
            Guess a number between 1 and 10
          </h3>
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Player 1
            </h4>
            <input
              type="number"
              value={player1Number}
              onChange={(e) => setPlayer1Number(e.target.value)}
              min="1"
              max="10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              Player 2
            </h4>
            <input
              type="number"
              value={player2Number}
              onChange={(e) => setPlayer2Number(e.target.value)}
              min="1"
              max="10"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            onClick={handleGuess}
            className="w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Guesses
          </button>

          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            Random Number: {randomnumber}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Home;
