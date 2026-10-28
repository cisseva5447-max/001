function Competences() {
  const liste = ["HTML / CSS", "JavaScript", "Réseaux", "Bases de données", "Administration système"];

  return (
    <section>
      <h2>Compétences</h2>
      <ul>
        {liste.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

export default Competences;              