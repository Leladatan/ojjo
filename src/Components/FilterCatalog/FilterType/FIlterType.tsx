import React, {FC} from 'react';

interface Props {
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
}

const FIlterType: FC<Props> = ({type, setType}) => {
    return (
        <div className="select__type">
            <select
                name="type"
                id="product-select"
                value={type}
                onChange={(event) => {
                    setType(event.target.value);
                }}>
                <option value="">Категория</option>
                <option value="Кольца">Кольца</option>
                <option value="Серьги">Серьги</option>
                <option value="Подвески">Подвески</option>
                <option value="Запонки">Запонки</option>
                <option value="Браслеты">Браслеты</option>
                <option value="Часы">Часы</option>
            </select>
        </div>
    );
};

export default FIlterType;