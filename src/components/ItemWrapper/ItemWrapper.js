import './itemwrapper.scss';
import CustomeInput from '../../components/customeInput';

class ItemWrapper extends Component {
  render () {
    const { leftItems, rightItems } = this.props;

    return (
      <div className="control-items">
        <ul>
          {
            leftItems.map(({ title, id }) => {
              return <li key={id}>
                {title}
                <CustomeInput value={title} name={title} onLoose={title => this.props.onChangeLeftItem(title, id)}/>
              </li>;
            })
          }
        </ul>

        <ul>
          {
            rightItems.map(({ title, id }) => {
              return <li key={id}>{title}</li>;
            })
          }
        </ul>
      </div>
    );
  }
}

export default ItemWrapper;
