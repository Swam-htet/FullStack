// components/Footer.js
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>About Us</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget urna nec risus dictum blandit.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <address>
                            123 Street, City<br />
                            Country<br />
                            Email: info@example.com<br />
                            Phone: +123 456 789
                        </address>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
