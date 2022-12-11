import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {dataBlogs} from "../../api/Blogs/blogs";
import {IBlogs} from "../../Interfaces/IBlogs";
import "../../Styles/blogsIdPage.scss"

const BlogsIdPage: FC = () => {
    const [item, setItem] = useState<IBlogs | null>(null);

    const url = useLocation();


    useEffect(() => {
        const urlId = Number(url.pathname.slice(13));
        const current = dataBlogs[urlId - 1];
        setItem(current);
    }, []);

    return (
        <>
            {item &&
                <main className="main">
                    <div className="container">
                        <div className="main__content__blogsId">
                            <h1 className="blogsId__title">
                                {item.title}
                            </h1>
                            <p className="blogsId__text">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </main>
            }
        </>
    );
};

export default BlogsIdPage;