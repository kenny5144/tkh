import { Card, SimpleGrid, Text, Heading, Box, Tooltip, CardHeader, CardBody } from "@chakra-ui/react";

const WeatherDaily = ({ data, formatDate }) => {
  return (
    <Box p={4}>
      <SimpleGrid spacing={4} minChildWidth="12rem">
        {data
          ? data.daily.slice(0, 5).map((dayData, i) => (
              <Tooltip label={dayData.summary} aria-label="A tooltip" key={i}>
                <Card bgColor={"#353a58e2"} borderRadius="3xl">
                  <CardHeader>
                    <Heading size="sm" color="white">{formatDate(dayData.dt)}</Heading>
                  </CardHeader>
                  <CardBody>
                    {dayData.weather.map((des, index) => (
                      <Text key={index} color="white">{des.description}</Text>
                    ))}
                    <Text color={"white"}>Day: {dayData.temp.day}°C</Text>
                    <Text color={"white"}>Night: {dayData.temp.night}°C</Text>
                  </CardBody>
                </Card>
              </Tooltip>
            ))
          : null}
      </SimpleGrid>
    </Box>
  );
};

export default WeatherDaily;
