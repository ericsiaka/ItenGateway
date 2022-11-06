import map from './map.jpg';

const Location = () => {
  return (
    <section style={{ padding: '128px 16px' }} id='location'>
      <img src={map} className='w3-image w3-greyscale' style={{ inlineSize: '100%', marginBlockStart: '48px' }} />
    </section>
  )
}

export default Location;