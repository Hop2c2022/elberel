import "./Body.css";
import { Link } from "react-router-dom";
export const Body = () => {
  return (
    <div className="Body1">
      <div className="teamwork">
        <div className="sda">
          <div className="title">
            <span className="Garchig">
              Your Hub for <br /> teamwork <br />
            </span>{" "}
            <br />
            Give everyone you work with—inside and outside your <br /> company—a
            more productive way to stay in sync. <br /> Respond faster with
            emoji, keep conversations focused <br /> in channels, and simplify
            all your communication into <br /> one place. <br />
            <Link className="li" to="">
              Learn more
            </Link>
            <img src="sum.svg" alt="" />
          </div>
        </div>
        <img src="Meeting.svg" alt="" />
      </div>
      {/* ////////////// */}
      <div></div>
    </div>
  );
};
