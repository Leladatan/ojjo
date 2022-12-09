import React, {FC} from 'react';
import {IDataCatalogs} from "../../Interfaces/IDataCatalogs";
import "../../Styles/productCardCatalogs.scss"
import {Link} from "react-router-dom";

interface Props {
    item: IDataCatalogs;
}

const format = (str: string) => {
    const s = str.length;
    const chars = str.split('');
    const strWithSpaces = chars.reduceRight((acc, char, i) => {
        const spaceOrNothing = ((((s - i) % 3) === 0) ? ' ' : '');
        return (spaceOrNothing + char + acc);
    }, '');

    return ((strWithSpaces[0] === ' ') ? strWithSpaces.slice(1) : strWithSpaces);
}

const ProductCardCatalogs: FC<Props> = ({item}) => {
    return (
        <Link to={`/catalog/${item.id}`} className="card__link">
            <div className="card">
                <div className="card__content">
                    <div className="card__content__img">
                        <img className="card__img" src={item.img} alt="img"/>
                    </div>
                    <div className="card__content__title">
                    <span className="card__type">
                        {item.type}
                    </span>
                        <h3 className="card__title">
                            {item.title}
                        </h3>
                    </div>
                    <div className="card__content__price">
                        <span className="card__price">
                            {format(item.price.toString())} ₽
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCardCatalogs;