import React from 'react';
import '../../index.css';

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onItemSelect,
  selectedItem,
}) => {
  return (
    <ul className='list-group mt-2'>
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          id='genreList'
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
