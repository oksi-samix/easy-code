export const Post = (props) => (
  <ul>
    {props.post.map(post => <li key={post.id}><span>{post.title}</span><p>{post.body}</p></li>)}
  </ul>
);


export default class Users extends Component {
  state = {
    users: [],
    post: []
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ users }));
  }

  loadPost = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(data => data.json())
      .then(post => this.setState({ post }));
  };

  render() {
    const { users, post } = this.state;
    const { loadPost } = this;
    return (
      <div style={{ display: 'flex' }}>
        <ul>
          {users.map((user) => <li key={user.id} onClick={() => loadPost(user.id)}>{user.name}</li>)}
        </ul>
        <Post post={post}/>
      </div>

    );
  }
}
