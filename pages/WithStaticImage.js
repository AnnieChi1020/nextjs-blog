import Image from "next/image";
import Image1 from "../public/image-6.png";
import Image2 from "../public/image-7.png";
import Image3 from "../public/image-8.png";
import Image4 from "../public/image-9.png";
import Image5 from "../public/image-10.png";

export default function WithStaticImage() {
  return (
    <div>
      <h1>WithStaticImage</h1>
      <Image src={Image1} width={600} height={600} />
      <Image src={Image2} width={600} height={600} />
      <Image src={Image3} width={600} height={600} />
      <Image src={Image4} width={600} height={600} />
      <Image src={Image5} width={600} height={600} />
    </div>
  );
}
