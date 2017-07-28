import React, { Component } from 'react';
import { fetchCategories } from '../actions/categories';
import { connect } from 'react-redux';

class ListCategories extends Component {
    componentDidMount() {
        this.props.fetchCategories();

    }

    
    render() {
        if (!this.props.categories) {
            return (
                <div>Loading...</div>
            );
        }
        return(
            <div className="list-group" style={this.props.style}>
              {this.props.categories.data.map( ({CHID, category_url, cover_url, name, shortname, slug, total_videos }) => (
                  <a className="list-group-item" key={CHID}>
                      {name}
                      <span className="badge">{total_videos}</span>
                    </a>
              ))}
            </div>
        );
        
    }
}

export default connect(state => ({
    categories: state.categorires
}), { fetchCategories })(ListCategories);