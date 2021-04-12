import React from 'react';

import ShoppingItem from '../shoppingItem/ShoppingItem';
import Spinner from '../../../shared/UIElements/spinner/Spinner';
import uuid from 'react-uuid';

const ShoppingList = ({
  productList,
  selectCatagory,
  searchCatagory,
  setAddToList,
  addToList,
}) => {
  console.log(productList);
  return productList.length === 1 ? (
    <Spinner />
  ) : (
    <div className="flex flex-wrap justify-center w-full m-7">
      {productList.map((product) => (
        <ShoppingItem
          key={uuid()}
          id={product.id}
          productName={product.title}
          category={product.category}
          image={product.image}
          selectCatagory={selectCatagory}
          searchCatagory={searchCatagory}
          setAddToList={setAddToList}
          addToList={addToList}
        />
      ))}
    </div>
  );
};

export default ShoppingList;
