import { useEffect, useState } from "react";
import axios from "axios";
import Cardmics from "../Components/Cards/Cardmics";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState(20);
  const [skip, setSkip] = useState(1);
  const apiUrl = `http://localhost:3000`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/comics?title=${title}&limit=${limit}&skip=${skip}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [title, limit, skip]);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div>
      <Cardmics
        data={data}
        setData={setData}
        title={title}
        setTitle={setTitle}
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
      />
    </div>
  );
};

export default Comics;
