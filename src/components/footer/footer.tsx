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




// import Link from "next/link"

// export default function Footer() {
//   return (
//     <footer className="siteFooter cursorTrigger__invert bg-purple ">
// 	            <div className="row">
// 	                <div className="col-lg-14 col-xxl-16">
// 	                    <h2 className="font-size-lg text-block-12">Find out how we can help you be happy, contact us today.</h2>
// 	                    <div className="btnGroup">
// 	                        <a aria-label="Email us" className="btn" href="mailto: info@LDJDM.tv ">
// 	                            <span className="btn__arrow">
// 	                                <i className="ri-arrow-right-line"></i>
// 	                            </span>
// 	                            <span className="btn__label" data-splitting>info@pizza.com</span>
// 	                        </a>
// 	                        <a aria-label="Call us" className="btn" href="tel:+ 7(999)123-45-67">
// 	                            <span className="btn__arrow">
// 	                                <i className="ri-arrow-right-line"></i>
// 	                            </span>
// 	                            <span className="btn__label" data-splitting>+ 8 (999) 123-45-67</span>
// 	                        </a>
// 	                    </div>
// 	                </div>
// 	                <div className="siteFooter__nav-col col-12 col-sm-10 col-md-8 col-lg-5 col-xxl-4 mono">
// 	                    <div className="super">Content</div>
// 	                    <nav className="monoLinks">
// 		                    <a aria-label="Work" href="https://LDJDM.tv/work/"><span>Work</span></a>
// 							<a aria-label="Info" href="https://LDJDM.tv/info/"><span>Info</span></a>
// 							<a aria-label="Reels" href="https://LDJDM.tv/reels/"><span>Reels</span></a>
// 							<a aria-label="Directors" href="https://LDJDM.tv/directors/"><span>Directors</span></a>
// 							<a aria-label="Playground" href="https://LDJDM.tv/playground/"><span>Playground</span></a>
// 							<a aria-label="Journal" href="https://LDJDM.tv/journal/"><span>Journal</span></a>
// 							<a aria-label="Contact" href="https://LDJDM.tv/contact/"><span>Contact</span></a>
// 						</nav>
// 	                </div>
// 	                <div className="siteFooter__nav-col col-12 col-sm-10 col-md-8 col-lg-5 col-xxl-4 mono">
// 	                    <div className="super">Connect</div>
// 	                    		                    <nav className="monoLinks">
// 		                        		                        	<a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank"><span>LinkedIn</span></a>
// 		                        		                        	<a aria-label="Instagram" href="https://www.instagram.com" target="_blank"><span>Instagram</span></a>
// 		                        		                        	<a aria-label="Facebook" href="https://www.facebook.com" target="_blank"><span>Facebook</span></a>
// 		                        		                        	<a aria-label="Twitter" href="https://twitter.com" target="_blank"><span>Twitter</span></a>
// 		                        		                    </nav>
// 		                	                </div>
// 	            </div>
// 	            <div className="siteFooter__logo">
//     <svg xmlns="http://www.w3.org/2000/svg" width="60" height="10" viewBox="0 0 100 100">
//         <text x="50%" y="50%" text-anchor="middle" font-size="65" font-family="Old English Text MT" fill="#fafafa">Pizza</text>
//     </svg>
// 	            </div>
// 	            <div className="siteFooter__additional mono">
// 	              <ul>
// 	                    <li>&copy; Pizza Palace  2024</li>

// 								</ul>
// 	              <ul>
// 	                    <li><a aria-label="Site by Form" href="https://github.com/21Ner04/LD-JDM" target="_blank">Site by Form</a></li>
// 	              </ul>
//       </div>
//       <div className="noise"></div>
// 	        </footer>
//   )
// }





// import Link from "next/link"

// export default function Footer() {
//   return (
// <footer className="siteFooter cursorTrigger__invert bg-purple">
//   <div className="row">
//     <div className="col-lg-14 col-xxl-16">
//       <h2 className="font-size-lg text-block-12">Find out how we can help you be happy, contact us today.</h2>
//       <div className="btnGroup">
//         <a aria-label="Email us" className="btn" href="mailto: info@LDJDM.tv ">
//           <span className="btn__arrow">
//             <i className="ri-arrow-right-line"></i>
//           </span>
//           <span className="btn__label" data-splitting>info@pizza.com</span>
//         </a>
//         <a aria-label="Call us" className="btn" href="tel:+ 7(999)123-45-67">
//           <span className="btn__arrow">
//             <i className="ri-arrow-right-line"></i>
//           </span>
//           <span className="btn__label" data-splitting>+ 8 (999) 123-45-67</span>
//         </a>
//       </div>
//     </div>
//     <div className="siteFooter__nav-col col-12 col-sm-10 col-md-8 col-lg-5 col-xxl-4 mono">
//       <div className="super">Content</div>
//       <nav className="monoLinks">
//         <a aria-label="Work" href="https://LDJDM.tv/work/"><span>Work</span></a>
//         <a aria-label="Info" href="https://LDJDM.tv/info/"><span>Info</span></a>
//         <a aria-label="Reels" href="https://LDJDM.tv/reels/"><span>Reels</span></a>
//         <a aria-label="Directors" href="https://LDJDM.tv/directors/"><span>Directors</span></a>
//         <a aria-label="Playground" href="https://LDJDM.tv/playground/"><span>Playground</span></a>
//         <a aria-label="Journal" href="https://LDJDM.tv/journal/"><span>Journal</span></a>
//         <a aria-label="Contact" href="https://LDJDM.tv/contact/"><span>Contact</span></a>
//       </nav>
//     </div>
//     <div className="siteFooter__nav-col col-12 col-sm-10 col-md-8 col-lg-5 col-xxl-4 mono">
//       <div className="super">Connect</div>
//       <nav className="monoLinks">
//         <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank"><span>LinkedIn</span></a>
//         <a aria-label="Instagram" href="https://www.instagram.com" target="_blank"><span>Instagram</span></a>
//         <a aria-label="Facebook" href="https://www.facebook.com" target="_blank"><span>Facebook</span></a>
//         <a aria-label="Twitter" href="https://twitter.com" target="_blank"><span>Twitter</span></a>
//       </nav>
//     </div>
//   </div>
//   <div className="siteFooter__logo">
//     <svg xmlns="http://www.w3.org/2000/svg" width="60" height="10" viewBox="0 0 100 100">
//       <text x="50%" y="50%" text-anchor="middle" font-size="65" font-family="Old English Text MT" fill="#fafafa">Pizza</text>
//     </svg>
//   </div>
//   <div className="siteFooter__additional mono">
//     <ul>
//       <li>&copy; Pizza Palace  2024</li>
//     </ul>
//     <ul>
//       <li><a aria-label="Site by Form" href="https://github.com/21Ner04/LD-JDM" target="_blank">Site by Form</a></li>
//     </ul>
//   </div>
//   <div className="noise"></div>
// </footer>
// )
// }