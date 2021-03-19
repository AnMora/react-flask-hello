import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "../../styles/base_cards.scss";

export const Info_WithoutBase = () => {
	const { store, actions } = useContext(Context);

	return (
		<Container className="base_cards">
			<article className="text-light mt-1 mb-1">
				<p>
					Los cócteles sin alcohol están muchas veces destinados a conductores, mujeres embarazadas, niños,
					intolerantes al alcohol, etc. de manera que también puedan disfrutar de un buen cóctel sin correr
					riesgo alguno.
				</p>
			</article>
			<Row>
				{store.non_alcoholic.map((cocktail, index) => (
					<Col className="col-auto col-md-6" key={index}>
						<div className="mt-1 mb-1 d-flex justify-content-end text-center" id="base_cards1">
							<Image
								className="contentimg col-12 col-md-8"
								src={cocktail.strDrinkThumb}
								fluid
								id="WithoutBase"
							/>
							<div className="col-12 col-md-6" id="base_cards2">
								<Card className="Card text-light p-3">
									<blockquote className="blockquote mb-0 card-body">
										<p>{cocktail.strDrink}</p>
										<Link to={`/Cocktail_nonAlcohol/${index}`}>
											<Button variant="outline-success">Leer más..</Button>
										</Link>

										{/* <Link to="##"> 
										<Button variant="outline-warning">
											<i className="far fa-heart" />
										</Button>
										{/* </Link> */}
									</blockquote>
								</Card>
							</div>
						</div>
					</Col>
				))}
			</Row>
		</Container>
	);
};

//me equivoque
