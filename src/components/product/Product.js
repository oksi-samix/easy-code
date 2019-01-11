import React, {Component} from 'react';
import CustomeInput from '../customeInput';

// import './productPage.scss'

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

  changeVal = (value, name) => {
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }

    });
  };

  render() {
    const {data} = this.state;
    return (
      <div className="product">
        <h2>TITLE :
          <CustomeInput
            value={data.title}
            name="title"
            changeVal={this.changeVal}
            onLoose={this.onLoose}/>
        </h2>
        <CustomeInput
          value={data.price}
          name="price"
          onLoose={this.onLoose}
          changeVal={this.changeVal}
        />
        <CustomeInput
          value={data.descr}
          name="descr"
          textarea={true}
          changeVal={this.changeVal}
          onLoose={this.onLoose}
        />
        <button>Save</button>

      </div>)
  }
}


export default Product;
