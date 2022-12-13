import React, {FC} from 'react';

interface Props {
    season: string;
    setSeason: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSeason: FC<Props> = ({season, setSeason}) => {
    return (
        <div className="select__type">
            <select
                name="type"
                id="product-select"
                value={season}
                onChange={(event) => {
                    setSeason(event.target.value);
                }}>
                <option value="">Сезон</option>
                <option value="Summer">Лето</option>
                <option value="Spring">Осень</option>
                <option value="Winter">Зима</option>
                <option value="Autumn">Весна</option>
            </select>
        </div>
    );
};

export default FilterSeason;