import React from 'react';
import './search-panel.css';

class SearchPanel extends React.Component {
    state = {
        term: ''
    };
    onSearch = (e) => {
       const term = e.target.value;
       this.setState({term});
       this.props.onSearch(term);
    };

    render() {
        return (
            <input type="text"
                   onChange={this.onSearch}
                   value={this.state.term}
                   className="form-control search-input"
                   placeholder="type to search"/>
        );
    }
}

export default SearchPanel;