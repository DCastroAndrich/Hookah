import { cilCheckCircle } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CAlert,
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CFormText,
} from "@coreui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";

const UserForm = ({ items, total, clear }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderCreatedId, setOrderCreatedId] = useState(null);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const sendOrder = (e) => {
    e.preventDefault();

    const newItems = items.map(({ item, count }) => ({
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
      },
      count,
    }));
    const newOrder = {
      buyer: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
      items: newItems,
      total,
    };

    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();

    orders
      .add(newOrder)
      .then((response) => {
        items.forEach(({ item, count }) => {
          const docRef = db.collection("items").doc(item.id);
          batch.update(docRef, { stock: item.stock - count });
        });
        batch.commit();
        setOrderCreatedId(response.id);
      })
      .catch((error) => console.log(error));

    e.target.reset();
  };

  return (
    <CContainer>
      <CForm onSubmit={sendOrder}>
        <div className="mb-3">
          <CFormLabel htmlFor="name">Nombre y Apellido</CFormLabel>
          <CFormInput
            type="text"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Juan Perez"
            onChange={handleOnChange}
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
          />
          <CFormText id="nameHelp">
            Ingrese un número telefónico de contacto.
          </CFormText>
        </div>
        <div>
          <CButton type="submit">Confirmar pedido</CButton>
        </div>
        {orderCreatedId && (
          <CAlert color="success" className="d-flex align-items-center">
            <CIcon
              icon={cilCheckCircle}
              className="flex-shrink-0 me-2"
              width={24}
              height={24}
            />
            <div>
              <h3>Pedido Confirmado</h3>
              <p>
                Su pedido por un total de $ {total}, ha sido registrado bajo el
                ID: {orderCreatedId}
              </p>
              <Link to="/">
                <CButton color="info" onClick={clear}>Volver</CButton>
              </Link>
            </div>
          </CAlert>
        )}
      </CForm>
    </CContainer>
  );
};

export default UserForm;
