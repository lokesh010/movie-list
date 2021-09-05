import React from 'react'

function Footer() {
    return (
        <footer className="d-md-flex py-4 footer text-white">
            <div className="container">
                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        © Copyright All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="https://lokesh.com" target="_blank">Lokesh</a>
                    </div>
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
