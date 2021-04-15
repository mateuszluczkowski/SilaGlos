import React from "react";
import "../styles/Home.css";
import logo from "../images/zdj5.png";
const Home = () => {
  return (
    <div className="homepage">
      <div className="text">
        <h1>Warsztaty głosu</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error
          beatae animi ab corporis dolorum possimus repudiandae ea distinctio
          autem totam omnis numquam commodi qui ipsa sint asperiores iste,
          expedita laudantium harum optio quas. Provident quaerat magnam
          voluptatum? Natus, eligendi inventore vel culpa ullam voluptatibus
          iste! Sequi officia perspiciatis aut amet dicta ea enim itaque ducimus
          sed voluptas at minus repellat optio, aspernatur dolor explicabo quis
          sit molestiae laudantium, eius laborum voluptates accusamus! Nihil
          esse, expedita eveniet deserunt maiores laboriosam totam, ducimus
          nesciunt reprehenderit fugiat molestiae voluptates, doloribus animi
          placeat ex quae vero in praesentium veniam. Odio quas ipsa dolor.
        </p>
      </div>
      <div className="logo">Siła Twojego głosu.</div>
      <div className="logo2">Dariusz Lech</div>
      <img src={logo} alt="dariusz" />
    </div>
  );
};

export default Home;
