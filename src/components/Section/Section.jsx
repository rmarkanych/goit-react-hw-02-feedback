const Section = ({ wrapper, children }) => {
  return (
    <section>
      <h2>{wrapper}</h2>
      {children}
    </section>
  );
};

export default Section;
