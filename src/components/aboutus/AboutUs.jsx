import React from 'react';
import Image from 'next/image';
import banner from '../../../public/img/aboutus/banner.png'
const AboutUs = () => {
    return (
        <section className="mt-0">

            <img src={banner} className="bannerAB" />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>We are..</h2>
                        <p className="lead">A locally owned business, in the heart if Airdrie</p>
                        <p className="mb-0">Welcome to our humble barbershop in the heart of Airdrie! We are a team of passionate and experienced barbers who take pride in providing exceptional service and care for our clients. We believe that a trip to the barbershop is not just about getting a haircut, but it's also an opportunity to relax, socialize and leave feeling confident and refreshed.

                            We understand that affordability is important to our clients, which is why we offer competitive prices without compromising on the quality of our services. We strive to create a warm and welcoming environment where everyone feels comfortable and at home.

                            At our barbershop, we listen to your needs and preferences, and work with you to achieve the look that you desire. We use the latest techniques and top-quality products to ensure that you always leave our shop looking and feeling your best.

                            Thank you for choosing us as your go-to barbershop. We look forward to serving you and exceeding your expectations.</p>
                    </div>Ï
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
