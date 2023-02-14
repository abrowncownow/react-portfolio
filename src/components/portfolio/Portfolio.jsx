import React from 'react'
import './portfolio.css'
import ComposerQuizPreview from '../../assets/ComposerQuizPreview.jpg'
import ShowHeroPreview from '../../assets/ShowHeroPreview.jpg'
import ReadMeProPreview from '../../assets/ReadMeProPreview.jpg'
import BoundlessPreview from '../../assets/BoundlessPreview.jpg'
import DevHubPreview from '../../assets/DevHubPreview.jpg'
import StoreBackendPreview from '../../assets/StoreBackendPreview.jpg'
const data = [


{
  id: 1,
  image: ComposerQuizPreview,
  title: 'Composer Quiz - Classical Music Heaven',
  github: 'https://github.com/abrowncownow/composer-quiz',
  demo: 'https://abrowncownow.github.io/composer-quiz/index.html'
},  
{
  id: 2,
  image: BoundlessPreview,
  title: 'Boundless.io - Collaborative Short Stories (DB not live)',
  github: 'https://github.com/dberry38/boundless',
  demo: 'https://boundless-stories.herokuapp.com/'
}, 
{
  id: 3,
  image: ShowHeroPreview,
  title: 'ShowHero.net - Find Events. Buy Tickets. Book Rooms. All in one place.',
  github: 'https://github.com/abrowncownow/event-booker',
  demo: 'https://showhero.net'
},
{
  id: 4,
  image: ReadMeProPreview,
  title: 'ReadMe Pro Gen 9000 - The ultimate CLI ReadMe Generator',
  github: 'https://github.com/abrowncownow/readme-pro',
  demo: 'https://youtu.be/V2aOzY80wJo'
},
{
  id: 5,
  image: StoreBackendPreview,
  title: 'Store Backend API - Online Store API',
  github: 'https://github.com/abrowncownow/store-backend',
  demo: 'https://www.youtube.com/watch?v=Is1CvYbDQ-E'
},

{
  id: 6,
  image: DevHubPreview,
  title: 'DevHub - Find Devs & Join Projects (MERN)',
  github: 'https://github.com/abrowncownow/DevHub',
  demo: 'https://devhub-uw.herokuapp.com/'
}, 
]







const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__image-item">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }




      </div>
    </section>
  )
}

export default Portfolio