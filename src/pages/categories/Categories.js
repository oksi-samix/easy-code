import ItemWrapper from '../../components/ItemWrapper';
import {connect} from 'react-redux';
import {getCategories, updateCategories} from "../../store/categories";

class Categories extends Component {
  componentDidUpdate(prevProps) {
    this.props.dispatch(getCategories());
  }


  updateCategories = (title, id) => {
    const category = this.props.categories.find(catgory => category.id === id);
    category.title = title;
    this.props.dispatch(updateCategories(category))
  };


  render() {
    const {categories} = this.props;
    const isPublished = category => category.published;
    const isNotPublished = category => !category.published;
    return (
      <div>
        <h1>Categories</h1>
        <ItemWrapper
          leftItems={categories.filter(isPublished)}
          rightItems={categories.filter(isNotPublished)}
          onChangeLeftItem={this.updateCategories}
        />
      </div>
    );
  }
};

const mapState = (state) => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
