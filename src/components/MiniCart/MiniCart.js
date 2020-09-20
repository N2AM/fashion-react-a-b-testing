import React from "react";
import "styles.scss";

const MiniCart = () => {
  return (
    <div className="mini-cart-content text-left">
      <h2 className="title18 font-bold">(2) ITEMS IN MY CART</h2>
      <div className="list-mini-cart-item">
        <div className="product-mini-cart table">
          <div className="product-thumb">
            <a href="detail.html" className="product-thumb-link">
              <img alt="" src="photos/products/Bags/bags-01.jpg" />
            </a>
          </div>
          <div className="product-info">
            <h3 className="title14 product-title">
              <a href="#" className="link-hover">
                Verycheap Bags
              </a>
            </h3>
            <div className="mini-cart-qty">
              <span>1 x $40.00</span>
            </div>
          </div>
          <div className="product-delete text-right">
            <a href="#" className="remove-product link-hover">
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </div>
        <div className="product-mini-cart table">
          <div className="product-thumb">
            <a href="detail.html" className="product-thumb-link">
              <img alt="" src="photos/products/food/verycheap_food-01.jpg" />
            </a>
          </div>
          <div className="product-info">
            <h3 className="title14 product-title">
              <a href="#" className="link-hover">
                Verycheap Food
              </a>
            </h3>
            <div className="mini-cart-qty">
              <span>1 x $40.00</span>
            </div>
          </div>
          <div className="product-delete text-right">
            <a href="#" className="remove-product link-hover">
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </div>
        <div className="product-mini-cart table">
          <div className="product-thumb">
            <a href="detail.html" className="product-thumb-link">
              <img alt="" src="photos/products/Drink/drink-06.jpg" />
            </a>
          </div>
          <div className="product-info">
            <h3 className="title14 product-title">
              <a href="#" className="link-hover">
                Verycheap Drink
              </a>
            </h3>
            <div className="mini-cart-qty">
              <span>1 x $40.00</span>
            </div>
          </div>
          <div className="product-delete text-right">
            <a href="#" className="remove-product link-hover">
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </div>
        <div className="product-mini-cart table">
          <div className="product-thumb">
            <a href="detail.html" className="product-thumb-link">
              <img alt="" src="photos/products/Glasses/glasses_01.jpg" />
            </a>
          </div>
          <div className="product-info">
            <h3 className="title14 product-title">
              <a href="#" className="link-hover">
                Verycheap Glasses
              </a>
            </h3>
            <div className="mini-cart-qty">
              <span>1 x $40.00</span>
            </div>
          </div>
          <div className="product-delete text-right">
            <a href="#" className="remove-product link-hover">
              <i className="fa fa-trash"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="mini-cart-total text-uppercase title18 clearfix">
        <span className="pull-left">TOTAL</span>
        <strong className="pull-right color mini-cart-total-price">
          $80.00
        </strong>
      </div>
      <div className="mini-cart-button">
        <a className="mini-cart-view shop-button white" href="#">
          View cart{" "}
        </a>
        <a className="mini-cart-checkout shop-button white bg-color" href="#">
          Checkout
        </a>
      </div>
    </div>
  );
};

export default MiniCart;
