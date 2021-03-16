import { connect } from "react-redux";
// import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";
import "./collectionPage.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection">
      <h2>Collection Page</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
