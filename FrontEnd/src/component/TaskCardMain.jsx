import React from 'react'
import { Box, Checkbox, Button, Flex, Text, IconButton, useColorModeValue, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const TaskCardMain = ({taskData,handleEditClick, handleDelete, onCompletedChange}) => {
  return (
    <>
       <Flex align="center" mb={2} justify="space-between">
                <Flex align="center">
                  <Checkbox
                    isChecked={taskData.completed}
                    onChange={() => onCompletedChange(taskData.id, taskData.completed)}
                    mr={3}
                  />
                  <Text fontSize="lg" fontWeight="bold">Title: {taskData.title}</Text>
                </Flex>
                <Flex>
                  <IconButton
                    aria-label="Edit task"
                    icon={<EditIcon />}
                    colorScheme="blue"
                    onClick={() => handleEditClick(taskData)}
                    mr={2}
                  />
                  <IconButton
                    aria-label="Delete task"
                    icon={<DeleteIcon />}
                    colorScheme="red"
                    onClick={() => handleDelete(taskData.id)}
                  />
                </Flex>
              </Flex>
              <Text mb={4}>Description: {taskData.description}</Text>
              <Text mb={4}>EndGoal: {taskData.endgoal}</Text>
              <Text color="gray.400" fontSize="sm">
                {taskData.completed ? 'Completed' : 'Not Completed'}
              </Text>
    </>
  )
}

export default TaskCardMain
