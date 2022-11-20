const SoloCardCharacter = ({ data, setData }) => {
  return (
    <div className="card-container">
      {data.comics.map((character, index) => {
        return (
          <div>
            <div>
              <img
                className="img"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                index={index}
                alt="character"
              ></img>
            </div>
            <p className="title">title</p>
            <p className="text">{character.name}</p>
            <p className="text">Description</p>
            <p>{character.characterId}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SoloCardCharacter;
