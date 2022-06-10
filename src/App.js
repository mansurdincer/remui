import { ThemeProvider } from '@mui/system';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';
import theme from './styles/theme';
import Appbar from './components/appbar';

function App() {

  useEffect(() => {
    document.title = "React Material UI - Home";
  }, [])

  return (

    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          background: '#fff'
        }}
      >
        {
          <Appbar/>
          /*
          Banner
          Promotions
          title
          Products
          footer
          searchbox
          appdrawer
          */
        }
        <Button variant='contained'>Test</Button>
      </Container>

    </ThemeProvider>
  );
}

export default App;
