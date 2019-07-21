import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Dualinfoblock({ heading, CardImg, CardBtn }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} />
        <div className="row mx-auto">
          <div className="col-8">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              voluptate pariatur consectetur perferendis, voluptatem incidunt
              ipsum accusamus delectus odio harum similique minima fugit
              deleniti nulla excepturi reiciendis animi sequi corrupti aliquam!
              Est dolor nemo non, a, natus eum rerum modi sequi nisi qui, hic
              tempora quam. Officiis molestias dolor quam. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Eum sapiente itaque ea
              voluptate eaque, deserunt ratione est adipisci consectetur enim.
              Quaerat praesentium suscipit eos accusamus quidem provident
              recusandae id. Doloremque cumque dolorem error repudiandae quasi
              ducimus iusto nihil laboriosam at hic adipisci saepe quam
              provident tempore cupiditate ea iste, officiis mollitia quia enim
              ex a cum. Similique ipsa sit ducimus sunt modi, facilis nemo
              praesentium, non dolorum eaque amet incidunt vitae nisi dolor
              ullam eum magnam tempore nobis quos rerum veniam perferendis
              iusto? Provident totam veritatis ex, ab sunt aspernatur rerum
              consequuntur, sapiente ducimus animi sequi veniam quos repellendus
              adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nesciunt eaque deleniti quaerat aut iusto molestias? Delectus
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img
                className="card-img-top"
                src={CardImg}
                alt="Image Goes Here"
              />
              <div className="card-body">
                <h5 className="card-title text-white">{CardBtn}</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  alias ratione neque similique repellendus quibusdam atque
                  recusandae dolores nostrum ad.
                </p>
                <a href="#" className="btn btn-warning btn-block">
                  {CardBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
