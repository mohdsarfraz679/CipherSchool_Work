import React, { Component } from 'react';
import './App.css';
import ShowItems from './components/showItems';
import { text } from '@fortawesome/fontawesome-svg-core';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
        text:'',
        key:'',
        edit : false,
        list : 'TO DO LIST'
    }
  }

  //for adding items on list
  addItems = (event) => {
    event.preventDefault();
    const newItem = {
      key : this.state.key,
      title : this.state.text
    }

    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
        text:'',
        key:'',
        edit : false
    })
    }
  }
