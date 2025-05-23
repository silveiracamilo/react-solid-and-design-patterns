import React from 'react';
import SyntaxHighlight from '@/shared/components/syntaxHighlight/SyntaxHighlight';
import { Typography } from 'antd';
import { exampleMenuBuilderCode, exampleMenuBuilderRenderCode } from './sample/exampleMenuBuilderCode';
import ExampleMenuBuilder from './sample/ExampleMenuBuilder';
import ExampleCharacter from './sample/ExampleCharacterBuilder';
import { exampleCharacterBuilderCode, exampleCharacterBuilderRenderCode } from './sample/exampleCharacterBuilderCode';

const { Title, Paragraph } = Typography;

const Builder: React.FC = () => {
    return (
        <>
        <Title id='part-1'>Builder em Programação Funcional</Title>
        <Paragraph>
            O Builder é um padrão de projeto criacional que permite a você construir objetos complexos passo a passo. O padrão permite que você produza diferentes tipos e representações de um objeto usando o mesmo código de construção. Pura e imutável, aplicando transformações sucessivas sobre dados.
        </Paragraph>
        <Title level={3} id='part-2'>Características no paradigma funcional:</Title>
        <ol className='list-disc ml-4'>
            <li>Imutabilidade cada passo de construção gera um novo estado, sem alterar o estado anterior</li>
            <li>Composição de funções: o Builder é implementado como uma cadeia de funções puras que transformam dados</li>
            <li>Declaratividade: A construção do objeto se torna uma descrição clara da sequência de transformações. O foco é no "o que" queremos construir, e não no "como" o objeto é montado internamente</li>
            <li>Sem Efeitos Colaterais estado é isolado dentro da cadeia de funções. Não há efeitos colaterais externos, como alteração de variáveis globais ou objetos compartilhados</li>
            <li>Encapsulamento via Closures (quando pragmático), embora a imutabilidade seja preferida, closures podem ser usadas para encapsular estado de forma segura e funcional</li>
            <li>As funções podem ser curried (funções que retornam funções) para permitir aplicação parcial, facilitando a construção modular e reuso</li>
        </ol>
        <Title level={3} id='part-3' className='mt-6'>Exemplo:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMenuBuilderCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4'>Exemplo Render</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleMenuBuilderRenderCode} />
        </div>
        <div className='flex mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-2 w-100'>
                <ExampleMenuBuilder />
            </div>
        </div>
        <Title level={3} id='part-3-1' className='mt-6'>Exemplo 2:</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleCharacterBuilderCode} language="typescript" />
        </div>
        <Title level={4} className='mt-6 mb-6' id='part-4-1'>Exemplo 2 Render</Title>
        <div className="flex">
            <SyntaxHighlight code={exampleCharacterBuilderRenderCode} />
        </div>
        <div className='flex mt-6 mb-6'>
            <div className='border-1 border-blue-500 p-2 w-60'>
                <ExampleCharacter />
            </div>
        </div>
        <Title level={3} id='part-5'>Conclusões:</Title>
        <ol className='list-disc ml-4'>
            <li>Simplicidade e Clareza, extremamente fácil de ler e entender</li>
            <li>Tem uma type fluente (.setX().setY().addZ().build()), simples de entender e usar</li>
            <li>Evita completamente classes, mantendo tudo em funções e objetos literais</li>
            <li>Encapsulamento de estado garantido via closures. Garante imutabilidade externa (o estado não vaza)</li>
            <li>Excelente abordagem para composição de UI em React. Equilibra bem clareza, produtividade e encapsulamento</li>
            <li>O Builder Pattern é excelente quando há necessidade real de construir objetos ou estruturas complexas, especialmente quando algumas partes são opcionais ou há muitas combinações possíveis.</li>
            <li>Regra de ouro: Se um simples objeto ou literal resolve, não use. Se há complexidade na construção (muitos campos, opcionais, combinações), o Builder vira uma ferramenta poderosa.</li>
        </ol>
        </>
    )
}

export default Builder;