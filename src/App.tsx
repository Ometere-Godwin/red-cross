import logo from './assets/logo.jpg'
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Menu, X, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePage, setActivePage] = useState('home');
  const [selectedFolder, setSelectedFolder] = useState('');

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Uniben Past and Present",
      subtitle: "Serving humanity through dedication and compassion"
    },
    {
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Making a Difference",
      subtitle: "Together we can create positive change"
    },
    {
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "Join Our Cause",
      subtitle: "Be part of something greater"
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'events', label: 'Events' },
    { id: 'projects', label: 'Projects' },
    { id: 'pictures', label: 'Pictures' },
    { id: 'blog', label: 'Blog' }
  ];

  const pictureFolders = [
    {
      id: 'medical-camps',
      title: 'Medical Camps',
      images: [
        'https://images.unsplash.com/photo-1584515933487-779824d29309',
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
      ]
    },
    {
      id: 'community-outreach',
      title: 'Community Outreach',
      images: [
        'https://images.unsplash.com/photo-1593113630400-ea4288922497',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433',
        'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b'
      ]
    },
    {
      id: 'health-education',
      title: 'Health Education',
      images: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
      ]
    },
    {
      id: 'volunteer-training',
      title: 'Volunteer Training',
      images: [
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846'
      ]
    },
    {
      id: 'emergency-response',
      title: 'Emergency Response',
      images: [
        'https://images.unsplash.com/photo-1587745416684-47953f16f02f',
        'https://images.unsplash.com/photo-1587745416684-47953f16f02f',
        'https://images.unsplash.com/photo-1587745416684-47953f16f02f'
      ]
    },
    {
      id: 'blood-drives',
      title: 'Blood Drives',
      images: [
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4',
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4',
        'https://images.unsplash.com/photo-1615461066841-6116e61058f4'
      ]
    },
    {
      id: 'first-aid',
      title: 'First Aid Training',
      images: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
      ]
    },
    {
      id: 'youth-programs',
      title: 'Youth Programs',
      images: [
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c'
      ]
    },
    {
      id: 'disaster-relief',
      title: 'Disaster Relief',
      images: [
        'https://images.unsplash.com/photo-1587745416684-47953f16f02f',
        'https://images.unsplash.com/photo-1587745416684-47953f16f02f',
        'https://images.unsplash.com/photo-1587745416684-47953f16f02f'
      ]
    },
    {
      id: 'community-service',
      title: 'Community Service',
      images: [
        'https://images.unsplash.com/photo-1593113598332-cd288d649433',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433',
        'https://images.unsplash.com/photo-1593113598332-cd288d649433'
      ]
    },
    {
      id: 'health-awareness',
      title: 'Health Awareness',
      images: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
      ]
    },
    {
      id: 'special-events',
      title: 'Special Events',
      images: [
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18'
      ]
    },
    {
      id: 'awards',
      title: 'Awards & Recognition',
      images: [
        'https://images.unsplash.com/photo-1569038786784-24a715a36507',
        'https://images.unsplash.com/photo-1569038786784-24a715a36507',
        'https://images.unsplash.com/photo-1569038786784-24a715a36507'
      ]
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      images: [
        'https://images.unsplash.com/photo-1556761175-b413da4baf72',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72',
        'https://images.unsplash.com/photo-1556761175-b413da4baf72'
      ]
    },
    {
      id: 'workshops',
      title: 'Workshops',
      images: [
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846'
      ]
    },
    {
      id: 'celebrations',
      title: 'Celebrations',
      images: [
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18'
      ]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Essential First Aid Skills Every Volunteer Should Know",
      excerpt: "Learn the fundamental first aid techniques that can make a difference between life and death in emergency situations.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "First Aid"
    },
    {
      id: 2,
      title: "The Impact of Community Health Outreach Programs",
      excerpt: "Exploring how local health initiatives are transforming communities and improving public health outcomes.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Community Outreach"
    },
    {
      id: 3,
      title: "Volunteering in Healthcare: A Personal Journey",
      excerpt: "A volunteer's perspective on the challenges and rewards of serving in healthcare communities.",
      author: "Emma Williams",
      date: "March 10, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Volunteerism"
    },
    {
      id: 4,
      title: "Mental Health First Aid: Breaking the Stigma",
      excerpt: "Understanding the importance of mental health first aid and how to support those in crisis.",
      author: "Dr. James Patterson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Mental Health"
    },
    {
      id: 5,
      title: "Building Sustainable Health Programs in Communities",
      excerpt: "Strategies for creating lasting impact through sustainable community health initiatives.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Community Development"
    },
    {
      id: 6,
      title: "Emergency Response: When Every Second Counts",
      excerpt: "Real-life stories and lessons from emergency response volunteers in critical situations.",
      author: "Robert Martinez",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Emergency Response"
    },
    {
      id: 7,
      title: "Youth in Healthcare: Inspiring the Next Generation",
      excerpt: "How young volunteers are making a difference and shaping the future of healthcare.",
      author: "Jessica Lee",
      date: "February 28, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Youth Programs"
    },
    {
      id: 8,
      title: "The Role of Technology in Community Health",
      excerpt: "Exploring how digital innovations are revolutionizing community healthcare delivery.",
      author: "Tech. David Kumar",
      date: "February 25, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Healthcare Technology"
    },
    {
      id: 9,
      title: "Preventive Healthcare: The Community Approach",
      excerpt: "Understanding the importance of preventive care and community education in public health.",
      author: "Dr. Maria Rodriguez",
      date: "February 22, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Preventive Care"
    },
    {
      id: 10,
      title: "Cross-Cultural Healthcare: Bridging Gaps",
      excerpt: "Insights into providing culturally sensitive healthcare services in diverse communities.",
      author: "Dr. Ahmed Hassan",
      date: "February 20, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Cultural Competency"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setActivePage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      clearInterval(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-[#17236b] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="" width={40} height={50} className='object-contain'/>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`transition-colors ${
                    activePage === item.id
                      ? 'text-red-500 font-semibold border-b-2 border-red-500'
                      : 'hover:text-red-500'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    activePage === item.id
                      ? 'bg-red-500 text-white font-semibold'
                      : 'hover:text-red-500'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {activePage === 'about' ? (
        <section className="py-16 bg-gray-50" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">About Us</h2>
                <div className="prose prose-lg">
                  <p className="text-gray-600 mb-6">
                    Birthed in 2016, Uniben Past and Present has grown from a small group of passionate individuals into a thriving community dedicated to making a difference. Our journey began with a simple vision: to bridge the gap between past and present students while serving humanity through dedication and compassion.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Over the years, we have expanded our reach and impact, organizing numerous medical camps, community outreach programs, and educational initiatives. Our commitment to excellence and service has made us a beacon of hope in our community.
                  </p>
                  <p className="text-gray-600">
                    Today, we continue to grow and evolve, staying true to our core values of compassion, integrity, and dedication to service. Join us in our mission to create positive change and build a better future for all.
                  </p>
                </div>
                <div className="mt-8">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                    Join Our Mission
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                  alt="Community service"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-red-600 mb-2">7+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
                <div className="text-gray-600">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
                <div className="text-gray-600">Medical Camps</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
                <div className="text-gray-600">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">30+</div>
                <div className="text-gray-600">Community Projects</div>
              </div>
            </div>
          </div>
        </section>
      ) : activePage === 'pictures' ? (
        <section className="py-16 bg-gray-50" id="pictures">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Photo Gallery</h2>
            
            {selectedFolder ? (
              <div>
                <button
                  onClick={() => setSelectedFolder('')}
                  className="mb-8 inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
                >
                  <ArrowRight className="rotate-180 mr-2" size={16} /> Back to Folders
                </button>
                <h3 className="text-2xl font-semibold text-navy-900 mb-6">
                  {pictureFolders.find(f => f.id === selectedFolder)?.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pictureFolders
                    .find(f => f.id === selectedFolder)
                    ?.images.map((image, idx) => (
                      <div
                        key={idx}
                        className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <img
                          src={`${image}?auto=format&fit=crop&w=800&q=80`}
                          alt={`Gallery image ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {pictureFolders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.id)}
                    className="group relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <img
                      src={`${folder.images[0]}?auto=format&fit=crop&w=800&q=80`}
                      alt={folder.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <h3 className="text-white font-semibold p-4 w-full text-left">
                        {folder.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : activePage === 'blog' ? (
        <section className="py-16 bg-gray-50" id="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-navy-900 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-red-600 hover:text-red-700 font-semibold flex items-center">
                        Read More <ArrowRight size={16} className="ml-2" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Hero Section with Slider */}
          <section className="relative h-[600px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-navy-900 bg-opacity-60"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
                      Join Us Today
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slider Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-red-500' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Featured Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Medical camp"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-navy-900">Latest Events</h3>
                    <p className="text-gray-600 mb-4">Join our upcoming community outreach programs and medical camps. Make a difference in your community today.</p>
                    <a href="#events" onClick={() => handleNavClick('events')} className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                      View Events <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Community project"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-navy-900">Our Projects</h3>
                    <p className="text-gray-600 mb-4">Discover how we're making a difference in the community through various initiatives and programs.</p>
                    <a href="#projects" onClick={() => handleNavClick('projects')} className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                      View Projects <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Volunteer work"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-navy-900">Get Involved</h3>
                    <p className="text-gray-600 mb-4">Learn how you can contribute to our cause and make an impact. Join our volunteer program today.</p>
                    <a href="#volunteer" className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">UPP</h4>
              <p className="text-gray-300">Serving the community since establishment</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <div className="space-y-2">
                <p className="flex items-center"><MapPin size={18} className="mr-2" /> Treatment Room, University of Benin, Benin, Nigeria</p>
                <p className="flex items-center"><Phone size={18} className="mr-2" /> +234 XXX XXX XXXX</p>
                <p className="flex items-center"><Mail size={18} className="mr-2" /> contact@upp.org</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" onClick={() => handleNavClick('about')} className="hover:text-red-500">About Us</a></li>
                <li><a href="#events" onClick={() => handleNavClick('events')} className="hover:text-red-500">Events</a></li>
                <li><a href="#blog" onClick={() => handleNavClick('blog')} className="hover:text-red-500">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500"><Facebook size={24} /></a>
                <a href="#" className="hover:text-red-500"><Twitter size={24} /></a>
                <a href="#" className="hover:text-red-500"><Instagram size={24} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} UPP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;