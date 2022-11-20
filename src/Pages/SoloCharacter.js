import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SoloCardCharacter from "../Components/Cards/SoloCardCharacter";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  const apiUrl = "http://localhost:3000";
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/character/${characterId}`);
      setData(response.data);
      console.log(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div>
      <SoloCardCharacter data={data} setData={setData} />
    </div>
  );
};

export default Character;
