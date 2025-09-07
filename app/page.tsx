"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAssetPath } from "@/lib/utils";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  Phone,
  GraduationCap,
  Building,
  MessagesSquare,
  Languages,
} from "lucide-react";

const translations = {
  es: {
    name: "DAVID TORRES",
    title: "Ingeniero de Sistemas - Desarrollador Full Stack",
    heroDescription:
      "Creando experiencias digitales excepcionales con código limpio y diseño innovador. Especializado en tecnologías modernas y soluciones escalables.",
    contact: "Contactar",
    viewProjects: "Ver Proyectos",
    aboutMe: "Sobre Mí",
    myStory: "Mi Historia",
    aboutDescription1:
      "Soy un desarrollador apasionado con años de experiencia creando aplicaciones web y móviles. Me especializo en crear soluciones innovadoras que combinan funcionalidad excepcional con diseño elegante.",
    aboutDescription2:
      "Cuando no estoy programando, me gusta explorar nuevas tecnologías y experimentar con ideas innovadoras para crear proyectos personales.",
    technologies: "Tecnologías",
    professionalExperience: "Experiencia Profesional",
    mainAchievements: "Logros principales:",
    academicFormation: "Formación Académica",
    continuousLearning: "Aprendizaje Continuo",
    continuousLearningDesc:
      "Constantemente expandiendo conocimientos a través de cursos, documentación oficial y proyectos prácticos en nuevas tecnologías como IA, Cloud Computing y frameworks modernos.",
    inProgress: "En progreso",
    featuredProjects: "Proyectos Destacados",
    code: "Código",
    demo: "Demo",
    workTogether: "Trabajemos Juntos",
    contactDescription:
      "¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad.",
    email: "Email",
    footerText: "© 2025 Juan David Torres. Hecho con ❤️ y mucha Coca-Cola.",
  },
  en: {
    name: "DAVID TORRES",
    title: "Systems Engineer - Full Stack Developer",
    heroDescription:
      "Creating exceptional digital experiences with clean code and innovative design. Specialized in modern technologies and scalable solutions.",
    contact: "Contact",
    viewProjects: "View Projects",
    aboutMe: "About Me",
    myStory: "My Story",
    aboutDescription1:
      "I'm a passionate developer with years of experience creating web and mobile applications. I specialize in creating innovative solutions that combine exceptional functionality with elegant design.",
    aboutDescription2:
      "When I'm not programming, I enjoy exploring new technologies and experimenting with innovative ideas to create personal projects.",
    technologies: "Technologies",
    professionalExperience: "Professional Experience",
    mainAchievements: "Main achievements:",
    academicFormation: "Academic Formation",
    continuousLearning: "Continuous Learning",
    continuousLearningDesc:
      "Constantly expanding knowledge through courses, official documentation and practical projects in new technologies like AI, Cloud Computing and modern frameworks.",
    inProgress: "In progress",
    featuredProjects: "Featured Projects",
    code: "Code",
    demo: "Demo",
    workTogether: "Let's Work Together",
    contactDescription:
      "Do you have a project in mind? I'd love to hear your ideas and help you turn them into reality.",
    email: "Email",
    footerText: "© 2025 Juan David Torres. Made with ❤️ and lots of Coca-Cola.",
  },
};

