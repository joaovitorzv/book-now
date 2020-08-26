import React, { useState, useContext, useEffect } from 'react';

import BagContextManager from './context/BagContextManager';
import BagContext from './context/BagContext';

import { BagSlide } from './styles';
import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

const Bag: React.FC = () => {
  const { books } = useContext<BagContextManager>(BagContext);
  const haveBooks = books.length > 0;
  const [openBag, setOpenBag] = useState(haveBooks);

  const totalBagValue = haveBooks
    ? books
      .map(book => book.price || 0)
      .reduce((accumulator, currentValue) => accumulator + currentValue)
    : 0;

  useEffect(() => {
    haveBooks ? setOpenBag(true) : setOpenBag(false);
  }, [haveBooks])

  return (
    <BagSlide isOpenBag={openBag}>
      <div className="bag-info">
        <p>
          <button className="showbag">
            {books.length}
            {books.length > 1 ? " items" : " item"}
          </button>
            na sua sacola
        </p>
        <p>Total: <strong>{totalBagValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}</strong>
        </p>
      </div>

      <div className="bag-action">
        <button>Finalizar compra <KeyboardArrowRight size={25} /></button>
      </div>
    </BagSlide>
  );
}

export default Bag;
