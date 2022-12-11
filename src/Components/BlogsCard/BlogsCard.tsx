import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IBlogs} from "../../Interfaces/IBlogs";

interface Props {
    item: IBlogs;
}

const BlogsCard: FC<Props> = ({item}) => {
    return (
        <Link to={`/blogs/${item.id}`}>
            <div className={`blogs__card ${item.id}`}>
                <span className="blogs__card__text">
                    {item.title}
                </span>
            </div>
        </Link>
    );
};

export default BlogsCard;