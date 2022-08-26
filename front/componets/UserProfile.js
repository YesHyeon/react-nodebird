import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = ({ setIsLoggedIn }) => {
  const onSubmitLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="setting">
          팔로잉
          <br />0
        </div>,
        <div key="edit">
          팔로워
          <br />0
        </div>,
        <div key="ellipsis">
          좋아요
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>NH</Avatar>} title="Hyun"></Card.Meta>

      <ButtonWrapper onClick={onSubmitLogout}>로그아웃</ButtonWrapper>
    </Card>
  );
};

UserProfile.PropTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default UserProfile;
