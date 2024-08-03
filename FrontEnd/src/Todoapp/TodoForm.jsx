import { useState, useEffect } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
} from "@chakra-ui/react";
import { api } from "../fetch/fetch";

const TodoForm = ({ completion, setCompletion }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    endgoal: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const storagedata = JSON.parse(localStorage.getItem("USER_TODO"));
    if (storagedata) {
      setTodo({
        title: storagedata.title,
        description: storagedata.description,
        endgoal: storagedata.endgoal,
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("USER_TODO", JSON.stringify(todo));
  }, [todo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!todo.title || !todo.description || !todo.endgoal) {
      setError("All fields are required");
      return;
    }
    const userId = localStorage.getItem('userId');

    try {
      const response = await api.post(`/tasks/todo`, {
        title: todo.title,
        description: todo.description,
        endgoal: todo.endgoal,
        userId: userId,
      });
      setTodo({
        title: "",
        description: "",
        endgoal: "",
      });
      localStorage.removeItem("USER_TODO");
      setCompletion((prev) => !prev);
      setError("");
      console.log(response);
    } catch (error) {
      setError("Failed to create task");
    }
  };

  return (
    <Box bgColor={"#2a3043"} p={4} borderRadius="lg" boxShadow="lg">
      <FormControl isInvalid={!!error} onSubmit={handleSubmit} as="form">
        <FormLabel color={"white"} htmlFor="title">
          Title
        </FormLabel>
        <Input
          id="title"
          type="text"
          value={todo.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          color={"white"}
          mb={2}
        />
        <FormLabel color={"white"} htmlFor="description">
          Description
        </FormLabel>
        <Input
          id="description"
          type="text"
          value={todo.description}
          onChange={handleChange}
          name="description"
          placeholder="Task description"
          color={"white"}
          mb={2}
        />
        <FormLabel color={"white"} htmlFor="endgoal">
          End Goal
        </FormLabel>
        <Input
          id="endgoal"
          type="text"
          color={"white"}
          value={todo.endgoal}
          onChange={handleChange}
          name="endgoal"
          placeholder="End goal"
          mb={2}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
        <Button
          bgColor="blue.500"
          color="white"
          type="submit"
          mt={4}
          width="full"
        >
          Add Task
        </Button>
      </FormControl>
    </Box>
  );
};

export default TodoForm;
