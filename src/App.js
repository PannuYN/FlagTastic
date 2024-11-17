import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Test from './Test';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';
import SpecialFlag from './SpecialFlag';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<Test />} />
          <Route path='/sf' element={<SpecialFlag />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
