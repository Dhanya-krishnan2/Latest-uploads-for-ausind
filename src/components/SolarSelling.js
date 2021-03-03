import React from "react";
// import './Box.css';
import { Card } from "react-bootstrap";
//  import 'SolarCardStyle.css';


const MoreDeets = () => {
  const cardInfo = [
    {
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanenergyreviews.info%2Fblog%2Fsolar-panel-components-construction&psig=AOvVaw0LyIC8MZn2hTpfPv7CG3AX&ust=1614411816541000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi48u2Gh-8CFQAAAAAdAAAAABAE",
      title: "Solar Panel",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Amet commodo nulla facilisi nullam. Id aliquet risus feugiat in ante metus. Tellus elementum sagittis vitae et. Arcu risus quis varius quam quisque id diam vel. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Congue eu consequat ac felis donec et. Donec pretium vulputate sapien nec sagittis aliquam. Malesuada fames ac turpis egestas integer eget aliquet nibh. At tellus at urna condimentum mattis. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur",

     
    },
    {
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cleanenergyreviews.info%2Fblog%2Fsolar-panel-components-construction&psig=AOvVaw0LyIC8MZn2hTpfPv7CG3AX&ust=1614411816541000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi48u2Gh-8CFQAAAAAdAAAAABAE",
      title: "Solar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque. Amet commodo nulla facilisi nullam. Id aliquet risus feugiat in ante metus. Tellus elementum sagittis vitae et. Arcu risus quis varius quam quisque id diam vel. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Congue eu consequat ac felis donec et. Donec pretium vulputate sapien nec sagittis aliquam. Malesuada fames ac turpis egestas integer eget aliquet nibh. At tellus at urna condimentum mattis. Sagittis aliquam malesuada bibendum arcu vitae elementum rdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Dui nunc mattis enim ut tellus elementum. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.",
    },
   
    
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James",
      text: "Logestas tellus rutrum tellus pellentesque. Amet commodo nulla facilisi nullam. Id aliquet risus feugiat in ante metus. Tellus elementum sagittis vitae et. Arcu risus quis varius quam quisque id diam vel. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Congue eu consequat ac felis donec et. Donec pretium vulputate sapien nec sagittis aliquam. Malesuada fames ac turpis egestas integer eget aliquet nibh. At tellus at urna condimentum mattis. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur",

     
    
    },
    
    
    
    
    
   
    
    
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">
  {cardInfo.map(renderCard)}
  </div>;
};

export default MoreDeets;