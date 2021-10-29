import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CContainer } from "@coreui/react";
import { Spinner } from "react-bootstrap";
import ItemDetail from "../../components/item-detail/ItemDetail";
import "./ItemDetailContainer.css"

const itemTest = [
  {
    id: "1",
    title: "StarBuzz Carbine Mad Dragon",
    category: "Hookah",
    description: "Hookah premium de Starbuzz: patas ajustables, sistema de mangueras anodizadas, luz LED ajustable",
    price: "313.19",
    pictureUrl: "/img/SB-Carbine2.0.png",
    stock: "5"
  },
  {
    id: "2",
    title: "CocoBuzz Coconut Charcoal",
    category: "Carbones",
    description: "Carbón de coco 100% eco-friendly, 0% aditivos químicos. Duración hasta 90 minutos",
    price: "15.99",
    pictureUrl: "/img/CocoBuzz.png",
    stock: "50"
  },
  {
    id: "3",
    title: "StarBuzz SB 1 Phunnel Clay Bowl",
    category:"Accesorios",
    description: "Bowl hecho con arcilla comprimida. Mantiene la temperatura y asegura una sesion larga y placentera",
    price: "22.99",
    pictureUrl: "/img/SB1Phunnel.png",
    stock: "10"
  },
  {
    id: "4",
    title: "Blue Mist",
    category:"Tabacos",
    description: "Literalmente el sabor mas famoso del mundo: un blend inusual de blueberry con un cierto efecto refrescante a menta, pero no hay ningun tipo de menta en la mezcla.",
    price: "11.99",
    pictureUrl: "/img/BlueMist.png",
    stock: "25"
  },
];

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        const findItem = itemTest.filter(item => item.id === itemId);
        resolve(...findItem);
      }, 2000);
    });

    getItem
      .then((result) => {
        console.log('result', result);
        setItem(result);
      })
      .catch(console.log("Can't show the product"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemId]);

  return (
    <CContainer fluid className="detailContainer">
      <h2>Producto seleccionado</h2>
      {isLoading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      <ItemDetail {...item}/>
    </CContainer>
  );
}

export default ItemDetailContainer;
 