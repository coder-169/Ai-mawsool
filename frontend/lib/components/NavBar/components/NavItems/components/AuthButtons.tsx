import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import Button from "@/lib/components/ui/Button";

export const AuthButtons = (): JSX.Element => {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  if (pathname === "/signup") {
    return (
      <Link href={"/login"}>
        <Button variant={"success"}>{t("loginButton")}</Button>
      </Link>
    );
  }
  if (pathname === "/login") {
    return (
      <Link href={"/signup"}>
        <Button variant={"success"}>{t("signUpButton")}</Button>
      </Link>
    );
  }

  return (
    <Link href={"/login"}>
      <Button data-testid="login-button" variant={"success"}>
        {t("loginButton")}
      </Button>
    </Link>
  );
};
