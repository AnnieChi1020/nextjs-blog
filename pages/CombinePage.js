import Image from "next/image";
import Image1 from "../assets/image-1.png";
import Image6 from "../public/image-6.png";

export default function CombinePage() {
  return (
    <div>
      <h1>CombinePage</h1>
      <Image src={Image1} width={1000} height={1000} alt="not static image" />
      <Image src={Image6} width={1000} height={1000} alt="static image" />
    </div>
  );
}
