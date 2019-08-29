import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = (reduxStore) => {
    return {
         reduxStore
    }
}

export default connect(mapStateToProps)(Favorites);