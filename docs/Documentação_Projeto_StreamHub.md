# StreamHub
## Redesign de Experiência do Usuário

**Interação Humano-Computador & UX — Projeto A3**

- **Sistema analisado:** Plataforma de Streaming ao Vivo (Twitch / Kick)
- **Disciplina:** Interação Humano-Computador e UX
- **Ano:** 2026

**Equipe:**
Antonio Augusto · Gustavo Brunholi · Henry Silva · Leonardo Silva Oliveira · Yuji

---

## Sumário

| Etapa | Título                        | Peso |
|-------|-------------------------------|------|
| 1     | Pesquisa e Empatia            | 15%  |
| 2     | Personas                      | 10%  |
| 3     | Análise Heurística de Nielsen | 15%  |
| 4     | Design Thinking               | 15%  |
| 5     | Protótipos                    | 10%  |
| 5A    | Arquitetura da Informação     | —    |
| 6     | Implementação Web             | 25%  |
| 7     | Teste de Usabilidade          | 10%  |
| —     | Conclusão                     | —    |

---

## Etapa 1 — Pesquisa e Empatia
*Problema escolhido · Público-alvo · Pesquisa com usuários — Peso: 15%*

### 1a) Problema Escolhido

O grupo escolheu redesenhar uma plataforma de streaming ao vivo, inspirada em serviços como Twitch e Kick. Apesar do sucesso dessas plataformas, elas apresentam recorrentes dificuldades de usabilidade que prejudicam tanto espectadores quanto criadores de conteúdo.

- **Interface sobrecarregada:** Excesso de elementos visuais na tela principal dificulta a descoberta de conteúdo. Barras laterais, pop-ups, banners e notificações competem pela atenção do usuário.
- **Onboarding confuso:** Novos usuários não encontram facilmente como navegar entre categorias, seguir criadores ou configurar preferências de conteúdo.
- **Chat inacessível:** O chat ao vivo em streams populares avança em velocidade impossível de acompanhar; faltam controles de pausa, filtro ou moderação visível ao usuário comum.
- **Dark patterns:** Botões de subscrição e notificação são posicionados de forma enganosa, confundindo usuários sobre o que estão contratando ou ativando.
- **Responsividade inconsistente:** Em dispositivos móveis, o layout frequentemente quebra ou oculta funcionalidades críticas como o chat e os controles do player.
- **Acessibilidade insuficiente:** Textos sobre fundos escuros frequentemente não atingem o mínimo de contraste WCAG AA, prejudicando usuários com baixa visão.

### 1b) Público-Alvo

| Perfil               | Características                                                                              | Frequência de uso    |
|----------------------|----------------------------------------------------------------------------------------------|----------------------|
| Espectadores casuais | 18–35 anos, acessa por mobile e PC, consome jogos e entretenimento                           | 3–5x por semana      |
| Fãs engajados        | 16–28 anos, participa ativamente do chat, segue criadores específicos                        | Diariamente          |
| Criadores iniciantes | 18–30 anos, quer configurar canal, entender métricas e monetização                           | Diariamente          |
| Usuários 35+         | Acessa para conteúdo educativo ou música ao vivo; menos familiarizado com a interface        | 1–2x por semana      |

### 1c) Pesquisa com Usuários

Foi realizada uma pesquisa com 8 participantes combinando formulário online e entrevistas curtas de 10 minutos. Os participantes tinham entre 17 e 42 anos, com diferentes níveis de familiaridade com plataformas de streaming.

| Pergunta                                                | Resultado principal                                       |
|---------------------------------------------------------|-----------------------------------------------------------|
| Você usa plataformas de streaming? Com que frequência?  | 100% usam; 75% ao menos 3x por semana                     |
| Qual a maior dificuldade ao usar a plataforma?          | 62% citaram "interface confusa ou poluída"                |
| Você já desistiu de usar por não encontrar algo?        | 75% responderam sim                                       |
| Como avalia a experiência no mobile?                    | 87% classificaram como ruim ou regular                    |
| Quais recursos sente falta?                             | Busca avançada (87%), favoritos (75%), dark mode (62%)    |
| Você sente que a interface respeita seu tempo?          | 62% disseram não                                          |
| Já se sentiu enganado por botão de subscrição?          | 50% disseram sim                                          |
| O que mais gosta nas plataformas atuais?                | Variedade de conteúdo (87%), chat ao vivo (62%)           |

**Principais insights:**

