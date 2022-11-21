import "./Card.css";
const arr = [1, 2, 3, 4, 5];
export const Card = () => {
  return (
    <div className="carddd">
      <div className="tegsh">
        {arr.map((el) => {
          return <img className="od" src="Od.svg" alt="" />;
        })}{" "}
      </div>
      <h5 style={{ margin: "5%", fontSize: "18px" }}>
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </h5>
      <div className="a">
        <img
          style={{ width: "56px", height: "56px" }}
          src="Ellipse.svg"
          alt=""
        />
        <h3>Eleanor Pena</h3>
      </div>
    </div>
  );
};
