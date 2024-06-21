import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer"> 
      <section className="footer__links">
        <h2 className="font-bold">Наши социальные сети</h2>
        <ul>
          <li>
            <Link href="https://www.vk.com">Vk</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com">Instagram</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com">Facebook</Link>
          </li>
          <li>
            <Link href="https://twitter.com">Twitter</Link>
          </li>
          <li>
            <Link href="https://telegram.com">Telegram</Link>
          </li>
        </ul>
      </section>

      
            <section className="footer__links">

        <div className="siteFooter__logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="125" viewBox="0 0 100 100">
        <text x="50%" y="50%" text-anchor="middle" font-size="65" font-family="Old English Text MT" fill="#fafafa">Pizza Palace</text>
    </svg>
        </div>
      </section>


      <section className="footer__links">
        <h2 className="font-bold">Контакты</h2>
        <ul>
          <li>Адрес: Greenpark, ТЦ, 1 этаж</li>
          <li>PizzaPalace@info.com</li>
          <li>тел: +7 (999) 123-45-67</li>
        </ul>
      </section>
      <div className="noise"></div>
    </footer>
  )
}
