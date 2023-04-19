import { render } from '@testing-library/react';
import Error from './Error';

test('renders Error messages', () => {
  const { getByText, getByRole } = render(<Error />);

  expect(getByText(/Something went wrong!!/i)).toBeInTheDocument();
  expect(getByRole('heading')).toHaveTextContent('Something went wrong!!');
});
