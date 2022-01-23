import React, { useState } from 'react';


const ItemCount = () => {
  const [count, setCount] = useState(0);
  var stock = 10;
  const DecreaseCounter = (count, stock) =>{
        if(count > 0 & count <= stock){
        count = count - 1
        }
        return count;
    };
    const IncreaseCounter = (count, stock) =>{
        if(count < stock){
        count = count + 1
        
        }
        return count;
    };

  return (
    <div className='row'>
        <div className='col'>
            
            <button onClick={() => setCount(DecreaseCounter(count, stock))} className='btn '>
                <i className="bi bi-arrow-left-circle"></i>
            </button>
        </div>

        <div className='col'>
            <p>{count}</p>
        </div>

        <div className='col'>
            <button onClick={() => setCount(IncreaseCounter(count, stock))} className='btn '>
                <i className="bi bi-arrow-right-circle"></i>
            </button>
        </div>

    </div>
  );
}
export default ItemCount;