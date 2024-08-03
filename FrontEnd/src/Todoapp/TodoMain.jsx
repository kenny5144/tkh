import { useState , useEffect} from 'react';
import TodoForm from './TodoForm';
import Todotasklist from './Todotasklist';
import { Text } from '@chakra-ui/react'
const TodoMain = () => {
  const [completion , setCompletion] = useState()
    
  
    return (
      <div className="container mx-auto p-4">
        <Text>To do app </Text>
       <TodoForm setCompletion={setCompletion}/>
       <Todotasklist setCompletion={setCompletion} completion={completion}/>
       
      </div>
    );
}

export default TodoMain
