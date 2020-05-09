const HomeCard = ({ children }) => {
  return (
    <div className="homeDiv">
      <div className="homeCardWrapper">
        <article className="homeCard">{children}</article>
      </div>
      <style jsx>{`
        .homeDiv {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          max-width: 1720px;
          margin: 20px auto;
        }
        .homeCardWrapper {
          background: darkgray;
          padding: 8px;
          border-radius: 20%;
          grid-column: 2;
          max-width: 980px;
        }
        .homeCard {
          background: #222;
          color: white;
          padding: 4rem;
          border-radius: 20%;
        }
        @media only screen and (max-width: 1025px) {
          .homeDiv {
            grid-template-columns: 5% 90% 5%;
          }
          .homeCard {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeCard;
