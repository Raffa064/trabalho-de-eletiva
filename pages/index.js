import AdjustableImages from '@/components/adjustable-images'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sports For All</title>
        <meta name="description" content="O que é deficiência intelectual" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h2>O que é deficiência intelectual</h2>
        <p>A <strong>Deficiência Intelectual</strong> (DI) é uma condição que afeta o desenvolvimento cognitivo e a capacidade de aprendizagem de uma pessoa.</p>
        <AdjustableImages>
          <img src="/family.jpg"></img>
        </AdjustableImages>
        <p>As causas da deficiência intelectual podem ser diversas, entre elas, anomalias genéticas, problemas durante a gravidez ou parto, exposição a substâncias tóxicas como o mercúrio, e traumas cerebrais. É importante saber que essa deficiência não tem haver com  a falta de estimulo ou educação inadequada.</p>
        <p>Assim como outras deficiências, a DI é classificada pelo <strong>grau de deficiência</strong>, medido de acordo com o seu impacto na capacidade cognitiva da pessoa.</p>
        <p>As classificações são:</p>
        <ul>
          <li><span>Leve:</span> Apesar de afetar a pessoa em algumas áreas, ela não impede que a pessoa tenha uma vida independente, mesmo que precise de um certo apoio e orientação adequados.</li>
          <li><span>Moderada:</span> As pessoas deste nível, podem precisar de suporte para se comunicar, e realizar atividades do dia a dia, mas ainda consegue realizar tarefas simples.</li>
          <li><span>Grave:</span> Neste nível, a pessoa possui um QI muito afetado, portanto, a pessoa precisa de cuidados e supervisão constantes.</li>
          <li><span>Profunda:</span> A pessoa tem um funcionamento intelectual extremamente limitado, e requer cuidados e apoio intensivos em todas as áreas da vida.</li>
        </ul>
        <p>Assim como a maioria das deficiências, a DI não possui cura, mas com o suporte adequado, as pessoas que a possuem podem desenvolver habilidades e alcançar uma vida plena e satisfatória, dependendo é claro, do grau de deficiência. O <strong>suporte</strong> pode ser a partir de terapias, educação especializada, treinamento de habilidades sociais, atividades adaptadas e adaptações do ambiente de trabalho e em casa.</p>
        <AdjustableImages>
          <img src="/ultrassom.jpg" style={{"objectPosition": "bottom right"}}></img>
        </AdjustableImages>
      </main>
    </>
  )
}
