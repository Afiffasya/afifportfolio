import Card from 'react-bootstrap/Card';
import vid from "../assets/img/vid.gif";
import 'animate.css';

export const Projectt = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    return (
        <div className='prj' id='projects'>
        <h1>Project</h1>
        <h4>Mini Project responsive website from dibimbing.id built using HTML/CSS and bootstrap</h4>
        <Card responsive={responsive} infinite={true} className="prj-slider">
      <Card.Img src={vid} />
    </Card>
      </div>
    );
  }
  
