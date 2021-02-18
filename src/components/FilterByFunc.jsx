import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterByFunc, setDefaultCountTickets } from '../redux/actions/filters';
import '../css/FilterByFunc.css';

function FilterByFunc() {
  const dispatch = useDispatch();
  const selectedItem = useSelector(({ filters }) => filters.sortByFunc);
  const arrFilterByFunc = [
    { id: 0, name: 'ДЕШЕВЫЙ' },
    { id: 1, name: 'БЫСТРЫЙ' },
    { id: 2, name: 'ОПТИМАЛЬНЫЙ' },
  ];
  const selectFilterByFuncClick = (id) => {
    dispatch(setFilterByFunc(id));
    dispatch(setDefaultCountTickets());
  };
  return (
    <ListGroup horizontal>
      {arrFilterByFunc.map((obj) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          className={selectedItem === obj.id ? 'itemFunc selectFilter' : 'itemFunc'}
          onClick={() => selectFilterByFuncClick(obj.id)}
          key={obj.id}>
          {obj.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default FilterByFunc;
