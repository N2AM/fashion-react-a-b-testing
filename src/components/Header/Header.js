import React from "react";
import "./styles.scss";
const Header = () => {
  return (
    <header id="header">
      <div className="header">
        <div className="top-header text-center white hidden-xs bg-2color-header-top">
          <div className="container">
            <h3 className="title14 text-uppercase font-bold rale-font">
              end of season sale - up to 80% off
            </h3>
            <a href="#" className="text-uppercase white link-hover border-left">
              shop now <i className="fas fa-angle-right"></i>
            </a>
            <a href="#" className="btn-close pull-right"></a>
          </div>
        </div>
        <div className="sub-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="call-us">
                  <span className="text-uppercase title12">
                    <i className="fas fa-phone-volume"></i>Call us: 020 2366 455
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <ul className="list-inline-block pull-right box-search-cart">
                  <li>
                    <div className="search-box">
                      <a href="#" className="text-uppercase title12 link-hover">
                        <i className="fas fa-search"></i>search
                      </a>
                      <form className="search-form clearfix">
                        <input type="text" />
                        <div className="submit bg-color text-center">
                          <input type="submit" value="" />
                        </div>
                      </form>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="text-uppercase title12 link-hover">
                      <i className="fas fa-user"></i> my account
                    </a>
                  </li>
                  <li>
                    <div className="mini-cart-box aside-box style-mini-cart">
                      <div className="mini-cart-link">
                        <a
                          className="link-hover text-uppercase title12 mini-cart-icon"
                          href="#"
                        >
                          <i className="fas fa-shopping-bag"></i>my cart
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-header bg-white">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3">
                <div className="logo">
                  <a
                    href="#"
                    className="color title30 text-uppercase rale-font link-hover"
                  >
                    <span className="font-bold">very</span>cheap
                  </a>
                </div>
              </div>
              <div className="col-md-9 col-sm-9">
                <nav className="main-nav pull-right">
                  <ul className="list-inline-block">
                    <li className="menu-item-has-children">
                      <a
                        href="index.html"
                        className="text-uppercase link-hover"
                      >
                        Home <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="sub-menu list-none sub-menu-home">
                        <li className="menu-item-has-children">
                          <a href="#">Home 1 - 5</a>
                          <ul className="list-none sub-menu">
                            <li>
                              <a href="home-1.html">Home 1</a>
                            </li>
                            <li>
                              <a href="home-2.html">Home 2</a>
                            </li>
                            <li>
                              <a href="home-3.html">Home 3</a>
                            </li>
                            <li>
                              <a href="home-4.html">Home 4</a>
                            </li>
                            <li>
                              <a href="home-5.html">Home 5</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Home 6 - 10</a>
                          <ul className="list-none sub-menu">
                            <li>
                              <a href="home-6.html">Home 6</a>
                            </li>
                            <li>
                              <a href="home-7.html">Home 7</a>
                            </li>
                            <li>
                              <a href="home-8.html">Home 8</a>
                            </li>
                            <li>
                              <a href="home-9.html">Home 9</a>
                            </li>
                            <li>
                              <a href="home-10.html">Home 10</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Home 11 - 15</a>
                          <ul className="list-none sub-menu">
                            <li>
                              <a href="home-11.html">Home 11</a>
                            </li>
                            <li>
                              <a href="home-12.html">Home 12</a>
                            </li>
                            <li>
                              <a href="home-13.html">Home 13</a>
                            </li>
                            <li>
                              <a href="home-14.html">Home 14</a>
                            </li>
                            <li>
                              <a href="home-15.html">Home 15</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Home 16 - 20</a>
                          <ul className="list-none sub-menu">
                            <li>
                              <a href="home-16.html">Home 16</a>
                            </li>
                            <li>
                              <a href="home-17.html">Home 17</a>
                            </li>
                            <li>
                              <a href="home-18.html">Home 18</a>
                            </li>
                            <li>
                              <a href="home-19.html">Home 19</a>
                            </li>
                            <li>
                              <a href="home-20.html">Home 20</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children has-mega-menu ">
                      <a href="#" className="text-uppercase link-hover">
                        features <i className="fas fa-chevron-down"></i>
                      </a>
                      <div className="mega-menu hidden-xs">
                        <div className="content-mega-menu">
                          <div className="row">
                            <div className="col-md-3 col-sm-4 col-xs-12">
                              <div className="mega-list-cat">
                                <h2 className="title18 font-bold text-uppercase">
                                  CATEGORY PAGE
                                </h2>
                                <ul className="list-none">
                                  <li>
                                    <a href="#">Off-Canvas Filtering</a>
                                  </li>
                                  <li>
                                    <a href="#">Full Width Layout</a>
                                  </li>
                                  <li>
                                    <a href="#">List layout</a>
                                  </li>
                                  <li>
                                    <a href="#">Masonry layout</a>
                                  </li>
                                  <li>
                                    <a href="#">Top Content</a>
                                  </li>
                                  <li>
                                    <a href="#">Transparent Header</a>
                                  </li>
                                  <li>
                                    <a href="#">Dark Style</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                              <div className="mega-list-cat">
                                <h2 className="title18 font-bold text-uppercase">
                                  product PAGE
                                </h2>
                                <ul className="list-none">
                                  <li>
                                    <a href="#">Left Column</a>
                                  </li>
                                  <li>
                                    <a href="#">Right Column</a>
                                  </li>
                                  <li>
                                    <a href="#">Full Width Gallery</a>
                                  </li>
                                  <li>
                                    <a href="#">Vertical Gallery</a>
                                  </li>
                                  <li>
                                    <a href="#">Variations</a>
                                  </li>
                                  <li>
                                    <a href="#">Transparent Header</a>
                                  </li>
                                  <li>
                                    <a href="#">Affiliat</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 col-xs-12">
                              <div className="mega-list-cat">
                                <h2 className="title18 font-bold text-uppercase">
                                  more...
                                </h2>
                                <ul className="list-none">
                                  <li>
                                    <a href="#">Accordion Style</a>
                                  </li>
                                  <li>
                                    <a href="#">Section Style</a>
                                  </li>
                                  <li>
                                    <a href="#">Vertical Tabs</a>
                                  </li>
                                  <li>
                                    <a href="#">Normal Tabs</a>
                                  </li>
                                  <li>
                                    <a href="#">Dark Style</a>
                                  </li>
                                  <li>
                                    <a href="#">Image Zoom</a>
                                  </li>
                                  <li>
                                    <a href="#">Product Examples</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-3 hidden-sm col-xs-12">
                              <div className="mega-menu-thumb zoom-image line-scale">
                                <a href="#" className="advs-thumb-link">
                                  <img
                                    src="photos/products/Jewelry/fashion-jewelry-11-1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" className="text-uppercase link-hover">
                        Shop <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="product.html">Product full</a>
                        </li>
                        <li>
                          <a href="product-no-sidebar.html">
                            Product no sidebar
                          </a>
                        </li>
                        <li>
                          <a href="product-right-sidebar.html">
                            Product right sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#" className="text-uppercase link-hover">
                        categories <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="gridview.html">Grid full</a>
                        </li>
                        <li>
                          <a href="grid-left-sidebar.html">grid left sidebar</a>
                        </li>
                        <li>
                          <a href="listview.html">List full</a>
                        </li>
                        <li>
                          <a href="list-left-sidebar.html">list left sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="blog.html" className="text-uppercase link-hover">
                        Blog <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-featured.html">Blog featured</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog List Full</a>
                        </li>
                        <li>
                          <a href="blog-listview.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-masonry.html">Blog Masonry</a>
                        </li>
                        <li>
                          <a href="blog-post.html">Blog Post</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="about.html"
                        className="text-uppercase link-hover"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="contact.html"
                        className="text-uppercase link-hover"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                  <a href="#" className="toggle-mobile-menu">
                    <span></span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
