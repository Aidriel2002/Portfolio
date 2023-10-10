import {FaGithub,FaFacebook,FaInstagram, FaTiktok,FaYoutube} from "react-icons/fa";


function Footer() {
    return (
        <>
            <div>
                <footer>
                    <div className="footer-content">
                        <h3>Personal Portfolio</h3>
                        <p>Hello World! I'm Dexter Niel Aidriel D. Basergo currently studying <br/>BSIT at St. Peters's College</p>
                        <div className="social-icons">      
                                <a href="https://github.com/Aidriel2002" target="_blank"><FaGithub /></a>
                                <a href="https://www.facebook.com/aidrieeel"  target="_blank"><FaFacebook /></a>
                                <a href="https://www.instagram.com/"  target="_blank"><FaInstagram /></a>
                                <a href="https://www.tiktok.com/@aidrieeel"  target="_blank"><FaTiktok /></a>
                                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  target="_blank"><FaYoutube /></a> 
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>copyright &copy;2023 Personal Portfolio. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Footer