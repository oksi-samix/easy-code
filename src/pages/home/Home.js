import PropTypes from 'prop-types';

class Home extends Component {

  static propTypes={
    info: PropTypes.object,
    user: PropTypes.object,
  }

  render() {
    const {user = {}, info} = this.props;

    return (
      <article>
        <h1>Hello, {user.firstName}</h1>
        {
          info
          &&
          <div>
            <p>You have <b>{info.categories}</b> categories (<b>{info.publishedCategories}</b> published)</p>
            <p>You have <b>{info.products}</b> products</p>
          </div>
        }
        This is home page
      </article>

    )
  }

}
export default Home
