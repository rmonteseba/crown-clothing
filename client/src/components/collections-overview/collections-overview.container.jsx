import {connect} from "react-redux";

import {compose} from "redux";
import {createStructuredSelector} from "reselect";
import {selectIsColectionFetching} from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsColectionFetching,
})

const CollectionsOverviewContainer =compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer