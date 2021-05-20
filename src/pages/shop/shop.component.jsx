import React from "react";
import shopData from '../../data/shop.json'
import './shop.styles.scss'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shopData}
    }

    render() {
        const {shopData} = this.state
        return (
            <div className="shop-page">
                {shopData.map((({id, ...collectionProps}) => <CollectionPreview key={id} {...collectionProps}/>))}
            </div>
        )
    }
}

export default ShopPage