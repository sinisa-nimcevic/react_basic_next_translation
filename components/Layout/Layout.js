import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-grid-system";
import Header from "components/Header/Header";

const Layout = props => {
	return (
		<Container>
			<Row>
				<Col>
					<Header />
				</Col>
			</Row>
			<Row>
				<Col size="20">Layout added.</Col>
				<Col>{props.children}</Col>
			</Row>
		</Container>
	);
};

Layout.propTypes = {};

export default Layout;