- A interface confusa é a principal barreira de uso, especialmente para usuários acima de 30 anos.
- A experiência mobile é considerada insatisfatória pela grande maioria dos participantes.
- Funcionalidades de organização pessoal (favoritos, histórico) são altamente desejadas.
- Usuários querem mais controle sobre o chat: velocidade, filtros e moderação.
- Elementos de dark pattern geram frustração e desconfiança.

---

## Etapa 2 — Personas
*Perfis representativos dos usuários — Peso: 10%*

Foram elaboradas duas personas com base nos dados coletados na pesquisa. Cada uma representa um perfil real de usuário da plataforma StreamHub, com objetivos, frustrações e contextos de uso distintos.

### Persona 1 — Henry Silva

| Campo               | Informação                                                                                                        |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| **Nome**            | Henry Silva                                                                                                       |
| **Idade**           | 22 anos                                                                                                           |
| **Perfil**          | Produtor de conteúdo / Streamer iniciante                                                                         |
| **Nível tecnológico** | Alto — utiliza Twitch e Kick como produtor e consumidor                                                         |
| **GitHub**          | github.com/Henrysilva123                                                                                          |
| **Objetivos**       | Transmitir ao vivo com boa experiência para si e para a audiência; acompanhar métricas de visualização e engajamento do canal; descobrir funcionalidades que facilitem a gestão da stream; interagir com a comunidade de forma organizada durante as lives |
| **Frustrações**     | Painel de configuração de stream confuso e com muitas opções sem explicação; dificuldade em moderar o chat durante transmissões com alto volume de mensagens; falta de visibilidade sobre o desempenho da live em tempo real; interface inconsistente entre a visão de produtor e a de espectador |
| **Necessidades**    | Dashboard de criador claro e intuitivo; ferramentas de moderação de chat acessíveis durante a transmissão; indicadores de desempenho visíveis sem sair da tela de stream; documentação e ajuda contextual para funcionalidades avançadas |
| **Contexto de uso** | Acessa a plataforma diariamente, tanto para transmitir quanto para assistir outros criadores. Usa PC.            |
| **Frase**           | *"Quando estou ao vivo, não tenho tempo de ficar procurando onde está cada configuração."*                        |

### Persona 2 — Leonardo Cordeiro

| Campo               | Informação                                                                                                        |
|---------------------|-------------------------------------------------------------------------------------------------------------------|
| **Nome**            | Leonardo Cordeiro                                                                                                 |
| **Idade**           | 26 anos                                                                                                           |
| **Perfil**          | Espectador frequente de lives e streams                                                                           |
| **Nível tecnológico** | Médio — usa Twitch, Kick e YouTube ao vivo regularmente                                                        |
| **GitHub**          | —                                                                                                                 |
| **Objetivos**       | Assistir lives e streams dos criadores que acompanha; descobrir novos conteúdos de forma rápida e organizada; interagir no chat sem perder o fio da transmissão; ter controle sobre notificações e recomendações da plataforma |
| **Frustrações**     | Interface poluída dificulta encontrar o que deseja rapidamente; chat de streams populares avança rápido demais e se torna ilegível; recomendações pouco relevantes que não refletem seus interesses; botões de subscrição paga confundidos com ações gratuitas de seguir |
| **Necessidades**    | Página inicial limpa com destaque para conteúdos relevantes; controle de velocidade ou pausa do chat ao vivo; sistema de favoritos para acompanhar criadores específicos; diferenciação visual clara entre ações pagas e gratuitas |
| **Contexto de uso** | Acessa a plataforma principalmente à noite, pelo celular e pelo notebook. Conhece bem os problemas da interface. |
| **Frase**           | *"Sei exatamente o que está errado nessas plataformas. Elas poderiam ser muito melhores."*                        |

---

## Etapa 3 — Análise Heurística de Nielsen
*Avaliação do sistema original — Peso: 15%*

O sistema analisado foi a plataforma Twitch. A avaliação foi conduzida por dois avaliadores independentes, identificando problemas em 9 das 10 heurísticas de Nielsen.

### Distribuição de Severidade

| Severidade | Quantidade | Heurísticas afetadas |
|------------|------------|----------------------|
| Crítico    | 4          | H1, H3, H5, H8       |
| Grave      | 2          | H3, H9               |
| Moderado   | 3          | H2, H4, H6           |
| Baixo      | 2          | H7, H10              |

### Problemas Identificados e Soluções

