"use client";
import Exhibit from "#/components/Exhibit";
import { useParams } from "next/navigation";

const discographyItem = () => {
  const params = useParams();
  const discogId = typeof params?.discog === "string" ? params.discog : "";
  console.log("Discog ID:", discogId);
  return (
    <>
      <Exhibit id={discogId} fullDescription={true} />
    </>
  );
};

export default discographyItem;
