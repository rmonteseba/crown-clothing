import {createSelector} from "reselect";

const selectShop = state => state.shop

export const selectCollections = createSelector(selectShop, (shop) => shop.collections)

export const selectCollection = collectionUrlParam => createSelector(
    selectCollections, collections => collections ? collections[collectionUrlParam] : []
)

export const selectIsColectionFetching = createSelector(selectShop, shop => shop.isFetching)

export const selectIsColectionsLoaded = createSelector(
    selectShop, shop => !!shop.collections
)