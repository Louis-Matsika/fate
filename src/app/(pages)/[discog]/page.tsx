import { notFound } from "next/navigation";

import Exhibit from "#/components/Exhibit";
import discography from "#/data/music/discography.json";

type DiscogPageProps = {
  params: {
    discog: string;
  };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return discography.map((entry) => ({
    discog: entry.id,
  }));
}

const DiscographyItem = ({ params }: DiscogPageProps) => {
  const entry = discography.find((item) => item.id === params.discog);

  if (!entry) {
    notFound();
  }

  return <Exhibit id={entry.id} fullDescription />;
};

export default DiscographyItem;
