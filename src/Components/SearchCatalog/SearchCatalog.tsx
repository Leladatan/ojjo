import React, {FC} from 'react';
import "@/Styles/searchCatalog.scss"

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCatalog: FC<Props> = ({search, setSearch}) => {
    return (
        <div className="search__input">
            <input type="text"
                   className="search-input"
                   value={search}
                   onChange={(e) => {
                       setSearch(e.target.value)
                   }}
                   placeholder="Enter the desired decoration..."
            />
        </div>
    );
};

export default SearchCatalog;