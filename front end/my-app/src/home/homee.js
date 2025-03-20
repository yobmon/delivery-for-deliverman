import React from 'react';
import './home.css';
import Food from '../foodslist/foods';

import burgerImage from '../foodimages/burger.png';
import cakeImage from '../foodimages/cake.png';
import cookiesImage from '../foodimages/cookies.png';
import friedChickenImage from '../foodimages/friedchicken.png';
import hotdogImage from '../foodimages/hotdog.png';
import pizzaImage from '../foodimages/pizza.png';
import saladImage from '../foodimages/salad.png';
import taccoImage from '../foodimages/tacco.png';


function Home() {
    return (
        <main className="food-container">
           
            <Food id="1" name="Burger" price= {368}image={burgerImage} />
            <Food id="2" name="Cake" price={346}  image={cakeImage} />
            <Food id="3" name="Cookies" price={675} image={cookiesImage} />
            <Food id="4" name="Fried Chicken" price={674} image={friedChickenImage} />
            <Food id="5" name="Hotdog" price="350 birr" image={hotdogImage} />
            <Food id="6" name="Pizza" price={893} image={pizzaImage} />
            <Food id="7" name="Salad" price="350 birr" image={saladImage} />
            <Food id="8" name="Taco" price="350 birr" image={taccoImage} />
        </main>
    );
}

export default Home;
