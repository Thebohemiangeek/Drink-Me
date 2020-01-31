import React, { useState } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

const Menu = props => {
  const [state, setState] = useState({
    items: props.items.edges,
    teaItems: props.items.edges,
    categories: getCategories(props.items.edges),
  })

  const handleItems = category => {
    let tempItems = [...state.items]

    if (category === "all") {
      setState(state => ({
        ...state,
        teaItems: tempItems,
      }))
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setState(state => ({
        ...state,
        teaItems: items,
      }))
    }
  }

  if (state.items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={() => {
                      handleItems(category)
                    }}
                  >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="row">
            {state.teaItems.map(({ node }) => {
              return (
                <div key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{node.description.description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
        </div>
        <div className="row">
          <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
            <h1>there are no items to display</h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
