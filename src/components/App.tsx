import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import { Col, Container, Row } from 'react-bootstrap';
import Constants from '../utils/Constants';
import Unsplash from '../api/Unsplash'

interface MyState {
  images: any[]
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
    this.setState({images: response.data.results})
  }

  render() {
    return (
      <Container fluid="sm" className="mt-4 p-4 border rounded">
        <Row>
          <Col>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <div>Found {this.state.images.length} images</div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
