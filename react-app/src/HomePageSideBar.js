import React from 'react';
import { Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
    return (
        <Container>
            <Heading my="30px" p="10px"> Chakra UI Components</Heading>
            <Text marginLeft="30px"> Peanut Butter and Jelly</Text>
            <Text ml="30px" color = "blue.300" fontWeight="bold"> is gross </Text>
        </Container>
    )
}