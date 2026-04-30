import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaAward } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="py-5 text-white"
        style={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        }}
      >
        <div className="container text-center py-5">
          <h5 className="fw-light text-uppercase">Welcome To</h5>
          <h1 className="display-4 fw-bold">Paliwal H.S.S School</h1>
          <p className="lead mx-auto mt-3" style={{ maxWidth: "750px" }}>
            Inspiring young minds with knowledge, discipline, creativity, and
            values to build a brighter future.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left Images */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    src="https://images.pexels.com/photos/8617961/pexels-photo-8617961.jpeg?auto=compress&cs=tinysrgb&w=600"
                    className="img-fluid rounded-4 shadow"
                    alt="school"
                  />
                </div>
                <div className="col-6 mt-5">
                  <img
                    src="https://img.freepik.com/premium-photo/picture-three-children-with-sign-that-says-back-school_750792-71946.jpg"
                    className="img-fluid rounded-4 shadow"
                    alt="students"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="https://img.freepik.com/free-photo/view-3d-school-classroom_23-2151103720.jpg"
                    className="img-fluid rounded-4 shadow"
                    alt="classroom"
                  />
                </div>
                <div className="col-6 mt-4">
                  <img
                    src="https://img.freepik.com/premium-vector/cartoon-illustration-girl-with-backpack-backpack_1023984-25668.jpg"
                    className="img-fluid rounded-4 shadow"
                    alt="student"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6">
              <span className="badge bg-primary px-3 py-2 mb-3">
                Our Story
              </span>
              <h2 className="fw-bold mb-4">About Our School</h2>
              <p className="text-muted fs-5">
                Paliwal H.S.S School, Mathura Kosikalan, is a place where
                education meets innovation. We focus on experiential learning,
                conceptual clarity, and personality development.
              </p>
              <p className="text-muted fs-5">
                Our mission is to create confident, disciplined, and responsible
                individuals ready to contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 shadow rounded-4 h-100">
                <FaUserGraduate size={45} className="text-primary mb-3" />
                <h3 className="fw-bold">1200+</h3>
                <p className="text-muted">Students</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 shadow rounded-4 h-100">
                <FaChalkboardTeacher size={45} className="text-success mb-3" />
                <h3 className="fw-bold">80+</h3>
                <p className="text-muted">Qualified Teachers</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 shadow rounded-4 h-100">
                <FaAward size={45} className="text-warning mb-3" />
                <h3 className="fw-bold">98%</h3>
                <p className="text-muted">Academic Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION + MISSION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-5 shadow rounded-4 h-100 bg-white">
                <h3 className="fw-bold text-primary">Our Vision</h3>
                <p className="text-muted fs-5 mt-3">
                  To be an institution of excellence where students become
                  responsible global citizens with strong ethical values,
                  wisdom, and confidence.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-5 shadow rounded-4 h-100 bg-white">
                <h3 className="fw-bold text-success">Our Mission</h3>
                <p className="text-muted fs-5 mt-3">
                  To provide quality education in a nurturing environment that
                  helps every child realize their full potential academically,
                  socially, and emotionally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;