import React, { useState } from 'react';
import decrease from './DecreaseCounter'
import increase from './IncreaseCounter'

function ItemCount() {
  const [count, setCount] = useState(0);
  var stock = 10;

  return (
    <div className='row'>
        <div className='col'>
            
            <button onClick={() => setCount(decrease(count, stock))} className='btn '>
                <i className="bi bi-arrow-left-circle"></i>
            </button>
        </div>

        <div className='col'>
            <p>You clicked {count} times</p>
        </div>

        <div className='col'>
            <button onClick={() => setCount(increase(count, stock))} className='btn '>
                <i className="bi bi-arrow-right-circle"></i>
            </button>
        </div>

    </div>
  );
}
export default ItemCount;