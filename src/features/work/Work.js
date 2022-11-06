import mac from './mac.jpg';

const Work = () => {
  return (
    <section className='w3-container' style={{ padding: '128px 16px' }} id='work'>
      <h3 className='w3-center'>OUR WORKS</h3>
      <p class="w3-center w3-large">What we've done for people</p>
      <div className='w3-row-padding' style={{ marginBlockStart: '64px' }}>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
      </div>
      <div className='w3-row-padding' style={{ marginBlockStart: '64px' }}>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
        <div className='w3-col l3 m6'>
          <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
        </div>
      </div>
    </section>
  )
}

export default Work;