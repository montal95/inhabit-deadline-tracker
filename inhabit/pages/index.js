import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Inhabit - Home">
      <div className="homeDiv">
        <div className="homeCardWrapper">
          <article className="homeCard">
            <h1>
              Keeping Up
              <br />
              Made easy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              pariatur corporis quaerat voluptatum eos tempora temporibus nisi
              voluptates sed, exercitationem sequi dolore culpa incidunt
              accusamus, quasi unde reprehenderit ea molestias.
            </p>
          </article>
        </div>
      </div>
      <style jsx>{`
        .homeDiv {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          max-width: 1720px;
          margin: 20px auto;
        }
        .homeCardWrapper {
          background: linear-gradient(45deg, green, cyan);
          padding: 8px;
          border-radius: 32% 30%;
          grid-column: 2;
          max-width: 980px;
        }
        .homeCard {
          background: #222;
          color: white;
          padding: 2rem;
          border-radius: 32% 30%;
        }
        .homeCard h1 {
          margin: 15px 0;
          font-size: 3rem;
          font-weight: bolder;
        }
        .homeCard p {
          margin: 10px 0;
        }
        @media only screen and (max-width: 1025px) {
          .homeDiv {
            grid-template-columns: 5% 90% 5%;
          }
        }
      `}</style>
    </Layout>
  );
}
