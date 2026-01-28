import { ExamType, Slide } from './types';

export const CONVENIOS = [
  "Amil", "Assefaz", "Ativia", "Bradesco", 
  "Cabesp", "Capitania dos Portos", "Cassi", "Gama Saúde", 
  "New Leader", "NotreDame Intermédica", "Oplan", "Petrobras", 
  "Porto Seguro Saúde", "Santa Casa Saúde", "São Francisco", 
  "Sul América", "Unimed", "Vivest/Funcesp/Sabesp"
];

export const EXAMS: ExamType[] = [
  {
    category: "Exames de Imagem",
    description: "Alta tecnologia para ver diagnósticos.",
    items: [
      "Ressonância Magnética", "Tomografia", "Mamografia",
      "Densitometria", "Raio X", "Ultrassom"
    ]
  },
  {
    category: "Diagnósticos e Procedimentos",
    description: "Exames gráficos, laboratoriais e cardiológicos.",
    items: [
      "Exames Laboratoriais", "Endoscopia", "Colonoscopia", "Colposcopia",
      "Eletrocardiograma", "Ecocardiograma", "Teste Ergométrico",
      "Holter 24h", "Mapa 24h", "Polissonografia",
      "Espirometria", "Eletroneuromiografia", "Eletroencefalograma"
    ]
  },
  {
    category: "Especialidades Médicas",
    description: "Corpo clínico completo para sua saúde.",
    items: [
      "Anestesiologia", "Cardiologia", "Cirurgia Plástica",
      "Clínica Médica (Geral)", "Dentista", "Dermatologia",
      "Fisioterapia", "Gastroenterologia", "Ginecologista",
      "Hematologista", "Medicina Integrativa", "Neurologia",
      "Nutrologia", "Ortopedia e Traumatologia", "Pediatria",
      "Psiquiatria", "Vascular"
    ]
  }
];

export const SLIDES: Slide[] = [
  {
    id: 1,
    type: 'split',
    title: "Clínica Viddas",
    subtitle: "Excelência em Diagnóstico e Saúde",
    content: ["Tecnologia de ponta e atendimento humanizado para você e sua família."],
    imageUrl: "https://i.postimg.cc/5tXZzmw9/gallery-recepcao.jpg", 
    duration: 10
  },
  {
    id: 2,
    type: 'text',
    title: "Nossos Serviços",
    subtitle: "Consultas e Exames em um só lugar",
    duration: 20
  },
  {
    id: 3,
    type: 'split',
    title: "Convênios Atendidos",
    subtitle: "Aceitamos os principais planos de saúde",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200", // Handshake/Business
    duration: 10
  },
  {
    id: 4,
    type: 'split',
    title: "Saúde da Mulher",
    subtitle: "Cuidado especial em todas as fases",
    content: [
      "Mamografia Digital", "Preventivo (Papanicolau)", 
      "Ultrassom Obstétrico", "Acompanhamento Pré-natal",
      "Colposcopia", "Vulvoscopia", "Inserção de DIU",
      "Ninfoplastia"
    ],
    imageUrl: "https://i.postimg.cc/VN22WbRy/gallery-consultorio.png", 
    duration: 10
  }
];