const Card = ({ children }) => {
  return (
    <div className="pageDiv">
      <div className="cardWrapper">
        <article className="pageCard">{children}</article>
      </div>
      <style jsx>{`
        .pageDiv {
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
          max-width: 1720px;
          margin: 20px auto;
        }
        .cardWrapper {
          background: darkgray;
          padding: 4px;
          border-radius: 20%;
          grid-column: 2;
          max-width: 980px;
        }
        .pageCard {
          background: #222;
          color: white;
          padding: 4rem;
          border-radius: 20%;
        }
        @media only screen and (max-width: 1025px) {
          .pageDiv {
            grid-template-columns: 5% 90% 5%;
          }
          .pageCard {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;
