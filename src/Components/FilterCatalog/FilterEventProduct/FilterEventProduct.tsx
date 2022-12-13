import React, {FC} from 'react';

interface Props {
    eventProduct: string;
    setEventProduct: React.Dispatch<React.SetStateAction<string>>;
}

const FilterEventProduct: FC<Props> = ({eventProduct, setEventProduct}) => {
    return (
        <div className="select__eventProduct">
            <select
                name="eventProduct"
                id="product-select"
                value={eventProduct}
                onChange={(event) => {
                    setEventProduct(event.target.value);
                }}>
                <option value="">Событие</option>
                <option value="Holiday">Праздник</option>
                <option value="Marriage">Свадьба</option>
            </select>
        </div>
    );
};

export default FilterEventProduct;