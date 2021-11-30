import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormText,
} from "@coreui/react";
import { getFirestore } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { CartContext } from "../../context/CartContext";
import "./PurchaseForm.css";

const UserForm = () => {
  const { items, clear, totalPrice } = useContext(CartContext);
  const [validated, setValidated] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderCreatedId, setOrderCreatedId] = useState(null);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const newItems = items.map(({ item, count }) => ({
    item: {
      id: item.id,
      title: item.title,
      price: item.price,
    },
    count,
  }));
  const newOrder = {
    buyer: data,
    items: newItems,
    total: totalPrice().toFixed(2),
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };

  const sendOrder = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    setValidated(true);

    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();

    orders
      .add(newOrder)
      .then(({ id }) => {
        items.forEach(({ item, count }) => {
          const docRef = db.collection("items").doc(item.id);
          batch.update(docRef, { stock: item.stock - count });
        });
        batch.commit();
        setOrderCreatedId(id);
      })
      .catch((error) => console.log(error));

    e.target.reset();
  };

  return (
    <CContainer className="formContainer">
      <CForm
        className="needs-validation"
        validated={validated}
        onSubmit={sendOrder}
      >
        <div className="mb-3">
          <CFormLabel htmlFor="name">Nombre y Apellido</CFormLabel>
          <CFormInput
            type="text"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Juan Perez"
            onChange={handleOnChange}
            required
          />
          <CFormText id="nameHelp">
            Ingrese su nombre y apellido completos.
          </CFormText>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="email">Email</CFormLabel>
          <CFormInput
            type="email"
            id="email"
            aria-describedby="emailHelp"
            placeholder="juanperez@correo.com"
            onChange={handleOnChange}
            required
          />
          <CFormText id="nameHelp">Ingrese email válido.</CFormText>
        </div>
        <div className="mb-3">
          <CFormLabel htmlFor="phone">Teléfono</CFormLabel>
          <CFormInput
            type="tel"
            id="phone"
            aria-describedby="phoneHelp"
            onChange={handleOnChange}
            required
          />
          <CFormText id="nameHelp">
            Ingrese un número telefónico de contacto.
          </CFormText>
        </div>
        <div>
          <CButton type="submit">Confirmar pedido</CButton>
        </div>
        {orderCreatedId && (
          <CContainer className="confirmed">
            <h2>Pedido Confirmado</h2>
            <p>
              Su pedido por un total de $ {totalPrice().toFixed(2)}, ha sido
              registrado bajo el ID:
            </p>
            <h4> {orderCreatedId}</h4>
            <Link to="/">
              <CButton color="info" onClick={clear}>
                Volver
              </CButton>
            </Link>
          </CContainer>
        )}
      </CForm>
    </CContainer>
  );
};

export default UserForm;
