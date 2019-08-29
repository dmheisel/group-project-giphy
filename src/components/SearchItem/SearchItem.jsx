import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui imports
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarIcon from '@material-ui/icons/Star'

class SearchItem extends Component {

    render() {
        return (
            <div>
                <img src={this.props.gifObject.images.fixed_height.url} alt='gif item' />
            </div>


        )
    }

}

export default connect()(SearchItem);
