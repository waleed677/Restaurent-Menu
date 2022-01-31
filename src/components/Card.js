import React, { useState } from 'react';
import "./style.css";
import MenuApi from './menuApi';
import CardItem from './CardItem';

const Card = () => {
    const [menu, setMenu] = useState(MenuApi); 
    return (
        <>
            <section className="main-card--cointainer">
               <CardItem menu = {menu}/>
            </section>
        </>);
};

export default Card;
