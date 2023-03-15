import TabLink from '@/components/tablink'
import '@/styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <div class="body">
      <Head>
        <script defer type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script defer nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </Head>
      <span class="diagonalRect"></span>
      <a id="page-top"></a>
      <nav>
        <h1>Sports for all</h1>
        <ul>
          <li><TabLink href="/">Deficiência intelectual</TabLink></li>
          <li><TabLink href="/presentation">Características</TabLink></li>
          <li><TabLink href="/teste2354454">Tipos de deficiência intelectual</TabLink></li>
          <li><TabLink href="/sports">Esportes para deficientes intelectuais</TabLink></li>
          <li><TabLink href="/tips">Dicas de convivência</TabLink></li>
        </ul>
      </nav>
      <Component {...pageProps} />
      <p>{JSON.stringify(this)}</p>
      <Link class="goUp" href="#page-top"><ion-icon name="chevron-up-outline"></ion-icon></Link>
    </div>
  )
}
