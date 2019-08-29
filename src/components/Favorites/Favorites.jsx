import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
class Favorites extends Component {

componentDidMount(){
    this.getFavorites()
}

getFavorites = () => {
    this.props.dispatch({ type: 'FETCH_FAVS'})
}

returnToSearch = () => {
    this.props.history.push('/')
}
    render() {
        let images = this.props.reduxStore.favoriteReducer.map((object, index) => {
            return (<div key={index}>  <img src={object.img_link} /> </div>)
        })
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
          
    }
}

const mapStateToProps = (reduxStore) => {
    return {
         reduxStore
    }
}

export default connect(mapStateToProps)(Favorites);