import { VStack, Text, Stack } from '@chakra-ui/react'


const Results = ({result}) => {

    return (
        
        <VStack w={'80%'}>
            <Text>Pokemon Results</Text>
            <Stack w={'100%'} direction={'row'} justify={'center'}>
                {result.abilities?.map((item) => {
                    return (
                        <>
                            <Stack width={'200px'} h={'200px'} bgColor={'blue'} align={'center'} justify={'center'} borderRadius={'15px'}>
                                <Text color={'white'} fontWeight={500}>
                                    AbilityName: {item.ability.name}
                                </Text>
                                <Text color={'white'} fontWeight={500}>
                                    Slot: {item.slot}
                                </Text>
                            </Stack>
                        </>
                    )
                }
                )}
            </Stack>
        </VStack>
    )
}

export default Results
