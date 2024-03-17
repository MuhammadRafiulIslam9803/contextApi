import React, { useContext } from 'react';
import { MyContext } from '../DecleareContext/DecleareContext';

const ThirdChild = () => {
    const [money , setMoney] = useContext(MyContext)
    return (
        <div className='border'>
            <h1>This is Third Child</h1>
            <h1>here money is pass by context</h1>
            <h1>money {money}</h1>
            <button onClick={()=> setMoney(money +1000)} > Increased Money</button>
        </div>
    );
};

export default ThirdChild;