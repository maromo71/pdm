const FILMES_MOCK = [
    {
        id: '1',
        titulo: 'Matrix',
        ano: 1999,
        genero: 'Ficção Científica',
        avaliacao: 8.7,
        capa: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        sinopse: 'Um programador descobre que a realidade em que vive é uma simulação criada por máquinas inteligentes.'
    },
    {
        id: '2',
        titulo: 'Interestelar',
        ano: 2014,
        genero: 'Ficção Científica',
        avaliacao: 8.7,
        capa: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        sinopse: 'Em um futuro em que a Terra enfrenta uma crise ambiental, um grupo de exploradores parte em busca de um novo lar para a humanidade.'
    },
    {
        id: '3',
        titulo: 'O Poderoso Chefão',
        ano: 1972,
        genero: 'Drama / Crime',
        avaliacao: 9.2,
        capa: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        sinopse: 'O patriarca de uma poderosa família mafiosa precisa administrar os negócios criminosos e preservar o legado de sua organização.'
    },
    {
        id: '4',
        titulo: 'A Origem',
        ano: 2010,
        genero: 'Ação / Ficção Científica',
        avaliacao: 8.8,
        capa: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
        sinopse: 'Um especialista em espionagem corporativa invade os sonhos das pessoas para extrair informações e implantar ideias.'
    },
    {
        id: '5',
        titulo: 'Forrest Gump',
        ano: 1994,
        genero: 'Drama / Comédia',
        avaliacao: 8.8,
        capa: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
        sinopse: 'Um homem de coração generoso relembra sua trajetória extraordinária, marcada por acontecimentos históricos e encontros inesperados.'
    },
    {
        id: '6',
        titulo: 'O Senhor dos Anéis: A Sociedade do Anel',
        ano: 2001,
        genero: 'Fantasia / Aventura',
        avaliacao: 8.9,
        capa: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
        sinopse: 'Um jovem hobbit recebe a missão de destruir um poderoso anel capaz de colocar toda a Terra-média sob o domínio do mal.'
    },
    {
        id: '7',
        titulo: 'Titanic',
        ano: 1997,
        genero: 'Romance / Drama',
        avaliacao: 7.9,
        capa: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
        sinopse: 'Durante a viagem inaugural do luxuoso navio Titanic, dois jovens de classes sociais diferentes vivem uma intensa história de amor.'
    },
    {
        id: '8',
        titulo: 'Gladiador',
        ano: 2000,
        genero: 'Ação / Drama',
        avaliacao: 8.5,
        capa: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
        sinopse: 'Um general romano traído pelo imperador perde sua família e busca justiça nas arenas de combate do Império Romano.'
    },
    {
        id: '9',
        titulo: 'Jurassic Park',
        ano: 1993,
        genero: 'Aventura / Ficção',
        avaliacao: 8.2,
        capa: 'https://image.tmdb.org/t/p/w500/d9mtMGQDLANKieb9PbD3yK7xxzo.jpg',
        sinopse: 'Um empresário constrói um parque temático com dinossauros recriados geneticamente, mas um problema de segurança transforma o passeio em uma luta pela sobrevivência.'
    },
    {
        id: '10',
        titulo: 'De Volta para o Futuro',
        ano: 1985,
        genero: 'Aventura / Comédia',
        avaliacao: 8.5,
        capa: 'https://image.tmdb.org/t/p/w500/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
        sinopse: 'Um adolescente viaja acidentalmente para o passado em um carro transformado em máquina do tempo e precisa garantir que seus pais se conheçam.'
    },
    {
        id: '11',
        titulo: 'O Rei Leão',
        ano: 1994,
        genero: 'Animação / Drama',
        avaliacao: 8.5,
        capa: 'https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
        sinopse: 'Um jovem leão precisa superar seus medos e assumir seu verdadeiro destino como rei das Terras do Reino.'
    },
    {
        id: '12',
        titulo: 'Clube da Luta',
        ano: 1999,
        genero: 'Drama / Suspense',
        avaliacao: 8.8,
        capa: 'https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
        sinopse: 'Um homem insatisfeito com sua rotina conhece um indivíduo misterioso e funda um clube clandestino de lutas que foge rapidamente do controle.'
    },
    {
        id: '13',
        titulo: 'Os Vingadores',
        ano: 2012,
        genero: 'Ação / Aventura',
        avaliacao: 8.0,
        capa: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
        sinopse: 'Um grupo de super-heróis precisa unir forças para impedir que uma ameaça extraterrestre destrua a humanidade.'
    },
    {
        id: '14',
        titulo: 'Batman: O Cavaleiro das Trevas',
        ano: 2008,
        genero: 'Ação / Crime',
        avaliacao: 9.0,
        capa: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
        sinopse: 'Batman enfrenta o Coringa, um criminoso imprevisível que pretende mergulhar Gotham City no caos.'
    },
    {
        id: '15',
        titulo: 'Parasita',
        ano: 2019,
        genero: 'Suspense / Drama',
        avaliacao: 8.5,
        capa: 'https://image.tmdb.org/t/p/w500/z9YIo2qscyaXYgRqIdRJtND3bw8.jpg',
        sinopse: 'Uma família de baixa renda consegue se infiltrar gradualmente na rotina de uma família rica, desencadeando consequências inesperadas.'
    },
    {
        id: '16',
        titulo: 'Pulp Fiction: Tempo de Violência',
        ano: 1994,
        genero: 'Crime / Drama',
        avaliacao: 8.9,
        capa: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        sinopse: 'Histórias interligadas de criminosos, assassinos e personagens peculiares se cruzam em Los Angeles.'
    },
    {
        id: '17',
        titulo: 'Oppenheimer',
        ano: 2023,
        genero: 'Biografia / Drama',
        avaliacao: 8.9,
        capa: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        sinopse: 'O filme retrata a trajetória do físico J. Robert Oppenheimer e seu papel no desenvolvimento da primeira bomba atômica.'
    },
    {
        id: '18',
        titulo: 'A Lista de Schindler',
        ano: 1993,
        genero: 'Biografia / Drama',
        avaliacao: 9.0,
        capa: 'https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        sinopse: 'Durante a Segunda Guerra Mundial, um empresário alemão arrisca sua vida para salvar centenas de judeus do Holocausto.'
    }
];

// Simula uma chamada assíncrona a uma API externa
export const buscarFilmes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FILMES_MOCK);
        }, 1000);
    });
};
