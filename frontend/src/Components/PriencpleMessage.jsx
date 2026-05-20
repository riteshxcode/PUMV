import React from "react";

function PriencpleMessage() {
  return (
    <section className=" bg-light" style={{padding:"96px 0 80px"}} id="principal-message">
      <div className="container">
       

 <div className="ot-heading-block">
                        <span className="ot-pill">Message</span>
                        <h2 className="ot-heading">Message from Our Leaders</h2>
                        <p className="ot-subheading">
            Hear from our Principal and Director about the vision, mission, and values that guide Paliwal H.S.S School.
                                  
                        </p>
                    </div>

        <div className="row g-4">
          {/* Principal Card */}
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded-4 h-100 hover-lift text-center">
              <img
                src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Principal"
                className="rounded-circle mb-3 shadow m-auto"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h4 className="fw-bold mb-1">Dr. R.K. Paliwal</h4>
              <small className="text-muted d-block mb-3">Principal</small>
              <p className="text-muted">
                "Education is not just about academics, but about shaping character and instilling values. 
                At our school, we strive to nurture confident, disciplined, and compassionate individuals."
              </p>
            </div>
          </div>

          {/* Director Card */}
          <div className="col-md-6">
            <div className="p-4 bg-white shadow rounded-4 h-100 hover-lift text-center">
              <img
                src="https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Director"
                className="rounded-circle mb-3 shadow m-auto"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />
              <h4 className="fw-bold mb-1">Mrs. S. Paliwal</h4>
              <small className="text-muted d-block mb-3">Director</small>
              <p className="text-muted">
                "Our mission is to provide a nurturing environment where every child can realize their full potential. 
                We believe in holistic education that balances academics, creativity, and values."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PriencpleMessage;
