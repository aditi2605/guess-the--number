'use client'
import React, { useState } from 'react'

const page = () => {
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState("")
  let secretNumber = Math.floor(Math.random()* 10) +1;

  function checkGuess(){
    const numericalGuess = parseInt(guess);

    if(isNaN(numericalGuess)){
      alert("Please enter valid Number!");
      return;
    }
    setAttempts(attempts + 1);

    if(numericalGuess < secretNumber){
      setResult("You guess too low!");
    }else if(numericalGuess> secretNumber){
      setResult("You guess high!");
    }else {
      setResult("You got it! 🎉");
    }
  }
  return (
     <div className='min-h-screen flex flex-col bg-yellow-400 text-black font-bold text-center justify-center p-4 rounded text-lg'>
        <div className='flex flex-row text-center justify-center text-2xl'>
          <input
            className='align-center text-center bg-gray-300 m-4 w-80 h-10 rounded-md'
            type = "number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder = "Enter your guess!" 
          />
          <button className='bg-white text-bold m-4 w-40 h-10 rounded-md' onClick={checkGuess}>Let's Guess</button>
        </div>
        <p className='text-2xl'>Your Result: {result}</p>
        <p className='text-2xl'>Your attempts: {attempts}</p>
     </div>
  )
}

export default page
