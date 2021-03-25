import "../styles/globals.css";
import nextI18NextConfig from '../next-i18next.config.js'
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default appWithTranslation(MyApp, nextI18NextConfig);
