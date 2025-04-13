import { DiscogPageParams } from './types';

async function DiscogPage({ params }: { params: DiscogPageParams }) {
  return (
    <div>
      <p>{params.DiscogPage}</p>
    </div>
  );
}

export default DiscogPage;