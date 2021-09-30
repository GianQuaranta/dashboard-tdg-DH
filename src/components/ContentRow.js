import React, { Component } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Total productos en DB --> */

let totalProducts = {
    title: 'Total Products',
    color: 'primary',
    cuantity: 0
}

/* <!-- Total Bronce --> */

let totalBronce = {
    title: ' Total Bronce',
    color: 'success',
    cuantity: 0
}

/* <!-- Total Plata --> */

let totalPlata = {
    title: 'Total Plata',
    color: 'warning',
    cuantity: 0
}

/* <!-- Total Oro --> */

let totalOro = {
    title: 'Total Oro',
    color: 'success',
    cuantity: 0
}

/* <!-- Total Users --> */

let totalUsers = {
    title: 'Total Users',
    color: 'primary',
    cuantity: 0
}

let totales = [totalProducts, totalBronce, totalPlata, totalOro, totalUsers];

class ContentRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    };

    async componentDidMount() {

        try {


            let pedidoProducts = await fetch('http://localhost:3001/api/products/').then(response => response.json())

            this.setState({
                products: pedidoProducts.data,
                productsCount: pedidoProducts.count,
                totalBronce:pedidoProducts.countByCategory.bronce,
                totalPlata:pedidoProducts.countByCategory.plata,
                totalOro: pedidoProducts.countByCategory.oro

            });

            //console.log("acá", this.state.productsCount);
            //console.log("bronce", this.state.totalBronce);
            //console.log("plata", this.state.totalPlata);
            //console.log("oro", this.state.totalOro);



            let pedidoUsers = await fetch('http://localhost:3001/api/users/').then(response => response.json())

            //console.log("pedidoUsers", pedidoUsers);

            this.setState({
                allUsers: pedidoUsers,
                allUsersCount: pedidoUsers.count
            });

            //console.log("allUsers", this.state.allUsers);
            //console.log("allUsersCount", this.state.allUsersCount);
            
            



        } catch (e) { console.log(e) }


    };



    render() {






        return (

            <div className="row">

            <SmallCard title={totalProducts.title} color={totalProducts.color} cuantity={this.state.productsCount} />
            <SmallCard title={totalBronce.title} color={totalBronce.color} cuantity={this.state.totalBronce}/>
            <SmallCard title={totalPlata.title} color={totalPlata.color} cuantity={this.state.totalPlata} />
            <SmallCard title={totalOro.title} color={totalOro.color} cuantity={this.state.totalOro}/>
            <SmallCard title={totalUsers.title} color={totalUsers.color} cuantity={this.state.allUsersCount}/>
            

                

            </div>
        )
    }
}

export default ContentRow;