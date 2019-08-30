import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import FavoritesItem from '../FavoritesItem/FavoritesItem';

class Favorites extends Component {
	componentDidMount() {
		this.getFavorites();
		this.props.dispatch({ type: 'SET_CAT' });
	}

	getFavorites = () => {
		this.props.dispatch({ type: 'FETCH_FAVS' });
	};

	returnToSearch = () => {
		this.props.history.push('/');
	};
	render() {
		//returns a list with every gif with NULL as a category ID
		let noCategoryList = (
			<div>
				<h3>Untagged Gifs</h3>
				{this.props.favorites
					.filter(gif => gif.category_id === null)
					.map(gif => {
						return <FavoritesItem gifObject={gif} key={gif.id} />;
					})}
			</div>
		);

		//returns a div with a list for each category and their respective gifs
		let categoryLists = this.props.categories.map((category, index) => {
			//map over categories
			let categoryGifs = this.props.favorites
				//filter favorites list to only those with matching category id
				.filter(gif => gif.category_id === category.id)
				.map(gif => {
					//maps over each gif in category and returns a favorites item comp for each
					return <FavoritesItem gifObject={gif} key={gif.id} />;
				});
			//return each this for each category
			return (
				<div key={index}>
					<h3>{category.name}</h3>
					{categoryGifs}
				</div>
			);
		});

		return (
			<div>
				<Button
					variant='contained'
					color='primary'
					onClick={this.returnToSearch}>
					Search
					<HomeTwoToneIcon />
				</Button>
				{noCategoryList}
				{categoryLists}
			</div>
		);
	}
}

const mapStateToProps = reduxStore => {
	return {
		favorites: reduxStore.favoriteReducer,
		categories: reduxStore.categoryReducer
	};
};
export default connect(mapStateToProps)(Favorites);
