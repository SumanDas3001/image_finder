import React, { Component } from 'react';
import {TextField, MenuItem, Select} from '@material-ui/core';
import axios from 'axios';
import ImageResults from '../image-results/ImageResults';

class Search extends Component {
  state = {
    searchText: '',
    amount: 5,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '14487045-b0b97daac637a54e27c57f801',
    images: [] 
  };

  onTextChange = (e) => {
    const val = e.target.value;
    this.setState({[e.target.name]: val }, () => {
      if (val === ''){
        this.setState({images: []})
      }else{
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err))
          }
      });
    };

  onAmountChange = (e, index, value) => this.setState({ amount: e.target.value });
  
  render(){
    console.log(this.state.images)
    return(
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          placeholder='Search For Images'
          fullWidth={true}
        />
        <br />

        <Select
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
        <br />
        {this.state.images.length > 0 ? (
          <ImageResults images={this.state.images} />
        ) : null }
      </div>
    );
  }
}

export default Search;