
const Pricing = () => {
  return (
    <section className='w3-container w3-dark-grey' style={{ padding: '128px 16px' }} id='pricing'>
      <h3 className='w3-center'>PRICING</h3>
      <p className="w3-large w3-center">Choose a pricing plan that fits your needs.</p>
      <div className='w3-row-padding w3-stretch' style={{ marginBlockStart: '64px' }}>
        <div className='w3-third w3-section'>
          <ul className='w3-ul w3-white w3-hover-shadow'>
            <li className='w3-black w3-xxlarge w3-padding-32'>Basic</li>
            <li className='w3-padding-16'><b>10GB</b> Storage</li>
            <li className='w3-padding-16'><b>10</b> Emails</li>
            <li className='w3-padding-16'><b>10</b> Domains</li>
            <li className='w3-padding-16'><b>Endless</b> Support</li>
            <li className='w3-padding-16'>
              <h2 className='w3-wide'>$ 10</h2>
              <span className='w3-opacity'>per month</span>
            </li>
            <li className='w3-light-grey w3-padding-24'>
              <button type='button' className='w3-button w3-black w3-padding-16'>
                Sign up
              </button>
            </li>
          </ul>
        </div>
        <div className='w3-third w3-section'>
          <ul className='w3-ul w3-white w3-hover-shadow'>
            <li className='w3-red w3-xxlarge w3-padding-32'>Pro</li>
            <li className='w3-padding-16'><b>25GB</b> Storage</li>
            <li className='w3-padding-16'><b>25</b> Emails</li>
            <li className='w3-padding-16'><b>25</b> Domains</li>
            <li className='w3-padding-16'><b>Endless</b> Support</li>
            <li className='w3-padding-16'>
              <h2 className='w3-wide'>$ 25</h2>
              <span className='w3-opacity'>per month</span>
            </li>
            <li className='w3-light-grey w3-padding-24'>
              <button type='button' className='w3-button w3-black w3-padding-16'>
                Sign up
              </button>
            </li>
          </ul>
        </div>
        <div className='w3-third w3-section'>
          <ul className='w3-ul w3-white w3-hover-shadow'>
            <li className='w3-black w3-xxlarge w3-padding-32'>Premium</li>
            <li className='w3-padding-16'><b>50GB</b> Storage</li>
            <li className='w3-padding-16'><b>50</b> Emails</li>
            <li className='w3-padding-16'><b>50</b> Domains</li>
            <li className='w3-padding-16'><b>Endless</b> Support</li>
            <li className='w3-padding-16'>
              <h2 className='w3-wide'>$ 50</h2>
              <span className='w3-opacity'>per month</span>
            </li>
            <li className='w3-light-grey w3-padding-24'>
              <button type='button' className='w3-button w3-black w3-padding-16'>
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Pricing;