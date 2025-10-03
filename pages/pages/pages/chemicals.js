const harmfulChemicals = [
  { name: "Maltodextrin", risk: "High glycemic index, harmful for diabetics." },
  { name: "MSG (E621)", risk: "May cause headaches & allergic reactions." },
  { name: "Sodium Benzoate", risk: "Linked to hyperactivity & allergies." },
  { name: "Potassium Bromate", risk: "Banned in many countries, carcinogenic." },
];

export default function Chemicals() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>⚠️ Harmful Ingredients to Watch</h2>
      <ul>
        {harmfulChemicals.map((chem, i) => (
          <li key={i} style={{ margin: "10px 0" }}>
            <b>{chem.name}</b> → {chem.risk}
          </li>
        ))}
      </ul>
    </div>
  );
}
