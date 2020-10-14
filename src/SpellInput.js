import React from "react";
import firebase from './firebase'

export const SpellInput = ({ texto }) => {
  const [name, setName] = React.useState(texto.name);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('textos').doc(texto.id).set({...texto, name})
  }

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('textos').doc(texto.id).delete()
  }

  return (
    <>
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <button class="botao_atualizar" onClick={onUpdate}>Atualizar</button>
      <button class="botao_apagar" onClick={onDelete}>Apagar</button>
    </>
  );
};
