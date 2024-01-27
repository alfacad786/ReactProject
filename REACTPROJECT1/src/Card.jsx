import "./Card.css";
import { Link, useNavigate } from "react-router-dom";


const products = [
  {
    img: "./MAYURI1.jpg",
    link: "https://www.google.com/",
    name: "asif",
    title: "alfa",
    id: 1,
  },
  {
    img: "./SULEKH1.jpg",
    link: "https://www.google.com/",
    name: "ayan",
    title: "alfa",
    id: 2,
  },
  {
    img: "./SUNRISE1.jpg",
    link: "https://www.google.com/",
    name: "aaliya",
    title: "alfa",
    id: 3,
  },
  {
    img: "./MAYURI1.jpg",
    link: "https://www.google.com/",
    name: "asif",
    title: "alfa",
    id: 4,
  },
  { name: "ayan", title: "alfa", id: 5 },
  { name: "aaliya", title: "alfa", id: 6 },
];




function Card() {
 
const Items = products.map((product) => ( 
    <div className="Card" key={product.id} onClick={()=>goToCardDetail(product.id)}  >
      
      <img src={product.img} alt="img" /> 
      <p>{product.title} </p>     
      <p>{product.name} </p>
      <p>{product.id} </p>
    </div>  
   
));
const navigate = useNavigate();
function goToCardDetail(id) {
  navigate("/CardDetail",{state:{id:id}});
}





  return <div >{Items }</div>;
  
}

export default Card;
