interface landingInterface {
  propName: string;
  propNumber: number;
  propObject: { test01: string; test02: string };
}

const Landing = ({ propName, propNumber, propObject }: landingInterface) => {
  return (
    <>
      <h2>Landing</h2>

      <h3>{propName}</h3>
      <h3>{propNumber}</h3>
      <h3>{propObject.test01}</h3>
    </>
  );
};

export default Landing;
