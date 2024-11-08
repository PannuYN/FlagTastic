import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import Test from './Test';
import theme from './Theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/' element={<Test />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
