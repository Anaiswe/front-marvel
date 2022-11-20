import { Link } from "react-router-dom";
import Pagination from "../Pagination";
const Cardracter = ({ data, skip, setSkip, limit, name, setName }) => {
  return (
    <>
      <Pagination skip={skip} setSkip={setSkip} limit={limit} />
      <div className="marvel-container">
        <div>
          <div className="input-card">
            <input
              className="input-search"
              type="search"
              placeholder="search"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="card-all">
          {data.results.map((character, index) => {
            const characterId = character._id;
            return (
              <div>
                <div>
                  <Link to={`/comics/${characterId}`}>
                    <img
                      className="img"
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      index={index}
                      alt="character"
                    ></img>
                  </Link>
                </div>
                <div>
                  <p>Name</p>
                  <p>{character.name}</p>
                </div>
                <div>
                  <p>Description</p>
                  <p>{character.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Cardracter;
