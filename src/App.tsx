// import React, { useState } from "react";
import OurCustomHeader from "./Components/Header/Header";
import Article from './Components/Article/Article';
import Display from './Components/Display/Display';
import Manipulator from './Components/Manipulator/Manipulator';

export type count = string | number | boolean;

function App() {

  // pierwszy element useState: zmienna stanowa, pojemnik na dane, zmiana jej wartości powoduje przładowanie się komponentu w którym została zainicjalizowana
  // drugi element useState: funckja aktualizująca zmienna stanową, zmienna stanowa i jej funkcja są nie rozłączne

  // const [count, setCount] = useState<count>(0);
  //const = 5 - ŹLE
  //setCount(5) //- DOBRZE


// sumulacja strzału do API
const response = 15;
const randomNumber = Math.random();
const stringWithRandomNumberInIt = `lalalalala ${randomNumber} lalalalala ${response} lalalalala`;
  return (
    <div className="App">
      <OurCustomHeader />
      <Article text={stringWithRandomNumberInIt} />
      <Display responseValue={response} random={randomNumber} />
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

// 1. W komponencie App.tsx, stwórz nową zmienną która będzie się nazywała stringWithRandomNumberInIt. W tą zmienną wrzuć jakiegoś losowego stringa, w środek tego stringa wrzuć losową liczbę randomNumber oraz liczbę response
// "lalalalaala 0.49 eibvwuefhweiufhwe 15 bdiobdrb"
// 2. Przekaż tego stringa za pomocą propsów do Article.tsx i wyświetl go tam w nowym paragrafie.

// CHCE PRZEKAZAĆ JAKĄŚ WARTOŚĆ DO KOMPONENTU DZIECKA
// 1. Wpisuje propsa w odpowiedni komponent (nazwa propsa dowolna, wartość to zmienna ktorą chcemy przekazać)
// 2. Odbieram obiekt z propsami w parametrze komponentu do którego te propsy przekazałem.
// 3. Propsy ZAWSZE przychodzą w obiekcie, a sam obiekt jest parametrem. Z zasad TS wynika że parametry funkcji trzeba otypować. Do typowania obiektów używamy interfejsów. Tworzę interface dla moich propsów, będzie on nazywany według wzoru *nazwa komponentu* + Props. W samym interfejsie wypisuje wszystkie po kolei, jednocześnie podając typy ich wartości.

