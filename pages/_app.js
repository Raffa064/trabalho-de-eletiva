import TabLink from '@/components/tablink'
import '@/styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script defer type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script defer nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <span class="diagonalRect"></span>
      <a id="page-top"></a>
      <nav>
        <h1>Título do projeto</h1>
        <ul>
          <li><TabLink href="/">Tópico</TabLink></li>
          <li><TabLink href="/teste1">Teste1</TabLink></li>
          <li><TabLink href="/teste2">Teste2</TabLink></li>
          <li><TabLink href="#">Tópico</TabLink></li>
          <li><TabLink href="#">Tópico</TabLink></li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <p>{JSON.stringify(this)}</p>
      <Link class="goUp" href="#page-top"><ion-icon name="chevron-up-outline"></ion-icon></Link>
    </div>
  )
}
