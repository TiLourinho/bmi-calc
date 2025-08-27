const classificationInfo = [
  {
    color: "#05A1FC",
    range: "Abaixo de 18,5",
    result: "Baixo peso",
    warning:
      "Desnutrição, osteoporose, sistema imunológico fragilizado, fadiga, etc.",
    healthTips: [
      "Nutrição: foque em uma dieta calórica e nutritiva, não apenas em calorias vazias. Inclua gorduras boas, proteínas de alta qualidade e carboidratos complexos.",
      "Exercício: pratique musculação para ganhar massa muscular. Evite atividades aeróbicas em excesso, que queimam muitas calorias.",
      "Consulte um nutricionista para elaborar um plano alimentar personalizado.",
    ],
  },
  {
    color: "#5EC806",
    range: "Entre 18,5 e 24,9",
    result: "Peso normal",
    warning: "Menor risco de doenças relacionadas ao peso.",
    healthTips: [
      "Manutenção: continue com os hábitos saudáveis! Esta é uma oportunidade de consolidar um estila de vida equilibrado.",
      "Nutrição: mantenha uma dieta variada, rica em frutas, vegetais, fibras e proteínas magras. Hidrate-se bem.",
      "Exercício: combine exercícios aeróbicos com treino de força pelo menos três vezes por semana. O foco é na saúde geral e prevenção.",
    ],
  },
  {
    color: "#FFAA00",
    range: "Entre 25,0 e 29,9",
    result: "Sobrepeso",
    warning:
      "Aumento do risco de desenvolver doenças cardiovasculares, diabetes tipo 2, etc.",
    healthTips: [
      "Prevenção: o objetivo principal é evitar evoluir para a obesidade.",
      "Nutrição: reduza o consumo de alimentos ultraprocessados, açúcares refinados e gorduras saturadas. Introduza pequenas mudanças sustentáveis, como trocar refrigerantes por água e aumentar a ingestão de vegetais.",
      "Exercício: aumente gradualmente a atividade física. Caminhadas diárias de 30 minutos são um excelente começo. Incorpore exercícios de força para aumentar o metabolismo.",
      "Meta: uma perda de 5% a 10% do peso corporal já traz benefícios significativos à saúde.",
    ],
  },
  {
    color: "#FF7500",
    range: "Entre 30,0 e 34,9",
    result: "Obesidade Grau I",
    warning: "Risco moderado de cormobidades.",
    healthTips: [
      "Atenção: esta condição está literalmente ligadas a doenças sérias. Busque acompanhamento de um médico e de um nutricionista.",
      "Abordagem multidisciplinar: o tratamento deve ser supervisionado por profissionais. Pode incluir reeducação alimentar, programa de exercícios adaptados, terapia comportamental, e, em alguns casos, medicamentos ou cirurgia bariátrica (para obesidade grau III).",
      "Exercício: deve ser introduzido com cuidado para proteger as articulações. Atividades aquáticas e caminhadas leves são ótimas opções iniciais.",
    ],
  },
  {
    color: "#FF0000",
    range: "Entre 35,0 e 39,9",
    result: "Obesidade Grau II",
    warning: "Risco grave de cormobidades.",
    healthTips: [
      "Atenção: esta condição está literalmente ligadas a doenças sérias. Busque acompanhamento de um médico e de um nutricionista.",
      "Abordagem multidisciplinar: o tratamento deve ser supervisionado por profissionais. Pode incluir reeducação alimentar, programa de exercícios adaptados, terapia comportamental, e, em alguns casos, medicamentos ou cirurgia bariátrica (para obesidade grau III).",
      "Exercício: deve ser introduzido com cuidado para proteger as articulações. Atividades aquáticas e caminhadas leves são ótimas opções iniciais.",
    ],
  },
  {
    color: "#7e0000ff",
    range: "Acima de 40,0",
    result: "Obesidade Grau III (Mórbida)",
    warning: "Risco muito grave de cormobidades.",
    healthTips: [
      "Atenção: esta condição está literalmente ligadas a doenças sérias. Busque acompanhamento de um médico e de um nutricionista.",
      "Abordagem multidisciplinar: o tratamento deve ser supervisionado por profissionais. Pode incluir reeducação alimentar, programa de exercícios adaptados, terapia comportamental, e, em alguns casos, medicamentos ou cirurgia bariátrica (para obesidade grau III).",
      "Exercício: deve ser introduzido com cuidado para proteger as articulações. Atividades aquáticas e caminhadas leves são ótimas opções iniciais.",
    ],
  },
];

export default classificationInfo;
