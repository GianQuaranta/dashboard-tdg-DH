import React, { Component } from 'react';

class LastMovieInDb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  };

  componentDidMount() {

    fetch('http://localhost:3050/api/products/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          products: data.data
        });

        console.log("acá",data.data);
      })
      .catch(e => { console.log(e); })

  };



  render() {

    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Products in Data Base
            </h5>
          </div>
          <div className="card-body">
            <div className="row">

              {
                this.state.products === [] && <p>Cargando...</p>
              }
              {
                this.state.products.map((each, i) => {

                  return  <div className="col-lg-6 mb-4" key={each + i}>
                            <div className="card bg-dark text-white shadow">
                              <div className="card-body">{each.name}</div>
                            </div>
                          </div>

                })

              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LastMovieInDb;
