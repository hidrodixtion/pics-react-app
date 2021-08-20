import React from 'react';
import './App.css';
import SearchBar from './SearchBar';
import { Col, Container, Row } from 'react-bootstrap';
import Constants from '../utils/Constants';
import Unsplash from '../api/Unsplash'
import ImageList from './ImageList'
import { ImageModel } from '../model/ImageModel';

interface MyState {
  images: ImageModel[]
}

class App extends React.Component<{}, MyState> {

  state: MyState = {
    images: []
  }

  onSearchSubmit = async (term: string) => {
    // console.log(`You are searching ${term}`)
    let response = await Unsplash.get(`${Constants.baseUrl}/search/photos`, {
      params: {
        query: term
      }
    })
    let images = response.data.results.map((result: any): ImageModel => {
      return ({id: result.id, description: result.description, url: result.urls.regular})
    })
    this.setState({images: images})
  }

  render() {
    return (
      <Container fluid="sm" className="mt-4 p-4 border rounded">
        <Row>
          <Col>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <div>Found {this.state.images.length} images</div>
            <ImageList images={this.state.images}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
