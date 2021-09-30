import React from 'react';

import '../../App2.css'
import './TopBar.css'

function TopBar() {

	let dashboardTdG = <p className="title-dashboard">DASHBOARD TIERRA DE GENIOS</p>

	return (
		<React.Fragment>
			{/*<!-- Topbar -->*/}
			<div id="div-wrap">
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						{/*<!-- Nav Item - Alerts -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block" id="topbarDivider"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow" id="box-title-dashboard-tdg">
							{dashboardTdG}
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}
			</div>

		</React.Fragment>
	)
}
export default TopBar;