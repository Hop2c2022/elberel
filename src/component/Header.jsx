import "./Header.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div>
      <div className="home-bg">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="team"></div>
          <div className="ehlel">
            <Link className="h-h" to="/Users">
              Users
            </Link>
            <Link className="h-h" to="/Services">
              Services
            </Link>
            <Link className="h-h" to="/Contact">
              Contact
            </Link>
            <Link className="h-h" to="/Log in">
              Log in
            </Link>
            <Link className="h-h" to="/Blog">
              Blog
            </Link>
            <div></div>
          </div>
        </div>
        <div className="bro w-50 h-100 d-flex justify-content-center">
          <div className="d-flex flex-column justify-content-center">
            <div className="bro1">
              Instant collaborations <br /> for remote teams
            </div>
            <div className="bro2 pt-5 pb-5">
              All in one for your remote team chats, <br /> collaboration and
              track projects
            </div>
            <div className="pt-5">
              <input
                placeholder="  Email"
                className="w-50 border border-0"
                style={{
                  height: "58px",
                  borderRadius: "5.4px",
                }}
                type="text"
              />
              <button className="btn-2 p-3">Get early access</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
