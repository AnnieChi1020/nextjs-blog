import Image from "next/image";
import Image1 from "../assets/largeImageFromAssets.jpeg";

export default function LargeImageFromAssets() {
  return (
    <div>
      <h1>Large Image From assets/</h1>
      <Image src={Image1} width={1600} height={1000} alt="large-image" />
      <h2>Word to check if cumulative layout shift exist</h2>
    </div>
  );
}

// check 有無 static
