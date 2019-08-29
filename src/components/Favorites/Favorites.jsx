import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
class Favorites extends Component {
    returnToSearch = () => {
        this.props.history.push('/')
    }
    render() {
        return (
          <div>
            <Button
    
              variant="contained"
              color="primary"
              onClick={this.returnToSearch}
            >
              Search<HomeTwoToneIcon />
            </Button>
          </div>
        );
    }
}

const mapStateToProps = (reduxStore) => {
    return {
         reduxStore
    }
}

export default connect(mapStateToProps)(Favorites);