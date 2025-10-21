import type { SectionHref } from "@/types/types";
import $ from "jquery";

export const scrollToSection = (
  e: React.MouseEvent,
  href: SectionHref
): void => {
  e.preventDefault();

  const $target = $(href);
  const offset = $target.offset();

  if (offset) {
    $("html, body").animate(
      {
        scrollTop: offset.top - 80,
      },
      "slow"
    );
  }
};