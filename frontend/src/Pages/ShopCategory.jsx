import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { backend_url } from "../App";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfo = () => {
    setLoading(true);
    fetch(`${backend_url}/allproducts`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-indexSort">
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {loading ? (
          <div className="loading-animation">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (
          allproducts.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  id={item.id}
                  key={i}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null;
          })
        )}
      </div>
      {!loading && (
        <div className="shopcategory-loadmore">
          <Link to="/" style={{ textDecoration: "none" }}>
            Explore More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
