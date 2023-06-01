import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Btn = ({ action, value, rounded = "full", color }) => {
  return (
    <Button
      minWidth="16"
      height="16"
      rounded={rounded}
      onClick={action}
      colorScheme={color}
    >
      {value}
    </Button>
  );
};

const Scorer = () => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);

  const handle = (run, ball, wicket) => {
    setRuns(runs + run);
    setBalls(balls + ball);
    setWickets(wickets + wicket);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      gap="5"
      flexDir="column"
    >
      <Heading>Cricket Scorer</Heading>

      <Text fontSize="3xl">
        {runs} / {wickets} ({Math.floor(balls / 6)}.{balls % 6})
      </Text>

      <Flex
        gap="5"
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        width="60%"
      >
        <Btn action={() => handle(0, 1, 0)} value="." color="blackAlpha" />
        <Btn action={() => handle(1, 1, 0)} value="1" />
        <Btn action={() => handle(2, 1, 0)} value="2" />
        <Btn action={() => handle(3, 1, 0)} value="3" />
        <Btn action={() => handle(4, 1, 0)} value="4" color="green" />
        <Btn action={() => handle(6, 1, 0)} value="6" color="green" />
      </Flex>
      <Flex
        gap="5"
        alignItems="center"
        justifyContent="center"
        wrap="wrap"
        width="60%"
      >
        <Btn
          action={() => handle(1, 0, 0)}
          value="Wide"
          color="blue"
          rounded="3xl"
        />
        <Btn
          action={() => handle(1, 0, 0)}
          value="No Ball"
          color="blue"
          rounded="3xl"
        />
        <Btn
          action={() => handle(0, 1, 1)}
          value="Wicket"
          color="red"
          rounded="3xl"
        />
      </Flex>
    </Flex>
  );
};

export default Scorer;
