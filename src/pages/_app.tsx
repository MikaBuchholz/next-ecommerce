import "~/styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import AppBar from "~/components/AppBar/AppBar";
import Footer from "~/components/Footer/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
