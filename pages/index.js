import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SignUp from "./components/Form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crater Club</title>
      </Head>
      <SignUp />

      <footer></footer>
    </div>
  );
}
