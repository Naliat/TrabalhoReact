import SenhorDosAneis from './imgs/SenhorDosAneis.jpg';
import GeorgeOrwell from './imgs/GeorgeOrwell.jpg';
import Hobbit from './imgs/Hobbit.jpg';
import DomQuixote from './imgs/DomQuixote.jpg'; 
import MobyDick from './imgs/MobyDick.jpg';
import GuerraEPaz from './imgs/GuerraEPaz.jpg';
import RevolucaoDosBichos from './imgs/RevolucaoDosBichos.jpg';
import Odisseia from './imgs/Odisseia.jpg';
import DivinaComedia from './imgs/DivinaComedia.jpg';
import CrimeECastigo from './imgs/CrimeECastigo.jpg';

const livros = [
 
  {
    id: 1,
    nome: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    descricao: 'Uma das maiores obras de fantasia já escritas, narrando a jornada épica de Frodo e seus companheiros para destruir Um Anel e salvar a Terra Média.',
    descricaoCompleta: 'Nos tempos antigos da Terra-média, mais especificamente na Segunda Era, os ferreiros-élficos de Eregion, liderados por Celebrimbor, criaram os Anéis de Poder. Mas o que eles não sabiam, era que em Mordor, Sauron, o Senhor das Trevas, forjou o Um Anel, enchendo-o com seu próprio poder para que pudesse governar todos os outros. Depois da Batalha da Última Aliança, onde Elfos (liderados por Elrond e Gil-galad) e os poderosos Homens de Númenor (liderados por Elendil e Isildur) lutaram juntos contra Sauron, ele foi derrotado e o seu Anel foi tirado dele. Sauron vagou em forma de um espírito derrotado por séculos, até que depois de ter reunido um pouco de forças, buscou seu artefato em vão. Ele estava perdido e se tornara apenas uma lenda, conhecida por poucos, na Terra-média. Depois de muitas eras, o Um Anel caiu por acaso nas mãos do improvável hobbit Bilbo Bolseiro do Condado.',
    preco: 'R$ 89,90',
    imagem: SenhorDosAneis,
  },
 
  {
    id: 2,
    nome: '1984',
    autor: 'George Orwell',
    descricao: 'Uma distopia clássica que explora um regime totalitário onde o Big Brother está sempre observando. Uma crítica poderosa sobre vigilância e liberdade.',
    descricaoCompleta: 'Essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria um imenso sucesso de público. Seus principais ingredientes - um homem sozinho desafiando uma tremenda ditadura; sexo furtivo e libertador; horrores letais - atraíram leitores de todas as idades, à esquerda e à direita do espectro político, com maior ou menor grau de instrução. À parte isso, a escrita translúcida de George Orwell, os personagens fortes, traçados a carvão por um vigoroso desenhista de personalidades, a trama seca e crua e o tom de sátira sombria garantiram a entrada precoce de 1984 no restrito panteão dos grandes clássicos modernos. ',
    preco: 'R$ 45,90',
    imagem: GeorgeOrwell,
  },
 
  {
    id: 3,
    nome: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    descricao: 'A encantadora aventura de Bilbo Bolseiro, que embarca em uma jornada inesperada para recuperar o tesouro guardado por Smaug, o dragão.',
    descricaoCompleta: 'bate à sua porta. A partir de então, toda sua vida pacata e campestre soprando anéis de fumaça com seu belo cachimbo começa a mudar. Ele é convocado a participar de uma aventura por ninguém menos do que Thorin Escudo-de-Carvalho, um príncipe do poderoso povo dos Anãos. Esta jornada fará Bilbo, Gandalf e 13 anãos atravessarem a Terra-média, passando por inúmeros perigos, como os imensos trols, as Montanhas Nevoentas infestadas de gobelins ou a muito antiga e misteriosa Trevamata, até chegarem (se conseguirem) na Montanha Solitária. Lá está um incalculável tesouro, mas há um porém. Deitado em cima dele está Smaug, o Dourado, um dragão malicioso que... bem, você terá que ler para descobrir.',
    preco: 'R$ 55,90',
    imagem: Hobbit,
  },

  {
    id: 4,
    nome: 'Dom Quixote',
    autor: 'Miguel de Cervantes',
    descricao: 'Um dos maiores clássicos da literatura ocidental, conta a história do cavaleiro errante Dom Quixote e seu fiel escudeiro Sancho Pança em aventuras cômicas e filosóficas.',
    descricaoCompleta: 'A obra criada por Miguel de Cervantes é considerada por muitos especialistas como a narrativa de ficção mais importante de todos os tempos. Esta publicação da Pé da Letra oferece ao leitor a oportunidade de entrar em contato com a engenhosidade de uma obra-prima da literatura universal. Por meio de uma linguagem acessível, é possível acompanhar, ao lado dos eternos Dom Quixote e Sancho Pança, algumas das aventuras mais famosas da história da literatura.',
    preco: 'R$ 49,90',
    imagem: DomQuixote,
  },
  {
  
    id: 5,
    nome: 'Moby Dick',
    autor: 'Herman Melville',
    descricao: 'A saga do capitão Ahab em sua obsessiva busca por vingança contra a baleia branca, Moby Dick, que lhe tirou uma perna.',
    descricaoCompleta: 'Entremeados à narrativa vão se sobressaindo múltiplos elementos: referências bíblicas que ecoam críticas da época ao nascente imperialismo dos Estados Unidos; a questão racial, personificada na figura dos três arpoadores, um negro, um índio e um nativo polinésio; a análise da extração do óleo dos cachalotes como atividade econômica industrial, incluindo uma discussão sobre a sustentabilidade da pesca das baleias; as tensões sociais, que aparecem nas relações entre superiores e subordinados e na possibilidade sempre presente de um motim ― tudo isso encenado no palco shakespeariano do convés de um baleeiro que parte de Nantucket, em Massachusetts, até chegar ao Pacífico, onde ocorre o enfrentamento final entre o obsessivo capitão Ahab e a monstruosa baleia branca.',
    preco: 'R$ 59,90',
    imagem: MobyDick,
  },
  
  {
    id: 6,
    nome: 'Guerra e Paz',
    autor: 'Liev Tolstói',
    descricao: 'O épico russo que entrelaça histórias pessoais e históricas durante a invasão napoleônica da Rússia, explorando temas de amor, guerra e destino.',
    descricaoCompleta: 'A história de “Guerra e Paz” é contada por meio de uma narrativa complexa que envolve várias camadas de personagens e tramas. Entre os personagens principais, destacam-se os membros da família Rostóv, incluindo a jovem e bela Natacha, o príncipe Andrei Bolkónski, que busca um propósito para sua vida, e Pierre Bezúkhov, um homem rico e perturbado que busca um significado para sua existência. Ao longo do romance, Tolstói entrelaça a vida desses personagens com os eventos históricos que sacudiram a Europa durante o século XIX, como a invasão de Napoleão à Rússia, as batalhas de Austerlitz e Borodinó e a queda do império napoleônico.',
    preco: 'R$ 79,90',
    imagem: GuerraEPaz,
  },
 
  {
    id: 7,
    nome: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    descricao: 'Uma alegoria política brilhante que descreve uma revolução animal em uma fazenda, refletindo os perigos de regimes totalitários.',
    descricaoCompleta: 'Às vésperas de sua morte, o velho porco Major reúne os animais de uma fazenda para compartilhar seu sonho de ver os bichos governando a si próprios, sem a opressão dos homens, em uma sociedade igualitária. Depois da morte de Major, a revolução é instaurada pelos porcos Snowball e Napoleon, mas a utopia não dura muito. Eleito pela revista Time como um dos cem melhores livros já publicados em língua inglesa, A revolução dos bichos é um alerta contra os perigos da corrupção humana até mesmo nos mais bem-intencionados projetos políticos.',
    preco: 'R$ 39,90',
    imagem: RevolucaoDosBichos,
  },

  {
    id: 8,
    nome: 'A Odisséia',
    autor: 'Homero',
    descricao: 'A épica jornada de Ulisses em seu retorno a Ítaca após a Guerra de Troia, enfrentando monstros, deuses e desafios em busca de sua casa e família.',
    descricaoCompleta: 'Um dos principais poemas épicos da Grécia Antiga, a obra A Odisseia é consagrada ao retorno do rei Ulisses ou Odisseu , que durante dez anos enfrentou perigos na terra e no mar até conseguir chegar ao reino de Ítaca. Herói da Guerra de Troia, Ulisses ficou preso em uma ilha durante anos, até finalmente partir com seus doze navios e homens, em uma espetacular jornada repleta de obstáculos, para encontrar a mulher Penélope e o filho Telêmaco. A batalha contra o Ciclope, o sedutor canto das sereias e a fúria de Netuno, deus dos mares, são alguns dos episódios fabulosos dessa obra, retratados em versos ao mesmo tempo dramáticos e poéticos.Como se diz na proposição, A Odisseia é a história do herói de mil estratagemas que tanto vagueou, depois de ter destruído a cidadela sagrada de Troia, que viu cidades e conheceu costumes de muitos homens e que no mar padeceu mil tormentos, enquanto lutava pela vida e pelo regresso dos seus companheiros. ',
    preco: 'R$ 65,90',
    imagem: Odisseia,
  },
 
  {
    id: 9,
    nome: 'A Divina Comédia',
    autor: 'Dante Alighieri',
    descricao: 'A monumental obra poética que narra a jornada de Dante pelo Inferno, Purgatório e Paraíso, guiado por Virgílio e Beatriz, explorando o pecado, a redenção e o amor divino.',
    descricaoCompleta: 'Dante era um admirador profundo da poética de Virgílio, por isso é a ele que pede ajuda para percorrer o doloroso caminho.Quando está no céu, por sua vez, quem realiza o trabalho de acompanhamento é Beatriz, uma musa inspiradora que foi a paixão platônica de Dante durante a adolescência. Beatriz é símbolo do amor divino e é responsável por guiar o poeta para fora da selva.O poema possui três personagens principais: Dante, o protagonista que personifica o homem; Beatriz, que representa a fé; Virgílio, que pode ser considerado o símbolo da razão.',
    preco: 'R$ 89,90',
    imagem: DivinaComedia,
  },
 
  {
    id: 10,
    nome: 'Crime e Castigo',
    autor: 'Fiódor Dostoiévski',
    descricao: 'Um profundo estudo psicológico sobre culpa, redenção e moralidade, centrado na história de Raskólnikov, um jovem que comete um assassinato e enfrenta as consequências de seus atos.',
    descricaoCompleta: 'São Petersburgo para estudar Direito. Por causa de dificuldades financeiras, ele é forçado a desistir dos estudos e passa seus dias em um quartinho apertado, que aluga de uma locatária idosa, sobrevivendo apenas com o pouco dinheiro que recebe de sua mãe. Sua realidade muda quando ele planeja o assassinato de uma usurária. Descrente de Deus e de qualquer tipo de justiça divina, Raskólnikov se vê à mercê da própria consciência, de seu livre arbítrio e das consequências que dele decorrem. Pouco a pouco, o sentimento de culpa o consome cada vez mais. Cruel e pessimista, o romance russo retrata o niilismo, a indiferença, a fé (e a falta dela), o desespero e a frieza humana. ',
    preco: 'R$ 69,90',
    imagem: CrimeECastigo,
  }
];

export default livros;
