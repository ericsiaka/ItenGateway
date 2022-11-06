import './App.css';
import { Routes, Route } from 'react-router-dom';
import Root from './Root';
import NotFound from './NotFound';

const App = () => {
  return (    
    <Routes>
      <Route path='/'>
        <Route index element={<Root />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App;