import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import img1 from '../../../public/img/homepage/img1.jpg'
import img2 from '../../../public/img/homepage/img2.jpg'
import img3 from '../../../public/img/homepage/img3.jpg'
import '../../../styles/homepage.module.css'

const proprietes = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Carousel = () => {
    return (
        <>
            <div className="containerSlide">
            <Slide {...proprietes}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
            </div>
        </>
    );
}

export default Carousel;
