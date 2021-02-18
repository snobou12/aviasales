import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import '../css/FilterByTrans.css';
import TransFilterBlock from './TransFilterBlock';
import { setFilterByTrans, setDefaultCountTickets } from '../redux/actions/filters';

function FilterByTrans() {
  const dispatch = useDispatch();
  const arrFilterByTrans = [
    { id: 0, name: 'Без пересадок' },
    { id: 1, name: '1 пересадка' },
    { id: 2, name: '2 пересадки' },
    { id: 3, name: '3 пересадки' },
  ];
  const selectFilterByTransClick = (id) => {
    dispatch(setFilterByTrans(id));
    dispatch(setDefaultCountTickets());
  };
  return (
    <div className="transSection text-center pt-3">
      КОЛИЧЕСТВО ПЕРЕСАДОК
      {arrFilterByTrans.map((obj) => (
        <TransFilterBlock
          selectFilterClick={() => selectFilterByTransClick(obj.id)}
          key={obj.id}
          {...obj}
        />
      ))}
    </div>
  );
}

export default FilterByTrans;
