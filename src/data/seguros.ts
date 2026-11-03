// Catálogo único de seguros de Prever Seguros.
// Para agregar un seguro nuevo: añade un bloque en `insurances` y aparecerá solo en
// el catálogo (/seguros), en su propia página (/seguros/<slug>) y en el formulario de cotización.
//
// NOTA: los textos son un borrador. Las coberturas, exclusiones y valores dependen de cada
// aseguradora y plan, por eso NO se publican precios. Sebastián/Camilo deben validar el contenido.

export interface Faq {
  q: string;
  a: string;
}

export interface Insurance {
  slug: string;
  name: string;
  category: 'personas' | 'vehiculos' | 'empresas';
  icon: string;
  summary: string; // texto corto para tarjetas y subtítulo
  intro: string; // párrafo de introducción en la página del seguro
  covers: string[];
  forWhom: string[];
  faqs: Faq[];
}

export const categories = [
  {
    id: 'personas',
    label: 'Personas y familia',
    description: 'Protección para ti, tu familia y tu patrimonio.',
  },
  {
    id: 'vehiculos',
    label: 'Vehículos',
    description: 'Respaldo para tu vehículo y para ti en la vía.',
  },
  {
    id: 'empresas',
    label: 'Empresas',
    description: 'Soluciones para proteger tu negocio, tus contratos y tu equipo.',
  },
] as const;

// Íconos simples en SVG (viewBox 24x24). Se usan con stroke="currentColor".
export const icons: Record<string, string> = {
  heart:
    '<path d="M12 20s-7-4.4-9-9c-1.3-3 .4-6.5 3.8-6.5 2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3C21.6 4.5 23.3 8 21 11c-2 4.6-9 9-9 9z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/>',
  shield:
    '<path d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6l7-3z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  users:
    '<circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/><circle cx="17" cy="9" r="2.4" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M16.5 14c2.6 0 4.5 1.8 4.5 4.5" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
  building:
    '<rect x="5" y="3" width="14" height="18" rx="1.5" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  clipboard:
    '<rect x="5" y="4" width="14" height="17" rx="2" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M9 4h6v3H9z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><path d="M9 14l2 2 4-4" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  hardhat:
    '<path d="M4 16v-1.5a8 8 0 0 1 16 0V16z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><path d="M3 16h18v3H3zM12 6.5v5" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  car: '<path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11m-14 0h14m-14 0a2 2 0 0 0-2 2v4h2m14-6a2 2 0 0 1 2 2v4h-2M7 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/>',
  machine:
    '<path d="M3 16h11v-4H3z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><circle cx="6" cy="18.5" r="1.5" stroke="currentColor" stroke-width="1.7" fill="none"/><circle cx="11" cy="18.5" r="1.5" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M14 14l4-8 3 2" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  scale:
    '<path d="M12 4v16M7 20h10M5 7h14" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/><path d="M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zM19 7l-2.5 6a3 3 0 0 0 5 0L19 7z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/>',
  key: '<circle cx="8" cy="12" r="3.5" stroke="currentColor" stroke-width="1.7" fill="none"/><path d="M11.5 12H21M17 12v3M20 12v2" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/>',
  truck:
    '<path d="M3 7h11v9H3z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><path d="M14 10h4l3 3v3h-7z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><circle cx="7" cy="17.5" r="1.8" stroke="currentColor" stroke-width="1.7" fill="none"/><circle cx="17" cy="17.5" r="1.8" stroke="currentColor" stroke-width="1.7" fill="none"/>',
  layers:
    '<path d="M12 3l9 5-9 5-9-5 9-5z" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/><path d="M3 13l9 5 9-5" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linejoin="round"/>',
};

