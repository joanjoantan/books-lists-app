import { Paper, Typography } from '@mui/material';

const Book = (props: { book: any }) => {
  const { book } = props;

  return (
    <Paper variant="outlined" style={{ marginTop: '20px' }}>
      <Typography variant="subtitle1">{book.book_title}</Typography>

      <Typography variant="subtitle2">Author: {book.book_author}</Typography>

      <Typography variant="caption" component={'p'}>
        Publisher:{' '}
        {book.book_publication_city && book.book_publication_city + ','}
        {book.book_publication_country && book.book_publication_country + ','}(
        {book.book_publication_year})
      </Typography>

      <Typography variant="caption" component={'p'}>
        Print length: {book.book_pages} pages
      </Typography>
    </Paper>
  );
};

export default Book;
