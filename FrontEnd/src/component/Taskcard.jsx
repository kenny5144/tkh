import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Button,
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import Cookie from 'js-cookie'
import { api } from "../fetch/fetch";
import { EditIcon, DeleteIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import axios from "axios";
import TaskCardMain from "./TaskCardMain";
import TaskcardEdit from "./TaskcardEdit";
const Taskcard = ({ data, onEdit, handleDelete, setCompletion }) => {
  const [edittask, setEdittask] = useState({
    id: null,
    title: "",
    description: "",
    endgoal: "",
  });
  const cardColor = useColorModeValue("gray.800", "gray.700");
  const textColor = useColorModeValue("white", "gray.200");

  const handleEditClick = (task) => {
    setEdittask({
      id: task.id,
      title: task.title,
      description: task.description,
      endgoal: task.endgoal,
    });
  };
  const onCompletedChange = async (id, completionStatus) => {
    setCompletion(!completionStatus);
    try {
      await api.put(
        `/tasks/completed/${id}`,
        {
          completed: !completionStatus,
        },
     
      );
      setCompletion((prev) => !prev);
    } catch (error) {}
  };
  const handleSave = async (taskId) => {
    setEdittask({id:null})
    
    try {
      await api.put(
        `/tasks/${taskId}`,
        {
          title:edittask.title, endgoal:edittask.endgoal, description:edittask.description
        },
     
      );
      setCompletion((prev) => !prev);
    } catch (error) {}
  };

  const handleCancel = () => {
    setEdittask({ id: null });
  };
  const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(e.target.value);
    setEdittask({...edittask,  [name]: value });
  };
  return (
    <Flex direction="column" gap={4}>
      {data &&
        data.map((taskData) => (
          <Box
            key={taskData.id}
            p={4}
            borderWidth={1}
            borderRadius="md"
            bg={cardColor}
            color={textColor}
            boxShadow="md"
          >
            {edittask.id === taskData.id ? (
              <TaskcardEdit
                taskData={taskData}
                handleSave={handleSave}
                handleCancel={handleCancel}
                edittask={edittask}
                handleChange={handleChange}
              />
            ) : (
              <>
                <TaskCardMain
                  taskData={taskData}
                  handleEditClick={handleEditClick}
                  handleDelete={handleDelete}
                  onCompletedChange={onCompletedChange}
                />
              </>
            )}
          </Box>
        ))}
    </Flex>
  );
};

export default Taskcard;
