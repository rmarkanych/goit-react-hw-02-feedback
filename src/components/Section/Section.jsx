const Section = ({ wrapper, children }) => (
  <section>
    <h2>{wrapper}</h2>
    {children}
  </section>
);

export default Section;
