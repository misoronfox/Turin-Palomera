import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidjet from "./CartWidjet.jsx";
import { getAllCategories } from "../services/Products.js";
import { useEffect, useState } from "react";

const Navbarra = () => {
	const [categories, setCategories] = useState([]);

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
			<Container>
				<Navbar.Brand href="/">
					<img
						alt=""
						src="/logo.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>{" "}
					Turin
				</Navbar.Brand>

				<Nav className="col-8 ">
					{categories.map((category) => (
						<Nav.Link
							className="NavDropDownItem"
							href={`/category/${category}`}
						>
							{category}
						</Nav.Link>
					))}
				</Nav>

				<div className="col-3">
					<form className=" row">
						<input
							className="form-control col"
							type="text"
							id="search-bar"
							placeholder="Buscar"
							name="s"
						/>
						<button type="submit" className="col btn btn-outline-primary">
							Search{" "}
						</button>
					</form>
				</div>
				<div className="col-1">
					<CartWidjet />
				</div>
			</Container>
		</Navbar>
	);
};

export default Navbarra;
