import "./Blogs.css"
import { Link } from "react-router-dom"

const Blog = ({blog}) => {
    console.log(blog)
  return (
    <div className="container">
        <img src={blog.urlToImage} alt={blog.title} className="image" />

        <div className="info">
            <h2 className="title">{blog.title}</h2>
            <div className="subtitle">
                <p className="author">{blog.author}</p>
                <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
            </div>
        <p className="description">{blog.description}</p>
        <Link to={`/blogs/${blog.source.id}`} className="btnVerMas">Ver Más</Link>
        </div>
    </div>
  )
}
export default Blog;
