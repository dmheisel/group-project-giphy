import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import SearchItem from '../SearchItem/SearchItem';
//material-ui imports
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper
	},
	gridList: {
		width: 'auto',
		height: 'auto'
	}
});

class Search extends Component {
	state = {
		search: ''
    };
    
    toFavorites = () => {
        this.props.history.push('/favorites')
    }

    handleChange = (event) => {
        console.log('typing in input!');
        this.setState({
            search: event.target.value
        })
    }


	newSearch = event => {
		event.preventDefault();
		console.log('clicked on Submit!!', this.state);
		this.props.dispatch({
			type: 'FETCH_SEARCH',
			payload: this.state
		});
		this.setState({
			search: ''
		});
	};

	render() {
		let images = this.props.reduxStore.searchReducer.map((object, index) => {
			return (
				<GridListTile key={index} cols={1} rows={1}>
					<SearchItem gifObject={object} />
				</GridListTile>
			);
		});


		const { classes } = this.props;
		return (
			<div>
				<h1>Giphy Search!</h1>{' '}
				<Button variant='contained' color='primary'>
					Favorites
					<StarIcon />
				</Button>
				<form onSubmit={this.newSearch}>
					<input
						type='text'
						value={this.state.search}
						onChange={this.handleChange}
						placeholder='enter search terms'
					/>
					<input type='submit' value='Search for gifs!' />
				</form>
				<div className={classes.root}>
					<GridList
						cols={3}
						cellHeight={200}
						spacing={4}
						className={classes.gridList}>
						{images}
					</GridList>
				</div>
			</div>
		);
	}
}

const mapStateToProps = reduxStore => {
	return {
		reduxStore
	};
};

export default connect(mapStateToProps)(withStyles(styles)(Search));
