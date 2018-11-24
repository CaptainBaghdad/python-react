import React from 'react';
import {Route } from 'react-router-dom';
import StockList from './containers/StockListView';
import StockDetailView from './containers/StockDetailView';

const BaseRouter = () => {
   return ( <div> 
        <Route exact path='/' component={StockList} />
        <Route exact path='/:stockID' component={StockDetailView}/>
        
        </div>
   )
}

export default BaseRouter;