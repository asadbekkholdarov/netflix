import {
  Add,
  PlayArrow,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import "./ListItem.scss";
import { useState } from "react";

const ListItem = ({ index }) => {
  let key = "kHIGUgESva3RnWe-1_LHQ8TUUx1N8feXOk2ooWLg2W0";
  let apiurl = `https://api.unsplash.com/photos/?client_id=${key}`;
  fetch(apiurl)
    .then((response) => response.json())
    .then((jsData) => console.log(jsData));
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className="listitem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* img tag img https://images.unsplash.com/photo-1647755353498-d67d415b7db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60 */}
      <img src="https://source.unsplash.com/random/300×300" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true}></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
              vel!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
