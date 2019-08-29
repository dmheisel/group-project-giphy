import React, { Component } from 'react';

class Favorites extends Component {
    returnToSearch = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <button onClick={this.returnToSearch}>Search</button>
            </div>
        )
    }
}

export default Favorites;