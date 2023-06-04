// import React, { ChangeEvent } from 'react';
// import Head from 'next/head';
// import { DataStorage } from '../../../dataContext';
// import styles from '../home.module.css';
// import { useRouter } from 'next/router';
// import Probabilistico from '../../../Bases/probabilistico';
// import Deterministico from '../../../Bases/deterministico';

// const divisao = [
//   [
//     'A-1 Habitação unifamiliar',
//     'A-2 Habitação multifamiliar',
//     'A-3 Habitação coletiva',
//   ],
//   ['B-1 Hotel e assemelhado', 'B-2 Hotel residencial'],
//   [
//     'C-1 Comércio com baixa carga de incêndio',
//     'C-2 Comércio com média e alta carga de incêndio',
//     'C-3 Centros comerciais de compras (Shopping centers)',
//   ],
//   [
//     'D-1 Local para prestação de serviço profissional ou condução de negócios',
//     'D-2 Agência bancária',
//     'D-3 Serviço de reparação (exceto os classificados em G-4))',
//     'D-4 Laboratório',
//   ],
//   [
//     'E-1 Escola em geral',
//     'E-2 Escola especial',
//     'E-3 Espaço para cultura física ',
//     'E-4 Centro de treinamento profissional',
//     'E-5 Pré-escola',
//     'E-6 Escola para portadores de deficiências',
//   ],
//   [
//     'F-1 Local onde há objeto de valor inestimável',
//     'F-2 Local religioso e velório',
//     'F-3 Centro esportivo e de exibição',
//     'F-4 Estação e terminal de passageiro',
//     'F-5 Arte cênica e auditório',
//     'F-6 Casas de show',
//     'F-7 Construção provisória e evento temporário',
//     'F-8 Local para refeição',
//     'F-9 Recreação',
//     'F-10 Exposição de objetos e animais',
//     'F-11 Clubes sociais e de diversão',
//   ],
//   [
//     'G-1 Estacionamento sem acesso de público e sem abastecimento',
//     'G-2 Estacionamento com acesso de público e sem abastecimento',
//     'G-3 Local dotado de abastecimento de combustível',
//     'G-4 Serviço de conservação, manutenção, garagem e reparos, com ou sem abastecimento ',
//     'G-5 Hangares ',
//   ],
//   [
//     'H-1 Hospital veterinário e assemelhados',
//     'H-2 Locais onde pessoas requerem cuidados especiais por limitações físicas ou mentais',
//     'H-3 Hospital e assemelhado',
//     'H-4 Edificações das forças armadas e policiais',
//     'H-5 Local onde a liberdade das pessoas sofre restrições',
//     'H-6 Clínicas e consultório médico e odontológico',
//   ],
//   [
//     'I-1 Indústria com carga de incêndio até 300MJ/m²',
//     'I-2 Indústria com carga de incêndio entre de 301 e 1.200MJ/m²',
//     'I-3 Indústria com carga de incêndio superior a 1.200MJ/m2',
//   ],
//   [
//     'J-1 Depósitos de material incombustível',
//     'J-2 Depósito com carga de incêndio até 300MJ/m²',
//     'J-3 Depósitos com carga de incêndio entre 301 e 1.200MJ/m²',
//     'J-4 Depósitos com carga de incêndio superior a 1.200MJ/m²',
//   ],
//   ['L-1 Comércio', 'L-2 Indústria', 'L-3 Depósito'],
//   [
//     'M-1 Túnel',
//     'M-2 Líquido ou gás inflamável ou combustível',
//     'M-3 Central de comunicação e energia',
//     'M-4 Canteiro de obras',
//     'M-5 Silos',
//     'M-6 Terra selvagem',
//     'M-7 Pátio de Containers',
//     'M-8 Agronegócio',
//   ],
// ];
// const ocup = [
//   'Residencial',
//   'Serviço de Hospedagem',
//   'Comercial',
//   'Serviço profissional',
//   'Educacional e cultura física',
//   'Reunião de público',
//   'Serviço automotivo e assemelhados',
//   'Serviço de saúde e institucional',
//   'Industrial',
//   'Depósitos',
//   'Explosivos',
//   'Especial'
// ];

