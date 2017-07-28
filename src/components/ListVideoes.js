import React, { Component } from 'react';
import { fetchVideoes } from '../actions/videoes';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';

class ListVideoes extends Component {
    componentDidMount() {
        this.props.fetchVideoes();
    }

    
    render() {
        if (!this.props.videoes) {
            return (
                <div>Loading...</div>
            );
        }
        return(
            <div style={this.props.style}>
                <h2 className="page-title">Collections</h2>

              {this.props.videoes.data.map(data=> (
                  <VideoItem key={data.id} data={data}/>
              ))}
            </div>
        );
        
    }
}

export default connect(state => ({
    videoes: state.videoes
}), { fetchVideoes })(ListVideoes);