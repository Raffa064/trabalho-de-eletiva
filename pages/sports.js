import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AdjustableImages from '@/components/adjustable-images'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sports For All</title>
        <meta name="description" content="Esportes para pessoas com deficiência intelectual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h2>Esportes para pessoas com deficiência intelectual</h2>
        <p>O atletismo adaptado inclui eventos como corridas, salto em distância e arremesso de peso, e oferece uma ótima oportunidade para pessoas com deficiência intelectual melhorarem sua força, resistência e coordenação.</p>
        <AdjustableImages>
          <img src="/image2.jpg"></img>
          <img src="/image-4.jpg"></img>
        </AdjustableImages>
        <h3>Natação</h3>
        <p>A natação é outro esporte popular, pois a água ajuda a reduzir a pressão nas articulações e permite que as pessoas com deficiência intelectual experimentem uma sensação de liberdade e independência na água.</p>
        <AdjustableImages>
          <img src="/image3.jpg"></img>
        </AdjustableImages>
        <h3>Basquete</h3>
        <p>O basquete é um esporte em equipe que pode ser jogado em cadeiras de rodas, permitindo que pessoas com deficiência intelectual participem de forma ativa e competitiva.</p>
        <AdjustableImages>
          <img src="/image4.jpg"></img>
        </AdjustableImages>
        <h3>Futebol</h3>
        <p>O futebol adaptado é outra opção popular, com versões que variam desde o futebol de cinco para pessoas com deficiência visual até o futebol de sete para pessoas com deficiência intelectual.</p>
        <AdjustableImages>
          <img src="/image-0.jpg"></img>
          <img src="/image-1.jpg"></img>
        </AdjustableImages>
        <h3>Boliche</h3>
        <p>Finalmente, o boliche é um esporte popular que oferece um ambiente descontraído e social, permitindo que pessoas com deficiência intelectual participem e interajam com amigos e familiares enquanto se divertem.</p>
        <AdjustableImages>
          <img src="/image-2.jpg"></img>
          <img src="/image-3.jpg"></img>
        </AdjustableImages>
      </main>
    </>
  )
}