| Heurística | Problema identificado | Solução no StreamHub | Severidade |
|---|---|---|---|
| **H1** — Visibilidade do status do sistema | Não há indicador de progresso claro durante o carregamento de uma stream. O usuário vê tela preta. | Barra de progresso de carregamento, indicador AO VIVO destacado. | Crítico |
| **H2** — Compatibilidade com o mundo real | Termos como Bits, Hype Train, Raids e Hosts são utilizados sem explicação prévia, dificultando o entendimento. | Tooltips explicativos e glossário acessível no perfil do usuário. | Moderado |
| **H3** — Controle e liberdade do usuário | Não há forma simples de desfazer a subscrição de um canal. O processo exige múltiplos passos em menus distintos. | Botão de desfavoritar visível em todos os cards e navegação simplificada. | Grave |
| **H4** — Consistência e padrões | Botões de ação primária possuem estilos visuais inconsistentes entre páginas. A mesma cor é usada para ações distintas. | Design system com hierarquia visual clara: botão primário, secundário e terciário. | Moderado |
| **H5** — Prevenção de erros | O botão Subscrever (pago) e Seguir (gratuito) são visualmente similares e ficam lado a lado, levando a cliques acidentais. | Diferenciação visual com rótulo de preço e confirmação modal antes de cobranças. | Crítico |
| **H6** — Reconhecimento em vez de memorização | Streams favoritados não aparecem em local de fácil acesso. Não há indicação visual no card de que já foi favoritado. | Ícone de favorito sempre visível em cada card com estado ativo destacado. | Moderado |
| **H7** — Flexibilidade e eficiência de uso | Não existem atalhos de teclado documentados para ações frequentes como silenciar ou mudar qualidade. | Atalhos de teclado documentados na central de ajuda. | Baixo |
| **H8** — Estética e design minimalista | A página principal exibe simultaneamente barra lateral, painel de recomendações, banners de eventos e notificações. | Layout com seções delimitadas e informações progressivas conforme o scroll. | Crítico |
| **H9** — Diagnóstico e recuperação de erros | Quando uma stream cai, a mensagem exibida é técnica: "Error #2000 — Network Error". O usuário não sabe o que fazer. | Mensagem amigável com indicação de reconexão automática e sugestão de ação. | Grave |
| **H10** — Ajuda e documentação | A central de ajuda não é acessível a partir do player de vídeo ou das páginas de erro. | Ícone de ajuda disponível em todas as páginas com link direto para artigos relevantes. | Baixo |

---

## Etapa 4 — Design Thinking
*Empatia · Definição · Ideação · Prototipação · Testes — Peso: 15%*

O processo de Design Thinking orientou todas as decisões do projeto StreamHub, garantindo que as soluções fossem centradas nas necessidades reais dos usuários.

### Empatia — O que os usuários sentem?

Foram realizadas entrevistas com 8 usuários de perfis variados (17 a 42 anos), observação de sessões de uso em plataformas reais e análise de reclamações em fóruns especializados. Os principais pontos de dor identificados foram: onboarding confuso, chat ilegível e presença de dark patterns em botões de subscrição.

### Definição — Qual é o problema central?

Com base na pesquisa, definiu-se o seguinte desafio de design: **como tornar a descoberta de streams simples e prazerosa para qualquer perfil de usuário?** O problema central identificado é que as interfaces de streaming priorizam monetização em detrimento da experiência do usuário, tratando consumidores casuais como audiência secundária.

### Ideação — Brainstorm de soluções

O brainstorm gerou 23 ideias. As selecionadas para implementação foram:

- Página principal com busca centralizada
- Sistema de cards com informação progressiva
- Chat com controle de velocidade
- Onboarding interativo de 3 passos
- Alternância dark/light mode
- Sistema de favoritos com persistência
- Filtros por categoria na página de exploração

### Prototipação — Wireframes e protótipos visuais

Foram criados wireframes em papel para 6 telas principais, depois digitalizados. O protótipo de alta fidelidade foi desenvolvido com design system definido. Após validação com usuários, o chat foi reposicionado e o grid de cards ajustado de 2 para 3 colunas no desktop, elevando a aprovação de 60% para 95%.

### Testes — Feedback dos usuários

Foram realizados testes com 5 participantes em sessões de 15 minutos. A taxa de sucesso inicial foi de 72% e, após as iterações, chegou a 94%. Os principais ajustes foram:

- Diferenciação visual entre botões de login e cadastro
- Inclusão do avatar do criador nos cards
- Aumento da área de toque no campo de busca

---

## Etapa 5 — Protótipos
*Baixa e alta fidelidade — Peso: 10%*

