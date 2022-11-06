import { BsFillMenuButtonFill } from 'react-icons/bs';
import phone_buildings from './phone_buildings.jpg';

export const Knowledge = () => {
  return (
    <section className='w3-container w3-light-grey' style={{ padding: '128px 16px' }}>
      <div className='w3-row-padding'>
        <div className='w3-col m6'>
          <h3>We know design.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore.</p>
          <p>
            <a href='#work' className='w3-button w3-black'><BsFillMenuButtonFill /> View Our Works</a>
          </p>
        </div>
        <div className='w3-col m6'>
          <img src={phone_buildings} alt='building' width={700} height={394} />
        </div>
      </div>
    </section>
  )
}

export const Statistics = () => {
  return (
    <section className='w3-container w3-row w3-center w3-dark-grey w3-padding-64'>
      <div className='w3-quarter'>
        <span className='w3-xxlarge'>4+</span>
        <br /> Partners
      </div>
      <div className='w3-quarter'>
        <span className='w3-xxlarge'>2+</span>
        <br /> Projects Done
      </div>
      <div className='w3-quarter'>
        <span className='w3-xxlarge'>7+</span>
        <br /> Happy Client
      </div>
      <div className='w3-quarter'>
        <span className='w3-xxlarge'>8+</span>
        <br /> Meetings
      </div>
    </section>
  )
}
