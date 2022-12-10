import React, {FC} from 'react';
import "../../Styles/searchCatalog.scss"

interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchCatalog: FC<Props> = ({search, setSearch}) => {
    return (
        <>
            <input type="text"
                   className="search-input"
                   value={search}
                   onChange={(e) => {
                       setSearch(e.target.value)
                   }}
                   placeholder="Enter the desired decoration..."
            />
        </>
    );
};

export default SearchCatalog;