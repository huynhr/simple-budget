import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Box,
  Flex,
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
} from '@chakra-ui/react';

const options = ['Groceries', 'Rent', 'Internet', 'Entertainment'];

type FormData = {
  name: string;
  amount: string;
};

const Expenses: React.FC = (): JSX.Element => {
  const { handleSubmit, register, formState } = useForm<FormData>();
  const { errors, isSubmitting } = formState;

  const validateName = (value: any) => {
    console.log(' validitng ');
    if (!value) {
      return 'Name is required';
    } else if (value !== 'Naruto') {
      return "Jeez! You're not a fan 😱";
    } else return true;
  };

  const onSubmit = (values: any): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));

        resolve();
      }, 3000);
    });
  };

  console.log({ errors });

  const errorMessages = {
    name: errors.name && errors.name.message,
  };

  return (
    <Box maxWidth="800px" p={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" justify="center" align="center">
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">Name: </FormLabel>
            <Input
              placeholder="name"
              // ref={register({ validate: validateName })}
              {...register('name', {
                required: 'Name is required',
                validate: validateName,
              })}
            />
            <FormErrorMessage>
              <p>{errors.name && errors.name.message}</p>
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.amount}>
            <FormLabel htmlFor="amount">Amount:</FormLabel>
            <NumberInput
              defaultValue={15}
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
              {/* {errors.amount && errors.amount.message} */}
              <p>{errors.amount && errors.amount.message}</p>
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Expenses;
