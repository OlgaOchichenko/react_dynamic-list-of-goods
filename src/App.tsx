import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const handleGetGoods = (callback: ()=> Promise<Good[]>) => {
    callback()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => handleGetGoods(getAll)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => handleGetGoods(get5First)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => handleGetGoods(getRedGoods)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};