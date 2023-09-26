import React from "react";
import GetUsers from "./components/Texts";
import GetUsersImg from "./components/UserImages";


const usersArray = [
  {
    id: 1,
    name: "John",
    age: 25,
    profileImage: "https://via.placeholder.com/150/92c952",
  },
  {
    id: 2,
    name: "Jane",
    age: 24,
    profileImage: "https://via.placeholder.com/150/771796",
  },
  {
    id: 3,
    name: "Bob",
    age: 30,
    profileImage: "https://via.placeholder.com/150/24f355",
  },
  {
    id: 4,
    name: "Mary",
    age: 28,
    profileImage: "https://via.placeholder.com/150/d32776",
  },
];

function CreateTable({usersArray}) {
  return (
          <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">User Image</th>
        </tr>
      </thead>
      <tbody>

          <GetUsers/>
          <GetUsersImg />

        </tbody>
    </table>
  );
}

export default CreateTable;
