import aboutImage from '../assets/images/about/about.png'; 

import aboutImage01 from '../assets/images/about/01.png'; 
import aboutImage02 from '../assets/images/about/02.png'; 
import aboutImage03 from '../assets/images/about/03.png'; 

export default function About() {
    return (
        <main className="container">
            <h1 className="my-5">About</h1>

            <div className="row g-5 my-5" >
                <div className="col-12 col-md-6  d-flex flex-column justify-content-center">
                    <h2 className="fs-1">Our Story</h2>
                    <p className="my-4">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active
                        presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                        Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </p>
                    <p>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                        diverse assotment in categories ranging from consumer.
                    </p>
                </div>

                <div className="col-12 col-md-6">
                <img src={aboutImage} className="card-img-top w-100" alt="..." />
                </div>

            </div>

            <div className="row row-cols-1 row-cols-md-3 g-5 my-5">
                <div className="col ">
                    <div className="card h-100 border-0">
                        <img src={aboutImage01} className="card-img-top w-100" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title fs-2">Emin Sadiqli</h5>
                            <p className="card-text">
                                Founder & Chairman
                            </p>
                            <div className="d-flex gap-4">
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100 border-0">
                    <img src={aboutImage02} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title fs-2">Emin Sadiqli</h5>
                            <p className="card-text">
                                Founder & Chairman
                            </p>
                            <div className="d-flex gap-4">
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="card h-100 border-0">
                    <img src={aboutImage03} className="card-img-top w-100" alt="..." />
                    <div className="card-body">
                            <h5 className="card-title fs-2">Emin Sadiqli</h5>
                            <p className="card-text">
                                Founder & Chairman
                            </p>
                            <div className="d-flex gap-4">
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </main>
    )
}