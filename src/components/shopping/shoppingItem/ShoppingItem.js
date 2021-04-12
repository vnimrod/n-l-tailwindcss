import React, { Fragment } from 'react';

const ShoppingItem = ({
  id,
  productName,
  category,
  image,
  selectCatagory,
  searchCatagory,
  setAddToList,
  addToList,
}) => {

  const addToListHandler = (id, productName) => {
    setAddToList([...addToList, { id, productName }]);
  };

  const shoppingItem = (
    <div className="break-words w-3/12 h-23 border-2 shadow-md p-3 m-1">
      <div className="flex flex-col h-full justify-between">
        <img className="h-15 w-10 self-center" src={image} />
        <span className="text-center text-xs">{productName}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-3 rounded text-xs self-center"
          onClick={() => addToListHandler(id, productName)}
        >
          Add To List
        </button>
      </div>
    </div>
  );

  return (
    <Fragment>
      {selectCatagory && !searchCatagory ? (
        <Fragment>{selectCatagory === category ? shoppingItem : null}</Fragment>
      ) : (
        <Fragment>
          {productName &&
          searchCatagory &&
          productName.toLowerCase().startsWith(searchCatagory.toLowerCase())
            ? shoppingItem
            : null}
        </Fragment>
      )}
    </Fragment>
  );
};

export default ShoppingItem;
