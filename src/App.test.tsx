import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders header h1', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const title = screen.getByText(/Books Lists App/i);
  expect(title).toBeInTheDocument();
});
