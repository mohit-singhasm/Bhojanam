import BlogCard from "./BlogCard";

const data = [
    {
        id: 1,
        img: "src/assets/post__1.webp",
        title: "Healty food Healty life",
        date: "Aug 23, 2024",
        comment: 8,
    },
    {
        id: 2,
        img: "src/assets/post__2.webp",
        title: "Healty food Healty life",
        date: "Aug 23, 2024",
        comment: 8,
    },
    {
        id: 3,
        img: "src/assets/post__3.webp",
        title: "Healty food Healty life",
        date: "Aug 23, 2024",
        comment: 8,
    },
    // {
    //     id: 4,
    //     img: "src/assets/post__1.webp",
    //     title: "Healty food Healty life",
    //     date: "Aug 23, 2024",
    //     comment: 8,
    // }
];

const BlogSection = () => {
  return (
    <div className="container pt-16">
        <h2 className="font-bold text-2xl">Latest News</h2>
        <p className="text-gray-500">
        Present posts in a best way to highlight interesting moments of your blog.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            {data.map((el)=> <BlogCard key={el.id}  img={el.img}  comment={el.comment}  title={el.title}  date={el.date}  />)}
        </div>
    </div>
  )
}

export default BlogSection