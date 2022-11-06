import { useLocation } from 'react-router-dom'

const NotFound = () => {
  const { pathname } = useLocation();
  return (
    <section>
      {pathname} not found.
    </section>
  )
}

export default NotFound;