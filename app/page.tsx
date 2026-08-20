const whatsappUrl =
  "https://wa.me/527712364950?text=Hola%20NexoPC%2C%20necesito%20ayuda%20con%20mi%20computadora.";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Calle%2016%20de%20Septiembre%2040%2C%203ra%20Demarcaci%C3%B3n%2C%20Tepatepec%2C%20Francisco%20I.%20Madero%2C%20Hidalgo";

const services = [
  { icon: "▦", title: "Programas y configuración", text: "Instalación, actualización y puesta a punto de software legítimo para trabajo, estudio o uso personal." },
  { icon: "↗", title: "Optimización del equipo", text: "Mejoramos el arranque, liberamos espacio y ajustamos el sistema para recuperar fluidez sin perder tus archivos." },
  { icon: "⚙", title: "Mantenimiento para equipos lentos", text: "Revisamos programas de inicio, almacenamiento, actualizaciones y configuración para mejorar el rendimiento de computadoras lentas." },
  { icon: "✦", title: "Eliminación de malware", text: "Revisión y limpieza de virus, adware y programas no deseados, con recomendaciones para prevenir nuevas amenazas." },
  { icon: "◫", title: "Respaldo y recuperación", text: "Copias de seguridad y recuperación básica de archivos borrados o inaccesibles, según el estado del dispositivo." },
  { icon: "⌘", title: "Windows y Linux", text: "Instalación, configuración, controladores, actualizaciones, cuentas y solución de problemas comunes." },
  { icon: "◉", title: "Soporte remoto", text: "Asistencia segura a distancia para resolver incidencias de software sin trasladar tu computadora." },
];

const steps = [
  ["01", "Cuéntanos el problema", "Escríbenos por WhatsApp y dinos qué ocurre con tu equipo."],
  ["02", "Recibe tu cotización", "Revisamos el caso y te damos una solución, tiempo estimado y precio."],
  ["03", "Volvemos a ponerte en marcha", "Realizamos el servicio con tu autorización y verificamos el resultado."],
];

const faqs = [
  ["¿El soporte remoto es seguro?", "Sí. Tú autorizas la conexión y puedes verla o terminarla en cualquier momento. Nunca solicitamos contraseñas personales ni datos bancarios."],
  ["¿Pueden activar Windows u otros programas?", "Sí. El precio mostrado corresponde al servicio de instalación y configuración. La licencia oficial se compra por separado o puedes proporcionar una licencia válida que ya tengas. No usamos cracks, claves robadas ni métodos para evadir licencias."],
  ["¿Cuánto tarda un servicio?", "Muchas incidencias remotas se resuelven el mismo día. Los tiempos de respaldo, recuperación o reinstalación dependen del estado y capacidad del equipo."],
  ["¿Mis archivos estarán protegidos?", "Trabajamos con cuidado y confidencialidad. Antes de cambios importantes te explicamos los riesgos y recomendamos un respaldo cuando sea necesario."],
  ["¿Atienden empresas?", "Sí. Podemos apoyar a profesionales y pequeños negocios con mantenimiento, configuración y soporte recurrente para sus equipos."],
  ["¿Qué pasa si no pueden resolverlo?", "Te explicamos con honestidad qué encontramos y cuáles son tus alternativas. No se realiza ningún trabajo adicional ni cargo sin tu autorización."],
];

