
import { Lesson } from '../types';

export const COUNSELING_LESSON: Lesson = {
  id: 'leadership-lesson-v3',
  title: 'El impacto del liderazgo de los directivos',
  subtitle: 'Maestría en Educación - Eliseo Ortega',
  totalSlides: 28,
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
          { title: 'Planteamiento', text: 'Crisis de Liderazgo', longContent: 'La falta de un liderazgo directivo efectivo se identifica como un factor crítico que deteriora la calidad educativa.', icon: 'AlertTriangle', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/9f0e9592-777b-4b1b-a365-b573df645b9e_rw_1920.jpg?h=d0b31c599ddade66a9bcd1562d38b570' },
          { title: 'Objetivo General', text: 'Analizar el impacto', longContent: 'Analizar el impacto del liderazgo de los directivos en el aprendizaje de los estudiantes.', icon: 'Activity', image: 'https://picsum.photos/seed/target/800/600' },
          { title: 'Justificación', text: 'Relevancia Social', longContent: 'Entender el liderazgo en entornos adversos permite diseñar estrategias de mejora realistas.', icon: 'ShieldCheck', image: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/2df9eefd-3a4d-46f4-89dd-8a440ccb6522_rw_1920.jpg?h=89dd00034ea0a91c3a3026d7abc7cb02' }
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
          { title: 'Tiempo', text: 'Año Escolar 2023-2024', longContent: 'Periodo lectivo actual.', icon: 'Clock', x: 46, y: 35 },
          { title: 'Lugar', text: 'Estado Aragua', longContent: 'Sector Educativo Regional.', icon: 'MapPin', x: 51, y: 50 },
          { title: 'Objeto', text: 'Comunidad Educativa', longContent: 'Docentes y directivos.', icon: 'Users', x: 58, y: 32 }
        ]
      }
    },
    {
      id: 'slide-9',
      type: 'visual-info',
      title: 'Limitaciones',
      subtitle: 'Desafíos del Proceso',
      visual: { type: 'image', source: 'https://picsum.photos/seed/limits/800/600', position: 'right' },
      content: 'Obstáculos enfrentados: Falta de recursos tecnológicos, resistencia al cambio y contexto económico volátil.',
      bullets: ['Tecnológicas', 'Humanas', 'Económicas']
    },
    {
      id: 'slide-11',
      type: 'visual-info',
      title: 'Capítulo II: Marco Teórico',
      subtitle: 'Fundamentación',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/b1a6143a-7316-4d39-bd6b-61a6242d5748_rw_1920.jpg?h=b1e347dd27c67cb8d3ea5b7547128eb1', position: 'background' },
      content: 'Un marco teórico encuadra y ubica el problema, dándole sentido y significado (Daros, 2002).',
      bullets: ['Liderazgo Educativo', 'Aprendizaje Escolar', 'Líderes Escolares']
    },
    {
      id: 'slide-12',
      type: 'stepped-overlay',
      title: 'Antecedentes',
      subtitle: 'Referentes',
      visual: { type: 'image', source: 'https://picsum.photos/seed/history/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'Chambi (2023)', text: 'Perú. Liderazgo Pedagógico.', icon: 'Globe', image: 'https://picsum.photos/seed/peru/800/600' },
          { title: 'Vidal (2023)', text: 'Perú. Liderazgo Transformacional.', icon: 'Users', image: 'https://picsum.photos/seed/vid/800/600' },
          { title: 'Dorado (2022)', text: 'Venezuela. Nueva Ruralidad.', icon: 'MapPin', image: 'https://picsum.photos/seed/ven/800/600' }
        ]
      }
    },
    {
      id: 'slide-13',
      type: 'tabs-reveal',
      title: 'Bases Teóricas',
      subtitle: 'El Liderazgo',
      visual: { type: 'image', source: 'https://picsum.photos/seed/lead-theory/1200/800', position: 'background' },
      interaction: {
        type: 'side-reveal',
        revealItems: [
          { title: 'Concepto', text: 'Habilidad para guiar.', longContent: 'Proceso de influencia grupal.', icon: 'Zap' },
          { title: 'Hurtado (2019)', text: 'Autoridad Voluntaria.', longContent: 'Influencia basada en habilidades.', icon: 'Target' }
        ]
      }
    },
    {
      id: 'slide-14',
      type: 'split-slider',
      title: 'Estilos de Liderazgo',
      subtitle: 'Enfoques',
      visual: { type: 'image', source: 'https://picsum.photos/seed/lead-styles/1200/800', position: 'top' },
      interaction: {
        type: 'internal-slider',
        revealItems: [
          { title: 'Autocrático', text: 'Control absoluto.', icon: 'Lock', image: 'https://picsum.photos/seed/lead1/1200/800' },
          { title: 'Transformacional', text: 'Inspiración.', icon: 'Zap', image: 'https://picsum.photos/seed/lead2/1200/800' }
        ]
      }
    },
    {
      id: 'slide-15',
      type: 'stepped-overlay',
      title: 'Bases Legales',
      subtitle: 'Normativa',
      visual: { type: 'image', source: 'https://picsum.photos/seed/law-ven/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'Constitución', text: 'Art. 102. Derecho humano.', icon: 'Gavel', image: 'https://picsum.photos/seed/const/800/600' },
          { title: 'LOE', text: 'Perfil Directivo.', icon: 'FileText', image: 'https://picsum.photos/seed/loe/800/600' }
        ]
      }
    },
    {
      id: 'slide-16',
      type: 'visual-info',
      title: 'Capítulo III: Metodología',
      subtitle: 'Enfoque',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cd5d7357-f3ef-4d86-b555-b7c9b402e7a5_rw_1920.jpg?h=89bd3bf4cdfa88de4e36fcc1fb471cf4', position: 'background' },
      content: 'Instancia referida a los métodos y protocolos (Balestrini, 2006).',
      bullets: ['Paradigma Cuantitativo', 'Diseño de Campo', 'Proyecto Factible']
    },
    {
      id: 'slide-17',
      type: 'stepped-overlay',
      title: 'Desarrollo Metodológico',
      subtitle: 'Rigor',
      visual: { type: 'image', source: 'https://picsum.photos/seed/method-details/1200/800', position: 'background' },
      interaction: {
        type: 'stepped-reveal',
        revealItems: [
          { title: 'Población', text: '49 Sujetos.', longContent: 'Muestra censal total.', icon: 'Users', image: 'https://picsum.photos/seed/population/800/600' },
          { title: 'Instrumento', text: 'Cuestionario Likert.', longContent: '15 ítems validados.', icon: 'FileText', image: 'https://picsum.photos/seed/likert/800/600' }
        ]
      }
    },
    {
      id: 'slide-18',
      type: 'visual-info',
      title: 'Capítulo IV: Resultados',
      subtitle: 'Análisis',
      visual: { type: 'image', source: 'https://picsum.photos/seed/results-cover/1920/1080', position: 'background' },
      content: 'Análisis de dimensiones clave: Liderazgo, Aprendizaje e Impulso Motivacional.',
      bullets: ['Dimensión Directiva', 'Impacto Escolar', 'Impulso']
    },
    {
      id: 'slide-19',
      type: 'chart-results',
      title: 'Dimensión 1: Liderazgo',
      subtitle: 'Acciones',
      visual: { type: 'image', source: 'https://picsum.photos/seed/light-bg/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { title: 'Desarrollo', text: '55% Nunca implementan acciones.', chartData: [{ label: 'Nunca', value: 55, color: '#ef4444' }, { label: 'A veces', value: 27, color: '#f59e0b' }, { label: 'Siempre', value: 18, color: '#10b981' }], icon: 'TrendingDown' }
        ]
      }
    },
    {
      id: 'slide-20',
      type: 'chart-results',
      title: 'Dimensión 2: Aprendizaje',
      subtitle: 'Seguimiento',
      visual: { type: 'image', source: 'https://picsum.photos/seed/light-bg2/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { title: 'Seguimiento', text: '90% insuficiente seguimiento.', chartData: [{ label: 'Nunca/A veces', value: 90, color: '#ef4444' }, { label: 'Siempre', value: 10, color: '#10b981' }], icon: 'Users' }
        ]
      }
    },
    {
      id: 'slide-21',
      type: 'chart-results',
      title: 'Dimensión 3: Impulso',
      subtitle: 'Interacción',
      visual: { type: 'image', source: 'https://picsum.photos/seed/light-bg3/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { title: 'Asertividad', text: '55% Nunca asertivos.', chartData: [{ label: 'Nunca', value: 55, color: '#ef4444' }, { label: 'A veces', value: 36, color: '#f59e0b' }, { label: 'Siempre', value: 9, color: '#10b981' }], icon: 'Handshake' }
        ]
      }
    },
    {
      id: 'slide-22',
      type: 'chart-results',
      title: 'Análisis Crítico',
      subtitle: 'Hallazgos',
      visual: { type: 'image', source: 'https://picsum.photos/seed/analyze-crit/1200/800', position: 'background' },
      interaction: {
        type: 'charts',
        revealItems: [
          { title: 'Resumen', text: 'Déficit estructural identificado.', icon: 'TrendingDown' }
        ]
      }
    },
    {
      id: 'slide-23',
      type: 'visual-info',
      title: 'Capítulo V: Conclusiones',
      subtitle: 'Síntesis',
      visual: { type: 'image', source: 'https://picsum.photos/seed/conc/800/600', position: 'left' },
      content: 'El liderazgo es el factor invisible que sostiene la estructura pedagógica.',
      bullets: ['Formación Urgente', 'Comunicación eje']
    },
    {
      id: 'slide-24',
      type: 'hotspot-reveal',
      title: 'Recomendaciones',
      subtitle: 'Plan de Mejora',
      content: 'Acciones prácticas para lograr mejoras sustanciales.',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cd5d7357-f3ef-4d86-b555-b7c9b402e7a5_rw_1920.jpg?h=89bd3bf4cdfa88de4e36fcc1fb471cf4', position: 'right' },
      interaction: {
        type: 'hotspots',
        revealItems: [
          { title: 'Formación', text: 'Plan de capacitación anual.', icon: 'GraduationCap', x: 75, y: 15 }
        ]
      }
    },
    {
      id: 'slide-25',
      type: 'intro',
      title: 'Capítulo VI: PROPUESTA DE INVESTIGACIÓN',
      subtitle: 'Gerencia y Liderazgo',
      visual: { type: 'image', source: 'https://cdn.myportfolio.com/d435fa58-d32c-4141-8a15-0f2bfccdea41/cd5d7357-f3ef-4d86-b555-b7c9b402e7a5_rw_1920.jpg?h=89bd3bf4cdfa88de4e36fcc1fb471cf4', position: 'background' },
      content: 'Reimaginando el futuro educativo en la institución a través de la formación directiva y docente.'
    },
    {
      id: 'slide-26',
      type: 'split-interactive-cards',
      title: 'PROBLEMAS & SOLUCIONES',
      subtitle: 'Capítulo VI: Propuesta',
      visual: { type: 'image', source: '', position: 'background' },
      interaction: {
        type: 'split-interactive',
        revealItems: [
          { 
            title: 'Exposición de Motivos', 
            text: 'La preocupación por la calidad de la enseñanza se ha intensificado en el contexto educativo global, y en particular en Venezuela...', 
            longContent: 'La preocupación por la calidad de la enseñanza se ha intensificado en el contexto educativo global, y en particular en Venezuela, donde las crisis económicas, políticas y sociales han afectado considerablemente el funcionamiento del sistema educativo. La falta de recursos, la migración de docentes y la escasez de materiales han creado un entorno desafiante que hace evidente la necesidad de un liderazgo efectivo que no solo aborde los desafíos inmediatos, sino que también establezca las bases para un aprendizaje sostenible y de calidad. El liderazgo en educación siempre ha sido reconocido como un elemento crucial para la mejora de resultados académicos (Leithwood & Jantzi, 2000), pero en el contexto venezolano actual, se convierte en una necesidad urgente y prioritaria.\n\nLa correlación entre liderazgo y rendimiento educativo no puede subestimarse. En sistemas educativos donde el liderazgo es fuerte, hay una tendencia observable hacia una mejora en los resultados académicos y en la motivación del personal docente (Robinson, 2011). Sin embargo, en muchas instituciones educativas de Venezuela, este liderazgo brilla por su ausencia. La situación se ve agravada por la percepción de un 55% de los encuestados que consideran que no se implementan acciones de desarrollo del liderazgo, lo que sugiere una desconexión entre las autoridades educativas y las necesidades reales del cuerpo docente.\n\nA nivel global, diversos estudios han demostrado que un liderazgo efectivo tiene el potencial de transformar la cultura escolar y de fomentar la colaboración entre todos los actores educativos. Por ejemplo, en Finlandia, un sistema reconocido por su calidad educativa, el liderazgo se enfoca en empoderar a los docentes y en crear un entorno de aprendizaje inclusivo y colaborativo (Harris, 2013). En este sentido, la realidad venezolana podría beneficiarse enormemente al adoptar un enfoque similar, donde la formación continua del personal docente y la comunicación efectiva se conviertan en pilares de la gestión educativa.\n\nEs particularmente alarmante el hecho de que en Venezuela, una gran mayoría de los docentes expresan la falta de oportunidades para el desarrollo profesional continuo. Este aspecto se interrelaciona con la crisis de la educación superior y la formación de los docentes, puesto que muchos educadores requieren actualización en metodologías y enfoques pedagógicos contemporáneos. A nivel internacional, se han implementado modelos de formación docente que enfatizan el aprendizaje colaborativo y el uso de la tecnología como recursos clave para la enseñanza (Fullan, 2013). Sin embargo, en el contexto venezolano, la falta de acceso a tecnología y recursos adecuados dificulta la capacitación y el desarrollo profesional constante de los educadores.\n\nAdemás, la comunicación efectiva es un área que presenta una notable deficiencia en muchas instituciones. La falta de canales de comunicación formales entre directivos y docentes no solo afecta la moral y la coordinación, sino que también crea un ambiente de desconfianza y desmotivación. En países donde la comunicación horizontal es promovida, se ha observado una mejora en el clima laboral y un efecto positivo en el compromiso de los docentes (DuFour & Fullan, 2013).\n\nPor lo tanto, es vital abordar estos elementos en la propuesta que se presentará en este capítulo. Fomentar un liderazgo efectivo, garantizar la formación continua del personal docente, implementar espacios de diálogo y promover un clima motivador son acciones que no solo abordarán las deficiencias actuales, sino que también transformarán la cultura educativa en las instituciones venezolanas. Esta propuesta no solo aspira a mejorar la calidad de la enseñanza, sino a reimaginar el futuro educativo en un país que necesita urgentemente construir nuevas oportunidades para su juventud.',
            icon: 'FileText'
          },
          { 
            title: 'Justificación de la Propuesta', 
            text: 'La justificación de esta propuesta se fundamenta en los alarmantes hallazgos surgidos de la evaluación realizada en la institución...', 
            longContent: 'La justificación de esta propuesta se fundamenta en los alarmantes hallazgos surgidos de la evaluación realizada en la institución educativa. La encuesta reveló un déficit estructural significativo en el desarrollo del liderazgo y la formación continua de los docentes, con un 55% de los encuestados indicando la falta de acciones específicas para fomentar el liderazgo y un 73% señalando la ausencia de promoción de oportunidades para la formación continua. En un contexto como el venezolano, caracterizado por crisis económica, pandémica y social, estas deficiencias amenazan severamente tanto el rendimiento académico de los estudiantes como el bienestar emocional y profesional de los docentes. Sin programas de desarrollo de liderazgo, se corre el riesgo de perpetuar una cultura educativa que no está a la altura de los desafíos actuales.\n\nDesde un enfoque más amplio, la realidad global también subraya la importancia de contar con líderes educativos capaces de adaptarse a entornos cambiantes. Investigaciones recientes han mostrado que las naciones que priorizan la capacitación y desarrollo profesional de sus educadores tienden a presentar mejores resultados en calidad educativa y rendimiento académico (OECD, 2018). Este contexto sugiere que Venezuela podría beneficiarse enormemente al aplicar prácticas exitosas observadas en otros países, que han transformado significativamente sus sistemas educativos a través de la capacitación continua y el desarrollo de liderazgos efectivamente estructurados.\n\nLa teoría del liderazgo transformacional, descrita por Bass y Avolio (1994), sostiene que un liderazgo efectivo debe inspirar y motivar a los docentes, promoviendo un ambiente colaborativo que favorezca el aprendizaje y el crecimiento profesional. Existe una correlación directa entre el liderazgo en las instituciones y el éxito educativo. Por lo tanto, ¿qué tan lejos estamos de establecer un liderazgo que desarrolle la vocación de educar en nuestro personal? ¿Estamos dispuestos a permitir que la falta de desarrollo en liderazgo continúe afectando a nuestra juventud? La respuesta a estas preguntas debe impulsarnos a actuar.\n\nAdemás, el modelo de aprendizaje organizacional planteado por Senge (1990) enfatiza que las instituciones educativas deben ser centros de aprendizaje continuo no solo para estudiantes, sino también para docentes. Establecer un ambiente donde el aprendizaje sea valorado y promovido garantizaría que los educadores se mantengan actualizados y comprometidos. ¿Cómo podemos esperar que nuestros docentes enfrenten los desafíos de un mundo en constante cambio si no se les proporciona la formación continua necesaria?\n\nEsta propuesta no solo busca abordar la crisis de liderazgo actual, sino también renovar la moral del personal docente alineando sus esfuerzos con las metas educativas de la institución. Crear un entorno donde los educadores se sientan apoyados y valorados es fundamental para prevenir el agotamiento profesional y asegurar un clima escolar saludable. La falta de liderazgo efectivo y formación sigue perpetuando un ciclo de ineficiencia y desmotivación. La implementación de esta propuesta puede ser el primer paso hacia la construcción de una comunidad educativa en la que todos prosperen.\n\nEn este contexto, se han diseñado cuatro talleres que giran en torno a los enfoques del liderazgo transformacional, situacional, emocional y colaborativo. Cada taller ha sido estructurado en cuatro sesiones que abarcan desde los fundamentos teóricos hasta la aplicación práctica en el aula. Por ejemplo, el taller de Liderazgo Transformacional se centrará en los cuatro componentes clave del liderazgo, fomentando una transformación en la manera en que los directivos y docentes abordan sus roles. Igualmente, los talleres de Liderazgo Situacional y Emocional permitirán a los participantes identificar y adaptar sus estilos de liderazgo a diferentes situaciones, mientras que el taller de Liderazgo Colaborativo se enfocará en herramientas prácticas y dinámicas de grupo que promoverán un entorno de aprendizaje colaborativo y resolución de conflictos.\n\nEstos talleres no solo buscan capacitar a los docentes y directivos, sino también crear un espacio de diálogo y reflexión que impulse un cambio positivo en nuestra comunidad educativa, facilitando un liderazgo efectivo y una cultura de aprendizaje continuo.',
            icon: 'Lightbulb'
          }
        ]
      }
    },
    {
      id: 'slide-27',
      type: 'visual-info',
      title: 'Pensamiento Final',
      subtitle: 'Cierre',
      visual: { type: 'image', source: 'https://picsum.photos/seed/final/1200/800', position: 'background' },
      content: '"El liderazgo no se trata de estar al mando, se trata de cuidar a los que están a tu mando." - Simon Sinek'
    },
    {
      id: 'slide-28',
      type: 'visual-info',
      title: '¡Gracias por su atención!',
      subtitle: 'Defensa de Tesis Exitosa',
      visual: { type: 'image', source: 'https://picsum.photos/seed/sky/1200/800', position: 'background' },
      content: 'Maestrante Eliseo Ortega. Universidad Nacional Abierta.'
    }
  ]
};
