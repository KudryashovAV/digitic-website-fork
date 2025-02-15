import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useQuery, useLazyQuery } from "@apollo/client";
import RandomProduct from "../components/RandomProduct";

import shopifyHeaders from '../services/shopifyClient.js';
import FETCH_PRODUCTS_QUERY from "../queries/fetchProducts"
import FETCH_RANDOM_PRODUCTS_QUERY from "../queries/fetchRandomProducts"
import FETCH_PRODUCT_TAGS_QUERY from "../queries/fetchProductTags";
import FETCH_PAGINATED_PRODUCTS_QUERY from "../queries/fetchPaginatedProducts";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const [mainProducts, setMainProducts] = useState([]);
  const [paginatedInfo, setPaginatedInfo] = useState({ hasNextPage: false, hasPreviousPage: false });

  const { data:productTags } = useQuery(FETCH_PRODUCT_TAGS_QUERY, {
    variables: {
      count: 250
    },
    context: {
      headers: shopifyHeaders
    }
  });

  const { data:randomProductsData } = useQuery(FETCH_RANDOM_PRODUCTS_QUERY, {
    variables: {
      count: 5
    },
    context: {
      headers: shopifyHeaders
    }
  });

  const { data:productsData } = useQuery(FETCH_PRODUCTS_QUERY, {
    variables: {
      count: 12
    },
    context: {
      headers: shopifyHeaders
    }
  });

  const [fetchNextProducts, { data:nxtProductsData }] = useLazyQuery(FETCH_PAGINATED_PRODUCTS_QUERY);

  useEffect(() =>{
    if (productsData) {
      setMainProducts(productsData.products.edges)
      setPaginatedInfo(productsData.products.pageInfo)
    }
  }, [productsData])

  useEffect(() =>{
    if (nxtProductsData) {
      setMainProducts(nxtProductsData.products.edges)
      setPaginatedInfo(nxtProductsData.products.pageInfo)
    }
  }, [nxtProductsData])


  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In Stock (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out of Stock(0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {
                    productTags && productTags.productTags.edges.map((tag) =>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" key={tag.node}>
                        {tag.node}
                      </span>
                    )
                  }

                </div>
              </div>
            </div>
            { randomProductsData && (<div className="filter-card mb-3">
              <h3 className="filter-title">Random Product</h3>
              <div>
                {
                  randomProductsData.products.nodes.slice(-2).map((node) =>
                    <RandomProduct key={node.id} product={node} />
                  )
                }
              </div>
            </div>)}
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">12 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="/images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="/images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="/images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />

                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="/images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                { mainProducts.map((product) =>
                  <ProductCard grid={grid} key={product.node.id} product={product.node} />
                  )
                }
              </div>
              <button
                disabled={!paginatedInfo.hasNextPage}
                onClick={() => {
                console.log("Next");
                if (mainProducts) {
                  fetchNextProducts({
                    variables: {
                      count: 12,
                      cursor: mainProducts.slice(-1)[0].cursor
                    },
                    context: {
                      headers: shopifyHeaders
                    }
                  })
                }

              }}>
                Next
              </button>
              <button
                disabled={!paginatedInfo.hasPreviousPage}
              >
                Previous
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