// const descricao = [
//   [
//     [
//       {
//         divisao: 'A-1',
//         descricao: 'Casas térreas ou assobradadas (isoladas e não isoladas)',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'A-1',
//         descricao: 'Condomínios horizontais',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'A-1',
//         descricao: 'Residências terapêuticas',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'A-2',
//         descricao: 'Edifícios de apartamentos',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       { divisao: 'A-3', descricao: 'Alojamento', cargaincendio: 300 },
//       { divisao: 'A-3', descricao: 'Convento', cargaincendio: 300 },
//       { divisao: 'A-3', descricao: 'Internato', cargaincendio: 300 },
//       { divisao: 'A-3', descricao: 'Mosteiro', cargaincendio: 300 },
//       { divisao: 'A-3', descricao: 'Pensionato', cargaincendio: 300 },
//       {
//         divisao: 'A-3',
//         descricao:
//           'Residência geriátrica (com capacidade máxima de 16 leitos), sem acompanhamento médico',
//         cargaincendio: 300,
//       },
//     ],
//   ],
//   [
//     [
//       { divisao: 'B-1', descricao: 'Albergues', cargaincendio: 500 },
//       { divisao: 'B-1', descricao: 'Campings', cargaincendio: 500 },
//       {
//         divisao: 'B-1',
//         descricao: 'Habitação coletiva com mais de 16 leitos',
//         cargaincendio: 500,
//       },
//       { divisao: 'B-1', descricao: 'Hospedarias', cargaincendio: 500 },
//       { divisao: 'B-1', descricao: 'Hotéis', cargaincendio: 500 },
//       { divisao: 'B-1', descricao: 'Motéis', cargaincendio: 500 },
//       { divisao: 'B-1', descricao: 'Pensões', cargaincendio: 500 },
//       { divisao: 'B-1', descricao: 'Pousadas', cargaincendio: 500 },
//     ],
//     [
//       { divisao: 'B-2', descricao: 'Apart-hotéis', cargaincendio: 500 },
//       { divisao: 'B-2', descricao: 'Flats', cargaincendio: 500 },
//       {
//         divisao: 'B-2',
//         descricao: 'Hotéis e assemelhados com cozinha própria nos apartamentos',
//         cargaincendio: 500,
//       },
//       { divisao: 'B-2', descricao: 'Hotéis residenciais ', cargaincendio: 500 },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'C-1',
//         descricao: 'Andaimes - aluguel',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Animais - atacado de animais vivos e ovos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Aparelhos eletrodomésticos e equipamentos de áudio e vídeo, incluindo peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Armarinhos - varejo',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Artesanatos e souvenirs',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Bebidas - água, cerveja, chope, refrigerante',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Bebidas - vinho, saquê, cidra',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Bijuteria, artigos de metal e vidro',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Bombas e compressores; partes e peças',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Cal, areia, pedra britada, tijolos e telhas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Carnes - atacado ou varejo (açougue) de carnes e derivados, pescados e frutos do mar',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Cimento',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Defensivos agrícolas, adubos, fertilizantes e corretivos do solo (exceto cujos componentes possuem característica potencialmente explosiva ou combustível)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Ferragens e ferramentas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Floricultura - sementes, flores, plantas e gramas',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Fotografia - artigos fotográficos e para filmagem',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Galeria de quadros',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Hortifrutigranjeiros',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Instrumentos e materiais para uso médico, cirúrgico, hospitalar e de laboratórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Joalheria',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Leite, laticínios e frios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Lustres, luminárias e abajures',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Máquinas e equipamentos não especificados nesta tabela; partes e peças',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Máquinas e equipamentos para costura ou escritórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Máquinas e equipamentos para uso comercial; partes e peças',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Máquinas e equipamentos para uso industrial; partes e peças',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Máquinas, aparelhos e equipamentos para uso agropecuário; partes e peças',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Máquinas, aparelhos e equipamentos para uso odonto- médico-hospitalar; partes e peças',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Máquinas, equipamentos para terraplenagem, mineração e construção; partes e peças',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Materiais elétricos e hidráulicos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Objetos de arte',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Odontológico, produtos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Óptica',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Pedras para acabamento e revestimento',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Produtos da extração mineral, exceto combustíveis',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Produtos e artigos de argila, barro e olaria',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Produtos siderúrgicos e metalúrgicos (exceto para construção)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Próteses e artigos de ortopedia',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Resíduos e sucatas metálicos',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Sorvetes',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Tabacaria',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Veículos automotores e embarcações (incluindo peças e acessórios)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao:
//           'Veículos recreativos - bicicletas, triciclos, entre outros (incluindo peças e acessórios)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'C-1',
//         descricao: 'Vidros, espelhos e vitrais',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Açúcar',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Algodão',
//         cargaincendio: 600,
//       },
//     ],
//     [
//       {
//         divisao: 'C-2',
//         descricao: 'Açúcar',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Algodão',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Animais - varejo de animais vivos, de artigos e alimentos para animais de estimação ("pet shop")',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Antiguidades',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Aparelhos eletrônicos e componentes, equipamentos de telefonia, comunicação e informática',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Armas e munições',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Bebidas destiladas',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Bolsas, malas e artigos de viagem',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Borracha, cortiça, couro, feltro, espuma - artigos',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Brinquedos e artigos recreativos',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Caça, pesca e camping - artigos',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Cacau',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Café',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Caixões e urnas',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Calçados',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Carvão e lenha',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Cera, artigos de',
//         cargaincendio: 2100,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Cereais e leguminosas beneficiados, farinhas, amidos e féculas',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Comércio atacadista de cigarros, cigarrilhas, charutos',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Cosméticos, produtos de perfumaria e higiene pessoal',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Couros, lãs, peles e outros subprodutos não-comestíveis de origem animal - atacado',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Doces, chocolates, confeitos, balas, bombons e semelhantes',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Embalagens',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Esporte, artigos de',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Filmes, CDs, DVDs, fitas e discos',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Iluminação - artigos',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Instrumentos musicais e acessórios',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Livros, jornais, revistas e outras publicações',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Lojas de conveniência',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Lojas de departamentos ou magazines',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Lojas de variedades, exceto lojas de departamentos ou magazines',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Lubrificantes (comércio varejista)',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Madeira - estruturas para locação',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Madeira e artefatos - varejo',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Madeira e artefatos com tratamento ou impregnação - varejo',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Madeira e produtos derivados - atacado',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Massas alimentícias',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Materiais de construção em geral',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Materiais para festas',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Matérias-primas agrícolas (exceto cujos componentes possuem característica potencialmente explosiva ou combustível)',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Móveis (exceto colchoaria)',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Móveis com colchoaria',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Óleos e gorduras',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Pães, bolos, biscoitos e similares',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Palcos, coberturas e outras estruturas de uso temporário (exceto andaimes) - aluguel',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Papel de parede e similares',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Papel e papelão em geral - atacado',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Papelão betuminado',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Papelaria e artigos de escritórios',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Pilhas, baterias e acumuladores elétricos',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Plástico - artigos',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Pneus, pneumáticos e câmaras-de-ar',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Produtos adesivos',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Produtos de limpeza',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Produtos farmacêuticos, medicamentos e drogas de uso humano e veterinário',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Produtos para piscina, inseticidas, repelentes',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Produtos químicos e petroquímicos',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Rações/alimentos para animais - atacado de alimentos para animais',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Relojoaria',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Resíduos e sucatas não metálicos',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Resinas e elastômeros',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Sisal',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Soja',
//         cargaincendio: 1700,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Solventes',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Supermercado (mercados em geral)',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Tapeçaria, persianas e cortinas',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Têxteis e tecidos em geral',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'C-2',
//         descricao:
//           'Tintas (incluindo material de pintura), vernizes e similares',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'C-2',
//         descricao: 'Toldos - aluguel',
//         cargaincendio: 800,
//       },
//     ],
//     [
//       {
//         divisao: 'C-3',
//         descricao: 'Centros comerciais de compras (Shopping centers)',
//         cargaincendio: 800,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'D-1',
//         descricao: 'Administração pública em geral',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Agências de correios, de serviços de postagem e similares',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Agências de notícias',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Agências de publicidade',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Agências de turismo',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Agências matrimoniais',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Alojamento, higiene e embelezamento de animais',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Aluguel de imóveis próprios',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Atividades auxiliares dos transportes aéreos, exceto operação dos aeroportos e campos de aterrissagem',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades auxiliares dos transportes aquaviários',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Atividades de estética e outros serviços de cuidados com a beleza',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades de gravação de som e de edição de música',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades de limpeza não especificadas nesta tabela',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Atividades de produção cinematográfica, de vídeos e de programas de televisão, exceto auditórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades de produção de fotografias',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades de rádio',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades de transporte de valores',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Atividades de vigilância e segurança privada',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Cabeleireiros',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Captação, tratamento e distribuição de água e/ou esgoto',
//         cargaincendio: 0,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Cartórios',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Centrais telefônicas (telefonistas, telemarketing, callcenter, serviço de atendimento ao consumidor)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Copiadora',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Distribuição de água por caminhões',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Encadernadoras',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Escafandria e Mergulho',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Escritórios e unidades de administração em geral',
//         cargaincendio: 700,
//       },

