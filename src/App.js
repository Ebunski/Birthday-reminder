import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [birthdays, setBirthdays] = useState(data);
  const number = birthdays.length;

  function handleClear() {
    setBirthdays([]);
  }
  return (
    <main>
      <section className="container">
        <h2>{`${number} birthdays today`}</h2>
        <List data={birthdays} />
        <button onClick={handleClear}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
