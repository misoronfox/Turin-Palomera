import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidjet from "./CartWidjet.jsx";
import { getAllCategories } from "../Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbarra = () => {
	const [categories, setCategories] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		let mounted = true;

		getAllCategories().then((categories) => {
			if (mounted) {
				setCategories(categories);
			}
		});
		return () => (mounted = false);
	}, []);
	return (
		<Navbar className="NavBar row ">
			<Container className="container">
				<Navbar.Brand href="/">
					<img
						alt="Turin logo"
						src="https://i.imgur.com/GcktedB.png"
						width="60"
						height="60"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>

				<Nav className="col-8 ">
					{categories.map((category) => (
						<Nav.Link
							key={category}
							className="NavDropDownItem col"
							onClick={() => navigate(`/category/${category}`)}
						>
							{category}
						</Nav.Link>
					))}
				</Nav>

				<div className="col-3">
					<form className=" row">
						<input
							className="form-control col-2"
							type="text"
							id="search-bar"
							placeholder="Buscar"
							name="s"
						/>
						<button type="submit" className="col-1 btn btn-outline-primary">
							Search{" "}
						</button>
					</form>
				</div>
				<div className="col">
					<CartWidjet />
				</div>
			</Container>
		</Navbar>
	);
};

export default Navbarra;
