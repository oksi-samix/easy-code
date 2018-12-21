const Name = (props) => {
  const { user } = props;
  return (
    <li>{`${user.firstName}-${user.lastName}-${user.age}`}</li>);
};


export const ListName = (props) => {
  const { users } = props;
  return (
    <ul>
      {users.map(user => <Name user={user} key={user.firstName} />)}
    </ul>
  );
};
