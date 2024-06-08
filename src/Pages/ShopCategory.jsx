import React, { useContext } from "react";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import "./Css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="ShopCategory-banner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 Products
        </p>

        <div className="shopCategory-Sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopCategory-Products">
        {all_product.map((item, i) => {
          if (props.Category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopCategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
