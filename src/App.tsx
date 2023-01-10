import React, { useState } from "react";
import OurCustomHeader from "./Components/Header/Header";
//import Article from './Components/Article/Article';
//import Display from './Components/Display/Display';
import Manipulator from './Components/Manipulator/Manipulator';
import CountDisplay from "./Components/CountDisplay/CountDisplay";
import GreetAndGenerate from "./Components/GreetAndGenerate/GreetAndGenerate";
import DownloadButton from "./Components/DownloadButton/DownloadButton";

// export type count = string | number | boolean;


function App() {
  // Hook useState służy do definiowania zmiennych których zmiana wartości ma spwodować przeładowanie (refresh) komponentu w którym sam stan został zdefiniowany (ma się przeładować komponent w którym został wywołany useState)
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <OurCustomHeader />
      <Manipulator setCount={setCount} count={count} />
      <CountDisplay count={count} />
      <GreetAndGenerate />
      <DownloadButton />
    </div>
  );
}

export default App;

// Task 1 10.01.2023
// 1. Stwórz komponent DownloadButton. Wyświetl w nim przycisk z textContentem "Download todo".
// 2. W komponencie DownloadButton stwórz stan todo, wartość początkowa: "", otypuj useState na typ string.
// 3. W środku komponentu DownloadButton stwórz funkcję fetchTodos. W tej funkcji wywołaj funkcję fetch z urlem 'https://jsonplaceholder.typicode.com/todos/*tu losowa liczba od 1 do 10*'. Obiekt króry zostanie zwrócony z fetcha będzie zawierał własność "title". Właśnie to title wrzuć do stanu todo.
// 4. Podepnij funkcję fetchTodos do kliku na przycisk w komponencie DownloadButton.
// 5. Wyświetl stan todo w spanie w komponencie DownloadButton.

// TASK 2. 09.01.2023
// 1. Stwórz komponent GreetAndGenerate.
// 2. W tym komponencie stwórz stan message. Otypuj jego wartość jako string. Wartość początkową stanu ustaw na pustego stringa.
// 3. Stwórz funkcję greet. W środku funkcji greet wywołaj funkcję aktualizującą stan message. Wartość stanu ustawiaj na "Hello! Here's your random number: *wylosowana liczba*". Losowa liczba ma być w jakiś sposób generowana w funkcji greet oraz ma być zaokrąglona do 2 miejsc po przecinku.
// 4. Stwórz button z textContentem "Hello!". Podepnij do niego click handler w którym wstawisz referencję do funkcji greet.
// 5. Stwórz element h3 w którym będziesz wyświetlać stan message.

// TASk 1. 09.01.2023
// 1. Przekazanie funkcji setCount do komponentu manipulator przy pomocy propsów.
// 2. W komponencie manipulator dodaj click handlery na oba przyciski, po kliknięciu na przycisk "-" zmniejszaj stan count o 1 (czyli wywołaj funkcję setCount i zmniejszaj count o 1), analogicznie dla przycisku + zwiększaj count o 1.
// 3. Stwórz komponent CountDisplay. Wyświetlaj w nim paragraf ze stanem count. Sam stan count przekaż propsem. Komponent CountDisplay wyświetlaj w komponencie App.





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


//   const handleButtonclick = () => {
//     setCount(count + 1);
//   };

//   const handleWrongButtonClick = () => {
//     countAleNieStan++;
//     console.log(countAleNieStan);
//   };

//   return (
//     <div className="App">
//       <OurCustomHeader />
//       {/*<Article text={stringWithRandomNumberInIt} />
//       <Display responseValue={response} random={randomNumber} />*/}
//       <Manipulator />
//       <button onClick={handleButtonclick}>Dodaj 1 do zmiennej stanowej</button>
//       <button onClick={handleWrongButtonClick}>Dodaj 1 do zwykłego leta</button>
//       <p>To jest zmienna stanowa: {count}</p>
//       <p>To jest zwykły let: {countAleNieStan}</p>
//     </div>
//   );
// }


