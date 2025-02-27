import Image from 'next/image';

const Frame = () => {
  return (
    <Image
      src="/test.jpg"  
      width={500}
      height={500}
      alt="Picture of the author"
    />
  );
};

export default Frame;
