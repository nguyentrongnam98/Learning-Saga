
import './App.css';
import {ThemeProvider} from '@material-ui/styles';
import Taskboard from './Components/Taskboard';
import {Provider} from 'react-redux';
import configStore from './redux/store';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const store = configStore()
function App() {
  return (
    <Provider store={store}>
            <ThemeProvider>
              <ToastContainer/>
     <Taskboard/>
  </ThemeProvider>
    </Provider>
  );
}

export default App;
