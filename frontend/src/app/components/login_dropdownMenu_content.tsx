import { Button } from "@/components/ui/button";
import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function LoginDropDownMenuContent() {
  return (
    <div>
      <DropdownMenuLabel className="flex flex-row justify-center">
        <Link href="/login">
          <Button>
            <Image src="/uurgevch.jpg" alt="logo" width={30} height={30} />
          </Button>
        </Link>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel className="flex flex-row justify-center">
        <Link href="/host/hostlogin">
          <Button>
            <Image src="/ger1.png" alt="logo" width={30} height={30} />
          </Button>
        </Link>
      </DropdownMenuLabel>
    </div>
  );
}
