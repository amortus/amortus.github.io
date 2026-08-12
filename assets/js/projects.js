/* ══════════════════════════════════════════════════════
   Dados de mídia e detalhes de cada projeto.
   A chave bate com o data-id do <article> no index.html.

   media: [{ t:'video', s:'...mp4', p:'...jpg' } | { t:'img', s:'...jpg' }]
   text / hl: textos longos do modal, em PT e EN.
   ══════════════════════════════════════════════════════ */
window.PROJECTS = {

  tales: {
    media: [
      { t: 'video', s: 'assets/video/tales-trailer.mp4', p: 'assets/img/tales-of-shadowland.jpg' },
      { t: 'img', s: 'assets/img/tales-of-shadowland.jpg' },
      { t: 'img', s: 'assets/img/tales-s1.jpg' },
      { t: 'img', s: 'assets/img/tales-s2.jpg' },
      { t: 'img', s: 'assets/img/tales-s3.jpg' },
      { t: 'img', s: 'assets/img/tales-s4.jpg' },
      { t: 'img', s: 'assets/img/tales-s5.jpg' },
      { t: 'img', s: 'assets/img/tales-s6.jpg' },
      { t: 'img', s: 'assets/img/tales-s7.jpg' },
      { t: 'img', s: 'assets/img/tales-g1.jpg' },
      { t: 'img', s: 'assets/img/tales-g2.jpg' },
      { t: 'img', s: 'assets/img/tales-g3.jpg' }
    ],
    pt: {
      text: 'MMORPG de mundo aberto free-to-play ambientado em Eurone, construído em Unity pela Uzmi Games. A proposta é a liberdade de um RPG clássico dentro de um mundo online persistente, sem mecânicas pay-to-win. Como Lead Game Designer, respondo pelo desenho de sistemas, progressão e economia do jogo, e também atuo na programação de gameplay e na construção de níveis.',
      hl: [
        'Classes customizadas montadas pelo próprio jogador',
        'Mundo aberto explorável a pé, montado e voando',
        'Coleta de recursos, crafting e construção de estruturas',
        'PvE e PvP convivendo no mesmo mundo persistente',
        'Free-to-play sem pay-to-win — em breve no Steam'
      ]
    },
    en: {
      text: 'Free-to-play open-world MMORPG set in Eurone, built in Unity at Uzmi Games. The pitch is the freedom of a classic RPG inside a persistent online world, with no pay-to-win mechanics. As Lead Game Designer I own systems, progression and economy design, and also work on gameplay programming and level building.',
      hl: [
        'Custom classes assembled by the player',
        'Open world traversed on foot, mounted and in flight',
        'Resource harvesting, crafting and structure building',
        'PvE and PvP sharing one persistent world',
        'Free-to-play with no pay-to-win — coming soon on Steam'
      ]
    }
  },

  kardum: {
    media: [
      { t: 'img', s: 'assets/img/kardum.jpg' },
      { t: 'img', s: 'assets/img/kardum-g1.jpg' },
      { t: 'img', s: 'assets/img/kardum-g2.jpg' }
    ],
    pt: {
      text: 'TCG tático ambientado no universo de Tales of Shadowland, com inspiração declarada em Magic: The Gathering — Shandalar e Ultima Online. Programei o gameplay do cliente em Unity e construí sozinho o backend completo do jogo, em TypeScript.',
      hl: [
        'Mundo persistente com AOI e múltiplos canais por zona',
        'PvP em tempo real com fila casual e ranking ELO',
        'Quests com NPCs e drops de itens',
        'Amizades, chat de zona e mensagens diretas',
        'Verificação por e-mail e sessão única por conta',
        'Conformidade com a LGPD e painel administrativo completo'
      ]
    },
    en: {
      text: 'Tactical TCG set in the Tales of Shadowland universe, openly inspired by Magic: The Gathering — Shandalar and Ultima Online. I programmed the Unity client gameplay and single-handedly built the game\'s full TypeScript backend.',
      hl: [
        'Persistent world with AOI and multiple channels per zone',
        'Real-time PvP with casual queue and ELO rating',
        'Quest system with NPCs and item drops',
        'Friendships, zone chat and direct messages',
        'Email verification and single session per account',
        'LGPD compliance and a full admin dashboard'
      ]
    }
  },

  eternalhope: {
    media: [
      { t: 'video', s: 'assets/video/eternalhope-trailer.mp4', p: 'assets/img/eternal-hope.jpg' },
      { t: 'img', s: 'assets/img/eternal-hope.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-s1.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-s2.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-s3.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-s4.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-s5.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-s6.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-g1.jpg' },
      { t: 'img', s: 'assets/img/eternalhope-g2.jpg' }
    ],
    pt: {
      text: 'Plataforma 2D de puzzles narrativo sobre Ti\'bi, um garoto que atravessa dois mundos em busca da alma da pessoa amada. O jogador alterna entre reinos para alterar o cenário e abrir caminho. É o meu título de maior alcance: saiu nos quatro consoles principais e no PC. Trabalhei em programação de gameplay, design de puzzles e produção de áudio.',
      hl: [
        'Lançado em 20 de agosto de 2020',
        'PlayStation 4, Xbox One, Nintendo Switch e PC',
        'Alternância entre dois reinos como mecânica central de puzzle',
        'Desenvolvido pela Doublehit Games e publicado pela Kwalee'
      ]
    },
    en: {
      text: 'Narrative 2D puzzle platformer about Ti\'bi, a boy crossing between two worlds to find his beloved\'s soul. Players shift between realms to reshape the environment and open a path forward. It\'s my widest-reaching title: it shipped on all four major consoles and PC. I worked on gameplay programming, puzzle design and audio production.',
      hl: [
        'Released on 20 August 2020',
        'PlayStation 4, Xbox One, Nintendo Switch and PC',
        'Realm-shifting as the core puzzle mechanic',
        'Developed by Doublehit Games, published by Kwalee'
      ]
    }
  },

  ecclesia: {
    media: [
      { t: 'img', s: 'assets/img/ecclesia-online.jpg' },
      { t: 'img', s: 'assets/img/ecclesia-g1.jpg' },
      { t: 'img', s: 'assets/img/ecclesia-g2.jpg' },
      { t: 'img', s: 'assets/img/ecclesia-g3.jpg' }
    ],
    pt: {
      text: 'MMORPG isométrico de fantasia medieval feito em Unity. Foi o projeto em que acumulei os três papéis principais ao mesmo tempo, o que me obrigou a pensar mecânica, código e espaço como uma coisa só.',
      hl: [
        'Programação de gameplay e sistemas online',
        'Desenho das mecânicas de progressão e combate',
        'Construção dos mapas e do fluxo de exploração',
        'Masmorras em grupo com party e chat'
      ]
    },
    en: {
      text: 'Isometric medieval-fantasy MMORPG built in Unity. This was the project where I held all three core roles at once, which forced me to think about mechanics, code and space as a single thing.',
      hl: [
        'Gameplay and online systems programming',
        'Progression and combat mechanics design',
        'Map building and world exploration flow',
        'Group dungeons with party and chat'
      ]
    }
  },

  wizardarena: {
    media: [
      { t: 'img', s: 'assets/img/wizardarena-2.jpg' },
      { t: 'img', s: 'assets/img/wizardarena-1.jpg' }
    ],
    pt: {
      text: 'Roguelike multiplayer em tempo real no estilo Vampire Survivors, com até 6 jogadores na mesma arena. As armas miram sozinhas; o que você controla é o posicionamento e a build. Projeto autoral do design ao lançamento — roda no navegador e como app Android, sem instalação pesada e sem pay-to-win.',
      hl: [
        '12 magos, cada um com arma inicial e elemento próprios',
        'Dezenas de poderes combináveis: projéteis, auras, orbitais e passivos',
        'Ondas crescentes de inimigos, com elites nas fases mais avançadas',
        'Boss épico a cada 5 ondas',
        'Servidor autoritativo a 50 Hz em PartyKit (Cloudflare Durable Objects)',
        'Ranking mundial com login Google',
        'Fogo amigo ligado — dá para atrapalhar o time'
      ]
    },
    en: {
      text: 'Real-time multiplayer roguelike in the Vampire Survivors vein, with up to 6 players in the same arena. Weapons auto-target; what you control is positioning and your build. A solo project from design through release — it runs in the browser and as an Android app, with no heavy install and no pay-to-win.',
      hl: [
        '12 wizards, each with their own starting weapon and element',
        'Dozens of stackable powerups: projectiles, auras, orbitals and passives',
        'Escalating enemy waves, with elites in later stages',
        'An epic boss every 5 waves',
        'Authoritative 50 Hz server on PartyKit (Cloudflare Durable Objects)',
        'Global leaderboard with Google sign-in',
        'Friendly fire is on — you can absolutely ruin your team'
      ]
    }
  },

  sirizinho: {
    media: [
      { t: 'img', s: 'assets/img/sirizinho-1.jpg' },
      { t: 'img', s: 'assets/img/sirizinho-2.jpg' },
      { t: 'img', s: 'assets/img/sirizinho-3.jpg' },
      { t: 'img', s: 'assets/img/sirizinho-4.jpg' },
      { t: 'img', s: 'assets/img/sirizinho-5.jpg' },
      { t: 'img', s: 'assets/img/sirizinho-6.jpg' }
    ],
    pt: {
      text: 'Plataforma 2D infantil com propósito ecológico: o SiriZinho enfrenta slimes poluidores e recicla o lixo que eles espalham pelo mundo. Foi desenhado para crianças — desafios curtos, leitura clara e nenhuma punição frustrante. Projeto autoral do conceito ao lançamento na Play Store.',
      hl: [
        'Fases temáticas: Praia, Zoológico e Navio',
        'Coleta de chaves, bosses e desafios curtos',
        'Mensagem de reciclagem embutida na mecânica, não só na história',
        'Publicado na categoria Família da Play Store',
        'Política de privacidade própria e conformidade com as regras da categoria'
      ]
    },
    en: {
      text: 'A kids\' 2D platformer with an ecological purpose: SiriZinho takes on polluting slimes and recycles the trash they spread across the world. It was designed for children — short challenges, clear readability and no frustrating punishment. A solo project from concept through Play Store release.',
      hl: [
        'Themed stages: the Beach, the Zoo and the Ship',
        'Key collection, bosses and short challenges',
        'The recycling message lives in the mechanics, not just the story',
        'Published in the Play Store Family category',
        'Its own privacy policy and compliance with category rules'
      ]
    }
  },

  woc: {
    media: [
      { t: 'img', s: 'assets/img/woc-title-screen.jpg' },
      { t: 'img', s: 'assets/img/woc-party-questing.jpg' },
      { t: 'img', s: 'assets/img/woc-eastbrook-dusk.jpg' },
      { t: 'img', s: 'assets/img/woc-glimmermere-moongate.jpg' },
      { t: 'img', s: 'assets/img/woc-hollow-crypt.jpg' },
      { t: 'img', s: 'assets/img/woc-drowned-temple-altar.jpg' },
      { t: 'img', s: 'assets/img/woc-restless-dead.jpg' },
      { t: 'img', s: 'assets/img/woc-vale-bandits.jpg' },
      { t: 'img', s: 'assets/img/woc-old-greyjaw.jpg' },
      { t: 'img', s: 'assets/img/woc-vendor-and-bags.jpg' }
    ],
    pt: {
      text: 'MMO de navegador inspirado nos online clássicos. A ideia que sustenta o projeto é "uma simulação, três hospedeiros": o mesmo motor determinístico roda offline no navegador, em servidor autoritativo com contas persistentes, e como ambiente headless de aprendizado por reforço — sem duplicar regra nenhuma.',
      hl: [
        '9 classes jogáveis, com 3 especializações de talento cada',
        '3 zonas de mundo aberto (níveis 1–20) e cerca de 90 quests',
        '5 masmorras instanciadas e a arena PvP Ashen Coliseum',
        'Party, troca, duelos e sussurro entre jogadores',
        'Conteúdo gerado proceduralmente — nenhum arquivo de asset',
        'Tick fixo de 20 Hz e aleatoriedade com seed: simulação reprodutível',
        'Ambiente de RL compatível com Gymnasium',
        'Localizado em 14 idiomas · licença MIT'
      ]
    },
    en: {
      text: 'Browser MMO inspired by classic-era online games. The idea holding the project together is "one sim, three hosts": the same deterministic engine runs offline in the browser, on an authoritative server with persistent accounts, and as a headless reinforcement-learning environment — without duplicating a single rule.',
      hl: [
        '9 playable classes, each with 3 talent specializations',
        '3 open-world zones (levels 1–20) and around 90 quests',
        '5 instanced dungeons and the Ashen Coliseum PvP arena',
        'Parties, trading, duels and whispers between players',
        'Procedurally generated content — not one asset file',
        'Fixed 20 Hz tick and seeded randomness: reproducible simulation',
        'Gymnasium-compatible RL environment',
        'Localized into 14 languages · MIT licensed'
      ]
    }
  },

  vtt: {
    media: [
      { t: 'img', s: 'assets/img/vtt-tv.jpg' },
      { t: 'img', s: 'assets/img/vtt-encontro.jpg' },
      { t: 'img', s: 'assets/img/vtt-gerada.jpg' },
      { t: 'img', s: 'assets/img/vtt-editor.jpg' },
      { t: 'img', s: 'assets/img/vtt-dados.jpg' },
      { t: 'img', s: 'assets/img/vtt-miniaturas.jpg' },
      { t: 'img', s: 'assets/img/vtt-bestiario.jpg' }
    ],
    pt: {
      text: 'Mesa virtual com física real, na linha do Tabletop Simulator, mas pensada para jogo presencial: o tablet é o controle e a TV é o tabuleiro. A decisão de design que define o projeto é que o sistema simula, mas não arbitra — as regras continuam com os jogadores, como numa mesa de verdade.',
      hl: [
        'Todo elemento é um corpo rígido: pegar, girar, empilhar e arremessar',
        'Dados d4–d20 fisicamente simulados — o sistema lê a face que caiu',
        'Duas telas: controle com interface, TV com a cena limpa',
        'Masmorras à mão, geradas proceduralmente ou battlemaps 2D importados',
        'Roda 100% local, sem nuvem e sem conta',
        'Assets apenas de fontes CC0, verificados por allowlist durante o build'
      ]
    },
    en: {
      text: 'A physics-driven virtual tabletop in the Tabletop Simulator vein, but built for in-person play: the tablet is the controller and the TV is the board. The design decision that defines the project is that the system simulates but does not adjudicate — the rules stay with the players, like at a real table.',
      hl: [
        'Every element is a rigid body: grab, rotate, stack and throw',
        'Physically simulated d4–d20 dice — it reads the face that landed',
        'Two screens: controller with the UI, TV with the clean scene',
        'Hand-built dungeons, procedural generation or imported 2D battlemaps',
        'Runs fully local — no cloud, no account',
        'CC0-only assets, verified against an allowlist at build time'
      ]
    }
  },

  lab03: {
    media: [
      { t: 'img', s: 'assets/img/lab03yrinth.jpg' },
      { t: 'img', s: 'assets/img/lab03-g1.jpg' }
    ],
    pt: {
      text: 'Jogo de labirinto hardcore em ambiente laboratorial estéril. A dificuldade não vem de reflexo, e sim da leitura do espaço — o jogador precisa entender a regra do labirinto antes de conseguir atravessá-lo. Assinei o game design e o level design.',
      hl: [
        'Curva de dificuldade e ritmo de introdução de mecânicas',
        'Arquitetura de cada labirinto',
        'Direção estética minimalista, sem ruído visual'
      ]
    },
    en: {
      text: 'A hardcore maze game set in a sterile lab environment. Difficulty comes from reading space rather than reflexes — the player has to understand the maze\'s rule before they can cross it. I owned game design and level design.',
      hl: [
        'Difficulty curve and pacing of new mechanics',
        'Architecture of every maze',
        'Minimalist art direction with no visual noise'
      ]
    }
  },

  rxsquad: {
    media: [
      { t: 'img', s: 'assets/img/rx-squad.jpg' },
      { t: 'img', s: 'assets/img/rxsquad-g1.jpg' }
    ],
    pt: {
      text: 'Shoot \'em up 2D de ação intensa. Fui responsável por todo o design de som do jogo — o desafio era manter o combate legível quando a tela está cheia de projéteis, o que é tanto trabalho de mix quanto de composição.',
      hl: [
        'Trilha original',
        'Efeitos de armas, impactos e explosões',
        'Mix que preserva a leitura do combate em tela cheia'
      ]
    },
    en: {
      text: 'Fast-paced 2D shoot \'em up. I handled the game\'s entire sound design — the challenge was keeping combat readable when the screen is full of projectiles, which is as much a mixing job as a composing one.',
      hl: [
        'Original soundtrack',
        'Weapon, impact and explosion effects',
        'A mix that keeps combat readable at full screen density'
      ]
    }
  },

  sinking: {
    media: [
      { t: 'img', s: 'assets/img/sinking-pirates.jpg' },
      { t: 'img', s: 'assets/img/sinking-g1.jpg' }
    ],
    pt: {
      text: 'Jogo casual mobile de temática pirata. Criei a identidade sonora completa, calibrada para uma restrição bem específica: sessões curtas ouvidas no alto-falante de celular, onde grave nenhum sobrevive.',
      hl: [
        'Trilha e efeitos com identidade pirata',
        'Feedback sonoro de interface',
        'Mix pensado para alto-falante de celular'
      ]
    },
    en: {
      text: 'Pirate-themed mobile casual game. I created the full audio identity, tuned for a very specific constraint: short sessions heard through a phone speaker, where no bass survives.',
      hl: [
        'Pirate-flavoured soundtrack and effects',
        'UI audio feedback',
        'A mix built for phone speakers'
      ]
    }
  }
};
