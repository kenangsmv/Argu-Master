import React from "react";

let categories_Array = [
  {
    name: "teknology",
    backgroundColor: "red",
   
  },
  {
    name: "spor",
    backgroundColor: "blue",
  },
  {
    name: "siyasi",
    backgroundColor: "green",
  },
];

export default function stage2({ changeValue, categories }) {
  // statei read edebilirsin ama update edemessin

  const toggle = (categorie) => {
    // stateteki arrayi boş arraye ata
    let arr = [...categories];

    let isInside = categories.includes(categorie);

    if (isInside) {
      //çıkar

      arr = arr.filter((item) => item !== categorie);
      //arrayi gez array elemanlarından teknolojiye eşit olmayanları tut gerisini filtrelere
    } else {
      //pushla
      arr.push(categorie);
    }

    changeValue("categories", arr);
  };

  console.log(categories);

  return (
    <div className="w100 column">
      <div className="center w100 border-bottom">
        <h2 className="mb1">Stage 2</h2>
      </div>
      <div className="mt2 flex-start column mb1">
        <span className="mb05">Select Categories</span>
        <div className="categoryContainer">
          {categories_Array.map((categorie) => (
            <div
              className="category "
              style={{ color: "white" ,backgroundColor:categorie.backgroundColor,
            }}
              onClick={() => toggle(categorie.name)}
            >
           {categorie.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//<div className="categoryTick"></div>
