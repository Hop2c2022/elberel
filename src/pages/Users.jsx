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
    <div className="">
      {users?.data?.map((el) => {
        return (
          <div className="hairtsag">
            <img src={el.picture} alt="" />
            <h2>First Name: {el.firstName}</h2>
            <h2>Last Name: {el.lastName}</h2>
            <h2>Title: {el.title}</h2>
          </div>
        );
      })}
    </div>
  );
};
