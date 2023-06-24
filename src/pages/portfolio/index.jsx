import "./style.css"
import Honey from '../../assets/honey.png'
import Animals from "../../assets/animals.png"
export const PortfolioPage = () => {
  return (
    <div className="main"> 
       <div className="content_block">
        <h2>My Portfolio</h2>
        <div className="portfolio_block">
           <div className="portfolio_bl">
             <img className="portfolio_img" src={Animals} alt=""/>
          </div>
          <div>
            <h4>Heart in paws</h4>
            <p className="portfolio_project">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <a className="githud" href="https://my-final-project-nine.vercel.app/">https://github.com/sarausen</a>
          </div>
        </div>
        <div className="portfolio_block">
           <div  className="portfolio_bl">
              <img className="portfolio_img" src={Honey} alt="" />
          </div>
          <div>
            <h4>Alpine honey</h4>
            <p className="portfolio_project">It was necessary to create a bright landing page that would tell visitors about the product, its advantages and useful properties to the fullest possible extend. We have decided to use the original design. A draft model turned out to be minimalistic, but with catchy accents.</p>
            <a className="githud" href="https://github.com/sarausen/DOMGallery">https://github.com/sarausen</a>
          </div>
        </div>
       </div>
      </div>
  )
}