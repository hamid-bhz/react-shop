import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionsSnapshopToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshop => {
            const collections = convertCollectionsSnapshopToMap(snapshop);
            updateCollections(collections);
        });
    }
    
    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={match.path} component={CollectionOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})

export default connect(null, mapDispatchToProps)(ShopPage);