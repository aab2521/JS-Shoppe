import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles';

// const products = [
//     {id:1, name: "Shoes", description:"Running shoes.", price:'₹ 500', image:'https://m.media-amazon.com/images/I/71jnKLP3bZL._UY695_.jpg'},
//     {id:2, name: "MacBook Air", description:"Apple MacBook Air .", price:'₹ 82000', image:'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY327_FMwebp_QL65_.jpg'},
//     {id:3, name: "iPhone 13 pro max 1TB", description:"Apple iPhone 13 pro max with 1TB of storage.", price:'₹ 169000', image:'https://m.media-amazon.com/images/I/61jLiCovxVL._AC_UY327_FMwebp_QL65_.jpg'},
// ];

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    return (
        <main className={classes.contents} >
            <div className={classes.toolbar} />
         <Grid container justify="center" spacing={4}>
             {products.map((product)=>(
                 <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
                     <Product product = {product} onAddToCart={onAddToCart} />
                 </Grid>

             ))}
         </Grid>
     </main>
    );
     
}


export default Products;
