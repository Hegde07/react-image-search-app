import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData,setSearchImage}=useContext(ImageContext);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearchButton=()=>{
    fetchData( `search/photos?page=1&query=${searchValue}&client_id=b2YbDEolXypzA_kfQ1qOo6MsXLcz3CGhyUn2v6ciKzg`)
      setSearchValue('');
      setSearchImage(searchValue);
  }
  const handleEnterSearch=(e)=>{
     if(e.key==='Enter'){
        fetchData( `search/photos?page=1&query=${searchValue}&client_id=b2YbDEolXypzA_kfQ1qOo6MsXLcz3CGhyUn2v6ciKzg`)
        setSearchValue('');
        setSearchImage(searchValue);
     }
  }
  return (
    <div className="flex">
      <input
        type="search"
        className="
        bg-gray-50 
        border border-gray-300 
        text-sm 
        w-full 
        indent-2 
        p-2.5 
        outline-none 
        focus:border-blue-500 
        focus:ring-2 
        rounded-tl 
        rounded-bl"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleSearch}
        onKeyDown={handleEnterSearch}
      />
      <button
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        onClick={handleSearchButton}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
