import Image from "next/image";

export default function LargeImageFromPublic() {
  return (
    <div>
      <h1>Large Image From public/</h1>
      <Image
        src={"/largeImageFromPublic.jpeg"}
        width={1600}
        height={1000}
        alt="large-image"
      />
      <h2>Word to check if cumulative layout shift exist</h2>
    </div>
  );
}
