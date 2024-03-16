import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import ResultsTable from "./components/ResultsTable";
import Pagination from "./components/Pagination";
import LimitSelector from "./components/LimitSelector";
import "./App.css";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [limit, setLimit] = useState(5);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (currentSearchTerm, newOffset = currentOffset) => {
    if (!currentSearchTerm) return;
    const effectiveOffset = newOffset !== undefined ? newOffset : currentOffset;

    const options = {
      method: "GET",
      url: import.meta.env.VITE_RAPIDAPI_URL,
      params: {
        namePrefix: currentSearchTerm,
        limit: limit.toString(),
        offset: effectiveOffset.toString(),
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      setPlaces(response.data.data);
      setTotalCount(response.data.metadata.totalCount);
    } catch (error) {
      console.error(error);
    }
  };

  const currentPage = Math.floor(currentOffset / limit) + 1;
  const totalPages = Math.ceil(totalCount / limit);

  const goToNextPage = () => {
    const newOffset = Math.min(currentOffset + limit, (totalPages - 1) * limit);
    setCurrentOffset(newOffset);
  };

  const goToPreviousPage = () => {
    const newOffset = Math.max(0, currentOffset - limit);
    setCurrentOffset(newOffset);
  };

  return (
    <>
      <h1>Search Places</h1>
      <Search
        onSearch={(value) => {
          fetchData(value);
        }}
      />
      <ResultsTable places={places} currentOffset={currentOffset} />
      <div id="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
        />
        <LimitSelector onLimitChange={setLimit} />
      </div>
    </>
  );
};

export default App;
