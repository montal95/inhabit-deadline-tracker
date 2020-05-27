import Layout from "../components/Layout";
import Card from "../components/Card";

import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
  }
`;

const Home = ({ initialFirstName }) => {
  const { data, loading, error } = useQuery(HELLO_QUERY);
  if (loading) return <div />;

  return (
    <Layout pageTitle="Inhabit - Home">
      <Card>
        <h1>
          This Is Keeping Up
          <br />
          Made easy
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur
          corporis quaerat voluptatum eos tempora temporibus nisi voluptates
          sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde
          reprehenderit ea molestias.
        </p>

        <style jsx>{`
          h1 {
            margin: 15px 0;
            font-size: 3rem;
            font-weight: bolder;
          }
          p {
            margin: 10px 0;
          }
        `}</style>
      </Card>
    </Layout>
  );
};

export default withApollo(Home);
