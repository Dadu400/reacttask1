
// const usersArray = [
//     {
//       id: 1,
//       name: "John",
//       age: 25,
//       profileImage: "https://via.placeholder.com/150/92c952",
//     },
//     {
//       id: 2,
//       name: "Jane",
//       age: 24,
//       profileImage: "https://via.placeholder.com/150/771796",
//     },
//     {
//       id: 3,
//       name: "Bob",
//       age: 30,
//       profileImage: "https://via.placeholder.com/150/24f355",
//     },
//     {
//       id: 4,
//       name: "Mary",
//       age: 28,
//       profileImage: "https://via.placeholder.com/150/d32776",
//     },
//   ];

function GetUsers(usersArray) {
    return (<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>)
}

export default GetUsers;