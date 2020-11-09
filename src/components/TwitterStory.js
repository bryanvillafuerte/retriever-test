import { Card } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 30, (x - window.innerWidth / 2) / 30, 1.05]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function TwitterStory( props ) {
  const [prop, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  return (
    <div className="cardContainer">
      <animated.div
                  onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                  onMouseLeave={() => set({ xys: [0, 0, 1] })}
                  style={{ transform: prop.xys.interpolate(trans) }}
      >
        <Fade bottom>
          <Card border='light p-3'>
            <blockquote className="blockquote mb-0 card-body">
              <p className='text-center'>
              {props.storyTitle}
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  {props.storyAuthor}
                </small>
              </footer>
            </blockquote>
          </Card>
        </Fade>
      </animated.div>
    </div>
  );
}