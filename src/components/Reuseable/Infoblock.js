import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"
export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-white mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            commodi, magnam reiciendis provident reprehenderit dolorem nostrum
            alias cumque nam, dolorum repellendus pariatur quasi, eveniet quae?
            Ea similique dolor rem eligendi cum reiciendis culpa exercitationem
            aliquam fugit accusantium nihil voluptate neque distinctio illo
            quasi labore, eum non nostrum voluptatibus natus quos. Quas, omnis
            fugiat id libero quia aut praesentium eius soluta.
          </p>
          <Link to="/about/">
            <button className="btn btn-warning btn-lg">{heading}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
