import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';



class FavoritesItem extends Component {


    setCategory = () => {
        console.log('clicked on select');
        
    }

    handleChange = (event) => {

        console.log(`changing select on gif id: ${this.props.gifObject.id} to category: ${event.target.value}` );

        this.props.dispatch({
            type: 'PUT_CAT',
            payload: {gifID: this.props.gifObject.id, categoryID: event.target.value}
        })
        
        
        
    }

    render() {
        let categories = this.props.reduxStore.categoryReducer.map((category) => {
            return (<MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)
        })


        return (
            <div key={this.props.gifObject.index}>  
            {/* {JSON.stringify(this.props.reduxStore.categoryReducer)} */}
            <img src={this.props.gifObject.img_link} alt="gif item" /> 
                <form onSubmit={this.setCategory}>
                    <FormControl variant="filled" >
                        <InputLabel >Category</InputLabel>
                        <Select
                            value={this.props.gifObject.category_id ? this.props.gifObject.category_id : "null"}
                            onChange={this.handleChange}
                            // input={<Input name="this.props.optionTexts.name}" id="this.props.optionTexts.name}" />}
                            autoWidth
                        >
                            <MenuItem value="null">
                                untagged
                            </MenuItem>
                            {categories}

                            {/* <MenuItem value={1}>funny</MenuItem>
                            <MenuItem value={2}>polybius</MenuItem>
                            <MenuItem value={3}>oregon</MenuItem>
                            <MenuItem value={4}>goat</MenuItem>
                            <MenuItem value={5}>burrito</MenuItem>
                            <MenuItem value={6}>orca</MenuItem>
                            <MenuItem value={7}>organs</MenuItem> */}
                        </Select>
                    </FormControl>
                   

                </form>

            </div>

        );
    }

}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(FavoritesItem);
