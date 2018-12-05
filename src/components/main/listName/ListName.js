const Name = (props) => (
  <li>
    {props.user.firstName}
    {props.user.lastName}
    {props.user.age}
  </li>
);


export const ListName = (props) => (
  <ul>
    {props.users.map(user => <Name user={user} key={user.firstName} />)}
  </ul>
);
