import { ImLocation2 } from 'react-icons/im';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { RiSendPlaneFill } from 'react-icons/ri';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

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

        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required(`Name is required!`),
            email: Yup.string().email(`Email is not valid!`).required(`Email is required`),
            subject: Yup.string().required(`Subject is required!`)
          })}
          onSubmit={(values, action) => {
            console.log(values)

            action.resetForm();
          }}
        >
          {
            (formik) => (
              <Form method='post'>
                <section className='w3-section'>
                  <input type='text' className='w3-input w3-border' inputMode='text' enterKeyHint='next' id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleChange} autoComplete='name' placeholder='Name' />
                </section>
                <section className='w3-section'>
                  <input type='email' className='w3-input w3-border' inputMode='email' enterKeyHint='next' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleChange} autoComplete='email' placeholder='Email' />
                </section>
                <section className='w3-section'>
                  <input type='text' className='w3-input w3-border' inputMode='text' enterKeyHint='next' id='subject' name='subject' value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleChange} placeholder='Subject' />
                </section>
                <section className='w3-section'>
                  <textarea className='w3-input w3-border' inputMode='text' enterKeyHint='enter' id='message' rows='5' name='message' value={formik.values.message} onChange={formik.handleChange} placeholder='Message' style={{ resize: 'vertical' }} />
                </section>
                <section className='w3-section'>
                  <button type='submit' className='w3-button w3-black w3-ripple w3-mobile'>
                    <RiSendPlaneFill /> Send Message
                  </button>
                </section>
              </Form>
            )
          }
        </Formik>

      </div>
    </section>
  )
}

export default Contact;