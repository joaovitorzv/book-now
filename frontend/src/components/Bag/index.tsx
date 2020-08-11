import React, { useState } from 'react';

import { BagSlide } from './styles';

import { KeyboardArrowRight } from '@styled-icons/material-sharp/KeyboardArrowRight'

const Bag: React.FC = () => {
  const [openBag, setOpenBag] = useState(true);

  return (
    <BagSlide isOpenBag={openBag}>
      <div className="bag-info">
        <p><button onClick={() => { }} className="showbag">2 Items</button>  na sua sacola</p>
        <p>Total: <strong>R$ 39,70</strong></p>
      </div>

      <div className="bag-action">
        <button>Finalizar compra <KeyboardArrowRight size={25} /></button>
      </div>
    </BagSlide>
  );
}

export default Bag;
