import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              First, install Prettier globally as node package: npm install -g
              prettier. You can install Prettier for every project individually
              too, but since Prettier should become second nature eventually,
              make it easier for yourself and install it to your globally
              installed npm packages. Second, install Prettier as VS Code
              extension. Once you have installed it, you can use it with CTRL +
              CMD + P (MacOS) or CTRL + Shift + P (Windows) to manually format a
              file or a selection of code. You should have an opened file to
              perform it. If you don’t want to format your file manually every
              time, you can format it on save as well. Therefore you need to
              open your Visual Studio Code User's settings/preferences as JSON
              and put in the following configuration:
            </p>
            <Link to="/about">
              <button className="btn text--uppercase btn-yellow">
                {" "}
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
