import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



class FavoritesItem extends Component {

    setCategory = () => {
        console.log('clicked on select');
        
    }

    handleChange = () => {

        console.log('changing select');
        
    }

    render() {


        
        return (
            <div key={this.props.gifObject.index}>  
            <img src={this.props.gifObject.img_link} alt="gif item" /> 
                <form onSubmit={this.setCategory}>
                    <FormControl variant="filled" >
                        <InputLabel >Category</InputLabel>
                        <Select
                            value={"none"}
                            onChange={this.handleChange}
                            input={<Input name="this.props.optionTexts.name}" id="this.props.optionTexts.name}" />}
                            autoWidth
                        >
                            <MenuItem value="none">
                                <em></em>
                            </MenuItem>
                            <MenuItem value={1}>funny</MenuItem>
                            <MenuItem value={2}>polybius</MenuItem>
                            <MenuItem value={3}>oregon</MenuItem>
                            <MenuItem value={4}>goat</MenuItem>
                            <MenuItem value={5}>burrito</MenuItem>
                            <MenuItem value={6}>orca</MenuItem>
                            <MenuItem value={7}>organs</MenuItem>
                        </Select>
                    </FormControl>
                   

                </form>
            </div>

        );
    }

}

export default connect()(FavoritesItem);
