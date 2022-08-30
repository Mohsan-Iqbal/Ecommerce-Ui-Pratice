import { useMutation } from "react-query";
import styled from "styled-components";
import { mobile } from "../responsive";
import { _service } from "../Service/api_service";
import { memo } from "react";
import { useForm } from "react-hook-form";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

var count = 0;
const Register = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      phone: "",
      confirm_password: "",
    },
  });

  const { mutate } = useMutation((data) => _service.createUser(data), {
    onSuccess: (res, data) => console.log("User created successfully"),
    onError: (err) => console.log({ err }),
  });
  console.log("component renders", count++);
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit((data, e) => mutate(data))}>
          <Input {...register("first_name")} placeholder="first name" />
          <Input {...register("last_name")} placeholder="last name" />
          <Input {...register("email")} placeholder="email" />
          <Input {...register("phone")} placeholder="Phone" />
          <Input {...register("password")} placeholder="password" />
          <Input
            {...register("confirm_password")}
            placeholder="confirm password"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default memo(Register);
