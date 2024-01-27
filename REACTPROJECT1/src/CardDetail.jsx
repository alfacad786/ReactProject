import { useLocation } from "react-router-dom";
import "./Page.css";

const products = [
  {
    img: "./MAYURI1.jpg",
    link: "https://www.google.com/",
    name: "asif",
    title: "alfa",
    id: 1,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga nisi autem neque inventore illo earum, voluptas provident aut impedit vel nulla sint porro qui. Molestiae repellat recusandae hic quisquam",
  },
  {
    img: "./SULEKH1.jpg",
    link: "https://www.google.com/",
    name: "ayan",
    title: "alfa",
    id: 2,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga nisi  Molestiae repellat recusandae hic quisquam",
  },
  {
    img: "./SUNRISE1.jpg",
    link: "https://www.google.com/",
    name: "aaliya",
    title: "alfa",
    id: 3,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga nisi autem neque inventore illo earum, voluptas provident aut impedit vel nulla sint porro qui. Molestiae repellat recusandae hic quisquam",
  },
  {
    img: "./MAYURI1.jpg",
    link: "https://www.google.com/",
    name: "asif",
    title: "alfa",
    id: 4,
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga nisi  repellat recusandae hic quisquam",
  },
  { name: "ayan", title: "alfa", id: 5,description: "Lorem ipsum, dolor sit amet consectetur  fuga nisi autem neque inventore illo earum, voluptas provident aut impedit vel nulla sint porro qui. Molestiae repellat recusandae hic quisquam", },
  { name: "aaliya", title: "alfa", id: 6,description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis fuga nisi autem  impedit vel nulla sint porro qui. Molestiae repellat recusandae hic quisquam", },
];

function CardDetail() {
  const id = useLocation().state.id;
  //  console.log(id);

  const Items = products.filter((product) => product.id == id);

  console.log(Items[0].name);
  return (
    <div className="CardDetail">
      <h4>{Items[0].title}</h4>
      <div className="CardDetail1">
        <img src={Items[0].img} alt="img" />
        <div className="Detail">
          <spam >{Items[0].name} </spam>
          <p>Id:{Items[0].id} </p>
          <p>{Items[0].description} </p>
          <a href={Items[0].link}>link</a>{" "}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
