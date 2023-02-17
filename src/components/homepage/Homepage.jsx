import React from "react";
import Link from "next/link";
import Featured from "./Featured";

const Homepage = () => {
  return (
    <div>
      <Featured />
      {/* Content section*/}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2>Exceptional service, with passion</h2>
              <p className="lead">
                We offer high quality and affordable haircuts.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                dolor velit, scelerisque eu mauris ac, suscipit placerat erat.
                Maecenas lacus augue, vestibulum ut sem ac, faucibus ullamcorper
                mauris. Curabitur luctus mauris lacus, vel facilisis neque
                ultricies quis. Maecenas sed nisi vel lacus elementum ornare
                quis ac neque.
              </p>
              <Link href="/booking">
                <a
                  className="btn btn-light mt-3"
                  style={{ width: "60%", fontSize: "1rem" }}
                  type="button"
                >
                  Book for an appointment now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Image element - set the background image for the header in the line below*/}
      <div
        className="py-5 bg-image-full"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/4ulffa6qoKA/1200x800")',
        }}
      >
        {/* Put anything you want here! The spacer below with inline CSS is just for demo purposes!*/}
        <div style={{ height: "20rem" }} />
      </div>
      {/* Content section*/}
      <section className="py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>What our customers say</h2>
              <p className="lead">&quot;Amazing&quot;</p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                dolor velit, scelerisque eu mauris ac, suscipit placerat erat.
                Maecenas lacus augue, vestibulum ut sem ac, faucibus ullamcorper
                mauris. Curabitur luctus mauris lacus, vel facilisis neque
                ultricies quis. Maecenas sed nisi vel lacus elementum ornare
                quis ac neque.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
