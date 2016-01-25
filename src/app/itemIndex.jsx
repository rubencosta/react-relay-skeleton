import React, { Component } from 'react'
import Relay, { createContainer } from 'react-relay'
import { Link } from 'react-router'

const Index = ({viewer, relay}) => {
  return (
    <section>
      <ul>
        {viewer.allItems.edges.map((edge) => (
          <li key={edge.node.id}>
            <Link to={`/items/${edge.node.id}`}>
              {edge.node.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default createContainer(Index, {
  initialVariables: {
    count: 10
  },
  fragments: {
    viewer: () => Relay.QL`
        fragment on Viewer{
            allItems(first:$count) {
                edges{
                    node{
                        id
                        title
                    }
                    cursor
                }
            }
        }

    `
  }
})