export default function Portfolio() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [language, setLanguage] = useState<"es" | "en">("es");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const t = (key: keyof typeof translations.es) => translations[language][key];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Datos de proyectos
  const projects = [
    {
      id: 1,
      title: "MERCAORINOQUIA",
      description:
        language === "es"
          ? "Plataforma web que conecta agricultores con consumidores, permitiendo la publicación de anuncios y venta de productos agrícolas. Sistema completo con gestión de usuarios, productos y transacciones."
          : "Web platform that connects farmers with consumers, allowing the publication of ads and sale of agricultural products. Complete system with user, product and transaction management.",
      image: getAssetPath("/mercaorinoquia.png"),
      technologies: ["Django", "React", "PostgreSQL", "TailwindCSS"],
      githubUrl: "https://github.com/DanielAlferez/Mercaorinoquia-Backend",
      demoUrl: "https://mercaorinoquia.netlify.app/",
    },
    {
      id: 2,
      title: "DENTISTORE",
      description:
        language === "es"
          ? "Tienda en línea especializada en productos dentales con diseño responsive. Incluye carrito de compras, gestión de inventario y sistema de pagos integrado."
          : "Online store specialized in dental products with responsive design. Includes shopping cart, inventory management and integrated payment system.",
      image: getAssetPath("/dentistore.png"),
      technologies: ["Django", "React", "MySQL", "Bootstrap"],
      githubUrl: "https://github.com/juandavidtb02/Backend-dentistore",
      demoUrl: "https://dentistore.netlify.app/",
    },
    {
      id: 3,
      title: "Tour de Francia app",
      description:
        language === "es"
          ? "Aplicación web monolítica desarrollada en PHP con PostgreSQL para la gestión de información del Tour de Francia. Incluye páginas dinámicas construidas con HTML, CSS y JavaScript vanilla, ofreciendo una experiencia sencilla e interactiva."
          : "Monolithic web application developed in PHP with PostgreSQL for Tour de France information management. Includes dynamic pages built with HTML, CSS and vanilla JavaScript, offering a simple and interactive experience.",
      technologies: ["PHP", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/juandavidtb02/tour-francia-php",
      demoUrl: "#",
    },
  ];

  const experiences = [
    {
      company: "ENTERNOVA SAS",
      position:
        language === "es" ? "Full Stack Developer" : "Full Stack Developer",
      period: language === "es" ? "Apr 2025 - Presente" : "Apr 2025 - Present",
      description:
        language === "es"
          ? "Participé en un proyecto nacional de alto perfil en el que desarrollé una API REST utilizando .NET 8, siguiendo los principios de la arquitectura limpia para garantizar la mantenibilidad, la escalabilidad y la separación de preocupaciones. Nuestro equipo adoptó la metodología Scrum para optimizar la colaboración y el desarrollo iterativo, utilizando Azure DevOps para los procesos de CI/CD, la gestión de tareas pendientes y el seguimiento continuo de los proyectos."
          : "I participated in a high-profile national project where I developed a REST API using .NET 8, following clean architecture principles to ensure maintainability, scalability, and separation of concerns. Our team adopted Scrum methodology to optimize collaboration and iterative development, using Azure DevOps for CI/CD processes, backlog management, and continuous project tracking.",
      achievements:
        language === "es"
          ? [
              "Desarrollé nuevas funcionalidades clave para la aplicación",
              "Contribuí al mantenimiento y corrección de errores críticos",
              "Aseguré buenas prácticas de desarrollo aplicando patrones y pruebas",
            ]
          : [
              "Developed key new functionalities for the application",
              "Contributed to maintenance and critical bug fixes",
              "Ensured good development practices by applying patterns and tests",
            ],
    },
    {
      company: "IGNICION GAMES S.A",
      position:
        language === "es" ? "Front End Developer" : "Front End Developer",
      period: "2023 - 2025",
      description:
        language === "es"
          ? "Trabajé como desarrollador frontend en proyectos nacionales de alto impacto, donde adquirí experiencia en ReactJS, Next.js y TypeScript, desarrollando interfaces intuitivas, optimizadas y bien integradas con API RESTful. Además, colaboré en equipos multidisciplinares, aplicando buenas prácticas de desarrollo para crear soluciones escalables y eficientes."
          : "I worked as a frontend developer on high-impact national projects, where I gained experience in ReactJS, Next.js and TypeScript, developing intuitive, optimized interfaces well integrated with RESTful APIs. Additionally, I collaborated in multidisciplinary teams, applying good development practices to create scalable and efficient solutions.",
      achievements:
        language === "es"
          ? [
              "Diseñé y desarrollé interfaces responsivas y accesibles en React y Next.js",
              "Optimicé el rendimiento de componentes, reduciendo tiempos de carga y mejorando la experiencia del usuario",
              "Integré la aplicación con API RESTful asegurando flujos de datos eficientes y estables",
              "Implementé buenas prácticas de desarrollo con TypeScript, aumentando la mantenibilidad del código",
              "Colaboré con diseñadores y backend para entregar funcionalidades completas y bien integradas",
            ]
          : [
              "Designed and developed responsive and accessible interfaces in React and Next.js",
              "Optimized component performance, reducing loading times and improving user experience",
              "Integrated the application with RESTful APIs ensuring efficient and stable data flows",
              "Implemented good development practices with TypeScript, increasing code maintainability",
              "Collaborated with designers and backend to deliver complete and well-integrated functionalities",
            ],
    },
    {
      company: "MERCAORINOQUIA",
      position:
        language === "es" ? "Full Stack Developer" : "Full Stack Developer",
      period: "2023 - 2024",
      description:
        language === "es"
          ? "Desarrollé una aplicación web que conecta agricultores con consumidores, permitiendo la publicación de anuncios y la venta de productos agrícolas. Implementé un backend escalable con Django Rest Framework y una interfaz intuitiva con ReactJS y TailwindCSS."
          : "I developed a web application that connects farmers with consumers, allowing the publication of ads and sale of agricultural products. I implemented a scalable backend with Django Rest Framework and an intuitive interface with ReactJS and TailwindCSS.",
      achievements:
        language === "es"
          ? [
              "Diseñé y desarrollé la arquitectura completa de la aplicación (frontend, backend y base de datos)",
              "Implementé un backend escalable con Django Rest Framework y modelos relacionales optimizados",
              "Gestioné la base de datos y consultas eficientes en PostgreSQL",
              "Aseguré la integración fluida entre frontend y backend mediante API RESTful",
              "Implementé autenticación y control de roles para la seguridad de la aplicación",
            ]
          : [
              "Designed and developed the complete application architecture (frontend, backend and database)",
              "Implemented a scalable backend with Django Rest Framework and optimized relational models",
              "Managed database and efficient queries in PostgreSQL",
              "Ensured smooth integration between frontend and backend through RESTful API",
              "Implemented authentication and role control for application security",
            ],
    },
    {
      company: "DENTISTORE",
      position:
        language === "es" ? "Full Stack Developer" : "Full Stack Developer",
      period: "2022",
      description:
        language === "es"
          ? "Tienda en línea de productos dentales con un diseño adaptable y varias páginas, incluyendo inicio, productos, carrito y pago. El proyecto incluye una API REST construida con Django y una interfaz desarrollada en ReactJS."
          : "Online dental products store with responsive design and multiple pages, including home, products, cart and checkout. The project includes a REST API built with Django and an interface developed in ReactJS.",
      achievements:
        language === "es"
          ? [
              "Desarrollé el flujo completo de compra, desde la selección de productos hasta el pago",
              "Implementé la API REST con Django para la gestión de productos, usuarios y pedidos",
              "Diseñé una interfaz adaptable con ReactJS que mejora la experiencia de usuario en dispositivos móviles y de escritorio",
              "Integré el carrito de compras con persistencia de datos",
              "Aseguré la comunicación eficiente entre frontend y backend mediante API RESTful",
            ]
          : [
              "Developed the complete purchase flow, from product selection to payment",
              "Implemented REST API with Django for product, user and order management",
              "Designed a responsive interface with ReactJS that improves user experience on mobile and desktop devices",
              "Integrated shopping cart with data persistence",
              "Ensured efficient communication between frontend and backend through RESTful API",
            ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  const isVisible = (sectionId: string) => visibleSections.has(sectionId);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Button
        onClick={toggleLanguage}
        className="fixed top-4 right-4 z-50 animate-glow w-16 h-10 cursor-pointer"
        size="sm"
      >
        <Languages className="mr-2 h-4 w-4" />
        {language === "es" ? "EN" : "ES"}
      </Button>

      {/* Hero Section */}
      <section
        id="hero"
        ref={setSectionRef("hero")}
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-secondary/20"
      >
        <div className="absolute inset-0 bg-[url('/jdtb-portfolio/lossantos.png')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible("hero") ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-black mb-6 text-glow min-h-[120px] md:min-h-[160px] flex items-center justify-center">
              {t("name")}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-light min-h-[60px] flex items-center justify-center">
              {t("title")}
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed min-h-[80px] flex items-center justify-center text-center">
              {t("heroDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center min-h-[60px] items-center">
              <Button
                size="lg"
                className="animate-glow cursor-pointer w-40"
                onClick={() =>
                  window.open("https://wa.me/573142484885", "_blank")
                }
              >
                <MessagesSquare className="mr-2 h-5 w-5" />
                {t("contact")}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer bg-transparent w-40"
                onClick={() =>
                  window.open("https://github.com/juandavidtb02", "_blank")
                }
              >
                <Code className="mr-2 h-5 w-5" />
                {t("viewProjects")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={setSectionRef("about")} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible("about")
                ? "animate-slide-in-left"
                : "opacity-0 translate-x-[-50px]"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center min-h-[80px] flex items-center justify-center">
              <User className="inline mr-4 h-12 w-12 text-primary" />
              {t("aboutMe")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible("about")
                  ? "animate-slide-in-left"
                  : "opacity-0 translate-x-[-50px]"
              }`}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary min-h-[40px] flex items-center">
                    {t("myStory")}
                  </h3>
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary/60 transition-all duration-300">
                      <img
                        src={getAssetPath("/profilepic.jpeg")}
                        alt="Tu foto personal"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="min-h-[200px]">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {t("aboutDescription1")}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("aboutDescription2")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible("about")
                  ? "animate-slide-in-right"
                  : "opacity-0 translate-x-[50px]"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary min-h-[40px] flex items-center">
                  {t("technologies")}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "ReactJS",
                    ".NET",
                    "NextJS",
                    "Python",
                    "JavaScript",
                    "Django",
                    "MySQL | PostgreSQL",
                    "Azure",
                    "Docker",
                    "Git",
                    "Tailwind CSS",
                    "API Rest",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="p-2 text-center h-10 flex items-center justify-center"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        ref={setSectionRef("experience")}
        className="py-20 px-4 bg-secondary/5"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible("experience")
                ? "animate-slide-in-left"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center min-h-[80px] flex items-center justify-center">
              <Building className="inline mr-4 h-12 w-12 text-primary" />
              {t("professionalExperience")}
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible("experience")
                    ? "animate-slide-in-left"
                    : "opacity-0 translate-x-[-50px]"
                }`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary min-h-[28px]">
                          {job.position}
                        </h3>
                        <p className="text-lg font-semibold text-foreground min-h-[28px]">
                          {job.company}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="mt-2 md:mt-0 w-fit h-8 flex items-center"
                      >
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed min-h-[100px]">
                      {job.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary min-h-[20px] flex items-center">
                        {t("mainAchievements")}
                      </h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <span className="text-primary mr-2">•</span>
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        ref={setSectionRef("education")}
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible("education")
                ? "animate-slide-in-up"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center min-h-[80px] flex items-center justify-center">
              <GraduationCap className="inline mr-4 h-12 w-12 text-primary" />
              {t("academicFormation")}
            </h2>
          </div>

          <div className="space-y-8">
            {/* Educación Formal */}
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible("education")
                  ? "animate-slide-in-left"
                  : "opacity-0 translate-x-[-50px]"
              }`}
            >
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg">
                          {language === "es"
                            ? "Ingeniería en Sistemas"
                            : "Systems Engineering"}
                        </h4>
                        <p className="text-muted-foreground">
                          {language === "es"
                            ? "Universidad de los Llanos"
                            : "Universidad de los Llanos"}
                        </p>
                      </div>
                      <Badge variant="outline">2019 - 2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "es"
                        ? "Formación en desarrollo de software, arquitectura de sistemas y manejo de redes. Proyecto de tesis enfocado en aplicaciones web escalables. Actualmente con interés en realizar una especialización para profundizar en el área de tecnología."
                        : "Training in software development, systems architecture and network management. Thesis project focused on scalable web applications. Currently interested in pursuing a specialization to deepen in the technology area."}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg">
                          SCRUM Foundation Professional Certification
                        </h4>
                        <p className="text-muted-foreground">CertiProf</p>
                      </div>
                      <Badge variant="outline">2024</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "es"
                        ? "Certificación en metodologías ágiles y gestión de proyectos con marco de trabajo Scrum, enfocada en la colaboración efectiva en equipos de desarrollo."
                        : "Certification in agile methodologies and project management with Scrum framework, focused on effective collaboration in development teams."}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg">
                          {language === "es"
                            ? "Bachiller con énfasis en pedagogía"
                            : "High School with emphasis in pedagogy"}
                        </h4>
                        <p className="text-muted-foreground">
                          {language === "es"
                            ? "Escuela Normal Superior de Villavicencio"
                            : "Escuela Normal Superior de Villavicencio"}
                        </p>
                      </div>
                      <Badge variant="outline">2013 - 2018</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {language === "es"
                        ? "Formación en pedagogía con experiencia en la planificación de cursos, orientación de clases y gestión de procesos educativos."
                        : "Training in pedagogy with experience in course planning, class guidance and educational process management."}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Desarrollo Continuo */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible("education")
                  ? "animate-slide-in-right"
                  : "opacity-0 translate-x-[50px]"
              }`}
            >
              <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {t("continuousLearning")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t("continuousLearningDesc")}
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {t("inProgress")}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Azure
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Docker
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={setSectionRef("projects")}
        className="py-20 px-4 bg-secondary/10"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible("projects")
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center min-h-[80px] flex items-center justify-center">
              <Briefcase className="inline mr-4 h-12 w-12 text-primary" />
              {t("featuredProjects")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-1000 ${
                  isVisible("projects")
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-[30px]"
                }`}
                style={{ animationDelay: `${400 + index * 200}ms` }}
              >
                <Card className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 h-full flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-50"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 min-h-[28px] flex items-center">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow min-h-[120px]">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[40px] items-start">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="h-6"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto h-10">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="cursor-pointer flex-1 h-full"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        {t("code")}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                        disabled={project.demoUrl === "#"}
                        className="cursor-pointer flex-1 h-full"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t("demo")}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setSectionRef("contact")}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible("contact")
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 min-h-[80px] flex items-center justify-center">
              <Phone className="inline mr-4 h-12 w-12 text-primary" />
              {t("workTogether")}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed min-h-[60px] flex items-center justify-center">
              {t("contactDescription")}
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible("contact")
                ? "animate-fade-in-up"
                : "opacity-0 translate-y-[30px]"
            }`}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 bg-transparent"
                >
                  <Mail className="mr-3 h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">{t("email")}</div>
                    <div className="text-sm text-muted-foreground">
                      judatoba02@gmail.com
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 bg-transparent cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/juan-david-torres-barreto-62a786255/",
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="mr-3 h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">
                      Juan David Torres
                    </div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="h-16 bg-transparent cursor-pointer"
                  onClick={() =>
                    window.open("https://github.com/juandavidtb02", "_blank")
                  }
                >
                  <Github className="mr-3 h-6 w-6" />
                  <div className="text-left">
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-muted-foreground">
                      juandavidtb02
                    </div>
                  </div>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground min-h-[24px] flex items-center justify-center">
            {t("footerText")}
          </p>
        </div>
      </footer>
    </div>
  );
}
