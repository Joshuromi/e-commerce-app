import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collectionsOverview";
import CategoryPage from "../category/categoryPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
