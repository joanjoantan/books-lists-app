import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllLists from './AllLists';

test('check the search input', async () => {
  const setup = () => {
    const utils = render(
      <Router>
        <AllLists />
      </Router>
    );
    const input = screen.getByPlaceholderText(
      /search by title/i
    ) as HTMLInputElement;
    return {
      input,
      ...utils,
    };
  };

  const { input } = setup();

  fireEvent.change(input, { target: { value: 'Βιβλίον Ιστορικόν' } });
  expect(input.value).toBe('Βιβλίον Ιστορικόν');
});
