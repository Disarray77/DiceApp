import './App.css';
import { useState } from 'react';

function App() {
  const [leftDiceNumber, setLeftDiceNumber] = useState(2);
  const [rightDiceNumber, setRightDiceNumber] = useState(3);
    console.log('rndInt')

  const onButtonClicked = () =>{
    console.log("Button clicked");
    setLeftDiceNumber(Math.floor(Math.random() * 6) + 1);
    console.log(leftDiceNumber, rightDiceNumber);

  }
  const onButtonClicked1 = () =>{
    console.log("Button clicked");
    setRightDiceNumber(Math.floor(Math.random() * 6) + 1);
    console.log(leftDiceNumber, rightDiceNumber);}
  return (
    <div className="App">
      <header>Dicee</header>
      <main>
      <DiceButton onClick={onButtonClicked} qwe={leftDiceNumber} />
      <DiceButton onClick={onButtonClicked1} qwe={rightDiceNumber} />
      {/*This is comment*/}
      </main>
    </div>
  );
}
function DiceButton(
  {
    // qwe = 1,2,3,4,5,6
    qwe,
    onClick
  }
) {
  let imagePath = 1;
  return <button onClick={onClick}><img src={require(`./assets/dice${qwe}.png`)}/></button>
}

export default App;
