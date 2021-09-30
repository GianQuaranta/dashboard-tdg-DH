import React, { Component } from 'react';

import Image from '../default.png';


class LastMovieInDb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            privileges: []
        }
    };

    async componentDidMount() {

        try {

            let pedidoProducts = await fetch('http://localhost:3001/api/products/').then(response => response.json())

            this.setState({
                products: pedidoProducts.data,
                lastProductName: pedidoProducts.data[pedidoProducts.data.length - 1].name,
                lastProductId: pedidoProducts.data[pedidoProducts.data.length - 1].id,

            });

            console.log("acá", pedidoProducts.data);

            
            let id = this.state.lastProductId;

            console.log("id",id);

            let pedidoProductsDetail = await fetch('http://localhost:3001/api/products/'+ id).then(response => response.json())

            console.log('url', `http://localhost:3001/api/products/${id}`);
            
            console.log("pedidoProductsDetail",pedidoProductsDetail);

            this.setState({
                product: pedidoProductsDetail.detail[0],
                lastProductName: pedidoProductsDetail.detail[0].name,
                image: pedidoProductsDetail.detail[0].image,
                privileges: pedidoProductsDetail.detail[0].info_category.privileges
            });

            console.log("acá detail", this.state.privileges);




        } catch (e) { console.log(e) }


    };



    render() {


        return (

            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
                        <h5 className="m-0 font-weight-bold text-gray-800">Name: {this.state.lastProductName}
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 20 + 'rem' }} src={Image} alt=" Imagen último producto añadido" />
                        </div>
                       
                        {
                            this.state.privileges === [] && <p>Cargando...</p>
                        }
                        {
                            this.state.privileges.map(priv => <li>{priv.privilege}</li>)
                        }


                    </div>
                </div>
            </div>
        )
    }
}

export default LastMovieInDb;
