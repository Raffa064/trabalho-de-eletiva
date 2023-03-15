import Head from 'next/head'
import Image from 'next/image'
import AdjustableImages from '@/components/adjustable-images'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sports For All</title>
        <meta name="description" content="Características das pessoas com deficiência intelectual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h2>Características das pessoas com deficiência intelectual</h2>
        <p>Na deficiência intelectual a pessoa apresenta um <strong>atraso no seu desenvolvimento</strong>, o que causa dificuldades para aprender e realizar tarefas do dia a dia e interagir com o meio em que vive. Ou seja, existe um comprometimento cognitivo, que acontece antes dos 18 anos, e que prejudica suas habilidades adaptativas.</p>
        <AdjustableImages>
          <img src="/holdingflower.jpg"></img>
        </AdjustableImages>
        <p>O <strong>Transtorno do Desenvolvimento Intelectual</strong> ou <strong>Deficiência Intelectual</strong> já foi conhecida por outras denominações, como por exemplo, <em>idiotia e retardo mental</em>.</p>
        <AdjustableImages>
          <img src="/writing.jpg"></img>
        </AdjustableImages>
        <p>A deficiência intelectual é caracterizada por limitações nas habilidades mentais gerais. Essas habilidades estão ligadas à inteligência, atividades que envolvem raciocínio, resolução de problemas e planejamento, entre outras. A inteligência é avaliada por meio do <strong>Quociente de Inteligência</strong> (QI) obtido por testes padronizados. O resultado de uma pessoa com Transtorno de Desenvolvimento Intelectual nessa avaliação situa-se em cerca de 75 pontos.</p>
        <p class="writtedby">Texto escrito por Nicolas</p>
      </main>
    </>
  )
}
