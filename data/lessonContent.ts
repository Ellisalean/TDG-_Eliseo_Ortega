
import { Lesson } from '../types';

export const COUNSELING_LESSON: Lesson = {
  id: 'leadership-lesson-v3',
  title: 'El impacto del liderazgo de los directivos',
  subtitle: 'Maestría en Educación - Eliseo Ortega',
  totalSlides: 24,
  slides: [
    {
      id: 'slide-1',
      type: 'intro',
      title: 'El impacto del liderazgo de los directivos en el aprendizaje de los estudiantes en la Unidad Educativa Andrés Bello, estado Aragua.',
      subtitle: 'Tesis de Maestría 2024',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/7c222c3f-0c2d-4e5a-9aa0-79ad935ba72a_rw_1200.jpg?h=fc2fa91ba025633cd109b4d38814efc7', position: 'background' },
      content: 'El impacto del liderazgo de los directivos en el aprendizaje de los estudiantes en la Unidad Educativa Andrés Bello, estado Aragua.'
    },
    {
      id: 'slide-2',
      type: 'visual-info',
      title: 'Aceptación del Tutor',
      subtitle: 'Respaldo Académico',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/00412f82-78ee-4017-bdc7-c458c627208e_rw_1200.jpg?h=827eadfe2999cb0131af00febb1c9378', position: 'right' },
      content: 'La Tutora Helayne Zuleyma Pérez Bethelmy ha aceptado formalmente dirigir esta investigación, validando el rigor metodológico y la relevancia social del trabajo en el contexto educativo venezolano actual.'
    },
    {
      id: 'slide-3',
      type: 'interactive-reveal',
      title: 'Dedicatoria',
      subtitle: 'Homenaje y Fe',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/22683c20-b85f-4d37-9986-506f0b998573_rw_1920.jpg?h=fc8a3cb4217810d4bc8b6054221049e3', position: 'background' },
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { title: 'Al Señor Jesucristo', text: 'Por ser la guía espiritual', icon: 'Cross', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/ead79127-475d-4e2a-85f6-182a189c48ab_rw_1200.jpg?h=42547a46480d6f87972110506042d479' },
          { title: 'A mi Esposa ', text: 'Pilar fundamental de apoyo', icon: 'Heart', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/4cb06055-e869-45a3-ab3b-a414cbba70db_rw_1200.jpg?h=1ef6e6ac5f14cde5b311f0723da39fd9' },
          { title: 'A mi Madre y a la Memoria de mi Padre', text: 'Eterno ejemplo de esfuerzo', icon: 'User', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/3c06ea25-1245-410e-a571-cbedb9095078_rw_1200.jpg?h=bce4e21213c48d94636e2bf0cc1557f4' }
        ]
      }
    },
    {
      id: 'slide-4',
      type: 'timeline',
      title: 'Agradecimientos',
      subtitle: 'Gratitud Institucional',
      visual: { type: 'image', source: 'https://picsum.photos/seed/thanks/1200/800', position: 'left' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'UNA', text: 'Universidad Nacional Abierta', longContent: 'Agradecimiento especial a la casa de estudios por brindar las herramientas académicas necesarias.', icon: 'GraduationCap', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9fb919d3-8c1f-4110-bc31-3b43ebeef8c9_rw_1200.jpeg?h=963a1f80054c7069a60b7a06606b69bc' },
          { title: 'U.E. Andrés Bello', text: 'Nuestro Campo de Estudio', longContent: 'A los directivos, docentes y personal que abrieron las puertas para recolectar la información.', icon: 'School', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b5205869-c977-42ee-a45a-8cba9e1321da_rw_1200.jpg?h=464394fed0af6a59519bf51e6c772e19' }
        ]
      }
    },
    {
      id: 'slide-5',
      type: 'tabs-reveal',
      title: 'Índice de Contenido',
      subtitle: 'Estructura de la Investigación',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/a24feb00-1514-4d69-aaba-659839fee0d9_rw_1920.jpg?h=7080a31512160e3ab7f00732bdba8583', position: 'background' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          { title: 'Cap. I-II', text: 'Planteamiento y Teoría', longContent: 'Definición del problema y bases teóricas del liderazgo transformacional.', icon: 'BookOpen', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cd5d7357-f3ef-4d86-b555-b7c9b402e7a5_rw_1920.jpg?h=89bd3bf4cdfa88de4e36fcc1fb471cf4' },
          { title: 'Cap. III-IV', text: 'Metodología y Análisis', longContent: 'Enfoque cuantitativo y presentación de los resultados estadísticos.', icon: 'BarChart3', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/1026c481-788a-4802-a675-a661eb4f3788_rw_1920.jpg?h=b4e6a7e090b430b65eafc3db10aa614f' },
          { title: 'Cap. V-VI', text: 'Propuesta y Cierre', longContent: 'Conclusiones y la propuesta de formación en liderazgo directivo.', icon: 'Lightbulb', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b1a6143a-7316-4d39-bd6b-61a6242d5748_rw_1920.jpg?h=b1e347dd27c67cb8d3ea5b7547128eb1' }
        ]
      }
    },
    {
      id: 'slide-6',
      type: 'visual-info',
      title: 'Introducción',
      subtitle: 'Contexto y Motivación',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/3f993324-075a-44d5-9869-1b6998b67082_rw_1920.jpg?h=71bf0edab1b587144591b274514aad90', position: 'left' },
      content: 'El liderazgo educativo es el motor de la calidad escolar. En el contexto venezolano, los desafíos socioeconómicos exigen un liderazgo resiliente que mantenga la motivación docente y el rendimiento estudiantil.',
      bullets: ['Influencia en el clima escolar', 'Motivación del personal docente', 'Desafíos del entorno actual']
    },
    {
      id: 'slide-7',
      type: 'stepped-overlay',
      title: 'Capítulo I: El Problema',
      subtitle: 'Planteamiento y Objetivos',
      visual: { type: 'image', source: 'https://picsum.photos/seed/prob/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { 
            title: 'Planteamiento del Problema', 
            text: 'Crisis de Liderazgo', 
            longContent: 'La falta de un liderazgo directivo efectivo se identifica como un factor crítico que deteriora la calidad educativa y el rendimiento académico en la institución.', 
            icon: 'AlertTriangle', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9f0e9592-777b-4b1b-a365-b573df645b9e_rw_1920.jpg?h=d0b31c599ddade66a9bcd1562d38b570' 
          },
          { 
            title: 'Interrogantes de la investigación', 
            text: 'Preguntas Clave', 
            longContent: '• ¿Cómo se describiría la situación actual del liderazgo de los directivos en torno al aprendizaje de los estudiantes en la U.E. Andrés Bello?\n\n• ¿Cuál sería el impacto de un liderazgo efectivo por parte de los directivos en el aprendizaje sostenido?\n\n• ¿Cuáles serían los mecanismos a desarrollar para promover el ejercicio constante de un liderazgo directivo efectivo?', 
            icon: 'HelpCircle', 
            image: 'https://picsum.photos/seed/questions/800/600' 
          },
          { 
            title: 'Objetivo General', 
            text: 'Analizar el impacto', 
            longContent: 'Analizar el impacto del liderazgo de los directivos en el aprendizaje de los estudiantes en la Unidad Educativa Andrés Bello, estado Aragua.', 
            icon: 'Activity', 
            image: 'https://picsum.photos/seed/target/800/600' 
          },
          { 
            title: 'Objetivos Específicos', 
            text: 'Metas de la Investigación', 
            longContent: '1. DESCRIBIR el liderazgo directivo actual en la U.E. Andrés Bello.\n2. EXPLICAR el impacto de un liderazgo efectivo en el aprendizaje sostenido.\n3. ESPECIFICAR la incidencia del liderazgo en el rendimiento académico.', 
            icon: 'ListChecks', 
            image: 'https://picsum.photos/seed/steps/800/600' 
          },
          { 
            title: 'Justificación', 
            text: 'Relevancia Social', 
            longContent: 'Entender el liderazgo en entornos adversos permite diseñar estrategias de mejora realistas que beneficien directamente a la comunidad estudiantil y docente.', 
            icon: 'ShieldCheck', 
            image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/2df9eefd-3a4d-46f4-89dd-8a440ccb6522_rw_1920.jpg?h=89dd00034ea0a91c3a3026d7abc7cb02' 
          }
        ]
      }
    },
    {
      id: 'slide-8',
      type: 'hotspot-reveal',
      title: 'Delimitación de la Investigación',
      subtitle: 'Unidad Educativa Andrés Bello',
      visual: { type: 'map', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/a10bf6a3-2424-4b6e-a045-3f9c70b4794b_rw_1920.jpg?h=88884a71fb4b962a63dd6b7c37ff915a', position: 'background' },
      interaction: {
        type: 'hotspots',
        revealItems: [
          { 
            title: 'Delimitación de tiempo', 
            text: 'Año Escolar 2023-2024', 
            longContent: 'El tiempo aproximado para la realización de esta investigación es de 1 año comprendido en 2023-2024.', 
            icon: 'Clock', 
            x: 46, 
            y: 35 
          },
          { 
            title: 'Delimitación geográfica', 
            text: 'Estado Aragua', 
            longContent: 'El presente trabajo de grado se llevará a cabo en la Unidad Educativa Andrés Bello, ubicada en el Estado Aragua de Venezuela.', 
            icon: 'MapPin', 
            x: 51, 
            y: 50 
          },
          { 
            title: 'Delimitación del objeto de estudio', 
            text: 'Comunidad Educativa', 
            longContent: 'La población a la que se dirigirá la investigación está conformada por docentes de media y diversificada, directivos y personal administrativo.', 
            icon: 'Users', 
            x: 58, 
            y: 32 
          }
        ]
      }
    },
    {
      id: 'slide-alcances',
      type: 'split-reveal-cards',
      title: 'Alcances de la Investigación',
      subtitle: 'Delimitación y Enfoque',
      visual: { type: 'image', source: 'https://picsum.photos/seed/alcances/1200/800', position: 'right' },
      content: 'El alcance de esta investigación se delimita a la Unidad Educativa Nacional "Andrés Bello" del Estado Aragua en Venezuela. Se enfoca exclusivamente en analizar el impacto del liderazgo directivo sobre el aprendizaje de los estudiantes, excluyendo otras variables no relacionadas directamente con el liderazgo organizacional.',
      interaction: {
        type: 'grid-cards',
        revealItems: [
          { 
            title: 'Metodología y Tipo', 
            text: 'Enfoque Cuantitativo Descriptivo', 
            longContent: 'Se utilizará una metodología cuantitativa para comprender en profundidad las percepciones del personal. El estudio es descriptivo, detallando cómo el liderazgo impacta en el aprendizaje.', 
            icon: 'BarChart3', 
            image: 'https://picsum.photos/seed/methods/800/600' 
          },
          { 
            title: 'Población y Tiempo', 
            text: 'Muestra Censal 2023-2024', 
            longContent: 'Muestra de 2-3 personas por área (docentes, directivos, administrativos). La investigación se desarrolla durante el periodo escolar 2023-2024 (aproximadamente un año).', 
            icon: 'Clock', 
            image: 'https://picsum.photos/seed/time/800/600' 
          }
        ]
      }
    },
    {
      id: 'slide-9',
      type: 'visual-info',
      title: 'Limitaciones',
      subtitle: 'Desafíos del Proceso',
      visual: { type: 'image', source: 'https://picsum.photos/seed/limits/800/600', position: 'right' },
      content: 'Durante la investigación se enfrentaron diversos obstáculos que definieron el alcance del estudio.',
      bullets: ['Falta de recursos tecnológicos', 'Resistencia al cambio en algunos participantes', 'Contexto económico volátil']
    },
    // --- CAPÍTULO II: MARCO TEÓRICO (REFACTORIZADO) ---
    {
      id: 'slide-11',
      type: 'visual-info',
      title: 'Capítulo II: Marco Teórico',
      subtitle: 'Fundamentación de la Investigación',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b1a6143a-7316-4d39-bd6b-61a6242d5748_rw_1920.jpg?h=b1e347dd27c67cb8d3ea5b7547128eb1', position: 'background' },
      content: 'Un marco teórico es quien encuadra, contiene y ubica el problema de investigación, dándole sentido y significado. Al igual que una teoría proporciona descripciones, comprensión y explicaciones, también otorga un marco sólido y coherente según Daros (2002).',
      bullets: ['Comprensión del liderazgo educativo', 'Base para el análisis del aprendizaje', 'Influencia de líderes escolares']
    },
    {
      id: 'slide-12',
      type: 'stepped-overlay',
      title: 'Antecedentes de la Investigación',
      subtitle: 'Referentes Internacionales y Nacionales',
      visual: { type: 'image', source: 'https://picsum.photos/seed/history/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { 
            title: 'Internacional  Chambi (2023) ', 
            text: 'Liderazgo Pedagógico y Crisis', 
            longContent: 'U. Nacional Mayor de San Marcos (Perú). El liderazgo pedagógico es fundamental en la gestión de cambios y transformaciones. En situaciones de crisis, el líder orienta a la institución hacia soluciones viables y adaptables a su contexto.', 
            icon: 'Globe', 
            image: 'https://picsum.photos/seed/peru/800/600' 
          },
          { 
            title: 'Internacional  Vidal (2023)  ', 
            text: 'Liderazgo Directivo Transformacional', 
            longContent: 'U. Nacional Mayor de San Marcos (Perú). Percibe que algunos directores no están plenamente comprometidos, careciendo de liderazgo. Es fundamental contar con un líder y una gestión adecuada para el éxito de la comunidad.', 
            icon: 'Users', 
            image: 'https://picsum.photos/seed/vid/800/600' 
          },
          { 
            title: 'Nacional  Dorado(2022) ', 
            text: 'Gestión en la Nueva Ruralidad', 
            longContent: 'Rubio, Táchira. Considera que ante los cambios políticos y sociales rurales, los directivos deben reflexionar sobre su gestión y armonizar acciones en un modelo explicativo de su actuar.', 
            icon: 'MapPin', 
            image: 'https://picsum.photos/seed/ven/800/600' 
          },
          { 
            title: 'Nacional    Cañas (2022) ', 
            text: 'El Gerente Educativo como Líder', 
            longContent: 'Rubio, Táchira. El educador necesita adecuar su modelo de enseñanza a un mundo dominado por la tecnología. Propone que con un modelo de liderazgo transformacional se lograrán grandes resultados.', 
            icon: 'GraduationCap', 
            image: 'https://picsum.photos/seed/can/800/600' 
          }
        ]
      }
    },
    {
      id: 'slide-13',
      type: 'tabs-reveal',
      title: 'Bases Teóricas: El Liderazgo',
      subtitle: 'Definiciones y Conceptos',
      visual: { type: 'image', source: 'https://picsum.photos/seed/lead-theory/1200/800', position: 'background' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          { title: 'Concepto General', text: 'Proceso y Habilidad', longContent: 'El liderazgo es el proceso y habilidad para guiar e influir en un grupo para lograr resultados, mejorando el potencial de los empleados y el ambiente de desempeño.', icon: 'Zap' },
          { title: 'Terry (2007)', text: 'Práctica Ética y Social', longContent: 'Surge cuando individuos impulsados por la esperanza enfrentan situaciones no auténticas y, con valentía, actúan en conjunto con sus seguidores para darles verdadera dimensión.', icon: 'Shield' },
          { title: 'Hurtado (2019)', text: 'Autoridad Voluntaria', longContent: 'Capacidad de ejercer influencia mediante habilidades. El líder gana autoridad voluntaria de la comunidad para guiar, inspirar y comprometer a sus miembros.', icon: 'Target' },
          { title: 'Koontz & Weihrich', text: 'Esfuerzo Voluntario', longContent: 'Forma en que cada gerente emprende sus funciones para influir sobre las personas bajo su cargo, logrando que su esfuerzo contribuya a las metas organizacionales.', icon: 'Briefcase' },
          { title: 'Chiavenato (1993)', text: 'Influencia Interpersonal', longContent: 'Influencia ejercida en una situación, dirigida a través del proceso de comunicación humana a la consecución de uno o diversos objetivos específicos.', icon: 'MessageCircle' }
        ]
      }
    },
    {
      id: 'slide-14',
      type: 'flashcards',
      title: 'Estilos de Liderazgo',
      subtitle: 'Enfoques Clásicos y Autores',
      visual: { type: 'image', source: 'https://picsum.photos/seed/lead-styles/1200/800', position: 'background' },
      interaction: {
        type: 'flashcards',
        revealItems: [
          { title: 'Autocrático', text: 'Control absoluto y decisiones sin consulta. Efectivo en crisis, pero genera resistencia y baja motivación.', icon: 'Lock', image: 'https://picsum.photos/seed/lead1/400/600' },
          { title: 'Transformacional', text: 'Bernard Morris Bass: El líder inspira al equipo para superar sus expectativas normales, creando cambios positivos y significativos.', icon: 'Zap', image: 'https://picsum.photos/seed/lead2/400/600' },
          { title: 'Transaccional', text: 'Carl R. Rogers (1957): Basado en el intercambio de favores y beneficios mutuos para ganancias personales en lugar de afecto auténtico.', icon: 'RefreshCw', image: 'https://picsum.photos/seed/lead3/400/600' },
          { title: 'Laissez-faire', text: 'Hersey & Blanchard (1969): Autonomía total. El líder permite que el equipo tome decisiones según su madurez y habilidades.', icon: 'Coffee', image: 'https://picsum.photos/seed/lead4/400/600' },
          { title: 'De Servicio', text: 'Robert K. Greenleaf (1970): El líder es un servidor primero. Se centra en satisfacer necesidades y mejorar el bienestar del equipo.', icon: 'Heart', image: 'https://picsum.photos/seed/lead5/400/600' }
        ]
      }
    },
    {
      id: 'slide-15',
      type: 'stepped-overlay',
      title: 'Bases Legales',
      subtitle: 'Marco Normativo Educativo',
      visual: { type: 'image', source: 'https://picsum.photos/seed/law-ven/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { 
            title: 'Constitución (Art. 102)', 
            text: 'Derecho Humano Fundamental', 
            longContent: 'La educación es democrática, gratuita y obligatoria. El Estado asume el interés máximo como instrumento del conocimiento científico y tecnológico.', 
            icon: 'Gavel', 
            image: 'https://picsum.photos/seed/const/800/600' 
          },
          { 
            title: 'Ley de Educación (LOE)', 
            text: 'Art. 3, 38, 39, 81', 
            longContent: 'Promueve la democracia participativa y responsabilidad social. Establece la educación continuada como proceso integral y el perfil del directivo.', 
            icon: 'FileText', 
            image: 'https://picsum.photos/seed/loe/800/600' 
          },
          { 
            title: 'Reglamento LOE', 
            text: 'Art. 68 y 69', 
            longContent: 'El personal directivo se integra por director y subdirector. El director actúa como gerente natural y debe actualizarse en conducta organizacional.', 
            icon: 'Briefcase', 
            image: 'https://picsum.photos/seed/manager/800/600' 
          }
        ]
      }
    },
    // --- CAPÍTULO III: METODOLOGÍA (FUSIONADO) ---
    {
      id: 'slide-16',
      type: 'visual-info',
      title: 'Capítulo III: Marco Metodológico',
      subtitle: 'Diseño, Población y Muestra',
      visual: { type: 'image', source: 'https://picsum.photos/seed/method/800/600', position: 'right' },
      content: 'La investigación adopta un enfoque cuantitativo descriptivo, fundamentado en el análisis estadístico de la realidad institucional para describir el impacto del liderazgo.',
      bullets: [
        'Paradigma Positivista / Cuantitativo.',
        'Nivel Descriptivo y Diseño de Campo.',
        'Población Total: 49 Sujetos (2 Directivos, 38 Docentes, 9 Administrativos).',
        'Muestra: Censal (Se incluye la totalidad de la población por ser manejable).'
      ]
    },
    // --- RESTO DE LOS CAPÍTULOS ---
    {
      id: 'slide-18',
      type: 'quiz',
      title: 'Validación y Confiabilidad',
      subtitle: 'Rigor Científico',
      visual: { type: 'image', source: 'https://picsum.photos/seed/valid/800/600', position: 'left' },
      interaction: {
        type: 'multiple-choice',
        options: [
          { id: 'q1', label: 'Juicio de Expertos', feedback: 'Correcto. Tres expertos validaron el contenido.', isCorrect: true },
          { id: 'q2', label: 'Alfa de Cronbach', feedback: 'Correcto. Se calculó la consistencia interna.', isCorrect: true },
          { id: 'q3', label: 'Intuición Personal', feedback: 'Incorrecto.', isCorrect: false }
        ]
      }
    },
    {
      id: 'slide-19',
      type: 'split-slider',
      title: 'Capítulo IV: Resultados',
      subtitle: 'Datos del Campo',
      visual: { type: 'image', source: 'https://picsum.photos/seed/chart/1200/800', position: 'background' },
      interaction: {
        type: 'internal-slider',
        revealItems: [
          { title: 'Liderazgo Directivo', text: 'Percepción docente.', longContent: 'Los datos muestran una necesidad de mayor acompañamiento pedagógico por parte de los directivos.', icon: 'PieChart', image: 'https://picsum.photos/seed/pie/800/600' },
          { title: 'Clima Laboral', text: 'Motivación y Desempeño.', longContent: 'Un liderazgo inspirador correlaciona directamente con una mejor disposición a la formación docente.', icon: 'BarChart', image: 'https://picsum.photos/seed/bar/800/600' }
        ]
      }
    },
    {
      id: 'slide-20',
      type: 'visual-info',
      title: 'Análisis Crítico',
      subtitle: 'Interpretación de Datos',
      visual: { type: 'image', source: 'https://picsum.photos/seed/analyze/800/600', position: 'right' },
      content: 'La correlación estadística demuestra que la falta de formación en liderazgo directivo genera una desmotivación en cascada que afecta el clima del aula.',
      bullets: ['Desconexión directiva-docente', 'Impacto en planes de estudio', 'Necesidad de renovación estratégica']
    },
    {
      id: 'slide-21',
      type: 'visual-info',
      title: 'Capítulo V: Conclusiones',
      subtitle: 'Síntesis Final',
      visual: { type: 'image', source: 'https://picsum.photos/seed/conc/800/600', position: 'left' },
      content: 'El liderazgo es el factor invisible que sostiene la estructura pedagógica de la institución.',
      bullets: [
        'El liderazgo efectivo mejora el aprendizaje.',
        'La formación directiva es una necesidad urgente.',
        'La comunicación es el eje de la mejora escolar.'
      ]
    },
    {
      id: 'slide-22',
      type: 'reflection',
      title: 'Recomendaciones',
      subtitle: 'Hacia la Excelencia',
      visual: { type: 'image', source: 'https://picsum.photos/seed/rec/1200/800', position: 'background' },
      content: '¿De qué manera cree usted que un cambio en el liderazgo directivo impactaría su propia aula?',
    },
    {
      id: 'slide-23',
      type: 'stepped-overlay',
      title: 'Capítulo VI: La Propuesta',
      subtitle: 'Programa de Formación',
      visual: { type: 'image', source: 'https://picsum.photos/seed/prop/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'Fase 1', text: 'Capacitación Directiva', longContent: 'Talleres en inteligencia emocional y resolución de conflictos.', icon: 'Users', image: 'https://picsum.photos/seed/workshop/800/600' },
          { title: 'Fase 2', text: 'Estrategias Pedagógicas', longContent: 'Acompañamiento y seguimiento constante del aprendizaje.', icon: 'Target', image: 'https://picsum.photos/seed/aim/800/600' }
        ]
      }
    },
    {
      id: 'slide-24',
      type: 'visual-info',
      title: 'Pensamiento Final',
      subtitle: 'Cierre de la Defensa',
      visual: { type: 'image', source: 'https://picsum.photos/seed/final/1200/800', position: 'background' },
      content: '"El liderazgo no se trata de estar al mando, se trata de cuidar a los que están a tu mando." - Simon Sinek'
    },
    {
      id: 'slide-25',
      type: 'visual-info',
      title: '¡Gracias por su atención!',
      subtitle: 'Defensa de Tesis Exitosa',
      visual: { type: 'image', source: 'https://picsum.photos/seed/sky/1200/800', position: 'background' },
      content: 'Maestrante Eliseo Ortega. Maestría en Educación - Mención Gerencia Educativa. Universidad Nacional Abierta.'
    }
  ]
};
