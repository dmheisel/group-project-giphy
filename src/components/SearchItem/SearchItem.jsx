import React, { Component } from 'react';
import { connect } from 'react-redux';
//material-ui imports
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
	},
	titleBar: {
		background:
			'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
			'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
	},
	icon: {
		color: 'rgb(255, 235, 59)'
	}
});
class SearchItem extends Component {
	state = {
		inFavs: false
	};
	componentDidMount() {
		this.setState({
			inFavs:
				this.props.favoritesList.findIndex(
					gif => gif.img_link === this.props.gifObject.images.fixed_height.url
				) >= 0
					? true
					: false
		});
	}

	handleFavoriteClick = event => {
		this.setState({ inFavs: !this.state.inFavs });
		if (this.state.inFavs === false) {
			this.props.dispatch({
				type: 'POST_FAV',
				payload: this.props.gifObject.images.fixed_height.url
			});
		} else {
			id = this.props.favoritesList.this.props.dispatch({
				type: 'REMOVE_FAV',
				payload: this.props.gifObject.images.fixed_height.url
			});
		}
	};

	render() {
		const { classes } = this.props;
		return (
			<div>
				<img
					src={this.props.gifObject.images.fixed_height.url}
					alt='gif item'
				/>
				<GridListTileBar
					className={classes.titleBar}
					actionIcon={
						this.state.inFavs ? (
							<IconButton onClick={this.handleFavoriteClick}>
								<StarIcon className={classes.icon} />
							</IconButton>
						) : (
							<IconButton onClick={this.handleFavoriteClick}>
								<StarBorderIcon className={classes.icon} />
							</IconButton>
						)
					}
				/>
			</div>
		);
	}
}

const mapStateToProps = reduxStore => ({
	favoritesList: reduxStore.favoriteReducer
});
export default connect(mapStateToProps)(withStyles(styles)(SearchItem));
