import React from "react";

import './collection-preview.styles.scss'

import CollectionItem from "../collection-item/collection-item.component";

const PREVIEW_LIMIT = 4

const CollectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .slice(0, PREVIEW_LIMIT)
                .map(({id, ...collectionItemProps}) => <CollectionItem key={id} {...collectionItemProps}/>)}
        </div>
    </div>
)

export default CollectionPreview
