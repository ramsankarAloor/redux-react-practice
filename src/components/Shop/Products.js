import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY = {
  1: {
    title: "Test",
    price: 6,
    description: "This is first product - amazing!",
  },
  2 : {
    title: "another",
    price: 10,
    description: "This is second product - amazing!"
  }
};

const Products = (props) => {

  const productList = Object.keys(DUMMY).map((id, index)=>{
    return (
        <ProductItem key={index} id={id} title={DUMMY[id].title} price={DUMMY[id].price} description={DUMMY[id].description} />
    )
  })
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList}
      </ul>
    </section>
  );
};

export default Products;