export const insurances: Insurance[] = [
  // ---------------- Personas y familia ----------------
  {
    slug: 'salud',
    name: 'Salud',
    category: 'personas',
    icon: 'heart',
    summary:
      'Pólizas de salud con amplia red de prestadores, para que tú y los tuyos reciban atención oportuna y de calidad.',
    intro:
      'Una póliza de salud complementa el sistema de salud obligatorio y te da acceso a una red de médicos, clínicas y servicios con atención más oportuna. Comparamos las opciones de varias aseguradoras para encontrar el plan que se ajuste a ti y a tu familia.',
    covers: [
      'Consulta con médicos generales y especialistas',
      'Exámenes de laboratorio y diagnóstico',
      'Hospitalización y cirugías',
      'Urgencias y atención ambulatoria',
      'Red de prestadores según el plan elegido',
    ],
    forWhom: [
      'Personas que quieren atención más ágil y oportuna',
      'Familias que buscan cubrir a todos sus miembros',
      'Independientes y empresas que quieren ofrecer un beneficio de salud',
    ],
    faqs: [
      {
        q: '¿La póliza de salud reemplaza a mi EPS?',
        a: 'No. Las pólizas de salud son un complemento. Tu afiliación al sistema de salud obligatorio se mantiene y la póliza amplía el acceso y la rapidez de atención.',
      },
      {
        q: '¿Puedo incluir a mi familia?',
        a: 'Sí. La mayoría de aseguradoras permiten asegurar a tu núcleo familiar. Te explicamos las condiciones de cada plan al cotizar.',
      },
    ],
  },
  {
    slug: 'vida-individual',
    name: 'Vida individual',
    category: 'personas',
    icon: 'heart',
    summary:
      'Protege el futuro de quienes dependen de ti con un plan de vida diseñado según tu momento y tus metas.',
    intro:
      'El seguro de vida individual respalda económicamente a tu familia si llegas a faltar y, según el plan, también te protege ante situaciones como una incapacidad o una enfermedad grave. Diseñamos la cobertura según tu etapa de vida y tus metas.',
    covers: [
      'Indemnización por fallecimiento',
      'Amparos adicionales opcionales, como incapacidad o enfermedades graves',
      'Gastos de últimos deseos o asistencia exequial, según el plan',
      'Valor asegurado definido de acuerdo con tus necesidades',
    ],
    forWhom: [
      'Personas con hijos, pareja u otros dependientes económicos',
      'Quienes tienen deudas o compromisos financieros a largo plazo',
      'Quienes quieren planear su futuro y el de su familia',
    ],
    faqs: [
      {
        q: '¿Cuánto debería asegurar?',
        a: 'Depende de tus ingresos, tus deudas y las personas que dependen de ti. Un asesor te ayuda a calcular un valor asegurado razonable.',
      },
      {
        q: '¿Se necesitan exámenes médicos?',
        a: 'Depende de la aseguradora, la edad y el valor asegurado. Algunos planes solo piden una declaración de salud.',
      },
    ],
  },
  {
    slug: 'arrendamiento',
    name: 'Arrendamiento',
    category: 'personas',
    icon: 'key',
    summary:
      'Asegura el pago del canon y protege tu inmueble cuando lo entregas en arriendo.',
    intro:
      'El seguro de arrendamiento te protege como propietario frente a los incumplimientos más comunes cuando entregas un inmueble en arriendo, con acompañamiento durante todo el proceso.',
    covers: [
      'Pago del canon de arrendamiento en caso de incumplimiento',
      'Cuotas de administración y servicios públicos, según el plan',
      'Daños al inmueble causados por el arrendatario, según el plan',
      'Apoyo en el proceso de recuperación del inmueble',
    ],
    forWhom: [
      'Propietarios que arriendan casas, apartamentos o locales',
      'Inmobiliarias y administradores de inmuebles',
      'Personas que quieren arrendar con mayor tranquilidad',
    ],
    faqs: [
      {
        q: '¿Reemplaza al codeudor?',
        a: 'En muchos casos sí, pero depende de las condiciones de la aseguradora y de la inmobiliaria. Te orientamos sobre qué aplica en tu caso.',
      },
      {
        q: '¿Quién paga el seguro?',
        a: 'Depende del acuerdo entre propietario y arrendatario. Un asesor te explica las alternativas habituales.',
      },
    ],
  },
  {
    slug: 'seguros-generales',
    name: 'Seguros generales',
    category: 'personas',
    icon: 'layers',
    summary:
      'Hogar, copropiedades, renta educativa y otros ramos. Si existe en el mercado, lo gestionamos por ti.',
    intro:
      'Además de nuestras líneas principales, gestionamos seguros para muchos otros riesgos. Cuéntanos qué necesitas proteger y buscamos la opción adecuada entre varias aseguradoras.',
    covers: [
      'Seguros de hogar y contenidos',
      'Seguros para copropiedades y conjuntos residenciales',
      'Renta educativa',
      'Otros ramos según tu necesidad',
    ],
    forWhom: [
      'Propietarios y arrendatarios de vivienda',
      'Administradores de propiedad horizontal',
      'Quienes buscan una cobertura que no ven en el catálogo',
    ],
    faqs: [
      {
        q: '¿Y si no encuentro mi seguro en la lista?',
        a: 'Escríbenos. Si el riesgo es asegurable en el mercado, lo gestionamos por ti con las aseguradoras aliadas.',
      },
      {
        q: '¿Qué ramos incluye?',
        a: 'Hogar, copropiedades, renta educativa y otros. El alcance exacto depende de la aseguradora, y un asesor te lo detalla.',
      },
    ],
  },

  // ---------------- Vehículos ----------------
  {
    slug: 'todo-riesgo-autos',
    name: 'Todo riesgo autos',
    category: 'vehiculos',
    icon: 'car',
    summary:
      'Cobertura completa para tu vehículo: daños o lesiones a terceros y pérdida total por colisión o hurto.',
    intro:
      'El seguro todo riesgo protege tu vehículo y tu patrimonio ante accidentes, hurto y daños a terceros. Comparamos varias aseguradoras para que elijas el plan con las coberturas y servicios que más te convienen.',
    covers: [
      'Pérdida total o parcial por daños o hurto',
      'Responsabilidad civil por daños o lesiones a terceros',
      'Asistencia en carretera, según el plan',
      'Servicios adicionales como vehículo de reemplazo o conductor elegido, según el plan',
    ],
    forWhom: [
      'Propietarios de vehículos particulares',
      'Quienes financian su vehículo con un crédito',
      'Empresas con vehículos propios o flotas',
    ],
    faqs: [
      {
        q: '¿Qué datos necesito para cotizar?',
        a: 'La placa, el tipo y modelo del vehículo, la ciudad donde circula y tus datos de contacto. Con eso un asesor prepara la cotización.',
      },
      {
        q: '¿Qué es el deducible?',
        a: 'Es el valor que asumes en caso de siniestro antes de que la aseguradora cubra el resto. Varía según el plan y lo revisamos contigo.',
      },
    ],
  },
  {
    slug: 'soat',
    name: 'SOAT',
    category: 'vehiculos',
    icon: 'shield',
    summary:
      'El seguro obligatorio de tu vehículo, expedido sin filas y con acompañamiento si lo necesitas.',
    intro:
      'El SOAT es el Seguro Obligatorio de Accidentes de Tránsito y es requisito para que cualquier vehículo pueda circular en Colombia. Te ayudamos a expedirlo de forma rápida y sin filas.',
    covers: [
      'Gastos médicos y de atención a las víctimas de un accidente de tránsito',
      'Indemnizaciones por incapacidad permanente o muerte',
      'Gastos funerarios y de transporte de las víctimas',
    ],
    forWhom: [
      'Propietarios de automóviles, motos y otros vehículos',
      'Empresas con vehículos o flotas',
      'Quienes necesitan renovarlo antes de su vencimiento',
    ],
    faqs: [
      {
        q: '¿El SOAT cubre los daños a mi vehículo?',
        a: 'No. El SOAT cubre a las personas lesionadas en un accidente, no el vehículo. Para eso existen los seguros voluntarios, como el todo riesgo.',
      },
      {
        q: '¿De qué depende su valor?',
        a: 'Del tipo de vehículo, su cilindraje y antigüedad, según las tarifas establecidas por la normativa vigente.',
      },
    ],
  },

  // ---------------- Empresas ----------------
  {
    slug: 'vida-grupo',
    name: 'Vida grupo',
    category: 'empresas',
    icon: 'users',
    summary:
      'Cobertura de vida para los colaboradores de tu empresa u organización, con condiciones colectivas convenientes.',
    intro:
      'El seguro de vida grupo permite a empresas y organizaciones proteger a sus colaboradores con una sola póliza y condiciones colectivas, como un beneficio que fortalece el compromiso del equipo.',
    covers: [
      'Indemnización por fallecimiento de los colaboradores asegurados',
      'Amparos adicionales opcionales, según la aseguradora',
      'Condiciones colectivas más convenientes que las individuales',
    ],
    forWhom: [
      'Empresas que quieren ofrecer un beneficio a su equipo',
      'Asociaciones, cooperativas y organizaciones',
      'Áreas de talento humano que buscan retener colaboradores',
    ],
    faqs: [
      {
        q: '¿Cuántas personas se necesitan para una póliza de grupo?',
        a: 'Depende de cada aseguradora. Te indicamos el mínimo requerido al cotizar.',
      },
      {
        q: '¿Quién paga la póliza?',
        a: 'Puede pagarla la empresa, los colaboradores o ambos. Se define según lo que prefiera tu organización.',
      },
    ],
  },
  {
    slug: 'seguro-pyme',
    name: 'Seguro Pyme',
    category: 'empresas',
    icon: 'building',
    summary:
      'Protege tu negocio ante lo súbito e imprevisto: eventos de la naturaleza, incendio, daños y más.',
    intro:
      'El seguro Pyme reúne en una sola póliza varias protecciones para tu negocio, de modo que un imprevisto no ponga en riesgo tu operación ni tu patrimonio.',
    covers: [
      'Daños por incendio y eventos de la naturaleza',
      'Hurto y daños a bienes del negocio, según el plan',
      'Responsabilidad civil frente a terceros, según el plan',
      'Coberturas adicionales según el tipo de negocio',
    ],
    forWhom: [
      'Pequeñas y medianas empresas',
      'Comercios, oficinas y establecimientos',
      'Emprendedores que quieren proteger lo que han construido',
    ],
    faqs: [
      {
        q: '¿Qué activos se pueden asegurar?',
        a: 'Edificaciones, mercancía, maquinaria, equipos y mobiliario, entre otros. Lo definimos según tu negocio.',
      },
      {
        q: '¿Se adapta a mi tipo de negocio?',
        a: 'Sí. Las coberturas se ajustan a la actividad, el tamaño y los riesgos propios de cada empresa.',
      },
    ],
  },
  {
    slug: 'cumplimiento',
    name: 'Cumplimiento',
    category: 'empresas',
    icon: 'clipboard',
    summary:
      'Pólizas de cumplimiento para contratos estatales y privados. Respaldo para contratistas en cada etapa.',
    intro:
      'Las pólizas de cumplimiento garantizan que el contratista cumplirá con lo pactado en un contrato. Son frecuentes en contratación estatal y también en contratos privados. Te acompañamos en cada etapa del proceso.',
    covers: [
      'Cumplimiento de las obligaciones del contrato',
      'Buen manejo y correcta inversión del anticipo, cuando aplica',
      'Pago de salarios y prestaciones sociales, cuando aplica',
      'Calidad del bien o servicio, cuando aplica',
    ],
    forWhom: [
      'Contratistas del Estado',
      'Empresas que contratan con otras empresas y exigen garantías',
      'Proponentes en procesos de licitación',
    ],
    faqs: [
      {
        q: '¿Qué necesito para solicitarla?',
        a: 'Normalmente el contrato o los pliegos, el valor y la vigencia del contrato y la información financiera de la empresa. Un asesor te indica el detalle.',
      },
      {
        q: '¿Cuánto tarda la expedición?',
        a: 'Depende de la aseguradora y del análisis del contratista. Te orientamos para que tengas la póliza a tiempo.',
      },
    ],
  },
  {
    slug: 'arl',
    name: 'ARL',
    category: 'empresas',
    icon: 'hardhat',
    summary:
      'Afiliación y gestión de riesgos laborales para tu empresa y tu equipo, con acompañamiento en todo el proceso.',
    intro:
      'La ARL (Administradora de Riesgos Laborales) protege a los trabajadores frente a accidentes de trabajo y enfermedades laborales, y es una obligación para los empleadores. Te acompañamos en la afiliación y en la gestión de los riesgos de tu empresa.',
    covers: [
      'Atención en caso de accidente de trabajo o enfermedad laboral',
      'Prestaciones económicas por incapacidad, según la ley',
      'Acompañamiento en prevención y gestión de riesgos',
    ],
    forWhom: [
      'Empresas que tienen trabajadores a su cargo',
      'Contratistas independientes que deben afiliarse',
      'Empresas que quieren fortalecer su gestión de seguridad y salud en el trabajo',
    ],
    faqs: [
      {
        q: '¿La ARL es obligatoria?',
        a: 'Sí. La afiliación a riesgos laborales es obligatoria para los trabajadores dependientes y para ciertos contratistas.',
      },
      {
        q: '¿Qué pasa con el nivel de riesgo?',
        a: 'Se define según la actividad de la empresa y puede influir en el costo. Un asesor te explica cómo se clasifica tu actividad.',
      },
    ],
  },
  {
    slug: 'responsabilidad-civil',
    name: 'Responsabilidad civil',
    category: 'empresas',
    icon: 'scale',
    summary:
      'Respaldo frente a daños o perjuicios a terceros derivados de tu actividad personal o empresarial.',
    intro:
      'El seguro de responsabilidad civil te respalda económicamente cuando, en desarrollo de tu actividad, causas un daño a un tercero en sus bienes o en su integridad. Existen varias modalidades según el riesgo que quieras cubrir.',
    covers: [
      'Daños materiales o lesiones a terceros',
      'Gastos de defensa jurídica, según el plan',
      'Modalidades como extracontractual, profesional o patronal, según tu actividad',
    ],
    forWhom: [
      'Empresas con operación frente a clientes o terceros',
      'Profesionales independientes',
      'Constructoras, transportadores y organizadores de eventos',
    ],
    faqs: [
      {
        q: '¿Qué modalidad necesito?',
        a: 'Depende de tu actividad. Un asesor identifica qué tipo de responsabilidad civil aplica a tu caso.',
      },
      {
        q: '¿Aplica para personas naturales?',
        a: 'Sí, también hay coberturas pensadas para personas y para su actividad personal o profesional.',
      },
    ],
  },
  {
    slug: 'maquinaria',
    name: 'Maquinaria verde y amarilla',
    category: 'empresas',
    icon: 'machine',
    summary:
      'Protección para maquinaria agrícola y de construcción, dentro y fuera de la obra.',
    intro:
      'Este seguro protege la maquinaria pesada, agrícola y de construcción, que es una inversión importante y está expuesta a daños y hurto. Cubre el equipo tanto en operación como en traslado, según el plan.',
    covers: [
      'Daños accidentales a la maquinaria',
      'Hurto de equipos, según el plan',
      'Cobertura dentro y fuera de la obra, según el plan',
      'Responsabilidad civil asociada a la operación, según el plan',
    ],
    forWhom: [
      'Constructoras y contratistas de obra',
      'Empresas del sector agrícola',
      'Propietarios y arrendadores de maquinaria',
    ],
    faqs: [
      {
        q: '¿Qué equipos se pueden asegurar?',
        a: 'Maquinaria de construcción y agrícola, como retroexcavadoras, tractores, cargadores y otros equipos. Un asesor confirma lo que aplica.',
      },
      {
        q: '¿Cubre el traslado de la maquinaria?',
        a: 'Algunos planes sí. Lo definimos según cómo y dónde opera tu equipo.',
      },
    ],
  },
  {
    slug: 'transporte-mercancias',
    name: 'Transporte de mercancías',
    category: 'empresas',
    icon: 'truck',
    summary:
      'Cobertura para tu carga en trayectos nacionales o internacionales, puerta a puerta.',
    intro:
      'El seguro de transporte protege tu mercancía durante el trayecto, ya sea nacional o internacional, desde el punto de origen hasta el destino final.',
    covers: [
      'Pérdida o daño de la mercancía durante el transporte',
      'Hurto de la carga, según el plan',
      'Accidente del medio de transporte',
      'Cobertura puerta a puerta, según el plan',
    ],
    forWhom: [
      'Empresas que despachan o reciben mercancía',
      'Importadores y exportadores',
      'Empresas de transporte y logística',
    ],
    faqs: [
      {
        q: '¿Se puede asegurar un solo envío?',
        a: 'Sí, hay opciones por viaje y también pólizas anuales para quienes despachan con frecuencia. Te indicamos cuál conviene más.',
      },
      {
        q: '¿Qué información necesito?',
        a: 'El tipo y valor de la mercancía, el origen, el destino y el medio de transporte.',
      },
    ],
  },
];

export function getInsurance(slug: string) {
  return insurances.find((i) => i.slug === slug);
}

export function insurancesByCategory(categoryId: string) {
  return insurances.filter((i) => i.category === categoryId);
}