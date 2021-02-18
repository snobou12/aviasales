import React from 'react';

import '../css/TransFilterBlock.css';
function TransFilterBlock({ id, name, selectFilterClick }) {
  const [check, setCheck] = React.useState(false);
  const clickToCheck = () => {
    setCheck(!check);
    selectFilterClick();
  };

  return (
    <div className="check text-left pl-3">
      <label className="check">
        <input
          type="checkbox"
          className="checkL option-input "
          onChange={clickToCheck}
          checked={check}
        />

        {name}
      </label>
    </div>
  );
}

export default TransFilterBlock;
