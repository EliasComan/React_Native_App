import HomeNavigation from './components/navigation/home.navigation';
import List from './components/lista/List';
import { Provider } from 'react-redux';
import Tabs from './components/navigation/tabs';
import createStore from './store/createStore';

export default function App() {
  
  return (
    <Provider store={createStore}>
      <Tabs/>
    </Provider>
  );
}

