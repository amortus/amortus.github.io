# Portfólio — Alysson Guedim

Site estático (HTML + CSS + JS puro, sem build e sem dependências) do portfólio de
Alysson Guedim — Game Developer & Game Designer.

## Estrutura

```
index.html              Página única com todo o conteúdo (PT e EN no mesmo HTML)
assets/css/style.css    Estilos, tokens de cor e temas claro/escuro
assets/js/projects.js   Galeria e textos longos de cada projeto (o que abre no modal)
assets/js/main.js       Idioma, tema, filtro, menu, animações e o modal de detalhe
assets/img/             Capas e screenshots dos projetos
assets/video/           Trailers em MP4
```

## Rodar localmente

Qualquer servidor estático serve. Por exemplo:

```bash
python -m http.server 5173
# abre http://127.0.0.1:5173
```

Abrir o `index.html` direto pelo navegador também funciona.

## Publicar

Não há build. É só subir a pasta inteira.

- **GitHub Pages** — crie um repositório, suba os arquivos e ligue Pages na branch
  `main`, pasta `/ (root)`. O arquivo `.nojekyll` já está incluso para o Jekyll não
  ignorar nada.
- **Vercel / Netlify** — arraste a pasta ou conecte o repositório. Sem comando de
  build; o diretório de saída é a raiz.
- **Domínio próprio** — aponte o DNS e envie os arquivos por FTP.

## Como editar

### Trocar textos

Cada elemento traduzível carrega os dois idiomas em atributos:

```html
<p data-pt="Texto em português" data-en="Text in English">Texto em português</p>
```

Edite **os dois atributos** e o conteúdo visível (que é o fallback em PT quando o
JavaScript não roda). O `main.js` troca o conteúdo conforme o idioma escolhido.

### Adicionar um projeto

Copie um bloco `<article class="card">` inteiro dentro de `<div class="grid">` e
ajuste. O atributo `data-tags` controla em quais filtros o card aparece:

| tag       | filtro        |
|-----------|---------------|
| `design`  | Game Design   |
| `code`    | Programação   |
| `level`   | Level Design  |
| `audio`   | Sound Design  |
| `shipped` | Publicados    |

Use quantas tags forem verdadeiras, separadas por espaço.

Para screenshots **verticais** (de celular), use a variante que centraliza a imagem
sobre um fundo desfocado dela mesma, em vez de cortá-la:

```html
<div class="card__media card__media--portrait" style="--shot: url('assets/img/arquivo.jpg')">
  <img src="assets/img/arquivo.jpg" alt="...">
</div>
```

### Adicionar galeria e vídeo a um projeto

Clicar num card abre um modal com galeria, descrição longa e destaques. Esse
conteúdo vem do `assets/js/projects.js`, e a chave tem que ser **igual** ao
`data-id` do `<article>` no HTML:

```html
<article class="card" data-id="meujogo" data-tags="design code">
```

```js
meujogo: {
  media: [
    { t: 'video', s: 'assets/video/meujogo.mp4', p: 'assets/img/meujogo-capa.jpg' },
    { t: 'img',   s: 'assets/img/meujogo-1.jpg' }
  ],
  pt: { text: 'Descrição longa…', hl: ['Destaque 1', 'Destaque 2'] },
  en: { text: 'Long description…', hl: ['Highlight 1', 'Highlight 2'] }
}
```

- `t: 'video'` usa `p` como poster (a imagem que aparece antes do play).
- Vídeos são `preload="none"`: só baixam quando a pessoa aperta play.
- Com um item só de mídia, as setas e as miniaturas somem sozinhas.
- Título, subtítulo, papéis, tecnologias e links **não** se repetem aqui — o
  modal clona esses do próprio card. Edite no HTML, num lugar só.

O modal já responde a Esc, setas ← →, clique no fundo, swipe no celular, e
devolve o foco para o botão que o abriu.

Um projeto sem entrada no `projects.js` simplesmente não ganha botão de detalhes
— o card continua funcionando normal.

### Trocar imagens

Substitua os arquivos em `assets/img/` mantendo os nomes, ou atualize o `src` no
HTML. O formato ideal para as capas é **16:9** (ex.: 900×506).

### Cores e tema

Todas as cores são variáveis CSS no topo do `style.css`: `:root` define o tema
escuro e `[data-theme="light"]` o claro. Mudar `--accent` troca a cor de destaque
do site inteiro.

## Créditos de imagem

As artes e screenshots pertencem aos seus respectivos jogos e estúdios, e foram
obtidas das páginas públicas do Steam e da Google Play.
