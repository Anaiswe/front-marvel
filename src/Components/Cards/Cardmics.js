import Pagination from "../Pagination";

const Cardmics = ({ data, title, setTitle, limit, skip, setSkip }) => {
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
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="card-all">
          {data.results.map((comic, index) => {
            return (
              <div className="card-container">
                <div className="img-container">
                  <img
                    className="img"
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    index={index}
                    alt="comic"
                  ></img>
                  <p className="text">{comic.description}</p>
                </div>
                <p className="titlename">{comic.title}</p>
              </div>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};

export default Cardmics;
