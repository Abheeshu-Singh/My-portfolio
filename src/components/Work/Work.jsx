import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import ShareStoria from "../../images/portfolio/sharestoria.png"
import CovidTracker from "../../images/portfolio/covid-tracker.png"
import PhotoSave from "../../images/portfolio/photosave.png"
import FinalPractice from "../../images/portfolio/finalpractice.png"
import MovieInfo from "../../images/portfolio/movieinfo.jpg"
import ShopToBuy from "../../images/portfolio/shoptobuy.png"
import movieInfoApp from "../../images/portfolio/MovieInfo-App.png"
import linkedin from "../../images/portfolio/linkedIn.png"
import snapchat from "../../images/portfolio/snapchat.png"




import "./work.scss"




const Work = () => {
  
  return (
    <section className="work" id="work">
      <h1 className="work__title">Some Things I've Built</h1>

      <div className="work__wrapper">
        
        


       

       
        

 

        <div className="project movieInfoApp-project">
          <figure className="project__img-wrapper">
            <a
              href="https://play.google.com/store/apps/details?id=com.AD.movieinfo"
              rel="noopener noreferrer"
              target="_blank"
            >

          <img className="project__img" alt="PhotoSave hero" src={movieInfoApp} />  
             
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>MovieInfo</h4>

            <div className="project__about">
              <p>
              A MovieInfo app built in flutter. Fetching data from TMDB API. Details information about your favorite Movies, 
               actors, recently added movies, and detailed information about each movie. Also check out their trailers.
              </p>
            </div>

            <ul>
              <li>Flutter</li>
              <li>Dart</li>
              <li>TMDB API</li>
           
              
            </ul>

            <div className="project__links">
              <a
                href="https://play.google.com/store/apps/details?id=com.AD.movieinfo"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>  

       

        <div className="project finalpractice-project">
          <figure className="project__img-wrapper">
            <a
             href="https://play.google.com/store/apps/details?id=co.durgeshkumar.finalpractice"
              rel="noopener noreferrer"
              target="_blank"
            >

          <img className="project__img" alt="FinalPractice hero" src={FinalPractice} />
              
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>FinalPractice</h4>

            <div className="project__about">
              <p>
              A FinalPractice is a quiz app built in flutter. To help my friends during covid to prepare for final semester exam with the new exam pattern.
              </p>
            </div>

            <ul>
              <li>Flutter</li>
              <li>Dart</li>
           
              
            </ul>

            <div className="project__links">
              <a
                href="https://play.google.com/store/apps/details?id=co.durgeshkumar.finalpractice"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div> 

         <div className="project photosave-project">
          <figure className="project__img-wrapper">
            <a
              href="https://play.google.com/store/apps/details?id=com.AD.photosave"
              rel="noopener noreferrer"
              target="_blank"
            >

          <img className="project__img" alt="PhotoSave hero" src={PhotoSave} />  
             
            </a>
          </figure>

          <div className="project__info">
            <h5>Featured Project</h5>
            <h4>PhotoSave</h4>

            <div className="project__about">
              <p>
              A PhotoSave app built in flutter. Fetching photo from API. Easy to Download photos on onclick
              </p>
            </div>

            <ul>
              <li>Flutter</li>
              <li>Dart</li>
           
              
            </ul>

            <div className="project__links">
              <a
                href="https://play.google.com/store/apps/details?id=com.AD.photosave"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaExternalLinkAlt
                  className="project__icon"
                  title="View Project"
                />
              </a>
            </div>
          </div>
        </div>       

      </div>
    </section>
  )
}

export default Work
