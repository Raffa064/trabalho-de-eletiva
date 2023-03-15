import Head from 'next/head'
import Image from 'next/image'
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
                <h2>Dicas de como lidar com pessoas com deficiência intelectual</h2>
                <p>Você deve <strong>agir naturalmente</strong> ao dirigir-se a uma pessoa com deficiência intelectual.</p>
                <p>Trate-a com <strong>respeito</strong> e <strong>consideração</strong>. Se for uma criança, trate-a como uma criança. Se for um adolescente trate-a como adolescente, e se for uma pessoa adulta, trate-a como tal.</p>
                <AdjustableImages>
                    <img src="/down-child.jpg"></img>
                </AdjustableImages>
                <p>Não ignore. Comprimente, e despeça-se normalmente, como faria com com qualquer pessoa.<br/>Dê lhe atenção, converse, e verá como pode ser divertido. Seja natural, diga palavras amistosas.</p>
                <AdjustableImages>
                    <img src="/down-man.jpg"></img>
                </AdjustableImages>
                <p>Não super-proteja a pessoa com deficiência intelectual. Deixe que ela faça ou tente fazer sozinha tudo o que puder. Ajude apenas quando for necessário. Não subestime sua inteligência. As pessoas com deficiência intelectual levam mais tempo para aprender, mas podem adquirir muita habilidades intelectuais e sociais.</p>
                <p class="writtedby">Texto escrito por Kauãn</p>
            </main>
        </>
    )
}
