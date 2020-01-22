import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

const TestieTest = ({ t }) => {
	return (
		<>
			<div>TestieTest with translation created.</div>
		</>
	);
};

TestieTest.propTypes = {};

export default withTranslation("testietest")(TestieTest);
