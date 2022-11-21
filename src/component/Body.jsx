import "./Body.css";
import { Link } from "react-router-dom";
import { Card } from "./Card";
// as
const array = [1, 2, 3, 4];
export const Body = () => {
  return (
    <div>
      <div className="Body1">
        <div className="teamwork">
          <div className="sda">
            <div className="title">
              <span className="Garchig">
                Your Hub for <br /> teamwork <br />
              </span>{" "}
              <br />
              Give everyone you work with—inside and outside your <br />{" "}
              company—a more productive way to stay in sync. <br /> Respond
              faster with emoji, keep conversations focused <br /> in channels,
              and simplify all your communication into <br /> one place. <br />
              <Link className="li" to="">
                Learn more
              </Link>
              <img src="sum.svg" alt="" />
            </div>
          </div>
          <img className="zurg1" src="Meeting.svg" alt="" />
        </div>
      </div>
      <div className="Body2">
        <div className="teamwork">
          <img className="zurg2" src="Egch.svg" alt="" />
          <div className="sda">
            <div className="title">
              <span className="Garchig">
                Simple task <br /> management <br />
              </span>{" "}
              <br />
              Give everyone you work with—inside and outside your <br />{" "}
              company—a more productive way to stay in sync. <br /> Respond
              faster with emoji, keep conversations focused <br /> in channels,
              and simplify all your communication into <br /> one place. <br />
              <Link className="li" to="">
                Learn more
              </Link>
              <img src="sum.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="Body3">
        <div className="teamwork">
          <div className="sda">
            <div className="title">
              <span className="Garchig">
                Scheduling that <br /> actually works teamwork <br />
              </span>{" "}
              <br />
              Give everyone you work with—inside and outside your <br />{" "}
              company—a more productive way to stay in sync. <br /> Respond
              faster with emoji, keep conversations focused <br /> in channels,
              and simplify all your communication into <br /> one place. <br />
              <Link className="li" to="">
                Learn more
              </Link>
              <img src="sum.svg" alt="" />
            </div>
          </div>
          <img className="zurg3" src="Ah.svg" alt="" />
        </div>
      </div>
      <div className="Body4">
        <h2
          style={{ fontWeight: "700", textAlign: "center ", fontSize: "45px" }}
        >
          What people say about us
        </h2>
        <div className="bruhh">
          {array.map((el) => {
            return <Card />;
          })}
        </div>
      </div>
    </div>
  );
};
