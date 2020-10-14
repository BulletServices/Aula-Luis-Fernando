import React from "react";
import "./bootstrap.css"
import "./App.css";
import firebase from "./firebase";
import { SpellInput } from "./SpellInput";

function App() {
  const [textos, setTextos] = React.useState([]);
  const [newTextoName, setNewTextoName] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("textos").get();
      setTextos(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("textos").add({ name: newTextoName });
  };

  return (
    <div class="primeira-div">
    <ol>
      <input class="primeiro-input"
        value={newTextoName}
        onChange={e => setNewTextoName(e.target.value)}
      />
      <button class="botao_enviar"
       onClick={onCreate}>Enviar Texto</button>
      {textos.map(texto => (
        <li key={texto.name}>
          <SpellInput texto={texto} />
        </li>
      ))}
    </ol>
    </div>
  );
}

export default App;
