import AppLayout from "../componets/AppLayout";
import React from "react";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>나의 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>프로필 페이지</div>
      </AppLayout>
    </>
  );
};

export default Profile;
