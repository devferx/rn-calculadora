import {useState, useRef} from 'react';

export function useCalc(initialValue: number) {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState(initialValue.toString());
  const lastCalc = useRef<Operadores>();

  enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const createNumber = (numberText: string) => {
    // No aceptar más de un punto
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        // Evaluar si es otro cero, y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        // Evitar 0000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const btnDelete = () => {
    let negativo = '';
    let numberTemp = number;

    if (number.includes('-')) {
      negativo = '-';
      numberTemp = number.substr(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negativo + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const positivoNegativo = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const setNumberToPrevNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const btnSumar = () => {
    setNumberToPrevNumber();
    lastCalc.current = Operadores.sumar;
  };

  const btnRestar = () => {
    setNumberToPrevNumber();
    lastCalc.current = Operadores.restar;
  };

  const btnMultiplicar = () => {
    setNumberToPrevNumber();
    lastCalc.current = Operadores.multiplicar;
  };

  const btnDividir = () => {
    setNumberToPrevNumber();
    lastCalc.current = Operadores.dividir;
  };

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastCalc.current) {
      case Operadores.sumar:
        setNumber(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumber(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumber(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    calc,
    clean,
    btnDelete,
    createNumber,
    positivoNegativo,
    btnSumar,
    btnRestar,
    btnDividir,
    btnMultiplicar,
  };
}
