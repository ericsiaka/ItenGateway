import { MdEmail } from 'react-icons/md';
import person from './person.png';

const Team = () => {
  return (
    <section className='w3-container' style={{ padding: '128px 16px' }} id='team'>
      <h3 className='w3-center'>THE TEAM</h3>
      <p className='w3-center w3-large'>The ones who runs this company</p>
      <div className='w3-row-padding w3-stretch w3-grayscale' style={{ marginBlockStart: '64px' }}>
        <div className='w3-col l4 m4 w3-margin-bottom'>
          <article className='w3-card'>
            <img src={person} alt='landry' style={{ inlineSize: '100%' }} />
            <div className='w3-container'>
              <h3>Gerard FOKA</h3>
              <p className='w3-opacity'>CEO & Founder</p>
              <p>
                <a href='mailto:gerard.foka@itengateway.co' className='w3-button w3-light-grey w3-block'><MdEmail /> Contact</a>
              </p>
            </div>
          </article>
        </div>
        <div className='w3-col l4 m4 w3-margin-bottom'>
          <article className='w3-card'>
            <img src={person} alt='landry' style={{ inlineSize: '100%' }} />
            <div className='w3-container'>
              <h3>Landry NGOUPEYOU</h3>
              <p className='w3-opacity'>Web Designer</p>
              <p>
                <a href='mailto:landry.ngoupeyou@itengateway.co' className='w3-button w3-light-grey w3-block'><MdEmail /> Contact</a>
              </p>
            </div>
          </article>
        </div>
        <div className='w3-col l4 m4 w3-margin-bottom'>
          <article className='w3-card'>
            <img src={person} alt='landry' style={{ inlineSize: '100%' }} />
            <div className='w3-container'>
              <h3>Eric SIAKA</h3>
              <p className='w3-opacity'>Frontend Web Developer</p>
              <p>
                <a href='mailto:eric.siaka@itengateway.co' className='w3-button w3-light-grey w3-block'><MdEmail /> Contact</a>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Team;