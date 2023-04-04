import React from 'react';

import banner from '../../../public/img/aboutus/banner.png'
import { useEffect, useState } from 'react';
import placeholder from '../../../public/img/placeholder.png';

const AboutUs = () => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
      };
    return (
        <section className="mt-0">

            <img src={imageLoaded ? banner : placeholder} onLoad={handleImageLoad} className="bannerAB"/>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>We are..</h2>
                        <p className="lead">A locally owned business, in the heart if Airdrie</p>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ipsum, in dictum lacus. Morbi mattis, felis ut tincidunt maximus, nisl diam maximus tortor, vitae ullamcorper eros magna vitae justo. Sed eu felis arcu. Nulla tincidunt felis eget nisl vulputate, nec pharetra tellus tristique. Praesent nec ante eu nisl vehicula aliquet quis a ipsum. Duis in bibendum risus. Vivamus sit amet tincidunt nisl. Nam rutrum nulla rhoncus turpis lobortis pulvinar. Sed molestie libero sed orci molestie, sit amet commodo velit aliquet. Proin in augue rutrum, scelerisque nisi eu, maximus tellus. Fusce cursus semper lectus. Nulla suscipit metus eu purus tincidunt dictum. Ut sagittis diam sit amet faucibus posuere.</p>
                    </div>Ï
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
