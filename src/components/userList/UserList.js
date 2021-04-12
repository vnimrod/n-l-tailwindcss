import React from 'react';
import uuid from 'react-uuid';

const UserList = ({ addToList, setAddToList }) => {
  console.log(addToList);

  const deleteListItemHandler = (e) => {
    let filteredList = [];
    filteredList = addToList.filter((item) => item.id !== Number(e.target.id));
    setAddToList([...filteredList]);
  };

  const doneClickHandler = () => {
    console.log(addToList);
  };

  return (
    <div className="flex flex-col bg-gray-300 w-full h-52 rounded-b p-4">
      <span className="underline font-bold p-1">My Shopping List</span>
      <ul className="overflow-auto h-5/6">
        {addToList.map((item) => (
          <li
            className="list-none bg-white m-1 self-center w-10/12 p-1 rounded"
            key={uuid()}
          >
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-0.5 px-1 rounded text-xs self-center"
              type="button"
              id={item.id}
              onClick={deleteListItemHandler}
            >
              x
            </button>
            {item.productName}
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-2">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-3 rounded text-xs"
          type="button"
          onClick={doneClickHandler}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default UserList;
