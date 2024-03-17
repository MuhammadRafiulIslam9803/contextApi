import React, { createContext, useState } from 'react';
import FirstChild from '../FristChild/FirstChild';
import './Decleare.css'

export const MyContext = createContext() 

const DecleareContext = () => {
    const [money ,setMoney] = useState(500)


    return (
       <MyContext.Provider value={[money , setMoney]}>

        <div className='border'>
            <h1>Here i used context api ignore props</h1>
            <h1>Here Money is {money}</h1>
            <FirstChild></FirstChild>
        </div>
       </MyContext.Provider>
    );
};

export default DecleareContext;