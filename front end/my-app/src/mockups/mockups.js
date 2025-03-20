import "./mockup.css"
import saladImage from '../foodimages/salad.png';
import cakeImage from '../foodimages/cake.png';
import pizzaImage from '../foodimages/pizza.png';
import friedChickenImage from '../foodimages/friedchicken.png';
function Mockup(){
    return(
<>
<div className="break">
    <h1>
        Break fast
    </h1>
    <p>9:00am -11:00pm  above all in our Services</p>
</div>
<div className="mockups">
    <div className="cardd">
<img src={cakeImage} alt="cake" className="foodimg" />
<p>our dessert for break fast</p>
    </div>
    <div className="cardd">
    <img src={friedChickenImage}alt="cake" className="foodimg" /> 
    <p>ofcource meat for lounch</p> 
        </div>
        <div className="cardd">
        <img src={pizzaImage} alt="cake" className="foodimg" />
        <p>we can eat pizza any time</p> 
        </div >
         
        <div className="cardd">
        <img src={saladImage} alt="cake" className="foodimg" />
        <p>salad for health</p>
        </div>







</div>



</>
)

}

export default Mockup;