//       {
//         divisao: 'D-1',
//         descricao:
//           'Fornecimento de alimentos preparados (delivery), serviços de alimentação para eventos e recepções (buffet), cocção de alimentos, todos sem consumo no local de produção e sem caráter industrial',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Imunização e controle de pragas urbanas',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Instituições financeiras não incluídas em D-2',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Organismos internacionais e outras instituições extraterritoriais',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Organização logística do transporte de carga',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Outras atividades profissionais, científicas e técnicas não especificadas nesta tabela',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Repartições públicas',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Restauração de obras-de-arte',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Salas de acesso à internet',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços advocatícios',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de adestramento de cães de guarda',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de arquitetura, engenharia e similares',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de cartografia, topografia e geodésia',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de computação em geral',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de cremação sem previsão de reunião de pessoas',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao:
//           'Serviços de funerárias (exceto aqueles especificados no grupo F)',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de gravação de carimbos, exceto confecção',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de tatuagem e colocação de piercing',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-1',
//         descricao: 'Serviços de tradução, interpretação e similares',
//         cargaincendio: 700,
//       },
//     ],
//     [
//       {
//         divisao: 'D-2',
//         descricao: 'Agências bancárias e similares',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'D-3',
//         descricao: 'Chaveiros',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Instalação de máquinas e equipamentos industriais',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Lavanderias',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-3',
//         descricao:
//           'Manutenção e reparação de aparelhos eletroeletrônicos fotográficos ópticos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Manutenção e reparação de instrumentos musicais',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Manutenção e reparação elétricas em geral',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'D-3',
//         descricao:
//           'Manutenção e reparação hidráulicas ou mecânicas em geral, exceto automotivas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Reparação de artigos do mobiliário',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'D-3',
//         descricao:
//           'Reparação de artigos têxteis em geral (roupas, calçados, bolsas e similares)',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Reparação de joias',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Reparação de relógios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-3',
//         descricao:
//           'Reparação e manutenção de artigos borracha, cortiça, couro, feltro, espuma',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'D-3',
//         descricao:
//           'Reparação e manutenção de computadores e de equipamentos periféricos',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Serviços de montagem de móveis de qualquer material',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Serviços de pintura',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'D-3',
//         descricao: 'Tinturarias',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'D-4',
//         descricao:
//           'Atividades de serviços de complementação diagnóstica e terapêutica não especificadas nesta tabela',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Laboratórios clínicos',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Laboratórios de anatomia patológica e citológica',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Laboratórios fotográficos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Laboratórios químicos',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Pesquisa científica e desenvolvimento experimental',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Serviços de bancos de células e tecidos humanos',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-4',
//         descricao:
//           'Serviços de diagnóstico por imagem, métodos ópticos ou registro gráfico',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'D-4',
//         descricao: 'Testes e análises técnicas',
//         cargaincendio: 300,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'E-1',
//         descricao: 'Cursos preparatórios para concursos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-1',
//         descricao:
//           'Educação superior  graduação, pós-graduação, extensão e similares',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-1',
//         descricao: 'Ensino fundamental',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-1',
//         descricao: 'Ensino médio',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'E-2',
//         descricao: 'Cursos de pilotagem',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-2',
//         descricao: 'Ensino de arte e cultura não especificado nesta tabela',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-2',
//         descricao: 'Ensino de artes cênicas, exceto dança',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-2',
//         descricao: 'Ensino de idiomas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-2',
//         descricao: 'Ensino de música',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'E-3',
//         descricao: 'Academias e espaços para atividades físicas em geral',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-3',
//         descricao: 'Atividades de fisioterapia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'E-3',
//         descricao: 'Ensino de dança',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-3',
//         descricao: 'Ensino de esportes',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-3',
//         descricao: 'Sauna',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'E-4',
//         descricao: 'Educação profissional de nível técnico e tecnológico',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-4',
//         descricao: 'Formação de condutores',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'E-4',
//         descricao: 'Treinamento em desenvolvimento profissional e gerencial',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'E-5',
//         descricao: 'Educação infantil, creche, pré-escola e similares',
//         cargaincendio: 400,
//       },
//     ],
//     [
//       {
//         divisao: 'E-6',
//         descricao: 'Escola para portadores de deficiências',
//         cargaincendio: 300,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'F-1',
//         descricao: 'Arquivos',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'F-1',
//         descricao: 'Bibliotecas',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'F-1',
//         descricao: 'Bibliotecas de acervo exclusivamente digital',
//         cargaincendio: 450,
//       },
//       {
//         divisao: 'F-1',
//         descricao: 'Centros de documentos históricos',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'F-1',
//         descricao: 'Museus',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'F-2',
//         descricao:
//           'Cemitérios, crematórios, necrotérios, salas de funerais e assemelhados',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'F-2',
//         descricao:
//           'Igrejas, templos, capelas, sinagogas, mesquitas e espaços assemelhados para reunião ou celebração religiosa',
//         cargaincendio: 200,
//       },
//     ],
//     [
//       {
//         divisao: 'F-3',
//         descricao: 'Centros esportivos e de exibição (com arquibancada)',
//         cargaincendio: 150,
//       },
//     ],
//     [
//       {
//         divisao: 'F-4',
//         descricao: 'Estações e terminais de passageiros',
//         cargaincendio: 200,
//       },
//     ],
//     [
//       {
//         divisao: 'F-5',
//         descricao: 'Cinemas, teatros, auditórios e similares',
//         cargaincendio: 600,
//       },
//     ],
//     [
//       {
//         divisao: 'F-6',
//         descricao:
//           'Casas de show, casas noturnas, boates, restaurantes dançantes e assemelhados',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'F-6',
//         descricao: 'Salões de festa, buffet e similares (todos com palco)',
//         cargaincendio: 600,
//       },
//     ],
//     [
//       {
//         divisao: 'F-7',
//         descricao: 'Circos e assemelhados',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'F-7',
//         descricao: 'Construções provisórias',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'F-7',
//         descricao: 'Eventos temporários, shows e assemelhados',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'F-7',
//         descricao: 'Feiras e similares',
//         cargaincendio: 500,
//       },
//     ],
//     [
//       {
//         divisao: 'F-8',
//         descricao: 'Lanchonetes, cantinas, casas de chá, de sucos e similares',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'F-8',
//         descricao:
//           'Padarias destinadas ao consumo in loco, sem fabricação própria',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'F-8',
//         descricao: 'Restaurantes e bares',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'F-9',
//         descricao: 'Parques recreativos permanentes e assemelhados',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'F-9',
//         descricao:
//           'Zoológicos, jardins botânicos, reservas ecológicas, áreas de proteção ambiental e assemelhados',
//         cargaincendio: 500,
//       },
//     ],
//     [
//       {
//         divisao: 'F-10',
//         descricao: 'Exposições de objetos e de animais',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'F-11',
//         descricao: 'Casas de bingo, casas de apostas e similares',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'F-11',
//         descricao: 'Clubes sociais, esportivos e assemelhados',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'F-11',
//         descricao:
//           'Jogos recreativos eletrônicos, de cartas, de tabuleiro e similares',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'F-11',
//         descricao: 'Salões de festa, buffet e similares (todos sem palco)',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'F-11',
//         descricao: 'Sinuca, bilhar, boliches e similares',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'F-11',
//         descricao: 'Tiro ao alvo, estandes de tiro e similares',
//         cargaincendio: 600,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'G-1',
//         descricao:
//           'Estacionamentos automáticos e estacionamentos com manobristas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'G-1',
//         descricao: 'Estacionamentos de veículos sem acesso de público',
//         cargaincendio: 200,
//       },
//     ],
//     [
//       {
//         divisao: 'G-2',
//         descricao: 'Estacionamentos de veículos com acesso de público',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'G-2',
//         descricao: 'Estacionamentos de veículos sem automação',
//         cargaincendio: 200,
//       },
//     ],
//     [
//       {
//         divisao: 'G-3',
//         descricao: 'Local dotado de abastecimento de combustível',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'G-3',
//         descricao: 'Postos de abastecimento e serviço',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'G-4',
//         descricao:
//           'Oficinas de alinhamento e balanceamento de veículos automotores',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'G-4',
//         descricao:
//           'Oficinas de lanternagem ou funilaria e pintura de veículos automotores',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'G-4',
//         descricao: 'Oficinas de manutenção de máquinas agrícolas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'G-4',
//         descricao:
//           'Oficinas de manutenção e reparação elétrica de veículos automotores',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'G-4',
//         descricao:
//           'Oficinas e serviços de manutenção, conservação e reparação de veículos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'G-4',
//         descricao:
//           'Serviços de borracharia para veículos automotores (sem recauchutagem)',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'G-5',
//         descricao: 'Abrigo para aeronaves com ou sem abastecimento',
//         cargaincendio: 300,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'H-1',
//         descricao:
//           'Hospitais veterinários, clínicas e consultórios veterinários e similares',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'H-2',
//         descricao: 'Asilos, abrigos geriátricos e similares',
//         cargaincendio: 350,
//       },
//       {
//         divisao: 'H-2',
//         descricao: 'Hospitais psiquiátricos',
//         cargaincendio: 350,
//       },
//       {
//         divisao: 'H-2',
//         descricao:
//           'Locais para tratamento de dependentes químicos e assemelhados',
//         cargaincendio: 350,
//       },
//       {
//         divisao: 'H-2',
//         descricao: 'Orfanatos e similares',
//         cargaincendio: 350,
//       },
//       {
//         divisao: 'H-2',
//         descricao: 'Reformatórios (sem celas)',
//         cargaincendio: 350,
//       },
//     ],
//     [
//       {
//         divisao: 'H-3',
//         descricao:
//           'Casas de saúde, clínicas, unidades de urgência, ambulatórios e similares (todos com internação)',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'H-3',
//         descricao: 'Hospitais em geral',
//         cargaincendio: 300,
//       },
//     ],
//     [
//       {
//         divisao: 'H-4',
//         descricao:
//           'Postos policiais, Postos de bombeiros, Delegacias, entre outros',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'H-4',
//         descricao: 'Quartéis',
//         cargaincendio: 700,
//       },
//     ],
//     [
//       {
//         divisao: 'H-5',
//         descricao:
//           'Hospitais psiquiátricos, manicômios, reformatórios (todos com celas)',
//         cargaincendio: 100,
//       },
//       {
//         divisao: 'H-5',
//         descricao: 'Penitenciárias, casas de detenção, presídios e similares',
//         cargaincendio: 100,
//       },
//     ],
//     [
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de acupuntura',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de apoio à gestão de saúde',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de banco de leite humano',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de enfermagem sem internação',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de fonoaudiologia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de podologia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de profissionais da nutrição',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de psicologia e psicanálise',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de reprodução humana assistida',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividades de terapia ocupacional',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Atividade odontológica',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao:
//           'Clínicas médicas e consultórios em geral (todos sem internação)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao:
//           'Outras atividades de atenção à saúde humana sem internação não especificadas nesta tabela',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Serviços de vacinação e imunização humana',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Unidades de diálise e nefrologia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Unidades de hemodiálise',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Unidades de hemoterapia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Unidades de litotripsia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Unidades de quimioterapia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'H-6',
//         descricao: 'Unidades de radioterapia',
//         cargaincendio: 200,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'I-1',
//         descricao: 'Abrasivos',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Aço (fundição)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aço em geral (arames, forjados, ao carbono, especiais, laminados, relaminados, trefilados, perfilados, produtos semi-acabados, tubos) exceto fundição',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Adubos, fertilizantes e similares (exceto cujos componentes possuem característica potencialmente explosiva ou combustível)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Água',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Alumínio em geral (ligas em formas primárias, laminados)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhamento de pedras para construção, exceto associado à extração',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhamento de placas e execução de trabalhos em mármore, granito, ardósia e outras pedras',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhos de recepção, reprodução, gravação e amplificação de áudio e vídeo',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Aparelhos e equipamentos de medida, teste e controle',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhos e equipamentos para distribuição e controle de energia elétrica',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Aparelhos elétricos de uso pessoal, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhos eletromédicos e eletroterapêuticos e equipamentos de irradiação',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhos eletrodomésticos, outros não especificados nesta tabela, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhos fotográficos e cinematográficos, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Aparelhos telefônicos e de outros equipamentos de comunicação, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Artefatos de joalheria e ourivesaria',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Artigos de cutelaria',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Artigos de serralheria, exceto esquadrias',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Artigos ópticos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Automóveis, camionetas e utilitários',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Azulejos pisos e semelhantes',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Bebidas - cervejas, chopes, refrigerantes, isotônicos, chá mate e outros chás prontos para consumo',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Bebidas - sucos de frutas, hortaliças e legumes',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Bebidas - vinho e outros fermentados não especificados nesta tabela',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Bebidas não-alcoólicas não especificadas nesta tabela',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Bicicletas e triciclos não-motorizados, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Bijuterias e artefatos semelhantes',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Britamento de pedras',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cabines, carrocerias e reboques para veículos automotores',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cal e gesso',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Caldeiras geradoras de vapor, exceto para aquecimento central e para veículos',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Caminhões e ônibus',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cerâmicas e refratários (incluindo artefatos e produtos)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cerâmicos não-refratários não especificados nesta tabela',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Chassis com motor para automóveis, camionetas e utilitários',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cigarros, fumo, cigarrilhas, charutos e semelhantes',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Componentes eletrônicos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Compressores, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Concreto, argamassa, cimento, fibrocimento e materiais semelhantes (incluindo artefatos e produtos)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Conservas de frutas, vegetais, legumes e semelhantes',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Construção de embarcações',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Corte e dobra de metais',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cosméticos, produtos de perfumaria e de higiene pessoal',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cronômetros e relógios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Cunhagem de moedas e medalhas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Decoração, lapidação, gravação, vitrificação e outros trabalhos em cerâmica, louça, vidro e cristal',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Defensivos agrícolas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Eletrodomésticos em geral, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Eletrodos, contatos e outros artigos de carvão e grafita para uso elétrico, eletroímãs e isoladores',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Equipamentos de informática',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Equipamentos de transmissão para fins industriais, exceto rolamentos',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Equipamentos de transporte não especificados nesta tabela',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Equipamentos e aparelhos elétricos não especificados nesta tabela',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Equipamentos e instrumentos ópticos, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Equipamentos hidráulicos e pneumáticos, peças e acessórios, exceto válvulas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Equipamentos para irrigação agrícola, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Equipamentos para sinalização e alarme',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Equipamentos transmissores de comunicação, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Especiarias, molhos, temperos e condimentos',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Estruturas metálicas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Estufas e fornos elétricos para fins industriais, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Extração de gemas (pedras preciosas e semipreciosas)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Extração de minerais não-metálicos (grafita, quartzo, amianto, etc.)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Extração de minerais para fabricação de adubos, fertilizantes e outros produtos químicos (exceto cujos componentes possuem característica potencialmente explosiva ou combustível)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Extração e britamento de pedras e outros materiais para construção e beneficiamento associado (ardósia, granito, mármore, calcário, dolomita, gesso, caulim, areia,      cascalho, pedregulho, argila, saibro, basalto, etc.)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Extração, beneficiamento, britamento, pelotização e sinterização de minérios ferrosos e não-ferrosos (ferro, alumínio, estanho, manganês, metais preciosos, minerais radioativos, nióbio, titânio, tungstênio, níquel, cobre, chumbo, zinco, etc.)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Extração, refino e outros tratamentos de sal',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Farmoquímicos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Ferramentas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Ferro (fundição)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Ferro (outros tubos)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Ferro-gusa',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Ferroligas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Fibras artificiais e sintéticas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Fios, cabos e condutores elétricos isolados',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Flores artificiais',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Fornos industriais, aparelhos e equipamentos não- elétricos para instalações térmicas, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Gelo',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Geradores de corrente contínua e alternada, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Guarda-chuvas e similares',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Instrumentos não- eletrônicos e utensílios para uso médico, cirúrgico, odontológico e de laboratório',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Jogos eletrônicos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Lâmpadas, luminárias e outros equipamentos de iluminação',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Lapidação de gemas',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Leite e laticínios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Locomotivas, vagões e outros materiais rodantes',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas de escrever, calcular e outros equipamentos não-eletrônicos para escritório, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para a agricultura e pecuária, peças e acessórios, exceto para irrigação',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para a indústria do plástico, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para a indústria têxtil, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para a prospecção e extração de petróleo, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para as indústrias de alimentos, bebidas e fumo, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para as indústrias de celulose, papel e papelão e artefatos, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para as indústrias do vestuário, do couro e de calçados, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para saneamento básico e ambiental, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para terraplenagem, pavimentação e construção, peças e acessórios, exceto tratores',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para uso geral não especificados nesta tabela, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas e equipamentos para uso industrial específico não especificados nesta tabela, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas para a indústria metalúrgica, peças e acessórios, exceto máquinas- ferramenta',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas, equipamentos e aparelhos para transporte e elevação de cargas, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Máquinas, equipamentos e aparelhos para transporte e elevação de pessoas, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Máquinas-ferramenta, peças e acessórios em geral',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Matadouro / Abate de Animais',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Materiais para medicina e odontologia',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Material elétrico e eletrônico para veículos automotores, exceto baterias',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Material elétrico para instalações em circuito de consumo',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Medicamentos alopáticos, homeopáticos e fitoterápicos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Metais não-ferrosos e suas ligas (forja)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Metais não-ferrosos e suas ligas (fundição)',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Metal (produtos em geral, trefilados, esquadrias, artefatos estampados, artigos para uso doméstico e pessoal)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Metal e ligas metálicas (embalagens)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Metalurgia de metais não-ferrosos e suas ligas não especificados nesta tabela',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Metalurgia em geral (do pó, do cobre, dos metais preciosos)',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Minerais não-metálicos não especificados nesta tabela',
//         cargaincendio: 40,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Motocicletas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Motores e turbinas, peças e acessórios, exceto para aviões e veículos rodoviários',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Motores elétricos, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Motores para automóveis',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Obras de caldeiraria pesada',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Peças e acessórios para veículos automotores',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Peças e acessórios para veículos ferroviários',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Periféricos para equipamentos de informática',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Preparações farmacêuticas',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Processamento de lixo com baixa carga de incêndio',
//         cargaincendio: 0,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Produção e distribuição de vapor, água quente e ar condicionado',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Recondicionamento e recuperação de motores para veículos Automotores (exceto oficina de conserto de veículos)',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Refrescos, xaropes e pós solúveis para refrescos',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Rolamentos para fins industriais',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Sabões e detergentes sintéticos',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Sanitário de cerâmica',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Serviços de confecção de armações metálicas para a construção',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Serviços de prótese dentária',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Serviços de tratamento e revestimento em metais',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Serviços de usinagem, tornearia e solda',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Soldas e ânodos para galvanoplastia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Sorvetes e outros gelados comestíveis',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Tanques, reservatórios metálicos e caldeiras para aquecimento central',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Transformadores, indutores, conversores, sincronizadores e semelhantes, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Tratores, peças e acessórios',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao:
//           'Válvulas, registros e dispositivos semelhantes, peças e acessórios',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Veículos militares de combate',
//         cargaincendio: 300,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Vidro plano e de segurança',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Vinagres',
//         cargaincendio: 80,
//       },
//       {
//         divisao: 'I-1',
//         descricao: 'Zinco (laminados e em formas primárias)',
//         cargaincendio: 200,
//       },
//     ],
//     [
//       {
//         divisao: 'I-2',
//         descricao: 'Absorventes higiênicos',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Acabamentos gráficos, exceto encadernação e plastificação',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Açúcar em geral (de cana refinado, de cereais, de beterraba, em bruto)',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Adesivos e selantes',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Aditivos de uso industrial',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Adoçantes naturais e artificiais',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Aeronaves',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Alimentos dietéticos e complementos alimentares',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Alimentos e pratos prontos',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Alvejamento, tingimento e torção em fios, tecidos, artefatos têxteis e peças do vestuário',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Aparelhos e utensílios para correção de defeitos físicos e aparelhos ortopédicos em geral',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Aparelhos, equipamentos e acessórios de ar condicionado, refrigeração e ventilação',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Artefatos de tanoaria e de embalagens de madeira',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Artefatos de tapeçaria',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Artefatos diversos de cortiça, bambu, palha, vime e outros materiais trançados, exceto móveis',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Artefatos diversos de madeira, exceto móveis',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Artefatos para pesca e esporte',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Artefatos têxteis para uso doméstico',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Artigos de carpintaria para construção',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Artigos para viagem, bolsas e semelhantes de qualquer material',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Aviamentos para costura',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Bancos e estofados para veículos automotores',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Baterias e acumuladores para veículos automotores',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Bebidas - destilados e aguardentes em geral',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Beneficiamento de café',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Biscoitos e bolachas',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Borracha (artefatos não especificados nesta tabela)',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Brinquedos e jogos recreativos não especificados nesta tabela',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Calçados e partes de calçados',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Canetas, lápis e outros artigos para escritório',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Cartolina e papel-cartão',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Casas de madeira pré-fabricadas',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Catalisadores',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Chapas e de embalagens de papelão ondulado',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Chapas, filmes, papéis e outros materiais e produtos químicos para fotografia',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Conservas de peixes, crustáceos e moluscos',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Cordoaria (artefatos)',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Couro (artefatos em geral, curtimento e outras preparações)',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Desinfestantes domissanitários',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Edição de cadastros, listas e de outros produtos gráficos (com ou sem impressão)',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Edição de livros, jornais, revistas (com ou sem impressão)',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Equipamentos e acessórios para segurança pessoal e profissional',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Escovas, pincéis e vassouras',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Esquadrias de madeira e de peças de madeira para instalações industriais e comerciais',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Estamparia e texturização em fios, tecidos, artefatos têxteis e peças do vestuário',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Fermentos e leveduras',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Fiação de fibras de algodão e fibras têxteis naturais',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Formulários contínuos',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Fraldas descartáveis',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Frutas cristalizadas, balas e semelhantes',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Gases em geral (exceto inflamáveis)',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Impressão em geral (livros, jornais, revistas e outros)',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Instrumentos musicais, peças e acessórios',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Linhas para costura e bordar',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Madeira (embalagens)',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Madeira laminada e de chapas de madeira compensada, prensada e aglomerada',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Margarina e outras gorduras vegetais e de óleos não- comestíveis de animais',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Massas alimentícias',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Mesas de bilhar, de sinuca e acessórios',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Mídias virgens, magnéticas e ópticas',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Mobiliário para uso médico, cirúrgico, odontológico e de laboratório',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Móveis em geral',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Óleos vegetais (exceto combustíveis ou inflamáveis)',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Padaria e Confeitaria com produção própria',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Painéis e letreiros Luminosos',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Papel (embalagens)',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Papel e papelão em geral (exceto papelão betuminado)',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Papel e similares para uso comercial e de escritório',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Pilhas, baterias e acumuladores elétricos',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Placas e letreiros de qualquer material, exceto luminosos',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Plástico em geral (artefatos em geral, embalagens, aminados planos, tubulares, tubos e acessórios de uso na      construção)',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Pneus, pneumáticos e câmaras de ar',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Pós alimentícios (alimentos ou preparados em pó)',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Processamento de lixo com média carga de incêndio',
//         cargaincendio: 0,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos à base de café',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos alimentícios não especificados nesta tabela',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos de carne',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos de panificação industrial',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos derivados do cacau e de chocolates',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos para infusão (chá, mate e similares)',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Produtos químicos inorgânicos não especificados nesta tabela',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Produtos químicos orgânicos não especificados nesta tabela',
//         cargaincendio: 1000,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Roupas em geral, peças de vestuário e acessórios',
//         cargaincendio: 500,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Serrarias',
//         cargaincendio: 800,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Serviços de pré-impressão',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Som em qualquer suporte',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Tecelagem de fios de fibras têxteis naturais',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Tecidos especiais, inclusive artefatos',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Têxteis e tecidos em geral',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Torrefação e moagem de café',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'I-2',
//         descricao:
//           'Turbinas, motores e outros componentes e peças para aeronaves',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Vidro (embalagens)',
//         cargaincendio: 700,
//       },
//       {
//         divisao: 'I-2',
//         descricao: 'Vidro (outros não especificado nesta tabela)',
//         cargaincendio: 700,
//       },
//     ],
//     [
//       {
//         divisao: 'I-3',
//         descricao: 'Álcool',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Alimentos para animais e rações',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao:
//           'Amidos e féculas de vegetais ( produtos, moagem, beneficiamento)',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Arroz (produtos, moagem, beneficiamento)',
//         cargaincendio: 1700,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Biocombustíveis',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Cera (produtos e artefatos em geral)',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Cloro e álcalis',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Colchões',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Combustíveis nucleares',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Coquerias',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Elastômeros',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Extração de petróleo e gás natural',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Extração e beneficiamento de areias betuminosas',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Extração e beneficiamento de carvão mineral',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Extração e beneficiamento de xisto',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao:
//           'Farinha de mandioca e derivados (produtos, moagem, beneficiamento)',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao:
//           'Farinha de milho e derivados, exceto óleos de milho (produtos, moagem, beneficiamento)',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Formulação de combustíveis',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Frigorífico',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Impermeabilizantes, solventes e produtos afins',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Intermediários para plastificantes, resinas e fibras',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Óleos lubrificantes (exceto combustíveis ou inflamáveis)',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Papelão betuminado',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Petróleo (produtos do refino e derivados em geral)',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao:
//           'Plastificantes:  produtos químicos orgânicos não especificados nesta tabela (não solventes)',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao:
//           'Plastificantes: produtos químicos orgânicos não especificados nesta tabela (solventes)',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Processamento de lixo com alta carga de incêndio',
//         cargaincendio: 0,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Produtos de limpeza e polimento',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Produtos de origem vegetal não especificados nesta tabela',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Produtos petroquímicos básicos',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Resinas termofixas e resinas termoplásticas',
//         cargaincendio: 3000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Tintas de impressão',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Tintas, vernizes, esmaltes e lacas',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Trigo (produtos, moagem, beneficiamento)',
//         cargaincendio: 2000,
//       },
//       {
//         divisao: 'I-3',
//         descricao: 'Velas (inclusive decorativa)',
//         cargaincendio: 2000,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'J-1',
//         descricao:
//           'Depósitos e similares de material incombustível (sem embalagem ou com embalagem incombustível)',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'J-2',
//         descricao: 'Depósitos e similares com carga de incêndio baixa',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'J-3',
//         descricao: 'Depósitos e similares com carga de incêndio média',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'J-4',
//         descricao: 'Depósitos e similares com carga de incêndio alta',
//         cargaincendio: 0,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'L-1',
//         descricao:
//           'Comércio varejista de fogos de artifício e artigos pirotécnicos',
//         cargaincendio: 4000,
//       },
//     ],
//     [
//       {
//         divisao: 'L-2',
//         descricao: 'Fabricação de armas de fogo, outras armas e munições',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'L-2',
//         descricao: 'Fabricação de artigos pirotécnicos',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'L-2',
//         descricao:
//           'Fabricação de equipamento bélico pesado, exceto veículos militares de combate',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'L-2',
//         descricao:
//           'Fabricação de fertilizantes cujos componentes possuem característica potencialmente explosiva ou combustível',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'L-2',
//         descricao: 'Fabricação de fósforos de segurança',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'L-2',
//         descricao: 'Fabricação de pólvoras, explosivos e detonantes',
//         cargaincendio: 4000,
//       },
//     ],
//     [
//       {
//         divisao: 'L-3',
//         descricao: 'Depósito de pólvora, explosivos, detonantes e similares',
//         cargaincendio: 0,
//       },
//     ],
//   ],
//   [
//     [
//       {
//         divisao: 'M-1',
//         descricao: 'Túnel',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'M-2',
//         descricao:
//           'Comércio atacadista de biodiesel, gasolina e demais derivados de petróleo',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'M-2',
//         descricao:
//           'Comércio atacadista de combustíveis de origem vegetal e mineral em bruto',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'M-2',
//         descricao: 'Comércio atacadista de lubrificantes',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'M-2',
//         descricao: 'Comércio de gás liquefeito de petróleo (GLP)',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'M-2',
//         descricao: 'Distribuição de combustíveis gasosos por redes urbanas',
//         cargaincendio: 4000,
//       },
//       {
//         divisao: 'M-2',
//         descricao: 'Produção de gás; processamento de gás natural',
//         cargaincendio: 4000,
//       },
//     ],
//     [
//       {
//         divisao: 'M-3',
//         descricao: 'Centrais de processamento de dados',
//         cargaincendio: 400,
//       },
//       {
//         divisao: 'M-3',
//         descricao: 'Centrais de transmissão e de distribuição de energia',
//         cargaincendio: 200,
//       },
//       {
//         divisao: 'M-3',
//         descricao: 'Centrais telefônicas',
//         cargaincendio: 100,
//       },
//       {
//         divisao: 'M-3',
//         descricao: 'Centros de comunicação',
//         cargaincendio: 100,
//       },
//       {
//         divisao: 'M-3',
//         descricao: 'Geração de energia elétrica',
//         cargaincendio: 600,
//       },
//       {
//         divisao: 'M-3',
//         descricao:
//           'Geração de energia - outras (eólica, solar, fotovoltaica, termoelétrica)',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'M-4',
//         descricao: 'Canteiro de obras e assemelhados (instalações de apoio)',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'M-5',
//         descricao: 'Armazenamento e processos de grãos e assemelhados',
//         cargaincendio: 0,
//       },
//       {
//         divisao: 'M-5',
//         descricao: 'Silos',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'M-6',
//         descricao:
//           'Florestas, reservas ecológicas, parques florestais e assemelhados',
//         cargaincendio: 3000,
//       },
//     ],
//     [
//       {
//         divisao: 'M-7',
//         descricao: 'Pátio de containers',
//         cargaincendio: 0,
//       },
//     ],
//     [
//       {
//         divisao: 'M-8',
//         descricao:
//           'Agronegócio (edificações e instalações destinadas à plantação ou criação de animais)',
//         cargaincendio: 0,
//       },
//     ],
//   ],
// ];

