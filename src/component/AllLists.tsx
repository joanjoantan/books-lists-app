import { Grid, Pagination, TextField } from '@mui/material';
import { Key, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UseApiRequest from '../api/UseApiRequest';
import Book from './Book';
import Error from './Error';
import Loading from './Loading';
import NoFound from './NoFound';

const BooksList = () => {
  let currentUrlParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [flags, setFlags] = useState(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState('');

  const { error, booksList, count, fetchBooksLists } = UseApiRequest();

  useEffect(() => {
    let pageURL = localStorage.getItem('page');
    if (pageURL) {
      setPage(parseInt(pageURL));
    }

    if (flags) {
      fetchBooksLists(page, [], setLoading);
      setFlags(false);
    }
  }, [page, flags, fetchBooksLists]);

  const handleChange = (event: any, value: any) => {
    setLoading(true);
    localStorage.setItem('page', value);
    setPage(value);

    currentUrlParams.set('page', value);
    navigate(window.location.pathname + '?' + currentUrlParams.toString());
    setFlags(true);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const input = e.target.value;
    setSearch(input);
    fetchBooksLists(1, input, setLoading);
  };

  return (
    <>
      <TextField
        name="name"
        placeholder="Search by Title / Author"
        value={search}
        onChange={handleSearch}
        variant="outlined"
        size="small"
        fullWidth
        style={{ marginBottom: '20px' }}
      />

      {loading && <Loading />}

      {booksList && !loading && (
        <>
          {error && <Error />}

          {count === 0 && <NoFound />}

          {count > 0 && (
            <>
              <Grid container justifyContent="flex-end">
                <Pagination
                  count={Math.trunc(count / 20 + 1)}
                  page={Number(page) || 1}
                  onChange={handleChange}
                  color="primary"
                />
              </Grid>

              {booksList.map((book: { id: Key | null | undefined }) => (
                <Book book={book} key={book.id} />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

export default BooksList;
