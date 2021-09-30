import React, { Component } from 'react';
import ChartRow from './ChartRow';


class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    };

    async componentDidMount() {

        try {


            let pedidoUsers = await fetch('http://localhost:3001/api/users/').then(response => response.json())

            console.log(pedidoUsers);

            this.setState({
                users: pedidoUsers.users,

            });


           

        } catch (e) { console.log(e) };

    }

    render() {

        return (
            /* <!-- DataTales Example --> */
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Firstname</th>
                                    <th>Email</th>
                                    <th>detail</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Id</th>
                                    <th>Firstname</th>
                                    <th>Email</th>
                                    <th>detail</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    this.state.users === [] && <p>Cargando...</p>
                                }
                                {
                                    this.state.users.map((user, i) => {

                                        return <ChartRow
                                            key={user + i}
                                            id={user.id}
                                            firstname={user.name}
                                            email={user.email}
                                            detail={user.detail}

                                        />

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}


export default Chart;