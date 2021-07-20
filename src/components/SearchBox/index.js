import { FormPokemon, InputPokemon } from "./styles";

const SearchBox = ({ value, onChange }) => {
  return (
    <FormPokemon>
      <h2>
        800 <span>Pokemons</span> for you to choose your favorite
      </h2>

      <InputPokemon
        type="text"
        value={value}
        placeholder="Qual Pokémon você está procurando?"
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </FormPokemon>
  );
};

export default SearchBox;
