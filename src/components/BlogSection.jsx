import BlogCard from "./BlogCard";
import { useSelector } from "react-redux";

const BlogSection = () => {

    const data = useSelector(state => state.blogData.blogData)

    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Latest News</h2>
            <p className="text-gray-500">
                Present posts in a best way to highlight interesting moments of your blog.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el) => <BlogCard key={el.id} img={el.img} comment={el.comment} title={el.title} date={el.date} />)}
            </div>
        </div>
    )
}

export default BlogSection