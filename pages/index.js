import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header id="header">
        <div className="logo">
          <a href="#">
            <Image id="lamp" src="/bulb2.png" width={100} height={30} />F
          </a>
        </div>

        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="contact">contact</a>
          </li>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">Home</a>
          </li>
        </ul>
        <div className="bars">
          <img id="bar" src="" />
        </div>
      </header>

      <div className="big-bg">
        <div className="bg-content">
          <h1>
            QUality is the best thing <br /> in the business
          </h1>
          <hr />
          <p>
            we make our product in the best shape for happiness <br />
            so we hope to build a bridgr of trust with you
          </p>
          <div className="bg-link">
            <a href="#">shop now</a>
          </div>
        </div>
      </div>
    </>
  );
}
