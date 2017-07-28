import React, { Component } from 'react';

import { connect } from 'react-redux';

class Search extends Component {
    state = {
        txt: ''
    }
    
    _handleChangeTxt = e => {
        if (e.target.value.length >= 3) {
            
        }
            
    }
    render() {
        return (
            <div className="input-group" style={this.props.style}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="ค้นหาหมวด เช่น uncen"  
                    onChange={this._handleChangeTxt} 
                />
                 <span className="input-group-addon" id="basic-addon2"><span className="glyphicon glyphicon-search"></span></span>
            </div>
        );
    }
}

export default connect(null, null)(Search);