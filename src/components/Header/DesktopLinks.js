import { LINKS } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function DesktopLinks({ handelClick }) {
  const pathname = usePathname();

  return (
    <>
      {LINKS.map(({ title, href }) => (
        <StyledLink
          href={href}
          key={title}
          onClick={handelClick}
          style={{
            "--color-link":
              pathname === href
                ? "var(--color-primary-text)"
                : "var(--color-secondary-text)",
          }}
        >
          {title}
        </StyledLink>
      ))}
    </>
  );
}

const StyledLink = styled(Link)`
  color: var(--color-link);
  font-size: ${16 / 16}rem;
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  text-transform: capitalize;
`;

export default DesktopLinks;
