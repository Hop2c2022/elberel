import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./Users.css";
export const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState("");

  useEffect(() => {
    const dataRetriever = async () => {
      const result = await axios.get(`https://dummyapi.io/data/v1/user/`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "6374c2350c9c785d7387425c",
        },
      });
      setUsers(result.data);
      setLoading(false);
    };
    dataRetriever();
  }, []);

  console.log(users.data);

  return (
    <div className="bru">
      {users?.data?.map((el) => {
        return (
          <div className="hairtsag">
            <div className="tegshee">
            <img className="zurag" src={el.picture} alt="" />
            <h6>First Name: {el.firstName}</h6>
            <h6>Last Name: {el.lastName}</h6>
            <h6>Title: {el.title}</h6></div>
          </div>
        );
      })}
    </div>
  );
};
