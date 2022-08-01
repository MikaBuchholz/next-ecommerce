import "~/styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import AppBar from "~/components/AppBar/AppBar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <AppBar />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
