import Image from "next/image";
import LargeImage from "../public/largeImageFromPublicStaticImport.jpeg";

export default function LargeImageFromPublicStaticImport() {
  return (
    <div>
      <h1>Large Image From public/ & Use Static Import</h1>
      <Image
        src={LargeImage}
        width={1600}
        height={1000}
        alt="large-image"
        placeholder="blur"
      />
      <h2>Word to check if cumulative layout shift exist</h2>
    </div>
  );
}
