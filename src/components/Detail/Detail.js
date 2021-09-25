import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Detail = ({ match }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users/" + match.params.id
        );
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-3">
        <div className="avatar mx-auto my-3">{user && user.name[0]}</div>
        <Card.Body>
          <Card.Title>{user && user.name}</Card.Title>
          <Card.Text>{user && user.email}</Card.Text>
          <Card.Text>{user && user.address && user.address.street}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
