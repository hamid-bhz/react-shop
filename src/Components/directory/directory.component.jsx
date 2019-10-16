import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                { id: 1, title: 'HATS', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png' },
                { id: 2, title: 'JACKETS', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png' },
                { id: 3, title: 'SNEAKERS', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
                { id: 4, title: 'WOMENS', size: 'large', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png' },
                { id: 5, title: 'MENS', size: 'large', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png' }
            ]
        }
    }

    render() {
        const sections = this.state.sections.map(section =>
            <MenuItem key={section.id} {...section} />
        );
        return (
            <div className='directory-menu'>
                {sections}
            </div>
        );
    }
}

export default Directory;