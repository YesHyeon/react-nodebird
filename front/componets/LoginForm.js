import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding-top: 10px;
  padding-left: 20px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log("zz");
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-id">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <div>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </div>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
export default LoginForm;
