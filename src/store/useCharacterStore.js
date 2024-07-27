import create from 'zustand';

const useCharacterStore = create((set) => ({
  characters: [
    { id: 1, name: 'Ryu', description: 'Treinando incessantemente, este lutador busca a verdadeira força. Sincero e educado, Ryu viaja pelo mundo em busca de oponentes dignos. Depois de dominar o Satsui no Hado, agora ele busca alçar novos voos.', image: 'ryu.jpg' },
    { id: 2, name: 'Chun-Li', description: 'Ex-agente em ascensão da ICPO, Chun-Li cuida de Li-Fen, vítima do Incidente da Black Moon. Com a Shadaloo agora dividida, Chun-Li dá aulas de kung fu e se tornou uma figura adorada pela comunidade local.', image: 'chun-li.jpg' },
    { id: 3, name: 'Ken', description: 'Ex-campeão do Campeonato Nacional de Luta e ex-vice-presidente da Fundação Masters. Acusações de orquestrar um plano criminoso forçaram Ken a abandonar negócios e família e se esconder.', image: 'ken.jpg' },
    { id: 4, name: 'Blanka', description: 'Defensor benevolente da natureza, Blanka se tornou guia turístico de aventuras, acreditando que a intimidade com a selva servirá de passaporte para a fama e garantirá uma vida boa para sua amada mãe', image: 'blanka.jpg' },
    { id: 5, name: 'Cammy', description: 'Integrante da unidade das forças especiais britânicas Delta Red. Destacou-se na operação contra a Shadaloo, com a qual tem uma ligação predestinada. Ultracompetente, mas taciturna. Trabalha no QG atualmente.', image: 'cammy.jpg' },
    { id: 6, name: 'Guile', description: 'Piloto da força aérea estadunidense e defensor do país, Guile conseguiu vencer a Shadaloo e vingar seu amigo Charlie. Embora goste da vida familiar como poucos, novos campos de batalha o esperam.', image: 'guile.jpg' },
    { id: 7, name: 'Dhalsim', description: 'Um monge indiano e mestre da ioga que guiou inúmeras almas perdidas. Prefere evitar conflitos sempre que possível, mas seu desgosto inato pelo mal o instiga a fazer justiça com firmeza.', image: 'dhalsim.jpg' },
    { id: 8, name: 'Deejay', description: 'Astro mundial da dança, Dee Jay está sempre pronto para uma boa diversão. Com uma paixão ímpar por música e luta, a sensação da Jamaica leva os fãs à loucura com músicas e golpes inigualáveis.', image: 'deejay.jpg' },
    { id: 9, name: 'Ehonda', description: 'Um lutador de sumô que busca popularizar esse esporte pelo mundo, E. Honda poderia chegar a yokozuna, mas as viagens constantes impedem sua promoção. Ele também é um cozinheiro de primeira, conhecido pelo seu chankonabe.', image: 'ehonda.jpg' },
    { id: 10, name: 'Jamie', description: 'Mediador da paz de Chinatown que quer seguir o exemplo de Yun e Yang, os Dragões Gêmeos. Um dançarino de primeira, Jamie valoriza a justiça e a amizade acima de tudo, defendendo a cidade com suas habilidades.', image: 'jamie.jpg' },
    { id: 11, name: 'Zanguief', description: 'Um lutador gigantesco conhecido como Ciclone Vermelho. Zanguief se dedica a melhorar o próprio físico e orientar estudantes.', image: 'zanguief.jpg' },
    { id: 12, name: 'Luke', description: 'Contratado por uma EMP, Luke usa sua vasta experiência para ensinar MMA. Ele passa os dias livres comendo tranqueiras, jogando videogames e lutando, mas não se engane: ele joga para vencer.', image: 'luke.jpg' },
  ],
  setCharacters: (characters) => set({ characters }),
}));

export default useCharacterStore;
