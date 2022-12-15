import React from 'react';
import OurCustomHeader from "./Components/Header/Header";
import Article from './Components/Article/Article';
import Display from './Components/Display/Display';
import Manipulator from './Components/Manipulator/Manipulator';
function App() {
// sumulacja strzału do API
const response = 15;
const randomNumber = Math.random();
  return (
    <div className="App">
      <OurCustomHeader />
      <Article />
      <Display responseValue={response}
      random={randomNumber} />
      <Manipulator />
    </div>
  );
}

export default App;

// ReactDom.render(Display({
//   responseValue: response,
//   random: randomNumber,

// })
// );

// 1. Napisz komponent Article.tsx, w środku wyświetlaj tag article, w środku tagu article h3 z jakimś tekstem, pod h3 nadal w article tag p z jakimś tekstem. Sam komponent Article.tsx wyświetlaj w App.tsx
// 2. Stwórz komponent Display.tsx. W nim wyświetlaj spana z jakąś liczbą oraz paragraph z jakims tekstem. Wyświetl Display.tsx w App.tsx
// 3. Stwórz komponent Manipulator.tsx, w którym wyświetlisz 2 buttony, jeden z tekstem "+" drugi z tekstem "-". Wyświetl Manipulator.tsx w App.tsx