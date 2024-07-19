import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { MdEditDocument } from "react-icons/md";
import Logout from "./Logout";
import './cssFiles/Sidebar.css';
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
	const {authUser}  = useAuthContext();

	return (
		<aside className="sidebar">
			<nav className="sidebar-nav">

				<Link to="/" className="sidebar-logo">
					<img className="logo-image" src="/logo.jpg" alt="Github Logo" />
				</Link>

				<Link to="/" className="sidebar-link">
					<IoHomeSharp size={20} />
				</Link>

				{authUser && (
					<Link to="/explore" className="sidebar-link">
						<MdOutlineExplore size={25} />
					</Link>
				)}

				{!authUser && (
					<Link to="/login" className="sidebar-link">
						<PiSignInBold size={25} />
					</Link>
				)}

				{!authUser && (
					<Link to="/signup" className="sidebar-link">
						<MdEditDocument size={25} />
					</Link>
				)}

				{authUser && (
					<div className="logout-container">
						<Logout />
					</div>
				)}
			</nav>
		</aside>
	);
};

export default Sidebar;




