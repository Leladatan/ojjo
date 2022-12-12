import React, {FC} from 'react';
import "@/Styles/blogsPage.scss"
import {dataBlogs} from "@/api/Blogs/blogs";
import BlogsCard from "@/Components/BlogsCard/BlogsCard";

const BlogsPage: FC = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__content__blogs">
                    <div className="blogs__cards">
                        {dataBlogs.map((item) => (
                            <BlogsCard item={item} key={item.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BlogsPage;