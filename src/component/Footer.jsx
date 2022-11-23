import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <div
      className="big"
      style={{
        width: "100vw",
        height: "400px",
        display: "flex",
        justifyContent: "row",
      }}
    >
      {/* <Link to="/post">asda</Link> */}
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div>
          <div
            style={{ marginLeft: "-12px", marginBottom: "20px" }}
            className="team"
          ></div>
          <div style={{ height: "40px" }}>
            <img style={{ width: "20px" }} src="./instagram.svg" alt="" />
            <a
              href="https://www.instagram.com/elbrll__/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Instagram
            </a>
          </div>
          <div style={{ height: "40px" }}>
            <img style={{ width: "20px" }} src="./Facebook.svg" alt="" />
            <a
              href="https://www.facebook.com/lbrl.elberel/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              FaceBook
            </a>
          </div>
          <div style={{ height: "40px" }}>
            <img style={{ width: "20px" }} src="./Twitter.svg" alt="" />
            <a
              href="https://twitter.com/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Twitter
            </a>
          </div>
          <div style={{ height: "40px" }}>
            <img style={{ width: "20px" }} src="./instagram.svg" alt="" />
            <a
              href="https://www.instagram.com/elbrll__/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Instagram
            </a>
          </div>
          <div style={{ height: "40px" }}>
            <img style={{ width: "20px" }} src="./Facebook.svg" alt="" />
            <a
              href="https://www.facebook.com/lbrl.elberel/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              FaceBook
            </a>
          </div>
          <div style={{ height: "40px" }}>
            <img style={{ width: "20px" }} src="./Twitter.svg" alt="" />
            <a
              href="https://twitter.com/"
              target="blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Twitter
            </a>
          </div>
        </div>{" "}
      </div>
      <div
        style={{
          color: "white",
          width: "12%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p>Use Cases</p>
          <br />
          <p>UI Design</p>
          <p>UX Design</p>
          <p>Prototyping</p>
          <p>UI Design</p>
          <p>UX Design</p>
          <p>Prototyping</p>
        </div>
      </div>
      <div
        style={{
          color: "white",
          width: "12%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p>Explore</p>
          <br />

          <p>Figma</p>
          <p>Customers</p>
          <p>Why I Love Figma</p>
          <p>Figma</p>
          <p>Customers</p>
          <p>Why I Love Figma</p>
        </div>
      </div>
      <div
        style={{
          color: "white",
          width: "13%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <p>Resources</p>
          <br />

          <p>Community Resources Hub</p>
          <p>Support</p>
          <p>Education</p>
          <p>Community Resources Hub</p>
          <p>Support</p>
          <p>Education</p>
        </div>
      </div>
      <div
        style={{
          color: "white",
          width: "22%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <div style={{ marginTop: "50px" }}>
          <p>Subscribe to our newsletter</p>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              justifyContent: "space-around",
              width: "350px",
            }}
          >
            <input
              placeholder="Email"
              className="footerInput w-50 border border-0"
              style={{
                height: "58px",
              }}
              type="text"
            />
            <img src="./Arrow.svg" alt="" />
          </div>
        </div>
      </div>
      <div style={{ width: "19%" }}></div>
    </div>
  );
};
