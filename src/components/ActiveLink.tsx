import Link, {LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
  children:ReactElement
  shooldMatchExactHref?: boolean
}

export function ActiveLink ({ children, shooldMatchExactHref = false ,...rest}:ActiveLinkProps) {
  let isAtive = false
  const { asPath } = useRouter()

  if(shooldMatchExactHref && (asPath === rest.href || asPath === rest.as )) {
    isAtive = true
  }

  if(!shooldMatchExactHref 
    && (asPath.startsWith(String(rest.href)) 
    || asPath.startsWith(String( rest.as)))) {
    isAtive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isAtive ? 'pink.400': 'gray.50'
      })}

    </Link>
  )
}