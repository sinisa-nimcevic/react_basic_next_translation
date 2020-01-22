import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "i18n";

const __NaMe__ = ({ t }) => {
	return (
		<>
			<div>__NaMe__ with translation created.</div>
		</>
	);
};

__NaMe__.propTypes = {};

export default withTranslation("__name__")(__NaMe__);
