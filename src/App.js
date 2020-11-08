import React, { useState, useEffect } from 'react';
import { Container, CardColumns, Jumbotron, Form } from 'react-bootstrap/';
import TwitterStory from './components/TwitterStory';
import data from './data/data.json';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  
  useEffect(() => {
    const results = data.filter(outerData =>
      outerData.documents.filter(innerData =>
        innerData.author.displayName.includes(searchTerm.toLowerCase))
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <Container>
        <Slide right>
          <h1 className='display-1'>Twitter Archive</h1>
        </Slide>

        <Jumbotron className="shadow">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Filter stories by name of author.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name of author here"
                value={searchTerm}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Jumbotron>

        <CardColumns>
          {searchResults.map((outerData) => 
            <div>
              {outerData.documents.map((innerData) =>
                <Fade bottom key={innerData.id}>
                  <TwitterStory storyTitle={innerData.story.replace( /(<([^>]+)>)/ig, '')} author={innerData.author.displayName} />
                </Fade>
              )}
            </div>
          )};
        </CardColumns>
      </Container>
    </>
  );
}