import type { NextPage } from "next";
import Landing from "./landing";

const Home: NextPage = () => {
  // const ObjectTest = {test01: "object-test-01", test02: "object-test-02"}
  const LandingProp = {
    propName: "Prop working",
    propNumber: 150,
    propObject: { test01: "object-test-01", test02: "object-test-02" },
  };

  return (
    <>
      <h1>Page 01</h1>
      <Landing {...LandingProp} />
    </>
  );
};

export default Home;
