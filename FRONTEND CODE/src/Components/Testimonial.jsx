import React from 'react'




function Testimonial() {
    return (
        <>
            <section
                className="rounded-md p-6 text-center shadow-lg md:p-12 md:text-left"
                style={{
                    backgroundImage:
                        "url(https://tecdn.b-cdn.net/img/Photos/Others/background2.jpg)",
                    // // backgroundImage:'url(REACT\Paliwal\src\assets\Images\Testimonal-bg3.jpg)'
                    // background: 'rgb(5,35,75)',
                    // background: 'radial - gradient(circle, rgba(5, 35, 75, 1) 0 %, rgba(148, 168, 233, 1) 69 %)',
                }}
            >
                <div className="flex justify-center">
                    <div className="max-w-3xl">
                        <div className="m-4 block rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-800 dark:shadow-black/20">
                            {/*Testimonial*/}

                            <div className="md:flex md:flex-row">
                                <div className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
                                    <img
                                        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.jpg"
                                        className="rounded-full shadow-md dark:shadow-black/30"
                                        alt="woman avatar"
                                    />
                                </div>
                                <div className="md:ms-6">
                                    <p className="mb-6 font-light text-neutral-500 light:text-neutral-300">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                                        quam sapiente molestiae numquam quas, voluptates omnis nulla ea
                                        odio quia similique corrupti magnam.
                                    </p>
                                    <p className="mb-2 text-xl font-semibold text-neutral-800 light:text-neutral-200">
                                        Rani khandelwal
                                    </p>
                                    <p className="mb-0 font-semibold text-neutral-500 dark:text-neutral-400">
                                        Front-end Engineer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>


    )

}
export default Testimonial