### 5a) Wireframes de Baixa Fidelidade

Os wireframes foram inicialmente esboçados em papel e depois digitalizados. Foram criadas representações para todas as 6 telas do projeto, cobrindo os principais fluxos de navegação identificados na fase de pesquisa.

| Tela                     | Elementos principais representados                                                           |
|--------------------------|----------------------------------------------------------------------------------------------|
| Página inicial (index)   | Barra de navegação, campo de busca, hero com destaque, grid de streams, rodapé               |
| Dashboard (explorar)     | Filtros por categoria, grid de cards com thumbnail e informações do criador                  |
| Stream (assistir)        | Player de vídeo, painel de chat ao vivo, informações do canal, botão de favoritar            |
| Login                    | Formulário com campos de e-mail e senha, link para cadastro, feedback de erro                |
| Cadastro                 | Formulário de criação de conta com validação campo a campo                                   |
| Perfil                   | Dados do usuário, lista de favoritos, histórico de streams assistidos                        |

### 5b) Protótipo de Alta Fidelidade

O protótipo visual foi desenvolvido com base no design system criado para o StreamHub, com tokens de cor, tipografia Inter e componentes reutilizáveis.

| Elemento              | Valor / Decisão                                                       |
|-----------------------|-----------------------------------------------------------------------|
| Cor primária          | `#9146FF` — identificação da marca, ações principais                 |
| Cor de destaque       | `#00E5FF` — gradientes, indicadores de live                           |
| Fundo (dark mode)     | `#0E0E1A` — redução de fadiga visual em uso prolongado               |
| Tipografia            | Inter — legibilidade em telas de todos os tamanhos                    |
| Border-radius         | 14px — componentes arredondados para visual contemporâneo             |
| Espaçamento base      | 8px grid — consistência em todo o layout                              |
| Badge AO VIVO         | `#FF2E63` — alto contraste para indicação de status em tempo real    |

---

## Arquitetura da Informação
*Organização da navegação e estrutura do sistema*

### Mapa de Navegação

A estrutura do StreamHub foi organizada em seis páginas com responsabilidades únicas e bem definidas, conectadas por uma navegação global persistente.

```
Home (index.html)
├── Dashboard (dashboard.html)    ← Explorar streams e aplicar filtros
│   └── Stream (stream.html)     ← Assistir stream + chat ao vivo
├── Login (login.html)            ← Autenticação de usuários
│   └── Cadastro (cadastro.html) ← Criação de nova conta
└── Perfil (perfil.html)          ← Dados do usuário + favoritos
```

### Princípios aplicados na arquitetura

- **Redução da carga cognitiva:** Cada página possui um único objetivo principal. O usuário não precisa processar mais de uma tarefa por tela.
- **Economia de cliques:** O caminho mais curto para assistir uma stream é de 2 cliques a partir da página inicial. Favoritar requer 1 clique.
- **Busca global:** O campo de busca está disponível na barra de navegação em todas as páginas, eliminando a necessidade de retornar à página inicial para pesquisar.

### Fluxos de usuário mapeados

| Fluxo                           | Caminho                                             | Cliques |
|---------------------------------|-----------------------------------------------------|---------|
| Novo usuário assistir stream    | Home → Cadastro → Dashboard → Stream                | 4       |
| Usuário logado favoritar stream | Home ou Dashboard → Stream → Favoritar              | 2       |
| Ver lista de favoritos          | Navbar (nome do usuário) → Perfil                   | 1       |
| Explorar por categoria          | Dashboard → Chip de categoria → Grid filtrado       | 1       |
| Alternar tema                   | Navbar → Botão de tema                              | 1       |

---

## Etapa 6 — Implementação Web
*Interface funcional em HTML + CSS + JS — Peso: 25%*

O StreamHub foi implementado em HTML5, CSS3 e JavaScript ES6+ sem dependência de frameworks externos. Todos os requisitos obrigatórios foram atendidos e diversos itens bônus foram implementados.

### Checklist de Requisitos Obrigatórios

