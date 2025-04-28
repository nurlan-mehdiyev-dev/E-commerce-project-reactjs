export default function Footer() {
    return (
        <footer className=" p-5 text-light mt-5 bg-danger" >
            <div className="row">
                <div className="col-12 col-sm-2">
                    <h4 className="mb-3">
                        Exclusive
                    </h4>
                    <p>
                        Subscribe
                    </p>
                    <p>
                        Get 10% off your first order
                    </p>
                    <input className=" p-2  bg-transparent border border-light  text-light" type="text" placeholder=" Enter your email" />
                </div>
                <div className="col-12 col-sm-2">
                    <h4 className="mb-3">
                        Support
                    </h4>
                    <p>
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </p>
                    <p>
                        exclusive@gmail.com
                    </p>
                    <p>
                        +88015-88888-9999
                    </p>
                </div>
                <div className="col-12 col-sm-2">
                    <h4 className="mb-3">
                        Account </h4>
                    <p>
                        My Account
                    </p>
                    <p>
                        Login / Register
                    </p>
                    <p>
                        Cart
                    </p>
                    <p>
                        Shop
                    </p>
                </div>
                <div className="col-12 col-sm-2">
                    <h4 className="mb-3">
                        Quick Link </h4>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        Terms Of Use
                    </p>
                    <p>
                        FAQ
                    </p>
                    <p>
                        Contact
                    </p>
                </div>
                <div className="col-12 col-sm-2">
                    <h4 className="mb-3">
                        Download App
                    </h4>
                    <p>
                        <small className="text-light">
                            Save $3 with App New User Only
                        </small>
                    </p>
                    <div>
                        <img src="/images/footer/qr.png" alt="" />
                    </div>
                </div>


            </div>
            <div className="mt-5">
                <p className="text-light text-center">
                    Copyright Rimel 2022. All right reserved
                </p>
            </div>
        </footer>
    )
}