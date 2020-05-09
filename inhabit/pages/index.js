import Layout from "../components/Layout";
import HomeCard from "../components/HomeCard";

export default function Home() {
  return (
    <Layout pageTitle="Inhabit - Home">
      <HomeCard>
        <h1>
          Keeping Up
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
      </HomeCard>
    </Layout>
  );
}
