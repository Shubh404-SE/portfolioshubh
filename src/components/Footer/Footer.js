import React from 'react';
import './Footer.css';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {




    window.addEventListener('scroll', (event) => {
        let tatbun = document.getElementsByClassName("btn").length;
        let toUp = document.getElementsByClassName("btn")[tatbun - 1].firstChild;

        if (window.pageYOffset !== undefined) {
            if (window.pageYOffset > 75) {
                toUp.style.color = "rgb(30, 109, 189)";
                toUp.style.display="block";
            }
            else {
                toUp.style.color = "transparent";
                toUp.style.display="none";
            }
        }
        else
            toUp.style.color = "transparent";
    });
    const scroller = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className='footercontainer'>
            <div className='footercontent'>
                {/* <div className="socialmedialinks">
                    <a href="/" className='fb'><FacebookIcon /></a>
                    <a href="/" className='twt'><TwitterIcon /></a>
                    <a href="/" className='insta'><InstagramIcon /></a>
                    <a href="/" className='yt'><YouTubeIcon /></a>
                </div> */}
                <div className='copyrights'>
                    <h3>Thank You</h3>
                    <h3>Copyright @ shubham</h3>
                </div>
            </div>
            <button onClick={scroller} className="btn"><img src="https://media.tenor.com/LUNANcnXLiUAAAAC/up-arrow.gif" alt="img" /></button>
            

        </div>
    )
}

export default Footer