| Requisito               | Status   | Implementação                                                      |
|-------------------------|----------|--------------------------------------------------------------------|
| Mínimo 3 páginas        | ✅ Atendido | 6 páginas: index, dashboard, stream, login, cadastro, perfil     |
| Menu de navegação       | ✅ Atendido | Navbar sticky com links ativos e busca integrada                  |
| Formulário              | ✅ Atendido | Login e cadastro com validação em tempo real                      |
| Cards                   | ✅ Atendido | Cards de stream com thumbnail, badge AO VIVO e viewers            |
| Responsividade          | ✅ Atendido | Mobile-first com breakpoints em 768px e 1024px                    |
| Feedback visual         | ✅ Atendido | Toasts, estados hover, focus-visible e loading states             |
| Hierarquia visual clara | ✅ Atendido | H1 a H3, espaçamento consistente, contraste WCAG AA               |
| Boa usabilidade         | ✅ Atendido | Skip link, ARIA labels, navegação por teclado                     |
| Acessibilidade básica   | ✅ Atendido | HTML semântico, roles ARIA, prefers-reduced-motion                |
| Contraste adequado      | ✅ Atendido | Razão de contraste igual ou superior a 4,5:1                      |
| Organização visual      | ✅ Atendido | Design system com tokens CSS, componentes consistentes            |
| Consistência            | ✅ Atendido | Paleta, tipografia e espaçamento uniformes em todas as páginas    |

### Itens Bônus Implementados

| Item                   | Descrição                                                                      |
|------------------------|--------------------------------------------------------------------------------|
| Dark/Light Mode        | Alternância com persistência via LocalStorage                                  |
| Microinterações CSS    | Hover em cards (translateY + shadow), animação do logo, toast slide-in         |
| Design System próprio  | Tokens CSS completos para cor, espaçamento, tipografia e transições            |
| Acessibilidade avançada | Skip link, focus-visible personalizado, ARIA live regions                     |
| Mobile refinado        | Layout responsivo com menu colapsável e grid adaptativo                        |
| Animações sutis        | Fade-in em cards, orbs animados no hero                                        |
| Protótipo profissional | Alta fidelidade com componentes e design tokens documentados                   |
| Testes externos        | Sessões com participantes externos ao grupo                                    |

### Estrutura de Arquivos

| Arquivo / Diretório          | Descrição                                              |
|------------------------------|--------------------------------------------------------|
| `index.html`                 | Página inicial com hero e streams em destaque          |
| `dashboard.html`             | Explorar streams com busca e filtros por categoria     |
| `stream.html`                | Assistir stream com chat ao vivo simulado              |
| `login.html`                 | Autenticação de usuários                               |
| `cadastro.html`              | Criação de nova conta                                  |
| `perfil.html`                | Perfil do usuário e lista de favoritos                 |
| `assets/css/style.css`       | Design system e componentes (571 linhas)               |
| `assets/css/responsive.css`  | Breakpoints e adaptações mobile                        |
| `assets/js/storage.js`       | Abstração do LocalStorage                              |
| `assets/js/auth.js`          | Autenticação e validação de formulários                |
| `assets/js/main.js`          | Lógica principal, streams, chat e tema                 |

---

## Etapa 7 — Teste de Usabilidade
*Sessões com usuários reais · Resultados · Melhorias — Peso: 10%*

Foram realizados testes com 5 participantes, incluindo usuários externos ao grupo. As sessões duraram entre 12 e 18 minutos cada, com observação direta e registro das interações.

### Participantes

| Participante         | Idade | Perfil                  | Familiaridade c/ Streaming            |
|----------------------|-------|-------------------------|---------------------------------------|
| P1 — Mariana L.      | 21    | Estudante de Design     | Alta (usa Twitch diariamente)         |
| P2 — Roberto S.      | 38    | Profissional Liberal    | Baixa (nunca usou Twitch)             |
| P3 — Gabriela M.     | 25    | Desenvolvedora Junior   | Média (usa ocasionalmente)            |
| P4 — Thiago B.       | 19    | Gamer casual            | Alta (Twitch e YouTube Gaming)        |
| P5 — Patrícia C.     | 45    | Professora              | Nenhuma (primeiro contato)            |

### Tarefas Executadas

| Tarefa             | Descrição                              | Critério de sucesso                     |
|--------------------|----------------------------------------|-----------------------------------------|
| T1 — Cadastro      | Criar uma conta nova                   | Completar sem erro e sem ajuda          |
| T2 — Login         | Acessar conta existente                | Login em menos de 60 segundos           |
| T3 — Busca         | Encontrar stream de Minecraft          | Encontrar em menos de 30 segundos       |
| T4 — Favoritar     | Adicionar stream aos favoritos         | Completar com 1 clique                  |
| T5 — Perfil        | Acessar lista de favoritos             | Encontrar sem instrução                 |
| T6 — Tema          | Alternar entre dark e light mode       | Completar sem instrução                 |

### Resultados por Tarefa

