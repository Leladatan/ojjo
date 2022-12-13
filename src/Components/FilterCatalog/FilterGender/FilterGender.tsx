import React, {FC} from 'react';

interface Props {
    gender: string;
    setGender: React.Dispatch<React.SetStateAction<string>>;
}

const FilterGender: FC<Props> = ({gender, setGender}) => {
    return (
        <div className="select__gender">
            <select
                name="gender"
                id="product-select"
                value={gender}
                onChange={(event) => {
                    setGender(event.target.value);
                }}>
                <option value="">Для кого</option>
                <option value="Male">Мужчина</option>
                <option value="Female">Женщина</option>
            </select>
        </div>
    );
};

export default FilterGender;