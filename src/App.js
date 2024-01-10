import logo from './logo.svg';
import './App.css';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
function App() {
  return (
    <div className="App">
      <Input placeholder="medium size" size="md" margin={2} />
      <Stack direction="row" spacing={4} align="center" margin={2}>
        <Button colorScheme="teal" variant="outline">
          Generate Segitiga
        </Button>
        <Button colorScheme="teal" variant="outline">
          Generate Bilangan Ganjil
        </Button>
        <Button colorScheme="teal" variant="outline">
          Generate Bilangan Prima
        </Button>
      </Stack>
    </div>
  );
}

export default App;
