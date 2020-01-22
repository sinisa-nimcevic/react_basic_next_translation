import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

const __NaMe__WithoutData = ({ t }) => {
	return (
		<>
			<div>__NaMe__WithoutData with translation created.</div>
		</>
	);
};

__NaMe__WithoutData.propTypes = {};

export default withTranslation("__name__")(__NaMe__WithoutData);
