const initialState = {
    sections: [
        { id: 1, title: 'HATS', linkUrl: '/hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png' },
        { id: 2, title: 'JACKETS', linkUrl: '/jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png' },
        { id: 3, title: 'SNEAKERS', linkUrl: '/sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
        { id: 4, title: 'WOMENS', linkUrl: '/womens', size: 'large', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png' },
        { id: 5, title: 'MENS', linkUrl: '/mens', size: 'large', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png' }
    ]
}

const directoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;