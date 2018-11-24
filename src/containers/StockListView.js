import React from 'react';
import  Stock  from '../components/Stock';
//import axios from 'axios';



class StockList extends React.Component{
state = {
    stocks: []
}

componentDidMount(){
    fetch('http://localhost:8000/api/')
    .then(res => res.json())
    .then(data =>{
        console.log(data[0].name)
        this.setState({
            stocks:data

        })
    })
   
}

    render (){
        return (
            <Stock data={this.state.stocks}/>
        )
    }

}

export default StockList;