const prices = [
  ["Optimización básica", "Desde $350 MXN", "Limpieza de software y ajustes de rendimiento."],
  ["Mantenimiento para equipo lento", "Desde $400 MXN", "Revisión general, limpieza de software, inicio y actualizaciones."],
  ["Eliminación de malware", "Desde $450 MXN", "Revisión, limpieza y recomendaciones de seguridad."],
  ["Activación de Windows", "Desde $250 MXN", "Instalación y activación; licencia oficial no incluida."],
  ["Restauración del sistema", "Desde $600 MXN", "Reinstalación, controladores y configuración inicial."],
  ["Instalación de Microsoft Office", "Desde $300 MXN", "Descarga, instalación y activación oficial; licencia no incluida."],
  ["Programa solicitado", "Desde $250 MXN", "Descarga desde la fuente oficial, instalación y configuración."],
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Navegación principal">
          <a className="brand" href="#inicio" aria-label="NexoPC, inicio">
            <span className="brand-mark">N</span><span>Nexo<span>PC</span></span>
          </a>
          <div className="nav-links">
            <a href="#servicios">Servicios</a><a href="#precios">Precios</a><a href="#proceso">Cómo funciona</a><a href="#faq">Preguntas</a>
          </div>
          <a className="button button-small" href="#contacto">Solicitar ayuda <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Soporte técnico claro y confiable</div>
            <h1>Tu computadora,<br /><em>funcionando como debe.</em></h1>
            <p>Resolvemos problemas de software, optimizamos tu equipo y protegemos tus archivos. Atención profesional, sin tecnicismos ni sorpresas.</p>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Hablar por WhatsApp <span>↗</span></a>
              <a className="text-link" href="#servicios">Ver servicios <span>↓</span></a>
            </div>
            <div className="trust-row">
              <span><b>✓</b> Atención remota en México</span><span><b>✓</b> Precio antes de iniciar</span><span><b>✓</b> Licencias oficiales</span>
            </div>
          </div>
          <div className="hero-panel">
            <div className="window-bar"><span /><span /><span /><small>NexoPC · Estado del equipo</small></div>
            <div className="status-card">
              <div className="status-top"><div className="pulse">✓</div><div><small>MANTENIMIENTO COMPLETO</small><h3>Tu equipo está optimizado</h3></div></div>
              <div className="metric"><span>Rendimiento del sistema</span><b>Óptimo</b></div><div className="progress"><i /></div>
              <div className="mini-grid"><div><span>◉</span><small>Seguridad</small><b>Activa</b></div><div><span>↗</span><small>Actualizaciones</small><b>Al día</b></div></div>
              <div className="secure-note"><span>♢</span><div><b>Soporte seguro</b><small>Conexión autorizada por ti</small></div></div>
            </div>
            <div className="float-badge"><span>✦</span><div><b>+ rendimiento</b><small>Menos espera, más fluidez</small></div></div>
          </div>
        </div>
      </section>

      <section className="credibility-strip" aria-label="Información de confianza"><div className="container credibility-grid"><div><small>RESPONSABLE</small><b>Atención directa por Christopher</b><span>Sin intermediarios ni respuestas automatizadas.</span></div><div><small>HORARIO</small><b>Lunes a sábado · 9:00 a 19:00</b><span>Hora del centro de México, con cita previa.</span></div><div><small>CONTACTO VERIFICABLE</small><b>WhatsApp · 771 236 4950</b><span>La cotización queda registrada por escrito.</span></div><div><small>COMPROMISO</small><b>Autorizas antes de cada cambio</b><span>Sin cargos ocultos ni software ilegal.</span></div></div></section>

      <section className="section" id="servicios">
        <div className="container">
          <div className="section-head"><div><div className="eyebrow"><span /> Lo que hacemos</div><h2>Soluciones para que vuelvas<br />a trabajar <em>sin interrupciones.</em></h2></div><p>Atendemos las necesidades más comunes de software con explicaciones claras y soluciones responsables.</p></div>
          <div className="service-grid">{services.map((s, i) => <article className="service-card" key={s.title}><div className="service-icon">{s.icon}</div><small>0{i + 1}</small><h3>{s.title}</h3><p>{s.text}</p><a href="#contacto" aria-label={`Consultar sobre ${s.title}`}>Consultar servicio <span>→</span></a></article>)}</div>
          <div className="license-note"><span className="shield">✓</span><div><b>Software original. Siempre.</b><p>Las activaciones se realizan exclusivamente con licencias oficiales. No ofrecemos cracks, claves no autorizadas ni métodos de evasión.</p></div><span className="seal">LICENCIAS<br /><b>OFICIALES</b></span></div>
        </div>
      </section>

      <section className="section price-section" id="precios">
        <div className="container price-grid">
          <div><div className="eyebrow light"><span /> Precios claros</div><h2>Sabes cuánto pagarás<br /><em>antes de comenzar.</em></h2><p>Estos precios son una referencia honesta. Confirmamos el total después de revisar tu caso y nunca hacemos cargos o cambios sin tu autorización.</p><div className="price-list">{prices.map(([name,price,note])=><div className="price-row" key={name}><div><b>{name}</b><span>{note}</span></div><strong>{price}</strong></div>)}</div><small className="price-disclaimer">El precio final puede variar según el estado del equipo, el tiempo requerido y las licencias necesarias.</small></div>
          <div className="quote-card"><small>ATENCIÓN PERSONAL</small><div className="person-mark">CS</div><h3>Hola, soy Christopher.</h3><p>Yo revisaré tu caso y te explicaré la solución en lenguaje claro. Primero acordamos el alcance y el precio; después comenzamos.</p><div className="promise-list"><span>✓ Tú autorizas la conexión remota</span><span>✓ Puedes finalizarla en cualquier momento</span><span>✓ No pedimos contraseñas bancarias</span></div><a className="button full" href={whatsappUrl} target="_blank" rel="noreferrer">Cotizar por WhatsApp <span>↗</span></a><div className="response"><span>●</span><p><b>Disponible hoy</b><small>Lunes a sábado, de 9:00 a 19:00 h.</small></p></div></div>
        </div>
      </section>

      <section className="section" id="proceso"><div className="container"><div className="center-head"><div className="eyebrow"><span /> Así de sencillo</div><h2>Tres pasos. <em>Cero complicaciones.</em></h2></div><div className="steps">{steps.map(([n,t,d],i)=><article key={n}><span className="step-number">{n}</span>{i<2&&<i />}<h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section faq-section" id="faq"><div className="container faq-grid"><div><div className="eyebrow"><span /> Preguntas frecuentes</div><h2>Lo importante,<br /><em>sin letra pequeña.</em></h2><p>Si tu duda no aparece aquí, escríbenos. Te orientamos sin compromiso.</p><a className="text-link" href="#contacto">Hacer otra pregunta <span>→</span></a></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="section safety-section"><div className="container safety-grid"><div><div className="eyebrow"><span /> Tu seguridad primero</div><h2>Control y claridad<br /><em>durante todo el servicio.</em></h2></div><div className="safety-cards"><article><span>01</span><h3>Acceso bajo tu control</h3><p>La sesión remota solo inicia con tu permiso. Puedes observar el trabajo y desconectarla cuando quieras.</p></article><article><span>02</span><h3>Cuidado de tus datos</h3><p>Solo accedemos a lo necesario para resolver el problema. Recomendamos respaldo antes de cambios importantes.</p></article><article><span>03</span><h3>Alcance por escrito</h3><p>Recibes por WhatsApp la solución propuesta, el precio y el trabajo acordado antes de comenzar.</p></article></div></div></section>

      <section className="location-section" id="ubicacion"><div className="container location-grid"><div className="location-pin">⌖</div><div><div className="eyebrow"><span /> Ubicación</div><h2>Atención en Tepatepec, Hidalgo</h2><address>Calle 16 de Septiembre #40, 3ra Demarcación,<br />entre calle 18 de Marzo y Av. del Trabajo,<br />Tepatepec, Francisco I. Madero, Hidalgo.</address><p>La atención presencial se realiza únicamente con cita previa.</p></div><div className="location-actions"><a className="button" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps <span>↗</span></a><a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Confirmar una cita <span>→</span></a></div></div></section>

      <section className="contact" id="contacto"><div className="container contact-inner"><div><div className="eyebrow light"><span /> Estamos para ayudarte</div><h2>Que un problema técnico<br />no detenga tu día.</h2><p>Atención remota en México y presencial con cita en Tepatepec · Lunes a sábado · 9:00 a 19:00 h.</p></div><div className="contact-actions"><a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Escribir por WhatsApp <span>↗</span></a><small>771 236 4950 · Cotización por escrito antes de iniciar</small></div></div></section>

      <footer><div className="container footer-grid"><div><a className="brand footer-brand" href="#inicio"><span className="brand-mark">N</span><span>Nexo<span>PC</span></span></a><p>Soporte de software profesional para personas y pequeños negocios en México. Responsable: Christopher.</p></div><div><b>Explorar</b><a href="#servicios">Servicios</a><a href="#precios">Precios</a><a href="#ubicacion">Ubicación</a><a href="#faq">Preguntas frecuentes</a></div><div><b>Compromisos</b><span>Licencias oficiales</span><span>Precio autorizado</span><span>Confidencialidad</span></div><div><b>Contacto</b><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp: 771 236 4950 ↗</a><a href={mapsUrl} target="_blank" rel="noreferrer">Tepatepec, Hidalgo ↗</a><span>Lun–sáb · 9:00–19:00</span></div></div><div className="container legal-box"><details><summary>Aviso de privacidad</summary><p>Los datos que compartas se utilizan únicamente para responder tu solicitud, elaborar la cotización y prestar el servicio acordado. No vendemos tu información. Evita enviar contraseñas, datos bancarios o información sensible por WhatsApp.</p></details><details><summary>Condiciones del servicio</summary><p>El alcance y el precio se confirman antes de iniciar. La recuperación de archivos no puede garantizarse y depende del estado del dispositivo. Las licencias de terceros se cotizan por separado y siempre se adquieren por medios oficiales.</p></details></div><div className="container footer-bottom"><span>© 2026 NexoPC. Todos los derechos reservados.</span><span>Atención responsable · Software legítimo</span></div></footer>
    </main>
  );
}
