
import { Lesson } from '../types';

export const COUNSELING_LESSON: Lesson = {
  id: 'leadership-lesson-v3',
  title: 'El impacto del liderazgo de los directivos',
  subtitle: 'Maestría en Educación - Eliseo Ortega',
  totalSlides: 27,
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
            longContent: 'Entender el liderazgo en entornos adversos permite diseñar estrategias de mejora realistas que beneficia directamente a la comunidad estudiantil y docente.', 
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
            title: 'Internacional Chambi (2023) ', 
            text: 'Liderazgo Pedagógico y Crisis', 
            longContent: 'U. Nacional Mayor de San Marcos (Perú). El liderazgo pedagógico es fundamental en la gestión de cambios y transformaciones. En situaciones de crisis, el líder orienta a la institución hacia soluciones viables y adaptables a su contexto.', 
            icon: 'Globe', 
            image: 'https://picsum.photos/seed/peru/800/600' 
          },
          { 
            title: 'Internacional Vidal (2023)  ', 
            text: 'Liderazgo Directivo Transformacional', 
            longContent: 'U. Nacional Mayor de San Marcos (Perú). Percibe que algunos directores no están plenamente comprometidos, careciendo de liderazgo. Es fundamental contar con un líder y una gestión adecuada para el éxito de la comunidad.', 
            icon: 'Users', 
            image: 'https://picsum.photos/seed/vid/800/600' 
          },
          { 
            title: 'Nacional Dorado(2022) ', 
            text: 'Gestión en la Nueva Ruralidad', 
            longContent: 'Rubio, Táchira. Considera que ante los cambios políticos y sociales rurales, los directivos deben reflexionar sobre su gestión y armonizar acciones en un modelo explicativo de su actuar.', 
            icon: 'MapPin', 
            image: 'https://picsum.photos/seed/ven/800/600' 
          },
          { 
            title: 'Nacional - Cañas (2022) ', 
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
      type: 'split-slider',
      title: 'Estilos de Liderazgo',
      subtitle: 'Enfoques Clásicos y Autores',
      visual: { type: 'image', source: 'https://picsum.photos/seed/lead-styles/1200/800', position: 'top' },
      interaction: {
        type: 'internal-slider',
        revealItems: [
          { title: 'Estilo Autocrático', text: 'Control absoluto y decisiones sin consulta.', longContent: 'Efectivo en situaciones de crisis extrema, pero a menudo genera resistencia y baja motivación en el equipo docente a largo plazo.', icon: 'Lock', image: 'https://picsum.photos/seed/lead1/1200/800' },
          { title: 'Estilo Transformacional', text: 'Bernard Morris Bass: Inspiración para superar expectativas.', longContent: 'El líder busca crear cambios positivos significativos motivando a sus seguidores a trascender sus propios intereses por el bien común.', icon: 'Zap', image: 'https://picsum.photos/seed/lead2/1200/800' },
          { title: 'Estilo Transaccional', text: 'Carl R. Rogers (1957): Intercambio de beneficios mutuos.', longContent: 'Basado en transacciones prácticas entre líder y seguidores para satisfacer necesidades inmediatas de ambas partes.', icon: 'RefreshCw', image: 'https://picsum.photos/seed/lead3/1200/800' },
          { title: 'Estilo Laissez-faire', text: 'Hersey & Blanchard (1969): Autonomía total para el equipo.', longContent: 'El líder delega totalmente la toma de decisiones, confiando en la madurez y alta capacidad profesional de sus subordinados.', icon: 'Coffee', image: 'https://picsum.photos/seed/lead4/1200/800' },
          { title: 'Estilo de Servicio', text: 'Robert K. Greenleaf (1970): El líder como servidor primero.', longContent: 'Prioriza el bienestar y desarrollo del equipo humano antes que las metas organizacionales, fomentando un crecimiento compartido.', icon: 'Heart', image: 'https://picsum.photos/seed/lead5/1200/800' }
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
    {
      id: 'slide-16',
      type: 'visual-info',
      title: 'Capítulo III: Marco Metodológico',
      subtitle: 'Enfoque, Diseño y Procedimientos',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cd5d7357-f3ef-4d86-b555-b7c9b402e7a5_rw_1920.jpg?h=89bd3bf4cdfa88de4e36fcc1fb471cf4', position: 'background' },
      content: '“El marco metodológico, es la instancia referida a los métodos, a diversas reglas, registros, técnicas y protocolos con los cuales una Teoría y su Método calculan las magnitudes de lo real” (Balestrini, 2006, p 126).',
      bullets: ['Recopilación objetiva de datos', 'Análisis estadístico riguroso', 'Diseño de proyecto factible']
    },
    {
      id: 'slide-17',
      type: 'stepped-overlay',
      title: 'Desarrollo Metodológico',
      subtitle: 'Fases, Población y Rigor Científico',
      visual: { type: 'image', source: 'https://picsum.photos/seed/method-details/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { 
            title: 'Naturaleza y Enfoque', 
            text: 'Paradigma Cuantitativo', 
            longContent: 'Búsqueda de conocimientos basada en la recolección y análisis de datos. Sampieri (2010): "la investigación cuantitativa nos ofrece la posibilidad de generalizar los resultados... nos otorga control sobre los fenómenos". Usa medición numérica y análisis estadístico.', 
            icon: 'Activity', 
            image: 'https://picsum.photos/seed/quantitative/800/600' 
          },
          { 
            title: 'Tipo y Diseño', 
            text: 'Campo y Descriptiva', 
            longContent: 'Investigación descriptiva centrada en observar características clave (Hernández et al, 2010). Diseño de campo: recopilación directa de datos originales desde la Unidad Educativa "Andrés Bello", sin manipular variables (Arias, 2012).', 
            icon: 'Map', 
            image: 'https://picsum.photos/seed/field-study/800/600' 
          },
          { 
            title: 'Proyecto Factible', 
            text: 'Fases del Modelo Operativo', 
            longContent: 'Modalidad que formula proyectos viables para mejorar situaciones educativas (Martínez, 2022). Fases UPEL (2016): Diagnóstico (Etapa I), Factibilidad (Etapa II), Diseño (Etapa III), Ejecución (Etapa IV) y Evaluación.', 
            icon: 'Lightbulb', 
            image: 'https://picsum.photos/seed/planning/800/600' 
          },
          { 
            title: 'Ejecución (9 Preguntas)', 
            text: 'Principios de Acción de Cerda', 
            longContent: '¿Qué hacer? (necesidades), ¿Para qué? (objetivos), ¿Por qué? (importancia), ¿Cómo? (actividades), ¿Dónde? (lugar), ¿Magnitud? (alcance), ¿Cuándo? (tiempo), ¿Quiénes? (equipo) y ¿Con qué? (recursos).', 
            icon: 'ClipboardList', 
            image: 'https://picsum.photos/seed/execution/800/600' 
          },
          { 
            title: 'Población y Muestra', 
            text: 'Censo de 49 Sujetos', 
            longContent: 'Población total: 9 personas administrativas, 38 docentes y 2 directivos (Sampieri, p.65). Muestra censal: Se toma la totalidad de la población debido a su magnitud manejable (Hernández et al, 2014).', 
            icon: 'Users', 
            image: 'https://picsum.photos/seed/population/800/600' 
          },
          { 
            title: 'Instrumentos y Variables', 
            text: 'Escala Likert y Operacionalización', 
            longContent: 'Cuestionario estructurado con escala Likert (Siempre, Casi Siempre, Algunas Veces, Casi Nunca, Nunca). Variables (Arias): características objeto de análisis. Dimensiones: aspectos fundamentales extraídos de la variable. Indicadores: señales de medición.', 
            icon: 'FileText', 
            image: 'https://picsum.photos/seed/likert/800/600' 
          },
          { 
            title: 'Validación de Expertos', 
            text: 'Juicio de Contenido', 
            longContent: 'Uso de validez de criterio (Palella y Martins, 2012). Se considera la opinión de tres expertos en metodología para evaluar si el instrumento refleja correctamente la realidad que se intenta medir y pronosticar.', 
            icon: 'CheckCircle', 
            image: 'https://picsum.photos/seed/validation/800/600' 
          },
          { 
            title: 'Cálculo de Confiabilidad', 
            text: 'Alfa de Cronbach', 
            longContent: 'Grado en que la aplicación produce resultados iguales (Hernández et al, 2010). Fórmula: α = [K/(K-1)] * [1 - (ΣSi²/St²)]. Rangos: 0.81-1.00 (Muy alta), 0.61-0.80 (Alta), 0.41-0.60 (Moderada).', 
            icon: 'ShieldCheck', 
            image: 'https://picsum.photos/seed/reliability/800/600' 
          }
        ]
      }
    },
    {
      id: 'slide-18',
      type: 'visual-info',
      title: 'Capítulo IV: Análisis y Resultados',
      subtitle: 'Resultados del Trabajo de Campo',
      visual: { type: 'image', source: 'https://picsum.photos/seed/results-cover/1920/1080', position: 'background' },
      content: 'Presentación detallada de los datos obtenidos a través del instrumento de 15 ítems aplicado a la muestra de 11 sujetos. El análisis se divide en tres dimensiones clave del liderazgo educativo según Bass, Avolio y Goleman.',
      bullets: ['Dimensión 1: Liderazgo de los Directivos', 'Dimensión 2: Impacto en el Aprendizaje', 'Dimensión 3: Impulso mediante el Liderazgo']
    },
    {
      id: 'slide-19',
      type: 'chart-results',
      title: 'Dimensión 1: Liderazgo de los Directivos',
      subtitle: 'Ítems 1 al 5',
      visual: { type: 'image', source: 'https://picsum.photos/seed/light-bg/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { 
            title: '1. Acciones de desarrollo', 
            text: '¿Se implementan acciones de liderazgo a directivos?', 
            longContent: 'El 55% indica que NUNCA se implementan. Según Leithwood y Jantzi (2005), la carencia de liderazgo formativo puede traducirse en un vacío de dirección y visión institucional.',
            icon: 'TrendingDown',
            chartData: [
              { label: 'Nunca', value: 55, color: '#ef4444' },
              { label: 'A veces', value: 27, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          },
          { 
            title: '2. Formación Docente', 
            text: '¿La dirección promueve formación constante?', 
            longContent: 'Un 73% manifiesta que NUNCA se promueve. Fullan (2014) destaca que el desarrollo profesional en liderazgo e innovación es fundamental para el éxito de las reformas educativas.',
            icon: 'BookOpen',
            chartData: [
              { label: 'Nunca', value: 73, color: '#ef4444' },
              { label: 'A veces', value: 9, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          },
          { 
            title: '3. Motivación al logro', 
            text: '¿Se llevan a cabo foros/charlas de motivación?', 
            longContent: 'El 73% afirma que NUNCA. Pink (2009) argumenta que la motivación intrínseca es un factor clave para el éxito profesional y la innovación pedagógica.',
            icon: 'Zap',
            chartData: [
              { label: 'Nunca', value: 73, color: '#ef4444' },
              { label: 'A veces', value: 18, color: '#f59e0b' },
              { label: 'Siempre', value: 9, color: '#10b981' }
            ]
          },
          { 
            title: '4. Comunicación', 
            text: '¿Existe buena comunicación directivo-docente?', 
            longContent: 'El 55% responde NUNCA. Goleman (2006) argumenta que la comunicación es componente esencial del liderazgo efectivo para inspirar y generar pertenencia.',
            icon: 'MessageCircle',
            chartData: [
              { label: 'Nunca', value: 55, color: '#ef4444' },
              { label: 'A veces', value: 27, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          },
          { 
            title: '5. Coordinación Actividades', 
            text: '¿Se coordinan actividades de comunicación?', 
            longContent: 'El 45% NUNCA y el 55% A VECES. Kotter (2012) destaca que la coordinación es esencial para la alineación de objetivos y optimización del rendimiento.',
            icon: 'Repeat',
            chartData: [
              { label: 'Nunca', value: 45, color: '#ef4444' },
              { label: 'A veces', value: 55, color: '#f59e0b' },
              { label: 'Siempre', value: 0, color: '#10b981' }
            ]
          }
        ]
      }
    },
    {
      id: 'slide-20',
      type: 'chart-results',
      title: 'Dimensión 2: Impacto en el Aprendizaje',
      subtitle: 'Ítems 6 al 10',
      visual: { type: 'image', source: 'https://picsum.photos/seed/light-bg2/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { 
            title: '6. Seguimiento Aula', 
            text: '¿Se realiza seguimiento al dominio de grupo?', 
            longContent: '45% Nunca, 45% A veces. Hattie (2009) subraya la importancia del feedback continuo para mejorar el aprendizaje y ajustar la práctica pedagógica.',
            icon: 'Users',
            chartData: [
              { label: 'Nunca', value: 45, color: '#ef4444' },
              { label: 'A veces', value: 45, color: '#f59e0b' },
              { label: 'Siempre', value: 10, color: '#10b981' }
            ]
          },
          { 
            title: '7. Análisis Comportamiento', 
            text: '¿Se analiza comportamiento ante el dominio docente?', 
            longContent: 'Un 46% SIEMPRE, pero el 36% Nunca. Vygotsky (1978) argumenta que entender cómo los alumnos responden permite facilitar el aprendizaje eficazmente.',
            icon: 'GraduationCap',
            chartData: [
              { label: 'Nunca', value: 36, color: '#ef4444' },
              { label: 'A veces', value: 18, color: '#f59e0b' },
              { label: 'Siempre', value: 46, color: '#10b981' }
            ]
          },
          { 
            title: '8. Liderazgo Docente', 
            text: '¿La directiva promueve liderazgo docente en aula?', 
            longContent: 'Un 46% indica que NUNCA. Goleman (2006) enfatiza que el liderazgo crea un ambiente colaborativo que impacta el éxito educativo.',
            icon: 'Star',
            chartData: [
              { label: 'Nunca', value: 46, color: '#ef4444' },
              { label: 'A veces', value: 36, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          },
          { 
            title: '9. Estrategias Aprendizaje', 
            text: '¿Se impulsan estrategias para fomentar liderazgo?', 
            longContent: '36% Nunca, 36% A veces. Gardner (2006) resalta que metodologías activas involucran al estudiante y empoderan su toma de decisiones.',
            icon: 'Lightbulb',
            chartData: [
              { label: 'Nunca', value: 36, color: '#ef4444' },
              { label: 'A veces', value: 36, color: '#f59e0b' },
              { label: 'Siempre', value: 28, color: '#10b981' }
            ]
          },
          { 
            title: '10. Grupos Hostiles', 
            text: '¿Muestran dominio ante grupos hostiles?', 
            longContent: '36% Nunca, 46% A veces. Rogers (1951) sostiene que el manejo adecuado de conflictos es esencial para facilitar un aprendizaje efectivo.',
            icon: 'ShieldAlert',
            chartData: [
              { label: 'Nunca', value: 36, color: '#ef4444' },
              { label: 'A veces', value: 46, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          }
        ]
      }
    },
    {
      id: 'slide-21',
      type: 'chart-results',
      title: 'Dimensión 3: Impulso mediante Liderazgo',
      subtitle: 'Ítems 11 al 15',
      visual: { type: 'image', source: 'https://picsum.photos/seed/light-bg3/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { 
            title: '11. Interacción Asertiva', 
            text: '¿Hay interacción asertiva directivo-docente?', 
            longContent: '55% Nunca. La asertividad es componente esencial del liderazgo efectivo según Goleman (2006) para evitar conflictos.',
            icon: 'Handshake',
            chartData: [
              { label: 'Nunca', value: 55, color: '#ef4444' },
              { label: 'A veces', value: 36, color: '#f59e0b' },
              { label: 'Siempre', value: 9, color: '#10b981' }
            ]
          },
          { 
            title: '12. Gestión Docente', 
            text: '¿Es prioridad el impulso de la gestión docente?', 
            longContent: '45% Nunca, 45% Siempre. Fullan (2014) destaca relevancia de gestión efectiva y capacitación continua para éxito educativo.',
            icon: 'Flag',
            chartData: [
              { label: 'Nunca', value: 45, color: '#ef4444' },
              { label: 'A veces', value: 10, color: '#f59e0b' },
              { label: 'Siempre', value: 45, color: '#10b981' }
            ]
          },
          { 
            title: '13. Motivación al Logro', 
            text: '¿Se percibe motivación común en directivos?', 
            longContent: '55% Nunca. Pink (2009) resalta motivación intrínseca como motor del propósito laboral y cultura organizacional.',
            icon: 'Award',
            chartData: [
              { label: 'Nunca', value: 55, color: '#ef4444' },
              { label: 'A veces', value: 27, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          },
          { 
            title: '14. Resultados Positivos', 
            text: '¿Obtienen resultados mediante liderazgo eficaz?', 
            longContent: '36% Siempre, 46% A veces. Fullan (2001): el liderazgo desempeña un papel crucial en la influencia del rendimiento académico.',
            icon: 'CheckCircle',
            chartData: [
              { label: 'Nunca', value: 18, color: '#ef4444' },
              { label: 'A veces', value: 46, color: '#f59e0b' },
              { label: 'Siempre', value: 36, color: '#10b981' }
            ]
          },
          { 
            title: '15. Planes de Motivación', 
            text: '¿Se impulsan planes para armonizar el ambiente?', 
            longContent: '55% Nunca. Kotter (2012) subraya que la motivación es fundamental para el éxito de cualquier organización y calidad educativa.',
            icon: 'Sparkles',
            chartData: [
              { label: 'Nunca', value: 55, color: '#ef4444' },
              { label: 'A veces', value: 27, color: '#f59e0b' },
              { label: 'Siempre', value: 18, color: '#10b981' }
            ]
          }
        ]
      }
    },
    {
      id: 'slide-22',
      type: 'visual-info',
      title: 'Análisis Crítico de Resultados',
      subtitle: 'Interpretación de Datos',
      visual: { type: 'image', source: 'https://picsum.photos/seed/analyze/800/600', position: 'right' },
      content: 'Los resultados revelan debilidades críticas en formación directiva (55% brecha) y capacitación docente (73% déficit). La falta de comunicación asertiva (55%) sugiere un aislamiento organizacional.',
      bullets: [
        'Déficit estructural en formación de líderes',
        'Necesidad urgente de espacios motivacionales',
        'Brecha en gestión de grupos hostiles (36%)',
        'Falta de sincronía directivo-docente'
      ]
    },
    {
      id: 'slide-23',
      type: 'visual-info',
      title: 'Capítulo V: Conclusiones',
      subtitle: 'Síntesis Final',
      visual: { type: 'image', source: 'https://picsum.photos/seed/conc/800/600', position: 'left' },
      content: 'El liderazgo es el factor invisible que sostiene la estructura pedagógica de la institución. Sin un líder formativo, las innovaciones se ven truncadas.',
      bullets: [
        'El liderazgo efectivo mejora el aprendizaje.',
        'La formación directiva es una necesidad urgente.',
        'La comunicación es el eje de la mejora escolar.'
      ]
    },
    {
      id: 'slide-24',
      type: 'reflection',
      title: 'Recomendaciones',
      subtitle: 'Hacia la Excelencia',
      visual: { type: 'image', source: 'https://picsum.photos/seed/rec/1200/800', position: 'background' },
      content: '¿De qué manera cree usted que un cambio en el liderazgo directivo impactaría su propia aula?',
    },
    {
      id: 'slide-25',
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
      id: 'slide-26',
      type: 'visual-info',
      title: 'Pensamiento Final',
      subtitle: 'Cierre de la Defensa',
      visual: { type: 'image', source: 'https://picsum.photos/seed/final/1200/800', position: 'background' },
      content: '"El liderazgo no se trata de estar al mando, se trata de cuidar a los que están a tu mando." - Simon Sinek'
    },
    {
      id: 'slide-27',
      type: 'visual-info',
      title: '¡Gracias por su atención!',
      subtitle: 'Defensa de Tesis Exitosa',
      visual: { type: 'image', source: 'https://picsum.photos/seed/sky/1200/800', position: 'background' },
      content: 'Maestrante Eliseo Ortega. Gerencia Educativa. Universidad Nacional Abierta.'
    }
  ]
};
