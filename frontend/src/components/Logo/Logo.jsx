import Tilt from "react-parallax-tilt";
import brain from "../../assets/brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div
          className="pa3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img style={{ paddingTop: "5px" }} alt="logo" src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
