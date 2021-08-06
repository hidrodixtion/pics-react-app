import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import { Col, Container, Row } from 'react-bootstrap';

class App extends React.Component {

  onSearchSubmit = (term: string) => {
    console.log(`You are searching ${term}`)
  }

  render() {
    return (
      <Container fluid="sm" className="mt-4 p-4 border rounded">
        <Row>
          <Col>
            <SearchBar onSubmit={this.onSearchSubmit}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
