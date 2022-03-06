import React, { useEffect, useState } from 'react';
import Home from './Components/Home';
import { IMain } from './Models/Home';

function App() {
  const [mainInfo, setMainInfo] = useState<IMain>({
      name: '',
      email: 'string',
      city: 'string',
      occupation: '',
      social: [],
    },
  );

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/resumeData.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(r => {
        return r.json();
      })
      .then((jsonResponse) => {
        const a = jsonResponse.main as IMain;
        setMainInfo(a);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className='App'>
      <Home {...mainInfo} />
    </div>
  );
}

export default App;
