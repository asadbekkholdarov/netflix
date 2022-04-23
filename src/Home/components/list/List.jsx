import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import { useRef } from "react";
import ListItem from "../ListItems/ListItem";
import "./list.scss";

const List = () => {
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(distance);
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onclick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onclick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
