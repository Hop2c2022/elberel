import "./Header.css";
import { Route, Routes, Link } from "react-router-dom";
export const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="team"></div>
      <div className="ehlel">
        <Link className="h-h" to="/Users">
          Users
        </Link>
        <Link className="h-h" to="/post">
          Post
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
      </div>
    </div>
  );
};
