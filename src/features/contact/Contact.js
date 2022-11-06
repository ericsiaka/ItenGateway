import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
  return (
    <section className='w3-container w3-light-grey' style={{ padding: '128px 16px' }} id='contact'>
      <h3 className='w3-center'>CONTACT</h3>
      <p className='w3-center w3-large'>lets get in touch. Send us a message:</p>
      <div style={{ marginBlockStart: '48px' }}>
        <p><ImLocation2 className='w3-xxlarge w3-margin-right' /> San Fransisco, US</p>
        <p><BsFillTelephoneFill className='w3-xxlarge w3-margin-right' /> <a href='tel:+1'>Tel</a></p>
        <p><MdEmail className='w3-xxlarge w3-margin-right' /> <a href='mailto: contact@itengateway.co'>Email: contact@itengateway.co</a></p>
        <br />
        <form method='post'>
          <section className='w3-section'>
            <input type='text' className='w3-input w3-border' placeholder='Name' name='name' required />
          </section>
          <section className='w3-section'>
            <input type='email' className='w3-input w3-border' placeholder='Email' name='email' required />
          </section>
          <section className='w3-section'>
            <input type='text' className='w3-input w3-border' placeholder='Subject' name='subject' required />
          </section>
          <section className='w3-section'>
            <textarea className='w3-input w3-border' placeholder='Message' rows='5' style={{ resize: 'vertical' }} />
          </section>
          <section className='w3-section'>
            <button type='submit' className='w3-button w3-black'>
              <RiSendPlaneFill /> Send Message
            </button>
          </section>
        </form>
      </div>
    </section>
  )
}

export default Contact;