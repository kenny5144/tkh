import React from "react";
import { Box, Card, CardHeader, CardBody, Heading, Text, Stack, Flex } from "@chakra-ui/react";

const WeatherCurrent = ({ data, formatDate }) => {
  return (
    <Box p={4} maxW="md" mx="auto">
      {data && (
        <Card bgColor="none" variant="outline" boxShadow="md">
          <CardHeader>
            <Heading color={"#fff"} size="lg" textAlign="center">
              Welcome To {data.timezone}
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4} align="center">
              <Text color={"white"} fontSize="lg" fontWeight="bold">
                {formatDate(data.current.dt)}
              </Text>
              <Text color={"white"} fontSize="2xl" fontWeight="semibold">
                {data.current.temp}°C
              </Text>
              <Stack spacing={2} align="center">
                {data.current.weather.map((des, index) => (
                  <Flex key={index} align="center" direction="row" spacing={2}>
                    <Text color={"white"} fontSize="md" textAlign="center">
                      {des.description}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </CardBody>
        </Card>
      )}
    </Box>
  );
};

export default WeatherCurrent;
