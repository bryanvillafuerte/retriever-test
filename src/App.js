import React, { useState, useEffect } from 'react';
import { Container, CardColumns, Jumbotron, Form } from 'react-bootstrap/';
import TwitterStory from './components/TwitterStory';
import data from './data/data.json';
import { Slide } from 'react-reveal/';

export default function App() {
  const initialList = data[0].documents;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  
  useEffect(() => {
    if(searchTerm !== "") {
			let results = initialList.filter((innerData) =>{
					return(innerData.author.displayName.toLowerCase().includes(searchTerm.toLowerCase()));
			});			
			setSearchResults(results);
		} else {
			setSearchResults(initialList);
		}
  }, [initialList, searchTerm]);

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
          {searchResults.map((innerData, key) => (
            <div key={key}>
              <TwitterStory
                storyTitle={innerData.story.replace(/(<([^>]+)>)/gi, "")}
                storyAuthor={innerData.author.displayName}
              />
            </div>
          ))}
        </CardColumns>
      </Container>
    </>
  );
}