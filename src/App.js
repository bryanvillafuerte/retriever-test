import React from 'react';
import { Container, CardColumns, InputGroup, FormControl, Button } from 'react-bootstrap/';
import TwitterStory from './components/TwitterStory';
import data from './data/data.json';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export default function App() {
  return (
    <>
      <Container>
        <Slide right>
          <h1 className='display-1'>Twitter Archive</h1>
        </Slide>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Input name of Author"
            aria-label="Input name of Author"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">
              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
              </svg>
              <span>Search</span>
            </Button>
          </InputGroup.Append>
        </InputGroup>

        <CardColumns>
          {data.map((storyData) => 
            <div>
              {storyData.documents.map((moreStoryData) => 
                <Fade bottom key={moreStoryData.id}>
                  <TwitterStory storyTitle={moreStoryData.story.replace( /(<([^>]+)>)/ig, '')} author={moreStoryData.author.displayName} />
                </Fade>
              )};
            </div>
          )};
        </CardColumns>
      </Container>
    </>
  );
}