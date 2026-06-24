/**
 * ISET SpA — Manifest de Contenido
 * =====================================================
 * EDITAR AQUÍ para actualizar textos, servicios y galería.
 * Abre este archivo con el Bloc de notas (Windows) o TextEdit (Mac).
 * IMPORTANTE: No borres las comillas ni las comas.
 * =====================================================
 */
;(function () {
  'use strict';

  window.__ISET__ = {

    /* ── DATOS DE LA EMPRESA ───────────────────────────── */
    empresa: {
      nombre:      'ISET SpA',
      eslogan:     'Precisión y seguridad en cada proyecto.',
      fundacion:   '2018',
      descripcion: 'Desde 2018, ISET proyecta e instala infraestructura eléctrica, redes certificadas, sistemas de seguridad y climatización para empresas, industrias y proyectos de alto estándar en todo Chile. Cada trabajo está respaldado por ingeniería rigurosa, certificaciones vigentes y un equipo que no deja cabos sueltos.'
    },

    /* ── CONTACTO ─────────────────────────────────────── */
    contacto: {
      nombre:     'Erick Rubilar Henríquez',
      cargo:      'Ingeniero Responsable',
      email:      'erubilar@iset.cl',
      telefono:   '+56 9 8264 1655',
      whatsapp:   '56982641655',
      instagram:  'iset_spa',
      instagramUrl:'https://instagram.com/iset_spa'
    },

    /* ── CONTADORES ───────────────────────────────────── */
    contadores: [
      { valor: 500,  sufijo: '+', label: 'Proyectos Ejecutados' },
      { valor: 100,  sufijo: '%', label: 'Certificado SEC'      },
      { valor: 24,   sufijo: '/7', label: 'Soporte Técnico'     }
    ],

    /* ── SERVICIOS (6 tarjetas) ───────────────────────── */
    servicios: [
      {
        id:      'electricidad',
        titulo:  'Electricidad',
        icono:   'electricidad',
        desc:    'Proyectos eléctricos de baja y media tensión, tableros de control e iluminación. Energía limpia y segura sin caídas de tensión.',
        tags:    ['Baja Tensión', 'Media Tensión', 'Tableros de Control', 'Iluminación LED']
      },
      {
        id:      'cableado',
        titulo:  'Cableado Estructurado',
        icono:   'cableado',
        desc:    'Diseño e instalación de redes de voz y datos. Ordenamiento de racks y certificación de puntos para máxima velocidad y estabilidad.',
        tags:    ['Categoría 6A', 'Certificación Fluke', 'Rack Management', 'Fibra Óptica']
      },
      {
        id:      'cctv',
        titulo:  'CCTV',
        icono:   'cctv',
        desc:    'Sistemas de videovigilancia, grabación en alta resolución y acceso remoto en tiempo real para protección total de sus instalaciones.',
        tags:    ['IP/Analógico', 'Alta Resolución', 'Acceso Remoto', 'NVR/DVR']
      },
      {
        id:      'sec',
        titulo:  'Inscripción SEC',
        icono:   'sec',
        desc:    'Regularización, tramitación y certificación de instalaciones eléctricas (TE1) ante la Superintendencia de Electricidad y Combustibles.',
        tags:    ['TE1', 'Regularización', 'Planos Eléctricos', 'Tramitación']
      },
      {
        id:      'montajes',
        titulo:  'Montajes',
        icono:   'montajes',
        desc:    'Montaje industrial y de equipos, garantizando estructuras robustas, ordenadas y seguras para toda su infraestructura.',
        tags:    ['Estructura Metálica', 'Equipos Industriales', 'Steel Framing', 'Certificado']
      },
      {
        id:      'aacc',
        titulo:  'AACC',
        icono:   'aacc',
        desc:    'Instalación y mantenimiento de sistemas de climatización, asegurando la temperatura ideal para equipos y personas.',
        tags:    ['Split / VRV', 'Sala de Servidores', 'Mantenimiento', 'Eficiencia Energética']
      }
    ],

    /* ── METODOLOGÍA ──────────────────────────────────── */
    metodologia: [
      { paso: '01', titulo: 'Visita en Terreno',       desc: 'Evaluamos el sitio, levantamos requisitos y detectamos riesgos antes de trazar cualquier línea.' },
      { paso: '02', titulo: 'Diseño e Ingeniería',     desc: 'Elaboramos planos técnicos, memorias de cálculo y presupuestos detallados sin sorpresas.' },
      { paso: '03', titulo: 'Ejecución Impecable',     desc: 'Instalación ordenada, rotulada y certificada. Sin atajos, sin improvisar.' },
      { paso: '04', titulo: 'Entrega y Certificación', desc: 'Documentamos todo, entregamos manuales y gestionamos las certificaciones ante organismos competentes.' }
    ],

    /* ── GALERÍA ──────────────────────────────────────── */
    /* Cambia src por la ruta a tus fotos en assets/img/  */
    galeria: [
      { src: 'assets/img/proyecto-01.jpg', alt: 'Rack de telecomunicaciones certificado', categoria: 'Cableado' },
      { src: 'assets/img/proyecto-02.jpg', alt: 'Tablero eléctrico industrial',           categoria: 'Electricidad' },
      { src: 'assets/img/proyecto-03.jpg', alt: 'Instalación CCTV en industria',          categoria: 'CCTV' },
      { src: 'assets/img/proyecto-04.jpg', alt: 'Montaje de estructura metálica',         categoria: 'Montajes' },
      { src: 'assets/img/proyecto-05.jpg', alt: 'Cableado estructurado data center',      categoria: 'Cableado' },
      { src: 'assets/img/proyecto-06.jpg', alt: 'Sistema VRV climatización',              categoria: 'AACC' }
    ]

  };

})();
