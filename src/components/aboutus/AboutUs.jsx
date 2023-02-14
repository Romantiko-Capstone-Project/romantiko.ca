import React from 'react';

import Image from 'next/image';
const AboutUs = () => {
    return (
        <section class="py-5">
            <div class="text-center my-5">
                <Image class="img-fluid rounded-circle mb-4" src= '/img/aboutus/banner-aboutus.jpg' layout='fill' alt="..." />
                

            </div>
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>We are..</h2>
                        <p class="lead">A locally owned business, in the heart if Airdrie</p>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non malesuada ipsum, in dictum lacus. Morbi mattis, felis ut tincidunt maximus, nisl diam maximus tortor, vitae ullamcorper eros magna vitae justo. Sed eu felis arcu. Nulla tincidunt felis eget nisl vulputate, nec pharetra tellus tristique. Praesent nec ante eu nisl vehicula aliquet quis a ipsum. Duis in bibendum risus. Vivamus sit amet tincidunt nisl. Nam rutrum nulla rhoncus turpis lobortis pulvinar. Sed molestie libero sed orci molestie, sit amet commodo velit aliquet. Proin in augue rutrum, scelerisque nisi eu, maximus tellus. Fusce cursus semper lectus. Nulla suscipit metus eu purus tincidunt dictum. Ut sagittis diam sit amet faucibus posuere.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
