import Head from "next/head";
import Image from "next/image";
import FImage from "../assets/create-course-image.png";

export default function WithoutStaticImage() {
  return (
    <div>
      <Head>
        <title>Without Static Image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>WithoutStaticImage</h1>
        <Image src={FImage} width={400} height={400} />
      </main>
    </div>
  );
}
