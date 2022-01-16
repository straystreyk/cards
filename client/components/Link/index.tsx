import * as React from "react"
import Link from "next/link"

interface LinkProps {
    href:string,
    as?: string,
    text?: string,
}

export const A:React.FC<LinkProps> = ({href, as, text}) => {
    return (
        <Link href={href} as={as}>
            <a>{text}</a>
        </Link>
    )
}