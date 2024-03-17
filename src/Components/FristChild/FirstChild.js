import React, { useContext } from 'react';
import SecondChid from '../SecondChild/SecondChid';
import { MyContext } from '../DecleareContext/DecleareContext';

const FirstChild = () => {
    const [money] = useContext(MyContext)
    return (
        <div className='border'>
            <h1>Frist child here </h1>
            <h1>money {money}</h1>
            <SecondChid></SecondChid>
        </div>
    );
};

export default FirstChild;