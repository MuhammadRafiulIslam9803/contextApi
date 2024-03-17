import React, { useContext } from 'react';
import ThirdChild from '../ThirdChild/ThirdChild';
import { MyContext } from '../DecleareContext/DecleareContext';

const SecondChid = () => {
    const[money , setMoney] = useContext(MyContext)
    return (
        <div className='border'>
            <h1>this is SecondChid</h1>
            <h1>Here money is {money}</h1>
            <button onClick={()=>setMoney(money -500)}>Decrease Money </button>
            <ThirdChild></ThirdChild>
        </div>
    );
};

export default SecondChid;