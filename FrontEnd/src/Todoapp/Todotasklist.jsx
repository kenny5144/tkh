import { useState , useEffect} from 'react';
import { DeleteIcon } from '@chakra-ui/icons'
import { api } from '../fetch/fetch';
import {
  Flex,
  Text,
  Input,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Checkbox,
  IconButton
} from '@chakra-ui/react'

import Taskcard from '../component/Taskcard';
const Todotasklist = ({task, completion ,setCompletion}) => {
  const [data , setData]= useState()
  
  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const response = await api.get(
          `/tasks/${userId}`,
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        // setError(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [completion]);
  const handleDelete = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`,);
      setCompletion(prev => !prev);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  const completedData = data&& data.filter(task => task.completed) 
  const incompletedData = data&& data.filter(task => !task.completed) 
    return (
        <Tabs variant='line' mt='2%' w='100%'>
        <TabList>
          
          <Tab color={"white"} >Incomplete Tasks</Tab>
          <Tab color={"white"}>Completed Tasks</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
      
     <Taskcard setCompletion={setCompletion} handleDelete={handleDelete} data={incompletedData}/>
          </TabPanel>

          <TabPanel>
     <Taskcard setCompletion={setCompletion} data={completedData} handleDelete={handleDelete}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
      );
}

export default Todotasklist
