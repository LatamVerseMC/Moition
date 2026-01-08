import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Users, 
  TrendingUp, 
  Award, 
  Mail, 
  Phone,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Video,
  Megaphone,
  Star,
  ArrowRight,
  Instagram,
  Twitter,
  Briefcase,
  Youtube,
  Zap,
  Heart,
  Sparkles,
  Camera,
  Edit3,
  Target,
  Globe,
  VolumeX,
  Volume2
} from 'lucide-react';
import { translations, Language, TranslationKey } from './translations';
import { SiFreelancer, SiTiktok } from "react-icons/si";
import { TfiVideoClapper } from "react-icons/tfi";


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [language, setLanguage] = useState<Language>('es');
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [t('inicio'), t('servicios'), t('portafolio'), t('sobreMi'), t('contacto')];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const toggleHeroVideoSound = () => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !heroVideoRef.current.muted;
      setIsHeroVideoMuted(heroVideoRef.current.muted);
    }
  };

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: t('videoEditingTitle'),
      description: t('videoEditingDesc'),
      features: t('videoEditingFeatures') as string[],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: t('digitalMarketingTitle'),
      description: t('digitalMarketingDesc'),
      features: t('digitalMarketingFeatures') as string[],
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('socialMediaTitle'),
      description: t('socialMediaDesc'),
      features: t('socialMediaFeatures') as string[],
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const projects = [
    {
      title: t('Consiguetutrabajo'),
      category: t('videoEditingTitle'),
      description: t('Consiguetutrabajo1'),
      video: "https://res.cloudinary.com/ddhanpflx/video/upload/v1752719208/CTT_INTRO_p9fs68.mp4",
      stats: { views: "5.2M", growth: "+4900%" },
      badge: t('fitInfluencerBadge')
    },
    {
      title: t('restaurantTitle'),
      category: t('digitalMarketingTitle'),
      description: t('restaurantDesc'),
      video: "https://res.cloudinary.com/ddhanpflx/video/upload/v1752719218/Posada_Do%C3%B1a_B%C3%A1rbara_Stand_g2qtzi.mp4",
      stats: { sales: "+300%", followers: "85K" },
      badge: t('restaurantBadge')
    },
    {
      title: t('fashionTitle'),
      category: t('socialMediaTitle'),
      description: t('fashionDesc'),
      video: "https://res.cloudinary.com/ddhanpflx/video/upload/v1752719246/WhizAngel_Promo_v4_gcpbqi.mp4",
      stats: { engagement: "45%", conversion: "25%" },
      badge: t('fashionBadge')
    }
  ];

  const testimonials = [
    {
      name: "Ana García",
      role: "CEO @TechStart",
      content: t('testimonial1'),
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "Carlos Fitness",
      role: "Fitness Influencer",
      content: t('testimonial2'),
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      name: "María Foodie",
      role: "@ElBuenSaborMX",
      content: t('testimonial3'),
      rating: 5,
      avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-x-3">
              <span className="text-2xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MOITION 
              </span><TfiVideoClapper className="text-2xl text-blue-400 group-hover:text-cyan-400 transition-colors " />
            </div>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {[t('inicio'), t('servicios'), t('portafolio'), t('sobreMi'), t('contacto')].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 font-medium ${
                    activeSection === section 
                      ? 'text-cyan-400 font-bold scale-110' 
                      : 'text-white/80 hover:text-cyan-400 hover:scale-105'
                  }`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 backdrop-blur-sm hover:from-pink-500/30 hover:to-purple-500/30 transition-all duration-300"
              >
                <Globe className="w-4 h-4 text-pink-400" />
                <span className="text-pink-300 font-bold text-sm uppercase">{language}</span>
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-xl text-white/80 hover:text-cyan-400 transition-colors bg-white/10 backdrop-blur-sm"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[t('inicio'), t('servicios'), t('portafolio'), t('sobreMi'), t('contacto')].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-white/80 hover:text-cyan-400 hover:bg-white/10 rounded-xl capitalize transition-all"
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id={t('inicio')} className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-300 font-medium">{t('availableForProjects')}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                  {t('hello')}{' '}
                  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    {t('name')}
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">
                    {t('jobTitle')}
                  </p>
                  <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                    {t('heroDescription')}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection(t('portafolio'))}
                  className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-bold shadow-lg shadow-pink-500/25"
                >
                  {t('viewMyWork')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection(t('contacto'))}
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 font-bold backdrop-blur-sm"
                >
                  {t('letsTalk')}
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">200+</div>
                  <div className="text-cyan-300 font-medium">{t('epicProjects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">100+</div>
                  <div className="text-cyan-300 font-medium">{t('happyClients')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">5+</div>
                  <div className="text-cyan-300 font-medium">{t('yearsCreating')}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <video
                  ref={heroVideoRef}
                  src="https://res.cloudinary.com/ddhanpflx/video/upload/v1752716687/Reel_Givenchy_Promo_f67kxo.mp4"
                  autoPlay
                  loop
                  muted={isHeroVideoMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Sound Toggle Button */}
                <button
                  onClick={toggleHeroVideoSound}
                  className="absolute bottom-4 right-4 p-3 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-all duration-300 group"
                  title={isHeroVideoMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isHeroVideoMuted ? (
                    <VolumeX className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" />
                  )}
                </button>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 text-black">
                  <Zap className="w-6 h-6" />
                  <div>
                    <div className="text-sm font-black">+500%</div>
                    <div className="text-xs font-bold">Growth Rate</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 text-black">
                  <Heart className="w-6 h-6" />
                  <div>
                    <div className="text-sm font-black">5M+</div>
                    <div className="text-xs font-bold">Views Generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id={t('servicios')} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
              <Target className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 font-medium">{t('whatIDoBest')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                {t('Superpowers1')}{' '}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    {t('Superpowers')}
                  </span>
              <span className="text-5xl md:text-7xl"></span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('servicesSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                  <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-2xl w-fit mb-6 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-white/80">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id={t('portafolio')} className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Camera className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-medium">{t('myBestWork')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              {t('projectsThatBroke')}{' '}<span className="bg-gradient-to-t from-yellow-400 to-red-600 bg-clip-text text-transparent animate-pulse">
                    {t('projectsThatBroke1')}
                  </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('portfolioSubtitle')}
            </p>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-xl opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform">
                  <div className="relative h-48">
                    {project.video ? (
                      <video
                        src={project.video}
                        controls
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    ) : (
                      <video
                        src={project.video}
                        controls
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm rounded-full font-bold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs rounded-full font-black">
                        {project.badge}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                          <span className="text-white/60 capitalize font-medium">{key}:</span>
                          <span className="font-black text-cyan-400">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium">{t('clientLove')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              {t('whatClientsSay1')} <span className="bg-gradient-to-r from-pink-400 via-green-500 to-teal-600 bg-clip-text text-transparent animate-pulse">
                    {t('whatClientsSay2')}
                  </span><span className="text-4xl md:text-6xl font-black text-white mb-6">
                    {' '} {t('whatClientsSay3')}
                  </span>💬
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <div className="font-black text-white">{testimonial.name}</div>
                      <div className="text-sm text-cyan-400 font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id={t('sobreMi')} className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6">
                <Edit3 className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 font-medium">{t('aboutMe')}</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                {t('my')}{' '}
                <span className="bg-gradient-to-r from-pink-400 via-slate-400 to-sky-500 bg-clip-text text-transparent animate-pulse">
                  {t('Story')}
                  </span>
              </h2>
              
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>{t('aboutText1')}</p>
                <p>{t('aboutText2')}</p>
                <p>{t('aboutText3')}</p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-4 rounded-2xl border border-pink-500/30 backdrop-blur-sm">
                  <Video className="w-6 h-6 text-pink-400" />
                  <span className="font-bold text-white">Premiere Pro</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-4 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                  <Play className="w-6 h-6 text-purple-400" />
                  <span className="font-bold text-white">After Effects</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <span className="font-bold text-white">Growth Hacking</span>
                </div>
                <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                  <Target className="w-6 h-6 text-green-400" />
                  <span className="font-bold text-white">Viral Strategy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 rounded-3xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://res.cloudinary.com/ddhanpflx/image/upload/v1752718375/IMG_20250701_000955_c0ycpv.jpg" 
                  alt="Moisés Rodríguez en su estudio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Skills */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-black font-black text-sm">5+ Years</span>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-2xl shadow-xl transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-black font-black text-sm">100+ Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id={t('contacto')} className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-medium">{t('letsConnect')}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              {t('readyForBoom')} <span className="bg-gradient-to-br from-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                    {t('readyForBoom2')}
                  </span><span className="text-4xl md:text-6xl font-black text-white mb-6">?
                  </span>📈
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              {t('contactSubtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl border border-pink-500/30 backdrop-blur-sm">
                <div className="p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-black text-white text-lg">{t('email')}</div>
                  <div className="text-pink-300 font-medium">moisesalejandro119@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl border border-green-500/30 backdrop-blur-sm">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-black text-white text-lg">{t('whatsapp')}</div>
                  <div className="text-green-300 font-medium">+58 (412) 762-1660</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-black text-white text-lg">{t('location')}</div>
                  <div className="text-blue-300 font-medium">{t('locationValue')}</div>
                </div>
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-black text-white mb-6">{t('followMe')} 📱</h3>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/moition.films" className="p-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.tiktok.com/@moition" className="p-4 bg-gradient-to-r from-slate-700 to-gray-800 rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg">
                    <SiTiktok className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.freelancer.es/u/Moition" className="p-4 bg-gradient-to-r from-slate-50 to-slate-50 rounded-2xl hover:scale-110 transition-transform duration-300 shadow-lg">
                    <SiFreelancer className="w-6 h-6 text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>
            
            <form action="https://formsubmit.co/latamverse@gmail.com" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {t('fullName')}
                </label>
                <input
                  type="text" name="text"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-white/50"
                  placeholder={t('fullNamePlaceholder')} required
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {t('email')} 📧
                </label>
                <input
                  type="email" name="email"
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white placeholder-white/50"
                  placeholder={t('emailPlaceholder')} required
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {t('whatDoYouNeed')}
                </label>
                <select name="select" className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all text-white"> 
                  <option className="bg-gray-900">{t('selectService')}</option>
                  <option className="bg-gray-900">{t('videoEditing')}</option>
                  <option className="bg-gray-900">{t('digitalMarketing')}</option>
                  <option className="bg-gray-900">{t('socialMedia')}</option>
                  <option className="bg-gray-900">{t('completePackage')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-white mb-3">
                  {t('tellMeYourIdea')}
                </label>
                <textarea name="textarea"
                  rows={4}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none text-white placeholder-white/50"
                  placeholder={t('ideaPlaceholder')} required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-2xl hover:from-pink-600 hover:to-purple-700 transition-all font-black text-lg transform hover:scale-105 shadow-lg shadow-pink-500/25"
              >
                {t('sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              MOISÉS RODRÍGUEZ ⚡
            </div>
            <p className="text-white/60 mb-6 font-medium">
              {t('footerDescription')}
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://www.instagram.com/moition.films" className="text-white/60 hover:text-pink-400 transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.tiktok.com/@moition" className="text-white/60 hover:text-slate-700 transition-colors transform hover:scale-110">
                <SiTiktok className="w-6 h-6" />
              </a>
              <a href="https://www.freelancer.es/u/Moition" className="text-white/60 hover:text-blue-400 transition-colors transform hover:scale-110">
                <SiFreelancer className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-8 border-t border-white/10 text-white/40 font-medium">
              <p>&copy; 2024 Moisés Rodríguez. {t('footerCopyright')}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
