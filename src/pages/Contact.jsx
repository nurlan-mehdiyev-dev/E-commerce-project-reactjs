export default function Contact() {
    return (
        <main className="container">
            <h1 className="my-5">About</h1>

            <div className="row  ">
                <div className="col-12 col-md-3  shadow my-4  ">
                    <div className="p-4">
                        <div className="d-flex gap-2  align-items-center">
                            <img src="/images/contact/icons-phone.png" alt="" />
                            <h5>Call To Us</h5>

                        </div>
                        <p className="my-3">
                            We are available 24/7, 7 days a week.
                        </p>
                        <p>
                            Phone: +8801611112222
                        </p>
                        <hr />
                    </div>
                    <div className="p-4">
                        <div className="d-flex gap-2 align-items-center">
                            <img src="/images/contact/icons-mail.png" alt="" />
                            <h5>Write To US</h5>

                        </div>
                        <p className="my-3">
                            Fill out our form and we will contact you within 24 hours.
                        </p>
                        <p>
                            Emails: customer@exclusive.com
                        </p>
                        <p>
                            Emails: support@exclusive.com
                        </p>
                    </div>
                </div>

                <div className="col-12 col-md-9 my-4   ">
                    <form className="row  needs-validation shadow p-3" novalidate>
                        <div className="d-flex  justify-content-between  gap-4 mb-2">
                            <div className="w-100">
                                <input placeholder="Your Name *" type="text" className="form-control border-none p-2"
                                    style={{ backgroundColor: '#fff2f2', border: 'none' }}
                                    id="validationCustom01"
                                    value="" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="w-100">
                                <input placeholder="Your Email *" type="text" className="form-control border-none p-2"
                                    style={{ backgroundColor: '#fff2f2', border: 'none' }}
                                    id="validationCustom01"
                                    value="" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div className="w-100">
                                <input placeholder="Your Phone *" type="text" className="form-control border-none p-2"
                                    style={{ backgroundColor: '#fff2f2', border: 'none' }}
                                    id="validationCustom01"
                                    value="" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                        </div>
                        <textarea
                            style={{ backgroundColor: '#fff2f2', height: '100vh', maxHeight: '400px' }}
                            className="border-0 " name="" id=""></textarea>


                        <div className="col-12 my-4">
                            <button className="btn btn-danger float-end" type="submit">Send Massage</button>
                        </div>
                    </form>
                </div>


            </div>
        </main>

    )
}