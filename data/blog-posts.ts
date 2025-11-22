import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'por-que-neo-brutalismo',
    title: 'Por que o Neo-Brutalismo Dominou o Web Design?',
    date: '24 OUT 2023',
    readTime: '5 min',
    tags: ['Design', 'Tendências', 'UI/UX'],
    excerpt: 'Abandone o flat design entediante. Descubra como sombras duras, cores vibrantes e bordas marcadas estão redefinindo a estética digital moderna.',
    content: `
# O Retorno do "Feio" Estético

O design web passou a última década obcecado com o minimalismo. Tudo branco, muito espaço negativo, sombras suaves (quase invisíveis) e cantos arredondados de 20px. Ficou... **chato**.

Entra o **Neo-Brutalismo**.

Não é sobre ser feio. É sobre ser **honesto**, **cru** e **funcional**.

## Características Principais

1. **Bordas Pretas e Grossas:** Nada de sutileza. Se há uma caixa, mostre que é uma caixa.
2. **Cores de Alta Saturação:** Esqueça os pastéis. Use amarelo gema, laranja neon, roxo elétrico.
3. **Sombras Duras (Hard Shadows):** Sem desfoque. A sombra é apenas uma cópia preta do elemento deslocada 4px para baixo e direita.
4. **Tipografia Grotesca:** Fontes sem serifa, grandes, pesadas e muitas vezes monoespaçadas.

> "O Neo-Brutalismo na web é a resposta digital à arquitetura de concreto exposto dos anos 50: ame ou odeie, você não pode ignorá-lo."

## Como aplicar nos seus projetos

Comece com o básico: remova \`border-radius\`, adicione \`border: 2px solid black\` e mude sua paleta para algo que seu monitor de 1998 conseguiria exibir com orgulho.

\`\`\`css
.botao-brutal {
  background-color: #facc15;
  border: 3px solid black;
  box-shadow: 4px 4px 0px black;
  font-family: 'Space Grotesk', monospace;
}
\`\`\`

Seja ousado. A web precisa de mais personalidade.
    `
  },
  {
    slug: 'react-performance-tips',
    title: 'Otimizando React: Além do básico',
    date: '10 NOV 2023',
    readTime: '8 min',
    tags: ['React', 'Dev', 'Performance'],
    excerpt: 'useMemo não é bala de prata. Entenda renderização, keys e virtualização para interfaces realmente fluidas.',
    content: `
# Performance Real em React

Muitos desenvolvedores espalham \`useMemo\` e \`useCallback\` pelo código como se fosse tempero, esperando que o app fique mágico. Spoiler: **não fica**.

## O verdadeiro vilão: Re-renders Desnecessários

O React é rápido, mas renderizar componentes pesados 50 vezes por segundo trava qualquer navegador.

### 1. Estrutura de Estado
O erro número 1 é colocar estado global onde estado local resolveria. Se apenas um botão muda de cor, por que a página inteira está renderizando?

### 2. Listas Longas
Se você está renderizando uma lista com mais de 100 itens, você precisa de **virtualização**.

Bibliotecas recomendadas:
* \`react-window\`
* \`virtua\`

### 3. Imagens
Use formatos modernos (WebP, AVIF) e carregamento preguiçoso (\`lazy loading\`).

\`\`\`jsx
<img 
  src="foto-pesada.webp" 
  loading="lazy" 
  alt="Otimização" 
/>
\`\`\`

Performance é UX. Ninguém gosta de esperar.
    `
  },{
    slug: 'react-performance-tips',
    title: 'Otimizando React: Além do básico',
    date: '10 NOV 2023',
    readTime: '8 min',
    tags: ['React', 'Dev', 'Performance'],
    excerpt: 'useMemo não é bala de prata. Entenda renderização, keys e virtualização para interfaces realmente fluidas.',
    content: `
# Performance Real em React

Muitos desenvolvedores espalham \`useMemo\` e \`useCallback\` pelo código como se fosse tempero, esperando que o app fique mágico. Spoiler: **não fica**.

## O verdadeiro vilão: Re-renders Desnecessários

O React é rápido, mas renderizar componentes pesados 50 vezes por segundo trava qualquer navegador.

### 1. Estrutura de Estado
O erro número 1 é colocar estado global onde estado local resolveria. Se apenas um botão muda de cor, por que a página inteira está renderizando?

### 2. Listas Longas
Se você está renderizando uma lista com mais de 100 itens, você precisa de **virtualização**.

Bibliotecas recomendadas:
* \`react-window\`
* \`virtua\`

### 3. Imagens
Use formatos modernos (WebP, AVIF) e carregamento preguiçoso (\`lazy loading\`).

\`\`\`jsx
<img 
  src="foto-pesada.webp" 
  loading="lazy" 
  alt="Otimização" 
/>
\`\`\`

Performance é UX. Ninguém gosta de esperar.
    `
  }
];