import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../Components/collection-item/collection-item.component';

import './collection.styles.scss';
import SeachBox from '../../Components/search/search.component';

const CollectionPage = ({ collection }) => {
    const [searchField, setSearchField] = useState('');
    const { title, items } = collection;

    const handleChange = (e) => {
        setSearchField(e.target.value);
    }

    const searchItems = items.filter(item => item.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
        <div className='collection-page'>
            <SeachBox placeholder='Search' handleChange={handleChange} />
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {searchItems.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state, { match: { params: { collectionId } } }) => ({
    collection: selectCollection(collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);