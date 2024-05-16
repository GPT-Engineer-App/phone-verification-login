import { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, PinInput, PinInputField, useToast } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const toast = useToast();

  const handleSendCode = () => {
    if (phoneNumber.length === 10) {
      setIsCodeSent(true);
      toast({
        title: "Verification code sent.",
        description: "Please check your phone for the verification code.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid phone number.",
        description: "Please enter a valid 10-digit phone number.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleVerifyCode = () => {
    if (verificationCode.length === 6) {
      toast({
        title: "Phone number verified.",
        description: "You have successfully logged in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Invalid verification code.",
        description: "Please enter the correct 6-digit verification code.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack>
          <FaMobileAlt size="2em" />
          <Text fontSize="2xl">Phone Verification</Text>
        </HStack>
        {!isCodeSent ? (
          <>
            <Input placeholder="Enter your phone number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            <Button colorScheme="teal" onClick={handleSendCode}>
              Send Verification Code
            </Button>
          </>
        ) : (
          <>
            <Text>Enter the verification code sent to your phone</Text>
            <HStack>
              <PinInput value={verificationCode} onChange={(value) => setVerificationCode(value)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
            <Button colorScheme="teal" onClick={handleVerifyCode}>
              Verify Code
            </Button>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
