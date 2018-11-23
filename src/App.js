import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';
import StockList from './containers/StockListView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <CustomLayout>
        <StockList />
        </CustomLayout>
       
      </div>
    );
  }
}

export default App;
