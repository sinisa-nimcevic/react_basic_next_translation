import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

const TestieTestWithoutData = ({ t }) => {
	return (
		<>
			<div>TestieTestWithoutData with translation created.</div>
		</>
	);
};

TestieTestWithoutData.propTypes = {};

export default withTranslation("testietest")(TestieTestWithoutData);
