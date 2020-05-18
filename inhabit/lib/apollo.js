import ApolloClient from "apollo-boost";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

export function withApollo(PageComponent) {
  const WithApollo = (props) => {
    const client = initApolloClient();
    return (
      <ApolloProvider client={client}>
        <PageComponent {...props} />
      </ApolloProvider>
    );
  };
  WithApollo.getInitialProps = async (context) => {
    const { AppTree } = context;
    const apolloClient = (context.apolloClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(context);
    }

    //if on server
    if (typeof window === "undefined") {
      if (context.res && context.res.finished) {
        return pageProps;
      }

      try {
        const { getDataFromTree } = await import("@apollo/react-ssr");
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient,
            }}
          />
        );
      } catch (error) {
        console.error(error);
      }

      Head.rewind();
    }
    
    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState,
    };
  };

  return WithApollo;
}

const initApolloClient = () => {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    fetch,
  });
  return client;
};
