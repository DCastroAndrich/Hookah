import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import ItemList from "../../components/item-list/ItemList";

import "./ItemListContainer.css";

const items = [
  {
    id: "1",
    title: "StarBuzz Carbine Mad Dragon",
    category: "hookah",
    description:
      "Hookah premium de Starbuzz: patas ajustables, sistema de mangueras anodizadas, luz LED ajustable",
    price: "313.19",
    pictureUrl: "/img/SB-Carbine2.0.png",
  },
  {
    id: "2",
    title: "CocoBuzz Coconut Charcoal",
    category: "carbones",
    description:
      "Carbón de coco 100% eco-friendly, 0% aditivos químicos. Duración hasta 90 minutos",
    price: "15.99",
    pictureUrl: "/img/CocoBuzz.png",
  },
  {
    id: "3",
    title: "StarBuzz SB 1 Phunnel Clay Bowl",
    category: "accesorios",
    description:
      "Bowl hecho con arcilla comprimida. Mantiene la temperatura y asegura una sesion larga y placentera",
    price: "22.99",
    pictureUrl: "/img/SB1Phunnel.png",
  },
  {
    id: "4",
    title: "Blue Mist",
    category: "tabacos",
    description:
      "Literalmente el sabor mas famoso del mundo: un blend inusual de blueberry con un cierto efecto refrescante a menta, pero no hay ningun tipo de menta en la mezcla.",
    price: "11.99",
    pictureUrl: "/img/BlueMist.png",
  },
];

function ItemListContainer() {
  const { categoryId } = useParams();
  const [data, setData] = useState(items);
  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoryId !== undefined) {
      const findCategory = items.filter(
        (categ) => categ.category === categoryId
      );
      setData(findCategory);
    } else {
      setData(items);
    }

    /* const task = new Promise((resolve) => {
    setTimeout(() => {
      
      resolve(items);
    }, 2000);
  });
  
  task
    .then((result) => {
      setData(result);
    })
    .catch(console.log("Error"))
    .finally(() => {
      setIsLoading(false);
    }); */
  }, [categoryId]);

  return (
    <Container fluid className="itemListContainer">
      <h3>Bienvenidos a Krishna's Hookah</h3>
      {/*  {isLoading && (
        <Spinner animation="border" role="status" variant="secondary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )} */}
      <ItemList items={data} />
    </Container>
  );
}

export default ItemListContainer;
