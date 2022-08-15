import AppLayout from "../componets/AppLayout";
import FollowList from "../componets/FollowList";
import NickNameEditForm from "../componets/NickNameEditForm";
import React from "react";
import Head from "next/head";

const Profile = () => {
  const followingList = [
    { nickname: "현" },
    { nickname: "민규" },
    { nickname: "민주" },
  ];
  const followerList = [
    { nickname: "현" },
    { nickname: "민규" },
    { nickname: "민주" },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>나의 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header="팔로잉 리스트" data={followingList} />
        <FollowList header="팔로워 리스트" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
