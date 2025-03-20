
import "./description.css";
import { Link } from 'react-router-dom';


function Description() {

  return (
    <section className="app-description">
    <div className="describer">

<h1><span>Welcome</span> to</h1>
<h1>The world of</h1>
<h1>delcious foods will delivered fast</h1>
<p className="p1">we deliver fast and effcient foods fastly with our delivers that are around</p>
<p>our food is standardized and delicious</p>
<Link to="/orders">
<button className="btn1">order now </button>
</Link>
    </div>

    <div className="img">

    </div>
    </section>
  );
}

export default Description;
