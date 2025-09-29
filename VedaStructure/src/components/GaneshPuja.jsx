import React, { useEffect, useState, useRef } from 'react';



const GaneshPuja = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
            quote: "My Kundli gave me clarity in my career path and marriage timing. The remedies were simple and effective. Highly recommended!",
            author: "Anjali S."
        },
        {
            quote: "I was skeptical at first, but the accuracy of the predictions was astonishing. It helped me navigate a tough business phase.",
            author: "Rajesh K."
        },
        {
            quote: "The 150+ page report is incredibly detailed. It’s like a manual for my life. The insights into my relationships were invaluable.",
            author: "Priya M."
        }
    ];
    const sliderRef = useRef(null);
    const timeoutRef = useRef(null);

    // State for the FAQ accordion
    const [openFaq, setOpenFaq] = useState(null);
    const faqData = [
        { question: 'How many days will it take to receive my Kundli?', answer: 'Your personalized Kundli report will be prepared by our expert astrologers and delivered to your email inbox within 3-7 business days.' },
        { question: 'Can astrology predict the future accurately?', answer: 'Yes, with correct birth details (date, time, and place), Vedic astrology can provide 100% accurate insights and predictions about life events and timelines.' },
        { question: 'How do I receive my Kundli?', answer: 'You will receive a PDF copy of your comprehensive Kundli report directly in your email inbox, which you can save, print, and access anytime.' }
    ];

    // State for the booking form
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [status, setStatus] = useState({ heading: '', message: '' });

    // Effect for initializing scripts and animations
    useEffect(() => {
        // Dynamically load the Lucide icons script
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/lucide@latest';
        script.async = true;
        script.onload = () => {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        };
        document.body.appendChild(script);

        // General "Animate on Scroll" functionality
        const animatedSections = document.querySelectorAll('.animated-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        animatedSections.forEach(section => observer.observe(section));

        // Scroll-based animations
        const timeline = document.getElementById('timeline');
        const timelineProgress = document.getElementById('timeline-progress');
        const scrollRevealSection = document.getElementById('scroll-reveal-section');
        const scrollContent = document.getElementById('scroll-content');
        const staggerContainer = document.querySelector('.stagger-container');

        const handleScroll = () => {
            // Timeline progress animation
            if (timeline && timelineProgress) {
                const timelineRect = timeline.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const start = timeline.offsetTop - viewportHeight / 2;
                const end = timeline.offsetTop + timeline.offsetHeight - viewportHeight;
                const scrollY = window.scrollY;
                let progress = (scrollY - start) / (end - start + viewportHeight / 2);
                progress = Math.max(0, Math.min(1, progress));
                timelineProgress.style.transform = `scaleY(${progress})`;
            }

            // Unfurling scroll effect for "What You Get" section
            if (scrollRevealSection && scrollContent) {
                const rect = scrollRevealSection.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                const startPoint = rect.top + window.scrollY - viewportHeight;
                const endPoint = rect.top + window.scrollY - viewportHeight / 2;
                const currentScroll = window.scrollY;
                let progress = (currentScroll - startPoint) / (endPoint - startPoint);
                progress = Math.max(0, Math.min(1, progress));
                scrollContent.style.clipPath = `inset(0 0 ${100 - progress * 100}% 0)`;
                if (progress > 0.1 && staggerContainer && !staggerContainer.classList.contains('is-visible')) {
                    staggerContainer.classList.add('is-visible');
                    const staggerItems = staggerContainer.querySelectorAll('.stagger-item');
                    staggerItems.forEach((item, index) => {
                        item.style.transitionDelay = `${index * 0.08}s`;
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => {
            document.body.removeChild(script);
            window.removeEventListener('scroll', handleScroll);
            animatedSections.forEach(section => observer.unobserve(section));
        };
    }, []);

    // Effect for the testimonial slider auto-play
    useEffect(() => {
        const resetTimeout = () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };

        resetTimeout();
        timeoutRef.current = setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1)),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, testimonials.length]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setStatus({
            heading: 'Your Chart Is Ready!',
            message: 'Our expert astrologer is now analyzing your chart in detail. You will receive a notification within 24 hours once the comprehensive report is ready.'
        });

        setTimeout(() => {
            const isDelayed = Math.random() < 0.3;
            if (isDelayed) {
                setStatus({
                    heading: 'Analysis Taking Longer Than Expected',
                    message: 'Our astrologer is conducting an exceptionally detailed review of your chart. This may take up to 48 hours. We appreciate your patience and will notify you as soon as it is complete.'
                });
            } else {
                setStatus({
                    heading: 'Astrological Analysis Complete!',
                    message: 'Your personalized Kundli report has been generated and will be sent to your email shortly. You will receive a notification once it is delivered.'
                });
            }
        }, 8000);
    };

    return (
        <>
            {/* Styles from the original <style> tag */}
            <style>{`
                body {
                    font-family: 'Poppins', sans-serif;
                }
                    
                .font-serif {
                    font-family: 'Merriweather', serif;
                }

                .animated-section {
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }

                .animated-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .stagger-item {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                @keyframes rotate360 {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-rotate-slow {
                    animation: rotate360 15s linear infinite;
                }
            `}</style>

            <body className="bg-gradient-to-b from-orange-50 via-yellow-50 to-white text-gray-800 font-sans overflow-x-hidden">
                <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-40"></div>

                <header className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/banner.png" alt="Mystical Vedic Background" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="relative z-10 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                            Unlock Your Destiny with a Vedic Personalized Kundli
                        </h1>
                        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-200 drop-shadow-sm">
                            Get 100% accurate predictions, remedies, and life guidance based on your unique birth details.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/50 hover:shadow-2xl transform hover:-translate-y-1">
                                Get My Personalized Kundli Now
                            </a>
                            <div className="group relative">
                                <button className="w-full bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-orange-600">
                                    See Sample Report
                                </button>
                                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                                    <a href="path/to/your/sample-report-english.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-gray-800 hover:bg-orange-100 rounded-t-lg">English Sample</a>
                                    <a href="path/to/your/sample-report-hindi.pdf" target="_blank" rel="noopener noreferrer" className="block px-4 py-3 text-gray-800 hover:bg-orange-100 rounded-b-lg">Hindi Sample</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="relative z-10">
                    <section className="py-20 md:py-28 animated-section">
                        <div className="container mx-auto px-4">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div className="text-center md:text-left">
                                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-6">
                                        What is a Vedic Personalized Kundli?
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                                        A Vedic Personalized Kundli is a detailed birth chart prepared by expert astrologers, offering insights into your career, health, relationships, finances, love, business, and more.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-lg font-medium">
                                        With remedies and predictions, it helps you make informed decisions for a successful life.
                                    </p>
                                </div>
                                <div className="flex items-center justify-center [perspective:1000px]">
                                    <div className="relative w-full max-w-sm transform-gpu transition-transform duration-500 ease-out [transform:rotateY(-20deg)_rotateX(5deg)] hover:[transform:rotateY(0)_rotateX(0)_scale(1.05)]" style={{ transformStyle: 'preserve-3d' }}>
                                        <div className="w-full h-64 md:h-80 rounded-2xl shadow-2xl shadow-orange-500/30 border border-orange-200 overflow-hidden">
                                            <video autoPlay muted loop playsInline controlsList="nodownload noremoteplayback" className="w-full h-full object-cover transform scale-125">
                                                <source src="/images/banner-kun.mp4" type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/10 pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* A Complete Panorama of Your Life Section */}
                    <section className="py-20 md:py-28 bg-[#FFFBF5] relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/inspiration-geometry.png')] opacity-5"></div>
                        <div className="container mx-auto px-6 text-center relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-600 mb-4">
                                A Complete Panorama of Your Life
                            </h2>
                            <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-16">
                                Your Kundli offers a 360-degree perspective, illuminating every facet of your being and destiny.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                                {['briefcase', 'activity', 'heart', 'building-2', 'gem', 'banknote', 'graduation-cap', 'heart-pulse'].map((icon, index) => {
                                    const titles = ['Career', 'Health', 'Relationships', 'Business', 'Luxury Lifestyle', 'Finance', 'Education', 'Love'];
                                    const subtitles = ['Path & Growth', 'Well-being & Remedies', 'Compatibility & Harmony', 'Ventures & Profitability', 'Prosperity & Assets', 'Savings & Investments', 'Learning & Success', 'Partnership & Bliss'];
                                    return (
                                        <div key={index} className="group flex flex-col items-center text-center">
                                            <div className="relative w-24 h-24 flex items-center justify-center mb-4">
                                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                                <div className="relative w-full h-full p-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full">
                                                    <div className="bg-[#FFFBF5] w-full h-full rounded-full flex items-center justify-center">
                                                        <i data-lucide={icon} className="w-10 h-10 text-orange-600"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800">{titles[index]}</h3>
                                            <p className="text-gray-500">{subtitles[index]}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Your Personalised Kundli in 4 Steps Section */}
                    <section className="py-20 md:py-28 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100">
                        <div className="container relative mx-auto px-4 z-10">
                            <div className="text-center mb-20">
                                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
                                    Your Personalised Kundli in 4 Steps
                                </h2>
                                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                                    Follow this simple, guided process to receive your comprehensive life report.
                                </p>
                            </div>
                            <div id="timeline" className="relative max-w-4xl mx-auto">
                                <div className="absolute left-4 md:left-1/2 w-1 h-full bg-orange-200/50 -translate-x-1/2" aria-hidden="true"></div>
                                <div id="timeline-progress" className="absolute left-4 md:left-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500 -translate-x-1/2 origin-top" style={{ transform: 'scaleY(0)' }}></div>
                                <div className="space-y-16">
                                    {/* Timeline items */}
                                    <div className="flex items-start gap-6 md:gap-8 animated-section">
                                        <div className="relative z-10 flex-shrink-0"><div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-orange-500 rounded-full shadow-lg shadow-orange-500/20"><div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div></div></div>
                                        <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-orange-200/80 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600"><i data-lucide="send" className="w-6 h-6"></i></div>
                                                <div><h3 className="text-xl font-bold text-gray-800">Provide Birth Details</h3><p className="mt-1 text-gray-600">Securely submit your exact time, date, and place of birth.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 md:gap-8 md:flex-row-reverse animated-section">
                                        <div className="relative z-10 flex-shrink-0"><div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-orange-500 rounded-full shadow-lg shadow-orange-500/20"><div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div></div></div>
                                        <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-orange-200/80 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600"><i data-lucide="star" className="w-6 h-6"></i></div>
                                                <div><h3 className="text-xl font-bold text-gray-800">Generate Your Chart</h3><p className="mt-1 text-gray-600">Our engine calculates and renders your unique planetary blueprint.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 md:gap-8 animated-section">
                                        <div className="relative z-10 flex-shrink-0"><div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-orange-500 rounded-full shadow-lg shadow-orange-500/20"><div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div></div></div>
                                        <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-orange-200/80 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600"><i data-lucide="user" className="w-6 h-6"></i></div>
                                                <div><h3 className="text-xl font-bold text-gray-800">Receive Expert Analysis</h3><p className="mt-1 text-gray-600">A seasoned astrologer deciphers the cosmic signatures in your chart.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 md:gap-8 md:flex-row-reverse animated-section">
                                        <div className="relative z-10 flex-shrink-0"><div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white border-2 border-orange-500 rounded-full shadow-lg shadow-orange-500/20"><div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div></div></div>
                                        <div className="w-full md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-orange-200/80 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-amber-100 text-orange-600"><i data-lucide="check" className="w-6 h-6"></i></div>
                                                <div><h3 className="text-xl font-bold text-gray-800">Unlock Your Remedies</h3><p className="mt-1 text-gray-600">Get your report with insights and personalized remedies for success.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-24">
                                <a href="#pricing" className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/50 hover:shadow-2xl transform hover:-translate-y-1">
                                    Begin My Journey
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Unlock the Secrets Within Section */}
                    <section id="scroll-reveal-section" className="py-24 md:py-32 bg-white relative overflow-hidden">
                        <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-orange-100/50 rounded-full blur-3xl"></div>
                        <div className="container mx-auto px-4 relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-4">
                                    Unlock the Secrets Within
                                </h2>
                                <p className="max-w-3xl mx-auto text-lg text-gray-600">
                                    Your 150+ page personalised report is a treasure map to your life's potential, revealing profound insights at every turn.
                                </p>
                            </div>
                            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                                <div className="flex items-center justify-center p-4 [perspective:1000px] animated-section">
                                    <div className="relative group w-full max-w-sm aspect-square">
                                        <video autoPlay muted loop playsInline controlsList="nodownload noremoteplayback" className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-orange-300 transition-transform duration-500 ease-out group-hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
                                            <source src="/images/kundali-vid.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                                        <div className="absolute bottom-6 left-6 text-white">
                                            <h3 className="text-2xl font-bold drop-shadow-md">Your 150+ Page</h3>
                                            <p className="text-lg drop-shadow-sm">Vedic Report</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[500px] overflow-hidden rounded-2xl shadow-lg border border-amber-200/50" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/old-wall.png'), linear-gradient(to bottom, #fff7e6, #fefdfa)", backgroundSize: 'auto, cover' }}>
                                    <div id="scroll-content" className="overflow-hidden" style={{ clipPath: 'inset(0px 0px 100% 0px)' }}>
                                        <div className="p-8 space-y-5 stagger-container">
                                            {['Basic Birth Details', 'Favorable Points', 'Gemstone Recommendations', 'Rudraksha Recommendations', 'Yoga & Dosha Reports', 'Health & Finance Astrograph', 'Dasha Analysis Report', '1-Year Monthly Prediction', '10-Year Life Prediction', 'Ankajyotish Analysis', 'Lal Kitab Remedies', '16 Varga Kundali'].map((item, index) => (
                                                <div key={index} className="flex items-center space-x-4 stagger-item">
                                                    <i data-lucide="star" className="w-6 h-6 text-amber-500 fill-amber-400 flex-shrink-0"></i>
                                                    <span className="font-serif text-lg text-amber-900">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Testimonials Section */}
                    <section id="testimonials" className="py-16 md:py-24 bg-white animated-section">
                        <div className="container mx-auto px-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-12 text-center">
                                Words From Our Believers
                            </h2>
                            <div className="relative max-w-4xl mx-auto">
                                <div className="overflow-hidden rounded-2xl">
                                    <div ref={sliderRef} className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                        {testimonials.map((testimonial, index) => (
                                            <div key={index} className="w-full flex-shrink-0">
                                                <div className="bg-yellow-50 p-8 md:p-12 rounded-2xl border border-orange-200 shadow-md text-center">
                                                    <i data-lucide="quote" className="w-12 h-12 text-orange-300 mx-auto"></i>
                                                    <p className="text-gray-700 italic text-xl my-6 leading-relaxed">"{testimonial.quote}"</p>
                                                    <div className="flex items-center justify-center space-x-4">
                                                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
                                                            <i data-lucide="user" className="w-6 h-6 text-orange-500"></i>
                                                        </div>
                                                        <p className="font-bold text-orange-600 text-lg">{testimonial.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)} className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-orange-100 transition">
                                    <i data-lucide="chevron-left" className="w-6 h-6 text-orange-600"></i>
                                </button>
                                <button onClick={() => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)} className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-orange-100 transition">
                                    <i data-lucide="chevron-right" className="w-6 h-6 text-orange-600"></i>
                                </button>
                            </div>
                            <div id="dots" className="flex justify-center space-x-2 mt-8">
                                {testimonials.map((_, index) => (
                                    <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition ${currentIndex === index ? 'bg-orange-500' : 'bg-orange-200'}`}></button>
                                ))}
                            </div>
                        </div>
                    </section>
                    
                    {/* Video Section */}
                    <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white overflow-hidden animated-section bg-slate-900">
                        <video autoPlay loop muted playsInline poster="/images/video-poster.jpg" className="absolute inset-0 w-full h-full object-cover z-0">
                            <source src="/images/kas.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-black/60 z-10"></div>
                        <div className="relative z-20 container mx-auto px-4">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif text-amber-300 drop-shadow-md mb-4">
                                    Your Key to a Successful Life
                                </h2>
                                <p className="text-lg text-slate-200">
                                    Watch this short video to see how this Kundli can provide the clarity and direction you've been seeking.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Booking Form Section */}
                    <section id="booking-form" className="py-16 md:py-24 bg-gradient-to-br from-yellow-100 to-orange-200 animated-section">
                        <div className="container mx-auto px-4 max-w-4xl">
                            {!formSubmitted ? (
                                <div id="form-container">
                                    <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-amber-700 mb-2">
                                        Enter Your Birth Details
                                    </h2>
                                    <p className="text-center text-gray-600 mb-10">Fill out the form below to order your personalized Kundli.</p>
                                    <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-orange-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="md:col-span-2"><label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label><input type="text" id="full-name" name="fullName" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" /></div>
                                        <div><label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label><input type="date" id="dob" name="dob" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" /></div>
                                        <div><label htmlFor="tob" className="block text-sm font-medium text-gray-700">Time of Birth</label><input type="time" id="tob" name="tob" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" /></div>
                                        <div><label htmlFor="city" className="block text-sm font-medium text-gray-700">Birth City</label><input type="text" id="city" name="city" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" /></div>
                                        <div><label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label><input type="text" id="state" name="state" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" /></div>
                                        <div className="md:col-span-2"><label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label><input type="text" id="country" name="country" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500" /></div>
                                        <div className="md:col-span-2"><label className="block text-sm font-medium text-gray-700">Gender</label><div className="mt-2 flex items-center space-x-6"><label className="inline-flex items-center"><input type="radio" name="gender" value="male" className="form-radio text-orange-600" /><span className="ml-2">Male</span></label><label className="inline-flex items-center"><input type="radio" name="gender" value="female" className="form-radio text-orange-600" /><span className="ml-2">Female</span></label></div></div>
                                        <div className="md:col-span-2 border-t pt-4 mt-2"><label className="block text-sm font-medium text-gray-700 mb-2">Report Options</label><div className="grid grid-cols-2 gap-4"><div><p className="text-xs font-semibold text-gray-600 mb-1">PDF Language</p><select name="language" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"><option value="english">English</option><option value="hindi">Hindi</option></select></div><div><p className="text-xs font-semibold text-gray-600 mb-1">Prediction Period</p><select name="period" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"><option value="10">10 Years</option><option value="20">20 Years</option></select></div></div></div>
                                        <div className="md:col-span-2 text-center mt-4"><button type="submit" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-bold py-3 px-12 rounded-full text-xl shadow-lg transition-all duration-300 hover:shadow-orange-500/50 hover:shadow-2xl transform hover:-translate-y-1">Proceed to Payment (₹499)</button></div>
                                    </form>
                                </div>
                            ) : (
                                <div id="status-container" className="text-center bg-white p-10 rounded-2xl shadow-lg border border-orange-200">
                                    <div className="flex justify-center mb-6">
                                        <svg className="animate-spin h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{status.heading}</h3>
                                    <p className="mt-2 text-gray-600 max-w-md mx-auto">{status.message}</p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="py-16 md:py-24 animated-section">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600 mb-12 text-center">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="bg-white rounded-2xl border border-orange-200 shadow-sm overflow-hidden">
                                        <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="faq-button w-full flex justify-between items-center p-6 text-left">
                                            <span className="text-lg font-semibold text-orange-700">{faq.question}</span>
                                            <i data-lucide="chevron-down" className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                                        </button>
                                        <div
                                            className="faq-answer overflow-hidden transition-all duration-300 ease-in-out"
                                            style={{ maxHeight: openFaq === index ? '200px' : '0px' }} // Use a generous max-height
                                        >
                                            <p className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </body>
        </>
    );
};

export default GaneshPuja;