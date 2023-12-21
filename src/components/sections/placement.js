
import partnerone from '../../assets/images/partner-logos/partner-1.png';
import {  Container } from "react-bootstrap";
import greydots from "../../assets/images/grey-dots.png";
import greydotsTwo from "../../assets/images/grey-dots-2.png";

const Placement = () => {
    return (
        <Container>
            <div className="our-placementpartners-design mt-4 position-relative">
                <img src={greydots} alt="dots" className="dots-top" />
                <img src={greydotsTwo} alt="dots" className="dots-bottom" />
                    
                    <h2 className="placement-partner-title mb-5">Our Placement Partners</h2>
                    
                    <div className="d-flex align-items-center flex-wrap text-center justify-content-center mt-2">
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />
                        <img src={partnerone} alt="partner-logo" className="partner-logo" />

                    </div>
            </div>
        </Container>
    )
}

export default Placement;