import { ToogleTheme } from "@/components/toggle-theme";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/login"}>Đăng nhập</Link>
        </li>
        <li>
          <Link href={"/register"}>Đăng kí</Link>
        </li>
      </ul>
      <ToogleTheme />
    </div>
  );
}
