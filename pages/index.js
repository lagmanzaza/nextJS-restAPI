import React from 'react';
<<<<<<< HEAD
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../apollo/withData'
const Query = gql 
`{
    products {
      id
      name
    }
}`
class App extends React.Component {
  productsRender() {
    let data = this.props.data;
    if (data.loading) {
      return (
        <div>loading products ...</div>
      )
    }
    else {
      return data.products.map(product => {
        return (
          <h1>{product.name}</h1>
        )
      })
    }
  }
  render () {
    return (
      <div>
        {this.productsRender()}
      </div>
    )
  }
}
const graphql_filter = graphql(Query)(App);
export default withData(graphql_filter);
=======
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import ReactDOM from 'react-dom';
export default class Index extends React.Component {
    constructor() {
        super()
        this.state = {
            article:[]
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/api/article`).then((response) => {
            if (response.status === 404 || response.status === 200) {
              return this.state.article;
            }
          }).then((object) => {
            if (object.type === 'error') {
              console.log(object.type, object.message)
            } else {
                this.setState({article});
            }
          })
    }
    render() {
        return (
            <div>
                <Head>
                    <meta charset="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                    <title>Document</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
                    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
                </Head>
                hello people
            </div>
        )
    }
}
>>>>>>> 62dfe06d56ea4298560cf0edc2cb538ff46cd71b
