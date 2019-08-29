import React, { Component } from 'react';
import {connect} from 'react-redux';

class SearchItem extends Component {

    render() {
        return (

                <div key={this.props.index}>
                    <img src={this.props.gifObject.images.fixed_height.url} alt="gif object" /> <button>FAV</button>
                </div> 

        );
    }

}

export default connect()(SearchItem);
