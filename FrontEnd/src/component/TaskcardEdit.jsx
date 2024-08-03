import React from 'react'
import { Box, Checkbox, Button, Flex, Text, IconButton, useColorModeValue, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons';

const TaskcardEdit = ({handleCancel,taskData, handleSave , edittask, handleChange,  }) => {
  return (
    
       <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={edittask.title}
              name='title'
                onChange={handleChange}
                mb={2}
              />
              <FormLabel>Description</FormLabel>
              <Input
                              value={edittask.description}
                              name='description'

                onChange={ handleChange}
                mb={2}
              />
              <FormLabel>Endgoal</FormLabel>
              <Input
                              value={edittask.endgoal}
                              name='endgoal'
                onChange={handleChange}
                mb={2}
              />
              <Flex justify="space-between" mt={2}>
                <Button
                  leftIcon={<CheckIcon />}
                  colorScheme="green"
                  onClick={() => handleSave(taskData.id)}
                >
                  Save
                </Button>
                <Button
                  leftIcon={<CloseIcon />}
                  colorScheme="red"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
              </Flex>
            </FormControl>
   
  )
}

export default TaskcardEdit
