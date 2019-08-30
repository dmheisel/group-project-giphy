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
				<h1>Untagged Gifs</h1>
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
			if (
				this.props.favorites.filter(gif => gif.category_id === category.id)
					.length === 0
			) {
				return null; //if there are no gifs in this category, return null and move on
      } else {
        //if there are gifs in category, do this
				let categoryGifs = this.props.favorites
					.filter(gif => gif.category_id === category.id)
					.map(gif => {
						//filter to get only matching categories, maps over each gif in category and returns a favorites item component for each
						return <FavoritesItem gifObject={gif} key={gif.id} />;
					});
        return (
          //returns a div with the category name and the gifs in the category
					<div key={index}>
						<h1>{category.name.toUpperCase()}</h1>
						{categoryGifs}
					</div>
				);
			}
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
