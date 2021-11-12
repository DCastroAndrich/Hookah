import { CCard, CCardGroup, CCol } from "@coreui/react";
import React from "react";
import { Link } from "react-router-dom";
import Item from "../item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <CCardGroup className="justify-content-center">
      {items.map((item) => {
        return (
          <CCol sm={2} key={item.id}>
            <CCard className="itemListCard" key={item.id}>
              <Link to={`/item/${item.id}`} style={{ textDecoration: "none" }}>
                <Item
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  pictureUrl={item.pictureUrl}
                />
              </Link>
            </CCard>
          </CCol>
        );
      })}
    </CCardGroup>
  );
};

export default ItemList;
