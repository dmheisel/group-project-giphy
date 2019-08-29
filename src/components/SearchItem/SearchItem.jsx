import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui imports
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const styles = theme => ({
	image: {
		height: '100%',
		width: 'auto',
		objectFit: 'cover'
	}
});
class SearchItem extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<img
					src={this.props.gifObject.images.fixed_height.url}
					alt='gif item'
				/>
				<Fab>
					<IconButton>
						<StarBorderIcon />
					</IconButton>
				</Fab>
			</div>
		);
	}
}

export default connect()(withStyles(styles)(SearchItem));
