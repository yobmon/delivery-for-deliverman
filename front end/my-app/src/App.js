
import './App.css';
import Asbeza from './asbeza/asbeza.js';
import Header from './header/newhewader.js';
import Footer from './footer/footer.js';
import Home from './home/homee.js';
import Signin from './userlogin/signin.js';
import Cart from './cartpage/cart.js';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Description from './description/description.js';
import Mockup from './mockups/mockups.js';
import Userlog from './userlogin/userlogin.js';
import Deliver from './delivers/delivers.js';
import Section from './section/section.js';
import Deliverui from './deliverinerface/deliverui.js';
function App() {
  return (
    
    <Router>
    <div className="App">
    <Routes>
<Route
path='/'  
element={
<>
<Header />
<Description />
<Mockup />
<Section />
<Asbeza />
<Footer />

</>
}
/>



<Route
path='/orders'  
element={
<>

 <Home />


</>
}
/>
















<Route
path='/signin'
element={

  <>
  <Signin />
  </>
}
/>
<Route
path='/home'
element={
<Cart />


}
/>

<Route
path='/sign'  
element={
<>
<Userlog />

</>
}
/>   
 


<Route
path='/Deliver'  
element={
<>
<Deliver />
</>
}
/>
<Route
path='/Deliverui'  
element={
<>
<Deliverui />
</>
}
/>
</Routes>


    </div>
    </Router>
   
  );
}

export default App;
