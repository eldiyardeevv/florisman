import React, { useState } from "react";
import { useProducts } from "../../context/ProductContext";

const init = {
  title: "",
  description: "",
  category: "",
  price: "",
  image: "",
};

const From = ({ isEdit }) => {
  const { createProduct } = useProducts();
  const [product, setProduct] = useState(init);

  function hendleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  }
  // function hendleInp(e) {
  //   if (e.target.name === "price") {
  //     let obj = {
  //       ...product,
  //       [e.target.name]: Number(e.target.value),
  //     };
  //     setProduct(obj);
  //   } else {
  //     let obj = {
  //       ...product,
  //       [e.target.name]: e.target.value,
  //     };
  //     setProduct(obj);
  //   }
  // }

  function addProduct() {
    createProduct(product);
    setProduct(init);
  }

  return (
    <div>
      <div>
        <div className="form__block">
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="title"
            name="title"
            value={product.title}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="description"
            name="description"
            value={product.description}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="category"
            name="category"
            value={product.category}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="price"
            name="price"
            value={product.price}
          />
          <input
            onChange={hendleInp}
            className="form__inp"
            type="text"
            placeholder="image"
            name="image"
            value={product.image}
          />
          {isEdit ? (
            <button
              onClick={addProduct}
              type="button"
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              ADD
            </button>
          ) : (
            <button
              type="button"
              class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              SAVE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default From;

// import { Button, FormControl, TextField } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useProducts } from "../../context/ProductContext";
// import { Link, useNavigate, useParams } from "react-router-dom";

// const init = {
//   title: "",
//   description: "",
//   category: "",
//   price: "",
//   picture: "",
// };
// const Form = ({ isEdit }) => {
//   const { createProduct } = useProducts();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(init);

// function handleInp(e) {
//   if (e.target.name === "price") {
//     let obj = {
//       ...product,
//       [e.target.name]: Number(e.target.value),
//     };
//     setProduct(obj);
//   } else {
//     let obj = {
//       ...product,
//       [e.target.name]: e.target.value,
//     };
//     setProduct(obj);
//   }
// }
//   function addProduct() {
//     createProduct(product);
//     setProduct(init);
//   }

//   return (
//     <FormControl sx={{ display: "flex", justifyContent: "center" }}>
//       <TextField
//         onChange={handleInp}
//         sx={{ width: "100%", margin: "10px auto" }}
//         placeholder="enter title"
//         fullWidth
//         variant="outlined"
//         name="title"
//         value={product.title}
//       />
//       <TextField
//         onChange={handleInp}
//         sx={{ width: "100%", margin: "10px auto" }}
//         placeholder="enter  description"
//         fullWidth
//         variant="outlined"
//         name="description"
//         value={product.description}
//       />
//       <TextField
//         onChange={handleInp}
//         sx={{ width: "100%", margin: "10px auto" }}
//         placeholder="enter category"
//         fullWidth
//         variant="outlined"
//         name="category"
//         value={product.category}
//       />
//       <TextField
//         onChange={handleInp}
//         sx={{ width: "100%", margin: "10px auto" }}
//         placeholder="enter price"
//         fullWidth
//         variant="outlined"
//         name="price"
//         value={product.price}
//       />
//       <TextField
//         onChange={handleInp}
//         sx={{ width: "100%", margin: "10px auto" }}
//         placeholder="enter picture"
//         fullWidth
//         variant="outlined"
//         name="picture"
//         value={product.picture}
//       />
//       {isEdit ? (
//         <Button
//           onClick={addProduct}
//           sx={{
//             bgcolor: "rgb(51, 153, 255)",
//             color: "#fff",
//             "&:hover": { bgcolor: "rgb(0, 89, 178)" },
//           }}
//           variant="outlined"
//           fullWidth
//           size="large"
//         >
//           Add
//         </Button>
//       ) : (
//         <Link to="/">
//           <Button
//             sx={{
//               bgcolor: "rgb(51, 153, 255)",
//               color: "#fff",
//               "&:hover": { bgcolor: "rgb(0, 89, 178)" },
//             }}
//             variant="outlined"
//             fullWidth
//             size="large"
//           >
//             Save
//           </Button>
//         </Link>
//       )}
//     </FormControl>
//   );
// };

// export default Form;
