import Head from 'next/head'
import Image from 'next/image'
import AdjustableImages from '@/components/adjustable-images'

export default function Home() {
    return (
        <>
            <Head>
                <title>Sports For All</title>
                <meta name="description" content="Tipos de deficiência intelectual" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <h2>Tipos de deficiência intelectual</h2>
                <h3>Síndrome de down</h3>
                <p>Condição genética causada pela presença de três cromossomos 21 nas células dos indivíduos, em vez de dois. Por isso, também é conhecida como <strong>Trissomia do cromossomo 21</strong>.<br />
                    Além de comprometimento cognitivo, pessoas com Síndrome de Down apresentam algumas características físicas em comum. Porém, elas se parecem mais com seus familiares do que entre si. Cada uma tem um ritmo de desenvolvimento e, como todas as outras pessoas, personalidade própria.</p>
                <AdjustableImages>
                    <img src="/down.jpg"></img>
                </AdjustableImages>
                <h3>Autismo</h3>
                <p>O autismo, atualmente chamado de Transtorno do Espectro Autista (TEA), é uma condição caracterizada por comprometimento na comunicação e interação social, associado a padrões de comportamento restritivos e repetitivos.</p>
                <AdjustableImages>
                    <img src="/autism.jpg"></img>
                </AdjustableImages>
                <h3>Síndrome de Williams</h3>
                <p>A síndrome de Williams é uma doença caracterizada por "face de gnomo ou fadinha”, nariz pequeno e empinado, cabelos encaracolados, lábios cheios, dentes pequenos e sorriso freqüente. Estas crianças normalmente têm problemas de coordenação e equilíbrio, apresentando um atraso psicomotor.</p>
                <AdjustableImages>
                    <img src="/williams.jpg"></img>
                </AdjustableImages>
                <p class="writtedby">Texto escrito por Kaio</p>
            </main>
        </>
    )
}
