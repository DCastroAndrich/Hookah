import { CContainer, CSpinner } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemList from "../../components/item-list/ItemList";
import { getFirestore } from "../../firebase/index";
import Hookah from "../../components/category-description/Hookah";
import Carbones from "../../components/category-description/Carbones";
import Tabacos from "../../components/category-description/Tabacos";
import Accesorios from "../../components/category-description/Accesorios";

import "./ItemListContainer.css";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");

    if (!categoryId) {
      itemCollection
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log("No results!");
          }
          setData(
            querySnapshot.docs.map((document) => ({
              id: document.id,
              ...document.data(),
            }))
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
      return;
    }

    const itemsByCategory = itemCollection.where(
      "categoryId",
      "==",
      categoryId
    );

    itemsByCategory
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
        }
        setData(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  return (
    <CContainer fluid className="itemListContainer">
      <h1>Bienvenidos a Krishna's Hookah</h1>
      <CContainer fluid className="itemListContainer__content">
        {isLoading ? (
          <CSpinner role="status" color="success">
            <span className="visually-hidden">Loading...</span>
          </CSpinner>
        ) : (
          <>
            {categoryId ? (
              <>
                <h2>{categoryId}</h2>
                <div>
                  {(() => {
                    switch ({ categoryId }) {
                      case "Hookah":
                        return <Hookah />;

                      case "Carbones":
                        return <Carbones />;

                      case "Tabacos":
                        return <Tabacos />;

                      case "Accesorios":
                        return <Accesorios />;

                      default:
                        break;
                    }
                  })}
                </div>
              </>
            ) : (
              <h2>Catalogo de productos</h2>
            )}
            <ItemList items={data} />
          </>
        )}
      </CContainer>
    </CContainer>
  );
}

export default ItemListContainer;
