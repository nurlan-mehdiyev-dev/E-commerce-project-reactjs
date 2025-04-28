import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <>
            <section className="my-3">
                <Carousel>
                    <Carousel.Item>
                        <img className='w-100' src="https://cdn.mos.cms.futurecdn.net/Pq8dDpUdQNk5NXKrgcqodi-1200-80.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src="https://cdn.mos.cms.futurecdn.net/Pq8dDpUdQNk5NXKrgcqodi-1200-80.jpg" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='w-100' src="https://cdn.mos.cms.futurecdn.net/Pq8dDpUdQNk5NXKrgcqodi-1200-80.jpg" alt="" />
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="container my-5">
                <div className="text-danger d-flex gap-2">
                    <img src="src\assets\images\home\red rectangle.png" alt="" />
                    <p className="my-2">Featured</p>
                </div>
                <h2 className="my-3">
                    Shop Collection
                </h2>
                <div className="my-2">
                    <div className="row">

                        <div className="col-12 col-md-6 position-relative mb-3">
                            <img className="w-100"
                                src="src\assets\images\home\наушники.png"
                                alt="" />
                            <div className="position-absolute bottom-0  z-index-2 p-4">
                                <h3>Headband</h3>
                                <a href="/pages/shop/shop.html text-undeline">
                                    <p>Collection <i className="bi bi-arrow-right"></i>
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className=" mb-4  position-relative">

                                <img className="w-100" src="src\assets\images\home\наушники мини.png" alt="" />
                                <div className="position-absolute bottom-0  z-index-2 p-4">
                                    <h3>Earbuds</h3>
                                    <a href="/pages/shop/shop.html text-undeline">
                                        <p>Collection <i className="bi bi-arrow-right"></i>
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="  position-relative">
                                <img className="w-100" src="src\assets\images\home\кабель.png" alt="" />
                                <div className="position-absolute bottom-0  z-index-2 p-4">
                                    <h3>Accessories</h3>
                                    <a href="/pages/shop/shop.html text-undeline">
                                        <p>Collection <i className="bi bi-arrow-right"></i>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="my-5">
                <div>
                    <div className="text-danger container  d-flex gap-2">
                        <img src="src\assets\images\home\red rectangle.png" alt="" />
                        <p className="my-2">Featured</p>
                    </div>
                    <h2 className="my-3 container">
                        Promotion
                    </h2>
                </div>

                <div className="my-2 ">
                    <div className="row g-0">

                        <div className="col-12 col-md-6 ">
                            <img className="w-100" src="src\assets\images\home\promotiona.png" alt="" />

                        </div>

                        <div className="col-12 col-md-6 p-5"
                            style={{ backgroundColor: "#ffaa0081" }}
                        >
                            <div className="">
                                <p className="text-primary fw-bold">PROMOTION</p>
                                <p className="fs-1 fw-bold">Hurry up! 40% OFF</p>
                                <p>Thousands of high tech are waiting for you</p>
                                <p>Offer expires in:</p>

                                <div className="d-flex gap-2 flex-wrap fw-bold ">
                                    <div className="">
                                        <div className="p-2 fs-3 bg-light">
                                            02
                                        </div>
                                        <p className="text-center">Days</p>
                                    </div>
                                    <div className="">
                                        <div className="p-2 fs-3 bg-light">
                                            02
                                        </div>
                                        <p className="text-center">Hours</p>
                                    </div>
                                    <div className="">
                                        <div className="p-2 fs-3 bg-light text-center">
                                            02
                                        </div>
                                        <p className="text-center">Minutes</p>
                                    </div>
                                    <div className="">
                                        <div className="p-2 fs-3 bg-light text-center">
                                            02
                                        </div>
                                        <p className="text-center">Seconds</p>
                                    </div>
                                </div>
                                <button className="btn btn-dark px-5">
                                    Shop now
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section className="my-5">
                <div>
                    <div className="text-danger container  d-flex gap-2">
                        <img src="src\assets\images\home\red rectangle.png" alt="" />
                        <p className="my-2">Featured</p>
                    </div>
                    <h2 className="my-3 container">
                        Promotion
                    </h2>
                </div>

                <div className="my-2 "
                    style={{ backgroundColor: " #211C24" }}

                >
                    <div className="container">
                        <div className="row g-0 ">

                            <div className="col-12 col-md-6 d-flex justify-content-center text-start flex-column ">
                                <p className="text-white-50">Pro.Beyond.</p>
                                <h3 className="text-light display-2">IPhone 14 <b>Pro</b> </h3>
                                <p className="text-white-50">Created to change everything for the better. For everyone</p>
                                <button
                                    style={{ width: "fit-content" }}
                                    className="btn btn-dark px-5 border bg-transparent"
                                >
                                    Shop now
                                </button>
                            </div>

                            <div className="col-12 col-md-6 p-x ">
                                <div
                                    style={{ maxWidth: "450px" }}

                                >
                                    <img className="w-100" src="src\assets\images\home\Iphone Image.png" alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="p-5">
                <h2 className="text-danger text-center my-5">Feedback Corner</h2>
                <div className="row g-1">

                    <div className="col-12 col-md-4 p-3 shadow">
                        <i className="bi bi-quote text-danger"></i> <br />
                        <h3 className="text-danger fs-4 my-3">
                            Emily Wilson
                        </h3>
                        <p>
                            The customer experience was exceptional from start to finish. The website is user-friendly, the checkout
                            process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
                        </p>
                    </div>

                    <div className="col-12 col-md-4  shadow p-3"
                        style={{ background: "#E07575" }}

                    >
                        <i className="bi bi-quote text-danger"></i> <br />
                        <h3 className="text-danger fs-4 my-3">
                            Emily Wilson
                        </h3>
                        <p>
                            The customer experience was exceptional from start to finish. The website is user-friendly, the checkout
                            process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
                        </p>
                    </div>

                    <div className="col-12 col-md-4 p-3 shadow">
                        <i className="bi bi-quote text-danger"></i> <br />
                        <h3 className="text-danger fs-4 my-3">
                            Emily Wilson
                        </h3>
                        <p>
                            The customer experience was exceptional from start to finish. The website is user-friendly, the checkout
                            process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!
                        </p>
                    </div>

                </div>
            </section>

            <section className="">

                <div>
                    <div className="text-danger container  d-flex gap-2">
                        <img src="src\assets\images\home\red rectangle.png" alt="" />
                        <p className="my-2">Our Products</p>
                    </div>
                    <h2 className="my-3 container">
                        Explore Our Products
                    </h2>
                </div>

                <div className="row">

                    <div className="col-12 col-md-3 p-4 ">

                        <div className="text-center ">
                            <img className="w-100" src="src\assets\images\home\tablet.png" alt="" />
                        </div>


                        <h3 className=" fs-4 my-3">
                            Popular products
                        </h3>
                        <p>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </p>
                        <button className="btn bg-transparent border">Shop Now</button>
                    </div>

                    <div className="col-12 col-md-3 p-4 bg-secondary  bg-opacity-10 ">

                        <div className="text-center ">
                            <img className="w-100" src="src\assets\images\home\tablet.png" alt="" />
                        </div>

                        <h3 className=" fs-4 my-3">
                            Popular products
                        </h3>
                        <p>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </p>
                        <button className="btn bg-transparent border">Shop Now</button>
                    </div>

                    <div className="col-12 col-md-3 p-4 "
                        style={{ background: '#909090' }}

                    >

                        <div className="text-center ">
                            <img className="w-100" src="src\assets\images\home\tablet.png" alt="" />
                        </div>

                        <h3 className=" fs-4 my-3">
                            Popular products
                        </h3>
                        <p>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </p>
                        <button className="btn bg-transparent border">Shop Now</button>
                    </div>

                    <div className="col-12 col-md-3 p-4 text-light"
                        style={{ background: '#2C2C2C' }}

                    >
                        <div className="text-center ">
                            <img className="w-100" src="src\assets\images\home\tablet.png" alt="" />
                        </div>

                        <h3 className=" fs-4 my-3">
                            Popular products
                        </h3>
                        <p>
                            iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
                        </p>
                        <button className="btn btn-dark bg-transparent border">Shop Now</button>
                    </div>



                </div>
            </section>
        </>
    )
}