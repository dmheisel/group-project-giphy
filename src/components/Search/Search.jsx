import React, {Component} from 'react';
import { connect } from 'react-redux';

class Search extends Component {
    state = {
        search: ''
    }

    handleChange = (event) => {
        console.log('typing in input!');
        this.setState({
            search: event.target.value
        })
    }

    newSearch = (event) => {
        event.preventDefault();
        console.log('clicked on Submit!!', this.state);
        this.props.dispatch({
            type: 'FETCH_SEARCH',
            payload: this.state
        })
        this.setState({
            search: ''
        })
    }

    render() {
        return (
            <div>
                <h1>Giphy Search!</h1>
                <form onSubmit={this.newSearch}>
                    <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="enter search terms" />
                    <input type="submit" value="Search for gifs!" />
                </form>
                <div>
                {/* spit search items here! */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Search);