function GetUsers({user}) {
  return (
      <>
            <td className="align-center">{user.name}</td>
            <td className="align-center">{user.age}</td>
      </>
  );
}

export default GetUsers;
