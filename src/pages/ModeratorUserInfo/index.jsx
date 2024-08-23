import React from "react";
import ModeratorNavBar from "../../components/ModeratorNavBar";
import UserInfoComponent from "../../components/UserInfoComponent";
import "./index.css";

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: "#eee", height: "100vh" }}>
      <ModeratorNavBar />
      <UserInfoComponent />
    </section>
  );
}
