import './App.css';
import CountryFlag  from 'country-flag-emoji-json';
import { useState } from 'react';
function App() {
const [flags, setFlags] = useState([CountryFlag[Math.floor(Math.random() * 261)],
CountryFlag[Math.floor(Math.random() * 261)],
CountryFlag[Math.floor(Math.random() * 261)],
CountryFlag[Math.floor(Math.random() * 261)]]);
const [random, setRandom] = useState(Math.floor(Math.random() * 3))
const [wins, setWins] = useState(0);
const [loses, setLoses] = useState(0);

  return (
    <div className="App">
      <h1>Guess The Flag</h1>
       <h1 className='qstn'>which on is <span className='flag'>{flags[random].name}</span> flag?</h1>
       <div className='flags'>
       {flags.map((e) =>{
        return <img onClick={() => {
            if(flags[random].name === e.name)
              setWins(wins + 1)
            else
              setLoses(loses + 1)
            setFlags([CountryFlag[Math.floor(Math.random() * 261)],
            CountryFlag[Math.floor(Math.random() * 261)],
            CountryFlag[Math.floor(Math.random() * 261)],
            CountryFlag[Math.floor(Math.random() * 261)]]);
            setRandom(Math.floor(Math.random() * 3));
        }} src={e.image}/>
       })}
       </div>
       <div className='statement'>
        <h1>Correct: <span className='wins'>{wins}</span>  </h1>
        <h1>False:<span className='loses'> {loses}</span></h1>
      </div>
    </div>
  );
}

export default App;
