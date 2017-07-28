import React, { Component } from 'react';

export default class VideoItem extends Component {
    goTo(url) {
        window.open(url);
    }
    render() {
        const { CHID, cover_url, title, video_count, total_views, collection_url}  = this.props.data;
        return (
            
            <div className="col-sm-6 col-md-4" key={CHID} style={this.props.style}>
                <div className="thumbnail">
                    <img src={cover_url} alt="..." />
                    <div className="caption">
                        <h3>{title}</h3>
                        <p>จำนวน {video_count} vdo</p>
                        <p>ยอดชม {total_views} vdo</p>
                        <p>
                            <a className="btn btn-primary btn-sm" role="button" onClick={() => this.goTo(collection_url)}>ดู Collectionsนี้ </a> 
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}