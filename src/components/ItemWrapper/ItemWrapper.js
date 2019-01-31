import './itemwrapper.scss';
import CustomeInput from '../../components/customeInput';
// import Modal from '../../components/modal';

class ItemWrapper extends Component {
  state = {
    itemToDelete: ''
  };

  onDelete = (id) => {
    this.setState({itemToDelete: id})
  };

  onClose = () => {
    this.setState({itemToDelete: ''})
  };

  onOk = () => {
    this.props.removeItem(this.state.itemToDelete);
  };

  publishItem = (id) => {
    this.props.publishItem(id);
  };

  render() {
    const {leftItems, rightItems} = this.props;

    return (
      <div className="item-wrapper">
        <ul>
          {
            leftItems.map(({title, id}) => {
              return <li key={id}>
                <CustomeInput
                  value={title} name={title} changeVal={title => this.props.onChangeLeftItem(title, id)}/>
                  <span onClick={() => this.onDelete(id)}>X</span>
              </li>;
            })
          }
        </ul>

        <ul>
          {
            rightItems.map(({title, id}) => {
              return <li key={id}>
                {title}
                <button onClick={() => this.publishItem(id)}>publish</button>
              </li>;

            })
          }
        </ul>
        {/*<Modal*/}
          {/*isOpen={Boolean(this.state.itemToDelete)}*/}
          {/*success={this.onOk}*/}
          {/*close={this.onClose}*/}
          {/*text='My modal text'*/}
        {/*/>*/}
      </div>
    );
  }
}

export default ItemWrapper;
