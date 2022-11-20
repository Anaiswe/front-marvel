import { useEffect, useState } from "react";
import axios from "axios";
import Cardracter from "../Components/Cards/Cardracter";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(1);
  const apiUrl = `http://localhost:3000`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/characters?name=${name}&limit=${limit}&skip=${skip}`
          // {
          //   params: {},
          // }
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name, limit, skip]);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div>
      <Cardracter
        data={data}
        setData={setData}
        name={name}
        setName={setName}
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
      />
    </div>
  );
};

export default Characters;
