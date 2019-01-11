import Product from '../../components/product';
import {getProducts} from '../../services'

class ProductPage extends Component {
  state = {product: {}};

  componentDidMount() {
    console.log(this.props.match.params.id);
    getProducts(this.props.match.params.id).then(data => this.setState({product: data}))
  }

  render() {
    return (
      <div>
        I am product page
        {this.state.product && this.state.product.title && <Product data={this.state.product}/>}
      </div>
    )

  }
}


export default ProductPage;
