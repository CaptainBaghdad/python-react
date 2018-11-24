import React from 'react';
import  Stock  from '../components/Stock';
import {Card} from 'antd';
//import axios from 'axios';



class StockDetailView extends React.Component{
state = {
    stock: {}
}

componentDidMount(){
    const stockID = this.props.match.params.stockID;
    fetch(`http://localhost:8000/api/${stockID}`)
    .then(res => res.json())
    .then(data =>{
        //console.log(data[0].name)
        this.setState({
            stock: data

        })
    })
   
}

    render (){
        return (
            <Card name={this.state.stock.name}>
                <p>{this.state.stock.email}</p>
            </Card>
            
        )
    }

}

export default StockDetailView;