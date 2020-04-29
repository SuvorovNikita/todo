import React from 'react';

import './item-status-filter.css';

class ItemStatusFilter extends React.Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {

        const {filter,onFilterChnage} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info': 'btn-outline-secondary';
            return (<button type="button"
                            onClick={()=>onFilterChnage(name)}
                            key={name}
                            className={`btn ${clazz}`}>{label}
            </button>)
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}


export default ItemStatusFilter;