import { LANGUAGES } from "@/constants/app.const";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: LANGUAGES,
  defaultLocale: "en",
  localePrefix: "as-needed",
});
