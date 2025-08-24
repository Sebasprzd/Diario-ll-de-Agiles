import React, { useState, useEffect } from 'react';
import { Calendar, User, BookOpen, ChevronRight, ExternalLink, Menu, X } from 'lucide-react';

interface WeekContent {
  week: number;
  title: string;
  content: React.ReactNode;
}

function App() {
  const [currentWeek, setCurrentWeek] = useState(7);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weeks: WeekContent[] = [
    {
      week: 7,
      title: "Roles en Scrum: Scrum Master, product owner y Developers",
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Actividad #1 → Función del Scrum Master</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Durante esta semana se profundizó en el rol del <strong>Scrum Master</strong> y su relevancia en el marco de trabajo Scrum. 
              Se abordó cómo este rol actúa como facilitador y guía, garantizando que se apliquen correctamente los principios ágiles 
              y que el equipo Scrum funcione de manera óptima.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Al equipo de desarrollo:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Entrenar en autoorganización y multifuncionalidad</li>
                  <li>• Ayudar en la eliminación de impedimentos</li>
                  <li>• Facilitar los eventos de Scrum</li>
                  <li>• Fomentar la creación de productos de alto valor</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Al Product Owner:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Apoyar en la comprensión de Scrum y Agile</li>
                  <li>• Promover una gestión efectiva del Product Backlog</li>
                  <li>• Facilitar la planificación de producto en entornos empíricos</li>
                  <li>• Garantizar que los objetivos y alcance estén claros</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">A la organización:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Entrenar en prácticas ágiles</li>
                  <li>• Colaborar con otros Scrum Masters</li>
                  <li>• Promover cambios que aumenten la productividad</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Punto clave:</strong> El Scrum Master no es un jefe tradicional, sino un <strong>líder servicial</strong> 
                que habilita al equipo para trabajar de manera autónoma y eficiente.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-green-900 text-xl mb-4">Actividad #2 → Momentos claves de los Developers</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Se estudió con mayor profundidad el rol de los <strong>Developers</strong> en Scrum, quienes son responsables 
              de diseñar, construir, probar y entregar incrementos de software potencialmente liberables en cada Sprint.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">Sprint Planning</h4>
                <p className="text-gray-700 text-sm">
                  Análisis de ítems del Sprint Backlog, descomposición en tareas técnicas, estimación del esfuerzo 
                  y definición de la "Definition of Done".
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">Desarrollo durante Sprint</h4>
                <p className="text-gray-700 text-sm">
                  Diseño, implementación, pruebas de calidad continua, Daily Scrums y colaboración constante 
                  con Product Owner y Scrum Master.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">Sprint Review</h4>
                <p className="text-gray-700 text-sm">
                  Demostración del incremento funcional, recolección de retroalimentación y actualización 
                  del Product Backlog.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">Sprint Retrospective</h4>
                <p className="text-gray-700 text-sm">
                  Reflexión sobre el proceso de trabajo, identificación de mejoras técnicas y propuestas 
                  de acciones para futuros Sprints.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-yellow-900 text-xl mb-4">Actividad #3 → Actividad lúdica grupal: Torre de Hanoi</h3>
            <p className="text-gray-700 leading-relaxed">
              En una dinámica práctica, se trabajó con el <strong>juego de la Torre de Hanoi</strong> aplicando los roles de Scrum. 
              Este ejercicio permitió comprender cómo la coordinación, la autoorganización y la comunicación entre roles 
              agilizan la resolución de problemas complejos, reforzando la importancia de la transparencia, 
              la inspección y la adaptación como pilares de Scrum.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-red-900 text-xl mb-4">Actividad #4 → Segundo examen corto</h3>
            <p className="text-gray-700 leading-relaxed">
              Examen orientado a evaluar los conocimientos de la <strong>Unidad II</strong>, relacionados con los servicios 
              del Scrum Master, el Product Owner, los principios de los Developers y su relación con el Manifiesto Ágil.
            </p>
          </div>

          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-xl mb-4">Conclusión de la Semana</h3>
            <p className="text-gray-700 leading-relaxed">
              Se consolidó el entendimiento de los roles clave dentro de Scrum, con énfasis en el Scrum Master y los Developers. 
              La actividad lúdica de la Torre de Hanoi reforzó la importancia del trabajo colaborativo, y el examen corto 
              permitió validar la comprensión teórica de los contenidos.
            </p>
          </div>
        </div>
      )
    },
    {
      week: 8,
      title: "Inicio del Proyecto SCRUM",
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Actividad #1 → Inicio del Proyecto con SCRUM</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Se dio inicio al proyecto grupal bajo la metodología SCRUM, con el objetivo de desarrollar una aplicación 
              funcional tipo <strong>To-Do List</strong>, aplicando principios de trabajo iterativo e incremental.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Definición del Proyecto y Alcance Técnico:</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-blue-100 rounded-lg">
                  <strong className="text-blue-900">Base de datos</strong>
                  <p className="text-blue-700">MongoDB</p>
                </div>
                <div className="text-center p-3 bg-green-100 rounded-lg">
                  <strong className="text-green-900">Backend/APIs</strong>
                  <p className="text-green-700">Python y JavaScript</p>
                </div>
                <div className="text-center p-3 bg-yellow-100 rounded-lg">
                  <strong className="text-yellow-900">Gestión</strong>
                  <p className="text-yellow-700">Jira con Kanban</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Ejecución del Primer Sprint:</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Diseño de la base de datos en MongoDB</li>
                <li>• Definición de endpoints de la API</li>
                <li>• Distribución inicial de historias de usuario en Jira</li>
                <li>• Daily Standups con reportes de avances y obstáculos</li>
              </ul>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg flex items-start space-x-3">
              <ExternalLink className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-blue-900">Documentación del proyecto:</strong>
                <br />
                <a 
                  href="https://docs.google.com/document/d/13L7rKrHE-Dp-86P35HyX6ThegeCPJ93jeWIWwD1HHCg/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  Ver documento completo en Google Docs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-xl mb-4">Reflexión inicial del equipo</h3>
            <p className="text-gray-700 leading-relaxed">
              El arranque del proyecto permitió comprender mejor cómo SCRUM facilita la organización y la entrega de valor 
              desde las primeras etapas. La práctica de distribuir roles y responsabilidades, junto con la documentación en Jira, 
              aportó claridad al trabajo en equipo y evidenció la importancia de la planificación temprana y la definición 
              de criterios de aceptación.
            </p>
          </div>
        </div>
      )
    },
    {
      week: 9,
      title: "Desarrollo del Proyecto: Mockups y Diseño",
      content: (
        <div className="space-y-8">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-green-900 text-xl mb-4">Actividad #1 → Continuación del desarrollo del proyecto</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Los estudiantes continuaron con el desarrollo del proyecto basándose en la metodología SCRUM. 
              Durante esta semana se enfocó el trabajo en:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">UI</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Mockups</h4>
                <p className="text-gray-600 text-xs mt-1">Diseño de interfaces</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">DB</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Base de datos</h4>
                <p className="text-gray-600 text-xs mt-1">Planteamiento estructura</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 font-bold">API</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Endpoints</h4>
                <p className="text-gray-600 text-xs mt-1">Definición de servicios</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">GEN</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">Detalles generales</h4>
                <p className="text-gray-600 text-xs mt-1">Antes del desarrollo</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-100 rounded-lg">
              <p className="text-green-800 text-sm">
                Esta fase de planificación y diseño es fundamental para establecer una base sólida 
                antes del desarrollo específico del código.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      week: 10,
      title: "Semana de Pausa",
      content: (
        <div className="space-y-8">
          <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-700 text-xl mb-4">Semana 10 - Sin clases</h3>
            <div className="flex items-center space-x-3 text-gray-600">
              <Calendar className="w-5 h-5" />
              <p className="leading-relaxed">
                No hubo clases durante esta semana debido a incapacidad del docente.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      week: 11,
      title: "Continuación del Proyecto y Evaluaciones",
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Actividad #1 → Continuación del proyecto SCRUM</h3>
            <p className="text-gray-700 leading-relaxed">
              Los estudiantes continuaron con la realización del proyecto de SCRUM, avanzando en el desarrollo 
              de las funcionalidades planificadas y refinando los entregables según la metodología establecida.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-yellow-900 text-xl mb-4">Actividad #2 → Asignación de la Tarea #3</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Tarea #3 - Cuestionario</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Apertura:</strong> Lunes, 4 de agosto de 2025, 19:00</p>
                  <p><strong>Cierre:</strong> Martes, 12 de agosto de 2025, 23:59</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Entregables adicionales:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Entrega de Proyecto SCRUM</li>
                  <li>• Autoevaluación y coevaluación</li>
                  <li>• Evaluaciones finales</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
              <p className="text-yellow-800 text-sm">
                Se entregó el proyecto y se realizó la tarea 3 mediante un formulario en el campus virtual.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      week: 12,
      title: "Extreme Programming (XP)",
      content: (
        <div className="space-y-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-purple-900 text-xl mb-4">Actividad #1 → Presentación sobre XP</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Se realizó una exposición apoyada en presentaciones de PowerPoint acerca de <strong>Extreme Programming (XP)</strong>, 
              una metodología ágil que se enfoca en la entrega rápida y de calidad de software, la colaboración constante 
              con el cliente y la capacidad de adaptación a requisitos cambiantes.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-purple-900 mb-3">Valores de XP:</h4>
              <div className="flex flex-wrap gap-2">
                {['Comunicación', 'Simplicidad', 'Feedback', 'Coraje', 'Respeto'].map((value) => (
                  <span key={value} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-green-900 text-xl mb-4">Actividad #2 → Flujo de trabajo con XP</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Se estudió un documento que describía el flujo de trabajo típico en un proyecto con XP, desde la recolección 
              de historias de usuario hasta las entregas incrementales.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">Prácticas clave:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• TDD (Test Driven Development)</li>
                  <li>• Pair Programming</li>
                  <li>• Integración Continua</li>
                  <li>• Retrospectivas</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-green-900 mb-2">Características:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Iteraciones cortas (1-3 semanas)</li>
                  <li>• Cliente integrado en el equipo</li>
                  <li>• Validación continua del avance</li>
                  <li>• Entregas incrementales</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Actividad #3 → Estudio de caso de XP</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              El grupo analizó casos de aplicación de XP, revisando tanto éxitos como situaciones donde la metodología 
              no fue adecuada.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">Casos de éxito</h4>
                <p className="text-gray-700 text-sm">
                  Proyecto Chrysler C3, que incrementó significativamente la productividad del equipo de desarrollo.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">Casos problemáticos</h4>
                <p className="text-gray-700 text-sm">
                  Proyectos distribuidos o en sectores con regulaciones estrictas donde XP no resultó efectivo.
                </p>
              </div>
            </div>
            
            <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">Referencias consultadas:</h4>
              <div className="space-y-2 text-sm">
                <a href="https://scrum-master.org/en/extreme-programming-xp-a-beginners-guide-to-the-agile-method/" 
                   target="_blank" rel="noopener noreferrer" 
                   className="flex items-center text-blue-600 hover:text-blue-800 underline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Extreme Programming: A Beginner's Guide
                </a>
                <a href="https://agilealliance.org/glossary/xp/" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-blue-600 hover:text-blue-800 underline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Agile Alliance – XP Glossary
                </a>
                <a href="http://www.extremeprogramming.org/" 
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center text-blue-600 hover:text-blue-800 underline">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  ExtremeProgramming.org
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-xl mb-4">Reflexión de la semana</h3>
            <p className="text-gray-700 leading-relaxed">
              XP busca equilibrar la calidad técnica con la colaboración cercana al cliente, promoviendo entregas 
              frecuentes y cambios incrementales. Es excelente para proyectos con requisitos inestables y equipos pequeños, 
              aunque requiere disciplina y compromiso del equipo.
            </p>
            <div className="mt-4 p-3 bg-blue-100 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Proyecto 2:</strong> El profesor introdujo el segundo proyecto, donde cada equipo debe decidir 
                qué tipo de aplicación desarrollará bajo una metodología ágil.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      week: 13,
      title: "Desarrollo del Proyecto 2 - Parte 1",
      content: (
        <div className="space-y-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Desarrollo del Proyecto 2</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Inicio del segundo proyecto bajo metodología ágil. El equipo comenzó el proceso de planificación 
              y definición del nuevo sistema a desarrollar.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Actividades desarrolladas:</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• Definición del tipo de aplicación a desarrollar</li>
                <li>• Selección de metodología ágil a aplicar</li>
                <li>• Planificación inicial del proyecto</li>
                <li>• Distribución de roles en el equipo</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-green-900 text-xl mb-4">Actividades complementarias</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Entrega del Diario de Ingeniería</h4>
                <p className="text-gray-700 text-sm">
                  Se realizó la entrega del diario de ingeniería correspondiente a la primera parte del curso.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Prueba corta en campus</h4>
                <p className="text-gray-700 text-sm">
                  Aplicación de examen corto mediante formulario digital en la plataforma del campus virtual.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      week: 14,
      title: "Proyecto 2: Tienda de Ropa - Entregable Final",
      content: (
        <div className="space-y-8">
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-purple-900 text-xl mb-4">Primer Entregable del Proyecto 2</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Se realizó la entrega del primer entregable del Proyecto 2, el cual consiste en el desarrollo 
              de una aplicación para una <strong>tienda de ropa</strong> utilizando metodologías ágiles.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <h4 className="font-semibold text-gray-900 mb-3">Información principal del proyecto:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Tipo de aplicación:</strong> Sistema de gestión para tienda de ropa</p>
                <p><strong>Metodología:</strong> Framework ágil seleccionado por el equipo</p>
                <p><strong>Alcance:</strong> Funcionalidades básicas de e-commerce y gestión</p>
                <p><strong>Entregable:</strong> Documentación inicial y planificación del proyecto</p>
              </div>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg flex items-start space-x-3">
              <ExternalLink className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-purple-900">Documentación del Proyecto 2:</strong>
                <br />
                <a 
                  href="https://docs.google.com/document/d/1F_XlVFXC1P2byCWxV5hwqAPWGpRSR9T_QElE8Q5TLUM/edit?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-800 underline text-sm"
                >
                  Ver documento completo del proyecto en Google Docs
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-green-900 text-xl mb-4">Desarrollo continuo del proyecto</h3>
            <p className="text-gray-700 leading-relaxed">
              Durante esta semana se continuó con el desarrollo del Proyecto 2, refinando los requerimientos, 
              estableciendo los sprints de trabajo y definiendo las historias de usuario para la aplicación 
              de tienda de ropa. El equipo aplicó los conocimientos adquiridos durante el curso sobre 
              metodologías ágiles para estructurar eficientemente el proyecto.
            </p>
          </div>

          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
            <h3 className="font-bold text-gray-900 text-xl mb-4">Cierre del período académico</h3>
            <p className="text-gray-700 leading-relaxed">
              Con la entrega del Proyecto 2 y la culminación de las actividades de la semana 14, 
              se concluye exitosamente la segunda parte del diario de ingeniería para el curso 
              "Metodologías Ágiles P-01", habiendo aplicado de forma práctica los conceptos de 
              Scrum, XP y otras metodologías ágiles en proyectos reales de desarrollo de software.
            </p>
          </div>
        </div>
      )
    }
  ];

  const handleWeekChange = (week: number) => {
    setCurrentWeek(week);
    setIsMenuOpen(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentWeekData = weeks.find(w => w.week === currentWeek) || weeks[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Diario de Ingeniería</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Metodologías Ágiles P-01</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>Sebastián Peraza Desanti</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>Semanas 7-14</span>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <User className="w-4 h-4" />
                  <span>Sebastián Peraza Desanti</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Semanas 7-14</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {weeks.map((week) => (
                  <button
                    key={week.week}
                    onClick={() => handleWeekChange(week.week)}
                    className={`p-2 text-sm rounded-lg font-medium transition-all ${
                      currentWeek === week.week
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    S{week.week}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Navegación por Semanas</h2>
                <nav className="space-y-2">
                  {weeks.map((week) => (
                    <button
                      key={week.week}
                      onClick={() => handleWeekChange(week.week)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                        currentWeek === week.week
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'hover:bg-gray-50 text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Semana {week.week}</div>
                          <div className={`text-sm mt-1 ${currentWeek === week.week ? 'text-blue-100' : 'text-gray-500'}`}>
                            {week.title.length > 30 ? `${week.title.substring(0, 30)}...` : week.title}
                          </div>
                        </div>
                        {currentWeek === week.week && (
                          <ChevronRight className="w-4 h-4 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Week Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-white">Semana {currentWeekData.week}</h1>
                    <p className="text-blue-100 mt-1">{currentWeekData.title}</p>
                  </div>
                  <div className="flex space-x-2">
                    {currentWeek > 7 && (
                      <button
                        onClick={() => handleWeekChange(currentWeek - 1)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors text-sm"
                      >
                        ← Anterior
                      </button>
                    )}
                    {currentWeek < 14 && (
                      <button
                        onClick={() => handleWeekChange(currentWeek + 1)}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg transition-colors text-sm"
                      >
                        Siguiente →
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Week Content */}
              <div className="p-8">
                {currentWeekData.content}
              </div>
            </div>

            {/* Week Navigation at bottom */}
            <div className="lg:hidden mt-6 flex justify-center">
              <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
                {weeks.map((week) => (
                  <button
                    key={week.week}
                    onClick={() => handleWeekChange(week.week)}
                    className={`px-3 py-2 text-sm rounded-md transition-all ${
                      currentWeek === week.week
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {week.week}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Diario de Ingeniería</span>
            </div>
            <p className="text-gray-400 text-sm">
              Metodologías Ágiles P-01 | Sebastián Peraza Desanti | Semanas 7-14
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Curso de Ingeniería en Sistemas de Información
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;