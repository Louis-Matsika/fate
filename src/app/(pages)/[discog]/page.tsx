"use client";
import Exhibit from "#/components/Exhibit";
import { useParams } from "next/navigation";

// import "../global.css"
// import styles from "./styles.module.scss";

const SystemsThinking = () => {
  const params = useParams();
  const discogId = typeof params?.discog === "string" ? params.discog : "";
  return (
    <>
      <Exhibit id={discogId} fullDescription={true} />
    </>
  );
};

export default SystemsThinking;
