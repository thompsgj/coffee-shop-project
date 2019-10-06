import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut cum
              ex saepe consectetur, quo minima, fugit magnam, illo numquam
              voluptatem repellendus quod commodi soluta eligendi. Sapiente
              quaerat dolore quod, culpa amet numquam beatae vero libero cumque
              odit repellendus doloremque soluta repellat totam maxime non
              obcaecati saepe quo dolorum modi eum!
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
