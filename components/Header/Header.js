import React from "react";
// import Link from "next/link";
// import PropTypes from "prop-types";
import { i18n, withTranslation, Link } from "i18n";

const Header = ({ t }) => {
	return (
		<>
			<div>
				Header created. <br />
				<button type="button" onClick={() => i18n.changeLanguage(i18n.language === "en" ? "hu" : "en")}>
					-flag- {i18n.language}
				</button>{" "}
				<br />
				{t("init")}
				<br />
				<br />
			</div>
			<Link href="/">
				<a>Home</a>
			</Link>
			&nbsp; | &nbsp;
			<Link href="/about">
				<a>About</a>
			</Link>
		</>
	);
};

// Header.propTypes = {
// };

export default withTranslation("header")(Header);
