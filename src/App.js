import React from "react";
import GetUsers from "./components/Texts";
import GetUsersImg from "./components/UserImages";

function CreateTable() {
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
        <tr>
        <GetUsers />
        <GetUsersImg />
        </tr>
      </tbody>
    </table>
  );
}

export default CreateTable;