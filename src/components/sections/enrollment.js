import { Container, Button } from "react-bootstrap";
import dots from "../../assets/images/dots.png";
import dotsLarge from "../../assets/images/dots-large.png";
import { Link } from "react-router-dom";

const Enrollment = ({bookMySeat}) => {



    return (
        <Container>
            {/* className="py-5 mb-5" */}
         <div className="enrollment-design text-center position-relative">
            <img src={dotsLarge} alt="dots" className="dots-top" />
            <img src={dots} alt="dots" className="dots-bottom" />

              <h2 className="enrollment-title">Wanna learn UI/UX Design like a Pro!</h2>       
             <Button bsPrefix="btn"  variant="bookaseat" onClick={bookMySeat} >Enroll Now</Button>
          </div>
      </Container>
    )
}

export default Enrollment;