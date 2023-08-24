
import Images from "./components/Images";
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import { createContext, useState } from "react";
//create context
export const ImageContext =createContext();
function App() {
  const [searchImage,setSearchImage]=useState('')
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=b2YbDEolXypzA_kfQ1qOo6MsXLcz3CGhyUn2v6ciKzg`
  );
 const value={
  response,
  isLoading,
  error,
  fetchData,
  searchImage,
  setSearchImage
 }
  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
