import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router';

const App = () => {
  return (
    <div>
      <NxWelcome title="personal" />

      <div role="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/page-2">Page 2</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Link to="/page-2">To page 2</Link>} />
        <Route path="/page-2" element={<Link to="/">To bu Page</Link>} />
      </Routes>
    </div>
  );
};

export default App;
