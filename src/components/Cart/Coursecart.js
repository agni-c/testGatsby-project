import React, { Component } from "react"
import Heading from "../Reuseable/Heading"
import Img from "gatsby-image"

export default class Coursecart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
    }
  }
  render() {
    //console.log(this.state.courses)

    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Courses" />
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-6 col-md-6 d-flex my-10 mx-10"
                >
                  {/* <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="justify-content-between d-flex">
                      <h6 className="mb-0">{node.title}</h6>
                    </div>
                  </div> */}
                  <div class="card">
                    <Img fixed={node.image.fixed} class="card-img-top" />
                    <div class="card-body">
                      <h5 class="card-title">{node.title}</h5>
                      <div className="info">{node.price}$</div>
                      <button
                        className="snipcart-add-item btn btn-info"
                        data-item-id={node.id}
                        data-item-name={node.title}
                        data-item-price={node.price}
                        data-item-url="https://testlco.netlify.com/"
                        data-item-image={node.image.fixed.src}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
}
