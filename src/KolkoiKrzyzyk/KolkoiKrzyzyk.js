import logo from "./tic-tac-toe.png";
import React, { useState } from "react";
import "./KolkoiKrzyzyk.css";

const KolkoIKrzyzyk = () => {
  const [runda, ustawRundę] = useState("X");
  const [klikniętePola, ustawklikniętePola] = useState(Array(9).fill("-"));

  const zwycięstwo = (pola) => {
    let możliwości = {
      pionowo: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      poziomo: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      ukośnie: [
        [0, 4, 8],
        [6, 4, 2],
      ],
    };
  };

  const klikniecie = (pozycja) => {
    if (klikniętePola[pozycja] !== "-") {
      alert("Zajęte");
      return;
    }
    let pola = [...klikniętePola];
    console.log("Pozycja: " + pozycja);
    if (runda === "X") {
      ustawRundę("O");
      pola[pozycja] = "x";
    } else {
      ustawRundę("X");
      pola[pozycja] = "o";
    }
    zwycięstwo(pola);
    ustawklikniętePola(pola);
    console.log("Pola: " + pola);
  };

  const Pole = ({ pozycja }) => {
    return (
      <td onClick={() => klikniecie(pozycja)}>{klikniętePola[pozycja]}</td>
    );
  };

  const Stopka = () => (
    <div className="Stopka">
      <p></p>
    </div>
  );

  return (
    <div className="main">
      <aside className="asideL">
        <img className="logo" src={logo} alt="logo" />
      </aside>
      <aside className="asideR">
        <img className="logo" src={logo} alt="logo" />
      </aside>
      <header>
        <h1>Kółko i krzyżyk</h1>
        <br />
      </header>
      <div>
        <section className="Gra">
          <div className="runda">Runda gracza: {runda}</div>
          <table>
            <tbody>
              <tr>
                <Pole pozycja={0} />
                <Pole pozycja={1} />
                <Pole pozycja={2} />
              </tr>
              <tr>
                <Pole pozycja={3} />
                <Pole pozycja={4} />
                <Pole pozycja={5} />
              </tr>
              <tr>
                <Pole pozycja={6} />
                <Pole pozycja={7} />
                <Pole pozycja={8} />
              </tr>
            </tbody>
          </table>
          <br />
        </section>
      </div>
      <Stopka />
    </div>
  );
};

export default KolkoIKrzyzyk;
