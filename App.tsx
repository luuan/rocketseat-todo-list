import { StatusBar } from 'expo-status-bar';
import TodoList from './src/screens/TodoList';


export default function App() {
  return (
    <>
      <StatusBar translucent={true} style='light'/>
      <TodoList/>
    </>
  );
}

