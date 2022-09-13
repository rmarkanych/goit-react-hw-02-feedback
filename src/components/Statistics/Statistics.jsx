const Statistics = ({ bad, good, neutral, total, positivePercentage }) => {
  return (
    <>
      <div>
        <p>
          Good: <span>{good}</span>
        </p>
      </div>
      <div>
        <p>
          Neutral: <span>{neutral}</span>
        </p>
      </div>
      <div>
        <p>
          Bad: <span>{bad}</span>
        </p>
      </div>
      <div>
        <p>
          Total: <span>{total}</span>
        </p>
      </div>
      <div>
        <p>
          Positive feedback: <span>{positivePercentage}</span>
        </p>
      </div>
    </>
  );
};

export default Statistics;
