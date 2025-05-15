import { useEffect, useState } from 'react';
import axios from 'axios';

function Tesing() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/joke1') // If using proxy; otherwise use full URL
      .then(response => {
        setJoke(response.data.joke);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 text-center text-lg text-blue-600">
      {loading ? "Loading joke..." : (joke || "No joke received.")}

    </div>
  );
}

export default Tesing;
