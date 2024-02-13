import { ContainerSearch } from './MoviesSearch.styled';

const MoviesSearch = ({ onSearch, value, onChange }) => {
  return (
    <ContainerSearch>
      <form onSubmit={onSearch}>
        <div>
          <input
            type="text"
            name="query"
            value={value}
            onChange={evt => onChange(evt.target.value)}
            autoComplete="off"
            placeholder="Search Movies"
          />
        </div>
      </form>
    </ContainerSearch>
  );
};

export default MoviesSearch;
