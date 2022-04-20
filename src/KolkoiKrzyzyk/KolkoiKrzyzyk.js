import logo from "./tic-tac-toe.png";
import React, { useState } from "react";
import "./KolkoiKrzyzyk.css";

const KolkoIKrzyzyk = () => {
  const [runda, ustawRundę] = useState("X");
  const [klikniętePola, ustawklikniętePola] = useState(Array(9).fill(""));
  const [zwycięzca, ustawZwycięzcę] = useState();
  const [tryb, ustawTryb] = useState("Tryb_Jasny");

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
        [2, 4, 6],
      ],
    };

    for (let możliwość in możliwości) {
      możliwości[możliwość].forEach((wzór) => {
        if (
          pola[wzór[0]] === "" ||
          pola[wzór[1]] === "" ||
          pola[wzór[2]] === ""
        ) {
        } else if (
          pola[wzór[0]] === pola[wzór[1]] &&
          pola[wzór[1]] === pola[wzór[2]]
        ) {
          ustawZwycięzcę(pola[wzór[1]].toUpperCase());
        }
      });
    }
  };

  const klikniecie = (pozycja) => {
    if (klikniętePola[pozycja] !== "") {
      alert("Zajęte");
      return;
    }
    if (zwycięzca === "X" || zwycięzca === "O") {
      alert("Gra zakończona, zacznij odnowa");
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
      <td id="pole" onClick={() => klikniecie(pozycja)}>
        {klikniętePola[pozycja]}
      </td>
    );
  };

  const Stopka = () => (
    <div className="Stopka">
      <p></p>
    </div>
  );

  const Tryb = () => {
    if (tryb === "Tryb_Jasny") {
      ustawTryb("Tryb_Ciemny");
      document.body.classList.add("jasny");
    } else {
      ustawTryb("Tryb_Jasny");
      document.body.classList.remove("jasny");
    }
  };

  const ZagrajOdNowa = () => {
    ustawZwycięzcę(null);
    ustawklikniętePola(Array(9).fill(""));
    ustawRundę("X");
  };

  return (
    <div className="main">
      <aside className="asideL">
        <img className="logo" src={logo} alt="logo" />
      </aside>
      <aside className="asideR">
        <div>
          <img className="logo2" src={logo} alt="logo" />
        </div>
      </aside>
      <header>
        <h1>Kółko i krzyżyk</h1>
        <br />
      </header>
      <div>
        <section className="Gra">
          <h2 className="runda">Runda gracza: {runda}</h2>
          <div id="przycisk">
            <button type="button" id="Tryb" onClick={() => Tryb()}>
              {tryb}
            </button>
          </div>
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

          {!zwycięzca && (
            <>
              <button className="odNowa" onClick={() => ZagrajOdNowa()}>
                Zagraj od nowa
              </button>
            </>
          )}

          {zwycięzca && (
            <>
              <h2 className="zwycięzca">Wygrał gracz: {zwycięzca}</h2>
              <button className="odNowa" onClick={() => ZagrajOdNowa()}>
                Zagraj od nowa
              </button>
            </>
          )}
          <br />
        </section>
      </div>
      <Stopka />
    </div>
  );
};

export default KolkoIKrzyzyk;
