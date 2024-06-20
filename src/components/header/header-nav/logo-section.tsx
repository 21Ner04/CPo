import Link from "next/link"
import PPLogo from "@/components/icons/PP-logo"

interface LogoSectionProps {
  onClick: () => void
}

export default function LogoSection({ onClick }: LogoSectionProps) {
  return (
    <Link className="on-hover on-tap" href="/" onClick={onClick}>
      <span className="sr-only">Открыть главную страницу Pizza Palace</span>
      <PPLogo />
    </Link>
  )
}