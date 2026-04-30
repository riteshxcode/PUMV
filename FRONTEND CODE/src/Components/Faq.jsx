import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Accordion from 'react-bootstrap/Accordion';



function Faq() {
    return (

        <>
            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center text-center mb-3">
                        <div className="col-lg-8 col-xl-7">
                            <span className="text-muted">F.A.Q</span>
                            <h2 className="display-5 fw-bold">Frequently Asked Questions</h2>
                            <p className="lead">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit Consequatur
                                quidem eius cum voluptatum quasi delectus.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <span className="text-muted">Lorem ipsum dolor</span>
                            <h2 className="pb-4 fw-bold">Have Any Questions?</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
                                quidem eius cum voluptatum quasi delectus assumenda culpa.
                            </p>
                            <a className="btn btn-primary btn-lg mt-3" href="#">
                                Contact us
                            </a>
                        </div>
                        <div className="col-md-7">
                            <div className="accordion" id="Questions-accordion">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="Questions-headingOne">
                                        <button
                                            aria-controls="Questions-collapseOne"
                                            aria-expanded="false"
                                            className="accordion-button collapsed bg-light"
                                            data-bs-target="#Questions-collapseOne"
                                            data-bs-toggle="collapse"
                                            type="button"
                                        >
                                            <div className="text-muted me-3">
                                                <svg
                                                    className="bi bi-question-circle-fill"
                                                    fill="currentColor"
                                                    height={24}
                                                    viewBox="0 0 16 16"
                                                    width={24}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                </svg>
                                            </div>
                                            Lorem ipsum dolor sit amet adipisicing ?
                                        </button>
                                    </h2>
                                    <div
                                        aria-labelledby="Questions-headingOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#Questions-accordion"
                                        id="Questions-collapseOne"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                                            quos voluptatum at, quibusdam blanditiis saepe soluta laborum,
                                            repellendus nemo id porro dolor eveniet perspiciatis veritatis
                                            doloremque aliquam nam! Libero, nostrum!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="Questions-headingTwo">
                                        <button
                                            aria-controls="Questions-collapseTwo"
                                            aria-expanded="false"
                                            className="accordion-button collapsed bg-light"
                                            data-bs-target="#Questions-collapseTwo"
                                            data-bs-toggle="collapse"
                                            type="button"
                                        >
                                            <div className="text-muted me-3">
                                                <svg
                                                    className="bi bi-question-circle-fill"
                                                    fill="currentColor"
                                                    height={24}
                                                    viewBox="0 0 16 16"
                                                    width={24}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                </svg>
                                            </div>
                                            Lorem ipsum dolor sit amet adipisicing ?
                                        </button>
                                    </h2>
                                    <div
                                        aria-labelledby="Questions-headingTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#Questions-accordion"
                                        id="Questions-collapseTwo"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                                            quos voluptatum at, quibusdam blanditiis saepe soluta laborum,
                                            repellendus nemo id porro dolor eveniet perspiciatis veritatis
                                            doloremque aliquam nam! Libero, nostrum!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="Questions-headingThree">
                                        <button
                                            aria-controls="Questions-collapseThree"
                                            aria-expanded="false"
                                            className="accordion-button collapsed bg-light"
                                            data-bs-target="#Questions-collapseThree"
                                            data-bs-toggle="collapse"
                                            type="button"
                                        >
                                            <div className="text-muted me-3">
                                                <svg
                                                    className="bi bi-question-circle-fill"
                                                    fill="currentColor"
                                                    height={24}
                                                    viewBox="0 0 16 16"
                                                    width={24}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                </svg>
                                            </div>
                                            Lorem ipsum dolor sit amet adipisicing ?
                                        </button>
                                    </h2>
                                    <div
                                        aria-labelledby="Questions-headingThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#Questions-accordion"
                                        id="Questions-collapseThree"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                                            quos voluptatum at, quibusdam blanditiis saepe soluta laborum,
                                            repellendus nemo id porro dolor eveniet perspiciatis veritatis
                                            doloremque aliquam nam! Libero, nostrum!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="Questions-headingFour">
                                        <button
                                            aria-controls="Questions-collapseFour"
                                            aria-expanded="false"
                                            className="accordion-button collapsed bg-light"
                                            data-bs-target="#Questions-collapseFour"
                                            data-bs-toggle="collapse"
                                            type="button"
                                        >
                                            <div className="text-muted me-3">
                                                <svg
                                                    className="bi bi-question-circle-fill"
                                                    fill="currentColor"
                                                    height={24}
                                                    viewBox="0 0 16 16"
                                                    width={24}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                                                </svg>
                                            </div>
                                            Lorem ipsum dolor sit amet adipisicing ?
                                        </button>
                                    </h2>
                                    <div
                                        aria-labelledby="Questions-headingFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#Questions-accordion"
                                        id="Questions-collapseFour"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                                            quos voluptatum at, quibusdam blanditiis saepe soluta laborum,
                                            repellendus nemo id porro dolor eveniet perspiciatis veritatis
                                            doloremque aliquam nam! Libero, nostrum!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )
}

export default Faq