| Tarefa          | P1  | P2   | P3  | P4  | P5   | Taxa de sucesso |
|-----------------|-----|------|-----|-----|------|-----------------|
| T1 — Cadastro   | OK  | OK   | OK  | OK  | OK*  | 80%             |
| T2 — Login      | OK  | OK   | OK  | OK  | OK   | 100%            |
| T3 — Busca      | OK  | OK*  | OK  | OK  | X    | 60%             |
| T4 — Favoritar  | OK  | OK   | OK  | OK  | OK   | 100%            |
| T5 — Perfil     | OK  | X    | OK  | OK  | X    | 60%             |
| T6 — Tema       | OK  | OK*  | OK  | OK  | OK*  | 60%             |
| **Individual**  | 100% | 60% | 100% | 100% | 40% | **80% média**  |

> **Legenda:** OK = sucesso · OK* = sucesso com dificuldade · X = falha

### Problemas Identificados e Melhorias Realizadas

| Problema                            | Observação                                                                      | Melhoria implementada                                                         |
|-------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Campo de busca pequeno no mobile    | P2 e P5 tiveram dificuldade para clicar no campo de busca no celular.           | Padding do input aumentado de 10px para 14px e área de toque ampliada.       |
| Botão de favoritar pouco visível    | P5 não sabia que era possível favoritar pois o ícone aparecia apenas no hover.  | Ícone de coração sempre visível com opacidade 0,7 e mais destaque no hover.  |
| Link de perfil não era óbvio        | P2 e P5 não associaram o nome do usuário no navbar com a página de perfil.      | Ícone de usuário adicionado ao lado do nome e tooltip "Ver perfil".           |
| Botão de tema sem identificação     | P2 e P5 não entenderam a função do botão de alternância de tema.                | Label "Tema" adicionado em telas maiores e tooltip sempre presente.           |
| Mensagem de erro genérica no cadastro | P5 recebeu "Campos inválidos" sem identificar qual campo estava incorreto.    | Validação campo a campo com mensagem específica abaixo de cada input.         |

### Satisfação dos Usuários

| Critério                  | Nota média (0–10) | Variação em relação à plataforma original |
|---------------------------|-------------------|-------------------------------------------|
| Facilidade de navegação   | 8,6               | +3,2 pontos                               |
| Estética visual           | 9,1               | +1,8 pontos                               |
| Clareza das ações         | 8,3               | +2,9 pontos                               |
| Experiência mobile        | 8,8               | +4,1 pontos                               |
| Satisfação geral          | 8,7               | +2,9 pontos                               |

---

## Conclusão e Considerações Finais

O projeto StreamHub demonstrou como a aplicação sistemática de conceitos de Interação Humano-Computador e UX Design pode transformar uma interface frustrante em uma solução funcional, acessível e alinhada às necessidades reais dos usuários.

- Identificamos problemas relacionados às 10 heurísticas de Nielsen e propusemos soluções de redesign para cada uma delas.
- Criamos 2 personas baseadas em pesquisa com 8 participantes, representando perfis reais de usuários.
- Desenvolvemos protótipos de baixa e alta fidelidade com iterações validadas por usuários.
- Implementamos 6 páginas em HTML, CSS e JavaScript com design system próprio e acessibilidade.
- Realizamos testes com 5 usuários e elevamos a satisfação média de **5,8 para 8,7** em 10.
- Atendemos todos os 12 requisitos obrigatórios e implementamos 8 itens bônus.

O processo de Design Thinking foi fundamental para garantir que as decisões fossem centradas nos usuários reais. A iteração constante — do esboço em papel ao código funcional — evidenciou que boas interfaces resultam de ciclos de pesquisa, prototipação e teste, e não de decisões isoladas.

> *Este projeto foi desenvolvido como requisito da disciplina de Interação Humano-Computador e UX.*

### Equipe

| Integrante              | GitHub             | Contribuição principal                                       |
|-------------------------|--------------------|--------------------------------------------------------------|
| Antonio Augusto         | @auguxtodev        | Design system, componentes CSS, responsividade               |
| Gustavo Brunholi        | @gubrunholi        | Arquitetura JS, LocalStorage, autenticação                   |
| Henry Silva             | @Henrysilva123     | Pesquisa com usuários, personas, testes de usabilidade       |
| Leonardo Silva Oliveira | @LeonardoSilva1-hub | Prototipagem, análise heurística, implementação do chat     |
| Yuji                    | @YujiScripts       | Implementação de páginas, revisão de acessibilidade          |
