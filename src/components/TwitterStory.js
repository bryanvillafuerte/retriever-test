import { Card } from 'react-bootstrap/';

export default function TwitterStory(props) {
  return (
    <Card border='light p-3 shadow'>
      <blockquote className="blockquote mb-0 card-body">
        <p>
         {props.storyTitle}
        </p>
        <footer className="blockquote-footer">
          <small className="text-muted">
            {props.author}
          </small>
        </footer>
      </blockquote>
    </Card>
  );
}