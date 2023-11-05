import { useEffect,useContext } from "react";

import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import {fetchDataFromApi} from "../../utils/api";
import { Context } from "../../utils/context";


const Home = (props) => {

    const{  categories, setCategories, products, setProducts } = useContext(Context);

    useEffect(() => {
        getProducts();
        getCategories();
    },[]);

    const getProducts = () =>{
        fetchDataFromApi("/api/products?populate=*").then(res => {
            console.log(res);
            setProducts(res);
        });
    };

    const getCategories = () =>{
        fetchDataFromApi("/api/categories?populate=*").then(res => {
            console.log(res);
            setCategories(res);
        });
    };

    return (
    <div>
        <h1 id="user">{props.name ? `Welcome - ${props.name}` : "Login please"}</h1>
        <Banner/>
        <div className="main-content">
            <div className="layout">
            <section id="category">
                <Category categories={categories} headingText="Categories"/>
            </section>
            <Products products={products} headingText="Popular Products"/>
            </div>
        </div>
    </div>
    );
};

export default Home;
