import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div id="container">
        <footer className="footer text-center text-white">
          <div className="container p-4">
            <section className="mb-5">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.facebook.com/sahar.elancry"
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <FaFacebookF className="footer__icon facebook" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.twitter.com/"
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <ImTwitter className="footer__icon twiter" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.google.com"
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <FaGoogle className="footer__icon google" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                role="button"
                href="https://www.instagram.com/sahar_elancry/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="footer__icon instagram" />
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href=" https://www.linkedin.com/in/sahar-elancry-862a52214/"
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <FaLinkedinIn className="footer__icon linkedin" />
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/elancry?tab=projects"
                target="_blank"
                role="button"
                rel="noreferrer"
              >
                <FaGithub className="footer__icon github" />
              </a>
            </section>
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2 text-white">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input placeholder="Email address" type="email" className="form-control" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Google
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Amazon
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        eBay
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Alibaba
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Tiktok
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Twiter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="mb-4 mt-5 text-white">
              <p className="text-white">
                Vacations project 3 John bryce - Made with ReactTS | NodeJS | MySQL
              </p>
              <p>
                <span className="text-white">Made by Sahar Elancry all rights reserved 2021 ®</span>
              </p>
            </section>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
