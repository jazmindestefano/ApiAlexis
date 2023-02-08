import { VStack, Text } from '@chakra-ui/react'


const Results = ({result}) => {

    console.log(result.abilities.map((item) => item.ability.name))

    return (
        <VStack w={'80%'} bgColor={'lightblue'}>
            <Text>Api Results</Text>
            <VStack w={'100%'}>
            {
                result.abilities?.map((item) => 
                {
                    return (
                        <>
                        
                        <Text>
                            {item.ability.name}
                        </Text>
                        <Text>
                            {item.slot}
                        </Text>
                        </>
                    )
                }
                )
            }
            </VStack>
        </VStack>
    )
}

export default Results
