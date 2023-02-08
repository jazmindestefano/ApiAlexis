import './App.css';
import Form from './components/Form.component.jsx'
import {Flex} from '@chakra-ui/react'
import Results  from './components/Results.component';
import { useEffect, useState } from 'react';
import { getResults } from './utils/result';

function App() {

  const [result, setResult] = useState(null)

  useEffect(() => {
    const apiResult = getResults()
    apiResult.then((value) => {
      setResult(value)
    });
  }, [])

  return (
    <><Flex w={'100vw'} h={'100vh'} align={'center'} justify={'center'} direction={'column'}>
      <Form />
      <Results result={result} />
    </Flex></>
  );
}

export default App;
