import { useParams } from "react-router-dom"
import { newsMock } from "../../mocks/newsMock"
import {useState} from "react"
import "./DetalleBlog.css"
import { Link } from "react-router-dom"


const DetalleBlog = () => {
  const {id}= useParams()
  const [blog, setBlog]= useState(...newsMock.filter((blog)=> blog.source.id== id));
  console.log(blog)
  return (
    <div className="containerDetalle">
        <img src={blog.urlToImage} alt={blog.title} className="image" />

        <div className="info">
            <h2 className="title">{blog.title}</h2>
            <div className="subtitle">
                <p className="author">{blog.author}</p>
                <p>{new Date(blog.publishedAt).toLocaleString("es")}</p>
            </div>
        <p className="description">{blog.description}</p>
        <p className="content">{blog.content}</p>
        <Link to={`/`} className="btnVerMas">Volver</Link>
        </div>
    </div>
  )
}

export default DetalleBlog