// const Ocupacao = () => {
//   const router = useRouter();
//   const ocupacoes = ocup;
//   const [select, setSelect] = React.useState<number>(0);
//   const [div, setDiv] = React.useState<number>(0);
//   const [desc, setDesc] = React.useState<number>(0);


//   function handleMetodo(event: string) {
//     setJ1(event);
//     setMetodo('');
//   }

//   function handleDivisao(target: string) {
//     setSelect(+target);
//     setDiv(0);
//     setJ1('sim');
//     setMetodo('');
//   }

//   function handleNext() {
//     if (select === 9 && j1 === 'sim') {
//       allStates({
//         ocupacao: descricao[select][div][desc].divisao,
//         cargaIncendio: descricao[9][0][0].cargaincendio
//       });
//       router.push('/result');
//     } else {
//       allStates({
//         ocupacao: descricao[select][div][desc].divisao,
//         cargaIncendio: descricao[select][div][desc].cargaincendio,
//       });
//       router.push('/result');
//     }
//   }
//   return (
//     <>
//       <Head>
//         <title>Projeto de Segurança Contra Incêndio e Pânico</title>
//       </Head>
//       <div className={styles.form}>
//         <label>Ocupação</label>
//         <select
//           value={select}
//           onChange={({ target }) => handleDivisao(target.value)}
//         >
//           {ocupacoes?.map((item, index) => {
//             return (
//               <option key={index} value={index}>
//                 {item}
//               </option>
//             );
//           })}
//         </select>
//         {select === 9 ? (
//           <div>
//             <span>Todo o material a ser armazenado é incombustível?</span>
//             <div className={styles.radio}>
//               <div>
//                 <input
//                   type="radio"
//                   name="J-1"
//                   id="combustível"
//                   value="sim"
//                   checked={j1 === 'sim'}
//                   onChange={({ target }) => {
//                     handleMetodo(target.value);
//                   }}
//                 />
//                 <label htmlFor="combustível">Sim</label>
//               </div>
//               <div>
//                 <input
//                   type="radio"
//                   name="J-1"
//                   id="incombustível"
//                   value="nao"
//                   checked={j1 === 'nao'}
//                   onChange={({ target }) => {
//                     handleMetodo(target.value);
//                   }}
//                 />
//                 <label htmlFor="incombustível">Não</label>
//               </div>
//             </div>
//             {j1 === 'sim' && (
//               <div>
//                 <p>Divisão: {descricao[9][0][0].divisao}</p>
//                 <p>Divisão: {descricao[9][0][0].descricao}</p>
//                 <div>
//                   <button onClick={handleNext}>Próximo</button>
//                   <button onClick={() => router.back()}>Voltar</button>
//                 </div>
//               </div>
//             )}
//             {j1 === 'nao' && (
//               <div>
//                 <span>Deseja calcular a carga incêndio por qual método?</span>
//                 <div className={styles.radio}>
//                   <div>
//                     <input
//                       type="radio"
//                       name="metodo"
//                       id="probabilistico"
//                       value="probabilistico"
//                       checked={metodo === 'probabilistico'}
//                       onChange={({ target }) => setMetodo(target.value)}
//                     />
//                     <label htmlFor="probabilistico">Probabilistico</label>
//                   </div>
//                   <div>
//                     <input
//                       type="radio"
//                       name="metodo"
//                       id="deterministico"
//                       value="deterministico"
//                       checked={metodo === 'deterministico'}
//                       onChange={({ target }) => setMetodo(target.value)}
//                     />
//                     <label htmlFor="deterministico">Deterministico</label>
//                   </div>
//                 </div>
//               </div>
//             )}
//             {metodo === 'probabilistico' && <Probabilistico />}
//             {metodo === 'deterministico' && <Deterministico />}
//           </div>
//         ) : (
//           <div className={styles.form}>
//             <label>Divisão</label>
//             <select
//               value={div}
//               onChange={({ target }) => setDiv(+target.value)}
//             >
//               {divisao[select]?.map((item, index) => {
//                 return (
//                   <option key={index} value={index}>
//                     {item}
//                   </option>
//                 );
//               })}
//             </select>
//             <label>Descrição</label>
//             <select
//               value={desc}
//               onChange={({ target }) => setDesc(+target.value)}
//             >
//               {descricao[select][div]?.map((item, index) => {
//                 return (
//                   <option key={index} value={index}>
//                     {item.descricao}
//                   </option>
//                 );
//               })}
//             </select>
//             <div>
//               <button onClick={handleNext}>Próximo</button>
//               <button onClick={() => router.back()}>Voltar</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Ocupacao;
