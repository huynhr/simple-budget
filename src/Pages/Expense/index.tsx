import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Stack,
} from '@chakra-ui/react';

const options = ['Groceries', 'Rent', 'Internet', 'Entertainment'];

type FormData = {
  amount: string;
  category: string;
  name: string;
  description: string;
};

const Expenses: React.FC = (): JSX.Element => {
  const { handleSubmit, register, formState } = useForm<FormData>();
  const { errors, isSubmitting } = formState;

  const validateName = (value: string) => {
    console.log(' validitng ');
    if (!value) {
      return 'Name is required';
    } else if (value !== 'Naruto') {
      return "Jeez! You're not a fan 😱";
    } else return true;
  };

  const onSubmit = (values: FormData): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));

        resolve();
      }, 3000);
    });
  };

  console.log({ errors });

  return (
    <Box maxWidth="500px" p={2} textAlign="center" m="auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Flex direction="column" justify="center" align="center"> */}
        <Stack spacing={5}>
          <FormControl isInvalid={!!errors.amount}>
            <FormLabel htmlFor="amount">Amount:</FormLabel>
            <NumberInput
              precision={2}
              step={0.1}
              {...register('amount', { required: 'Amount is Required.' })}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormErrorMessage>
              <p>{errors.amount?.message}</p>
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.category}>
            <FormLabel htmlFor="category">Category:</FormLabel>
            <Select
              {...register('category', { required: 'Category is required.' })}
            >
              {options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              <p>{errors.category?.message}</p>
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Name: </FormLabel>
            <Input
              placeholder="Simple Grocery Store"
              {...register('name', {
                required: 'Name is required',
                validate: validateName,
              })}
            />
            <FormErrorMessage>
              <p>{errors.name?.message}</p>
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.description}>
            <FormLabel htmlFor="description">Description: </FormLabel>
            <Input placeholder="..." {...register('description')} />
            <FormErrorMessage>
              <p>{errors.description?.message}</p>
            </FormErrorMessage>
          </FormControl>
          {/* </Flex> */}
        </Stack>
        <Button
          mt={10}
          width={'100%'}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Expenses;
