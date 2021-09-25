import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);
  if (isLoading) {
    return <Spinner animation="grow" variant="primary" />;
  } else
    return (
      <div className="d-flex justify-content-center flex-wrap">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    );
};

export default UserList;
