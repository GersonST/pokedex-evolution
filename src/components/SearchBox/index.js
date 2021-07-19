const SearchBox = ({ value, onChange }) => {
  return (
    <div className="home">
      <div className="form-container">
        <form className="form-pokemon">
          <input
            type="text"
            value={value}
            placeholder="Qual Pokémon você está procurando?"
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
