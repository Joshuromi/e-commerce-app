import CollectionItem from "../../components/collection-item/collection-item";
import "./collectionPage.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.categoryId);
  return (
    <div className="category">
      <h2>Category Page</h2>
    </div>
  );
};

export default CollectionPage;
