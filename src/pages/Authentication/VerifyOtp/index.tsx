import { Flex, Text, VStack, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { VerifyOtpResponse } from "src/api-endpoints/auth/interface";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { verifyOtpApi } from "src/api-endpoints/auth/auth.api";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function VerifyOtp(): JSX.Element {
  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();

  console.log("Token at verify top", token);

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [verifyRes, setVerifyRes] = useState<VerifyOtpResponse | null>(null);

  const verifyMutation = useMutation(verifyOtpApi, {
    onSuccess: (data) => {
      setStatus("success");
      setVerifyRes(data);
      console.log("Verification Response", verifyRes);

      toast.success(data?.message);

      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      setStatus("error");
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    },
  });

  useEffect(() => {
    if (token) {
      verifyMutation.mutate({ token });
    } else {
      setStatus("error");
      toast.error("Invalid verification link");
    }
  }, [token]);
  return (
    <Flex align="center" justify="center" minH="100vh" bg="gray.50">
      <VStack spacing={4}>
        {status === "loading" && (
          <>
            <Spinner
              boxSize={16}
              borderWidth="4px"
              speed="0.8s"
              emptyColor="#d0cccc"
              color="#7B58F4"
            />
            <Text>Verifying your account ....</Text>
          </>
        )}
        {status === "success" && (
          <>
            <Spinner
              boxSize={16}
              borderWidth="4px"
              speed="0.8s"
              emptyColor="#d0cccc"
              color="#7B58F4"
            />
            <Text>Verification successful! Redirecting...</Text>
          </>
        )}
      </VStack>
    </Flex>
  );
}
