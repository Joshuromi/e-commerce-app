import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview";
import "./collectionsOverview.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="colllection-overview">
    {collections.map(({ id, ...otherCollection }) => (
      <CollectionPreview key={id} {...otherCollection} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
