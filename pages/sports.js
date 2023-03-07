import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Título da página</h2>
        <p>Pessoas com deficiência intelectual podem participar de uma ampla variedade de esportes adaptados que foram desenvolvidos especificamente para suas necessidades. Alguns dos esportes mais populares para pessoas com deficiência intelectual incluem atletismo, natação, basquete, futebol e boliche.</p>
        <p>O atletismo adaptado inclui eventos como corridas, salto em distância e arremesso de peso, e oferece uma ótima oportunidade para pessoas com deficiência intelectual melhorarem sua força, resistência e coordenação.</p>
        <p>A natação é outro esporte popular, pois a água ajuda a reduzir a pressão nas articulações e permite que as pessoas com deficiência intelectual experimentem uma sensação de liberdade e independência na água.</p>
        <p>O basquete é um esporte em equipe que pode ser jogado em cadeiras de rodas, permitindo que pessoas com deficiência intelectual participem de forma ativa e competitiva.</p>
        <p>O futebol adaptado é outra opção popular, com versões que variam desde o futebol de cinco para pessoas com deficiência visual até o futebol de sete para pessoas com deficiência intelectual.</p>
        <p>Finalmente, o boliche é um esporte popular que oferece um ambiente descontraído e social, permitindo que pessoas com deficiência intelectual participem e interajam com amigos e familiares enquanto se divertem.</p>
      </main>
    </>
  )
}
