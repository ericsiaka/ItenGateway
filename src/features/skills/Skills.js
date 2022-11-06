import { ImHtmlFive } from 'react-icons/im'
import { SiJavascript, SiFirebase, SiCss3 } from 'react-icons/si'
import { FaReact } from 'react-icons/fa';

const Skills = () => {
  return (
    <section className='w3-container w3-light-grey w3-padding-64'>
        <div className='w3-row-padding'>
          <div className='w3-col l6'>
            <h3>Our Skills.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore.</p>
          </div>
          <div className='w3-col l6'>
            <p className='w3-wide'><ImHtmlFive className='w3-margin-right w3-text-blue' />HTML5</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '90%' }}>
                90%
              </div>
            </div>
            <p className='w3-wide'><SiCss3 className='w3-margin-right w3-text-blue' />CSS3</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '85%' }}>
                85%
              </div>
            </div>
            <p className='w3-wide'><SiJavascript className='w3-margin-right w3-text-yellow' /> ES6/7</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '80%' }}>
                80%
              </div>
            </div>
            <p className='w3-wide'><FaReact className='w3-margin-right w3-text-teal' /> React.js / redux</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '80%' }}>
                80%
              </div>
            </div>
            <p className='w3-wide'><i className='w3-margin-right w3-green'>w3</i>W3CSS</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '80%' }}>
                90%
              </div>
            </div>
            <p className='w3-wide'><SiFirebase className='w3-margin-right w3-text-yellow' /> Firebase</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '90%' }}>
                90%
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Skills;