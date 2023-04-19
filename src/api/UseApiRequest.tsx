import axios from 'axios';
import { useState } from 'react';

const UseApiRequest = () => {
  let [booksList, setBooksList] = useState([]);
  let [count, setCount] = useState(0);

  const [error, setError] = useState(false);

  const fetchBooksLists = (
    page: number,
    search: any,
    setLoading: (loading: boolean) => void
  ) => {
    try {
      let filters: { type: string; values: any[] }[] = [];
      if (search === undefined || search.length === 0) {
        filters = [];
      } else {
        filters = [{ type: 'all', values: [search] }];
      }

      const url = 'http://nyx.vima.ekt.gr:3000/api/books/';
      const data = {
        page: page,
        itemsPerPage: 20,
        filters: filters,
      };

      axios
        .post(url, data)
        .then((res) => {
          setBooksList(res.data.books);
          setCount(res.data.count);
          setError(false);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    error,
    count,
    booksList,
    fetchBooksLists,
  };
};

export default UseApiRequest;
