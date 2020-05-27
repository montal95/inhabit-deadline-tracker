import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import SigninForm from "../components/SigninForm";

const Layout = ({ children, pageTitle }) => {
  return (
    <div id="content">
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha256-gvEnj2axkqIj4wbYhPjbWV7zttgpzBVEgHub9AAZQD4="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Nav />
      <main>
        {children}
        {/* <SignupForm /> */}
        <SigninForm />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
