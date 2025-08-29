import Image from "next/image";
import logoFullSvg from "@/src/assets/logo-full.svg";

export function LogoFull({
  height = 32,
}: {
  height?: number;
}) {
  return (
    <Image
      src={logoFullSvg}
      alt="Gyoza Logo"
      width={height * 3.5}
      height={height}
    />
  );
}