import React, { useState, useEffect, Fragment } from 'react';

import ShoppingList from './shoppingList/ShoppingList';
import UserList from '../userList/UserList';
import Spinner from '../../shared/UIElements/spinner/Spinner';

const Shopping = () => {
  const [productList, setProductList] = useState([{ filter: '' }]);
  const [categories, setCategories] = useState([]);
  const [selectCatagory, setSelectCatagory] = useState(null);
  const [searchCatagory, setSearchCatagory] = useState(null);
  const [addToList, setAddToList] = useState([]);
  const [popUp, setPopUp] = useState(false);

  // Get dummy product list
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(1);
        let categories = [];
        let optionArr = [];
        setProductList([...productList, ...json]);
        json.map((product) => {
          if (categories.indexOf(product.category) === -1) {
            categories.push(product.category);
            optionArr.push(
              <option value={product.category}>{product.category}</option>
            );
          }
        });
        setCategories([...optionArr]);
      });
  }, []);

  const categoryChangeHandler = (e) => {
    setSelectCatagory(e.target.value);
  };

  const popUpHandler = () => {
    setPopUp(!popUp);
  };

  const searchChangeHandler = (e) => {
    // debouncer
    setTimeout(() => {
      setSearchCatagory(e.target.value);
    }, 1500);
  };

  console.log(searchCatagory);
  return (
    <Fragment>
      {productList.length === 1 ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className="flex justify-center p-3">
            <button
              onClick={popUpHandler}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-3 rounded text-xl self-center"
            >
              Let's Shop !
            </button>
          </div>

          {!popUp ? null : (
            <div className="flex justify-center p-5 h-3/6 animate-rollIn forwards">
              <div className="flex flex-col items-center border border-blue-900 h-full w-3/6 rounded-md">
                <div className="flex flex-col bg-gray-300 w-full h-1/6 ">
                  <button
                    onClick={popUpHandler}
                    className="self-end bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-3 rounded text-xs"
                  >
                    x
                  </button>
                  <header className="text-center text-4xl md:font-mono p-3 shadow">
                    Shopping List
                  </header>
                </div>
                <div className="w-4/6 mt-5">
                  <label>
                    <select
                      className="form-select block w-full h-10 mt-1 outline-none border border-blue-900 rounded-sm"
                      onChange={categoryChangeHandler}
                    >
                      <option selected disabled>
                        Catagories
                      </option>
                      {categories}
                    </select>
                  </label>

                  <label>
                    <input
                      onChange={searchChangeHandler}
                      className="form-input block w-full h-10 mt-1 p-2 outline-none border border-blue-900 rounded-sm"
                      placeholder="Search Product.."
                    />
                  </label>
                </div>
                <ShoppingList
                  productList={productList}
                  selectCatagory={selectCatagory}
                  searchCatagory={searchCatagory}
                  setAddToList={setAddToList}
                  addToList={addToList}
                />
                <UserList addToList={addToList} setAddToList={setAddToList} />
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Shopping;
