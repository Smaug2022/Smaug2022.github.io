import { db } from "../config/firebase.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

let registros = [];

export const getRegistros = async (req, res, next) => {
  const registrosSnapshots = await getDocs(collection(db, "calculadora"));
  registros = registrosSnapshots.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  res.status(201).json(registros);
};

export const postRegistros = async (req, res, next) => {
  const registro = req.body;
  const date = new Date();
  const dia = date.getDate();
  const mes = date.getMonth() + 1;
  const anio = date.getFullYear();
  const fechaHoy = `${dia}/${mes}/${anio}`;
  let time =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  try {
    const docRef = await addDoc(collection(db, "calculadora"), {
      calculo: registro.calculo,
      fecha: fechaHoy,
      hora: time,
    });
    res.status(201).json("Registro añadido exitosamente en la bitacora");
  } catch (error) {
    res.status(500).json(error);
  }
};
