import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CContainer } from "@coreui/react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../../components/item-detail/ItemDetail";
import "./ItemDetailContainer.css";
import { getFirestore } from "../../firebase/index";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const db = getFirestore();
    const itemcollection = db.collection("items");
    const currentItem = itemcollection.doc(itemId);

    currentItem
      .get()
      .then((document) => {
        if (!document.exists) {
          return;
        }
        setItem({ id: document.id, ...document.data() });
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [itemId]);
  if (!item) {
    return null;
  }

  return (
    <CContainer fluid className="detailContainer">
      {isLoading ? (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemDetail {...item} count={count} setCount={setCount} />
      )}
    </CContainer>
  );
}

export default ItemDetailContainer;
