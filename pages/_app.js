import "styles/main.scss";
import { appWithTranslation } from "i18n";

const MyApp = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
