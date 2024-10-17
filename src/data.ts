type Quiz = {
    id: number;
    name: string;
    questions: Questions[];
  };
  
  type Questions = {
    id: number;
    score: number;
    name: string;
    variants: Variant[];
  };
  
  type Variant = {
    letter: string
    id: number;
    name: string;
    isCorrect: boolean;
  };
  
  const quiz: Quiz = {
    id: 1,
    name: "Quiz #2",
    questions: [
      {
        id: 1,
        score: 100,
        name: "რას გვიბრუნებს useState ჰუკი?",
        variants: [
          { letter: 'A', id: 1, name: "ობიექტს", isCorrect: false },
          { letter: 'B', id: 2, name: "მასივს", isCorrect: true },
          { letter: 'C', id: 3, name: "სტრინგს", isCorrect: false },
          {  letter: 'D', id: 4, name: "ბულეანს", isCorrect: false },
        ],
      },
      {
        id: 2,
        score: 100,
        name: "რეაქტში მონაცემები მოძრაობენ იერარქიულად",
        variants: [
          { letter: 'A',id: 1, name: "ზემოდან ქვემოთ", isCorrect: true },
          { letter: 'B',id: 2, name: "ქვემოდან ზემოთ", isCorrect: false },
          { letter: 'C',id: 3, name: "ორივე მიმართულებით", isCorrect: false },
        ],
      },
      {
        id: 3,
        score: 100,
        name: "useState-ის საწყის მნიშვნელობად შეგვიძლია გვქონდეს",
        variants: [
          { letter: 'A',id: 1, name: "სტრინგი", isCorrect: false },
          { letter: 'B',id: 2, name: "ობიექტი", isCorrect: false },
          { letter: 'C',id: 3, name: "ნებისმიერი მონაცემის ტიპი", isCorrect: true },
        ],
      },
      {
        id: 4,
        score: 100,
        name: "შეგვიძლია თუ არა useState ჰუკის გამოყენება if-ის შიგნით?",
        variants: [
          { letter: 'A',id: 1, name: "კი", isCorrect: false },
          { letter: 'B',id: 2, name: "არა", isCorrect: true },
        ],
      },
    ],
  };
  export default quiz