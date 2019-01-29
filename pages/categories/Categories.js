import ItemWrapper from '../../components/ItemWrapper';
import {connect} from 'react-redux';
import {getCategories, updateCategories} from "../../store/categories";

class Categories extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
  }


  updateCategories = (title, id) =>{
    const category = this.props.categories.find(category => category.id === id);
    category.title = title;
    this.props.dispatch(updateCategories(category))
  };

  unPublishCategory = (id) => {
    const category = this.props.categories.find(category => category.id === id);
    category.published = false;
    this.props.dispatch(updateCategories(category))
  };

  publishCategory = (id) => {
    console.log(id);
    const category = this.props.categories.find(category => category.id === id);
    category.published = true;
    this.props.dispatch(updateCategories(category));
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
          removeItem={this.unPublishCategory}
          publishItem={this.publishCategory}
        />
      </div>
    );
  }
};

const mapState = (state) => ({
  categories: state.categories
});

export default connect(mapState)(Categories);
