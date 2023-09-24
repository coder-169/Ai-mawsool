import Image from "next/image";
import Link from "next/link";

export const Logo = (): JSX.Element => {
  return (
    <Link href={"/chat"} className="flex items-center gap-4">
      <Image
        className="rounded-full"
        src={"/logo.png"}
        alt="Quivr Logo"
        width={200}
        height={200}
      />
    </Link>
  );
};
