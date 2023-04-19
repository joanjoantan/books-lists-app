import { render } from '@testing-library/react';
import Book from './Book';

test('renders book content', () => {
  const mock = {
    id: 2086,
    book_author: ['Ανώνυμος'],
    book_title: 'Ο Αλέξανδρος ο Μακεδών',
    book_publication_year: 1529,
    book_publication_country: 'Ιταλία',
    book_publication_city: 'Βενετία',
    book_pages: 104,
  };
  const { getByText } = render(<Book book={mock} />);

  expect(getByText(/Ο Αλέξανδρος ο Μακεδών/i)).toBeInTheDocument();
  expect(getByText(/Author:/i)).toBeInTheDocument();
  expect(getByText(/Publisher:/i)).toBeInTheDocument();
  expect(getByText(/print length: 104 pages/i)).toBeInTheDocument();
});

/* test('should call the onSubmit callback when the form is submitted', () => {
  const onSubmit = jest.fn();
  const { getByPlaceholderText, getByText } = render(<App />);
  const input = getByPlaceholderText(/search by title/i);
  const submitButton = getByText(/search/i);

  fireEvent.change(input, { target: { value: 'Βιβλίον Ιστορικόν' } });
  // fireEvent.click(submitButton);w

  expect(onSubmit).toHaveBeenCalledWith('London');
}); */
/* 
it('should display the city, humidity, and description data', () => {
  const { getByText } = render(
    <OpenWeatherCard
      data={{
        location: 'London',
        weather: 'clear sky',
        humidity: 73,
        temperature: {
          min: 278.87,
          max: 282.09,
        },
        sunrise: 1681362586,
        sunset: 1681411923,
      }}
    />
  );

  expect(getByText(/london/i)).toBeInTheDocument();
  expect(getByText(/Humidity: 73/i)).toBeInTheDocument();
  expect(getByText(/Sunset: 19:52:03/i)).toBeInTheDocument();
  expect(getByText(/clear sky/i)).toBeInTheDocument();
});
 */
