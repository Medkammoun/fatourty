import { useTranslation } from 'react-i18next'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
    const { t } = useTranslation()

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">

            <div className="relative z-10 container mx-auto container-padding text-center">
                <div className="max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {t('hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('#cta')}
                            className="group px-8 py-4 rounded-lg bg-gradient-primary text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            {t('hero.cta_demo')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={() => scrollToSection('#features')}
                            className="group px-8 py-4 rounded-lg glass text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                        >
                            <Play className="w-5 h-5" />
                            {t('hero.cta_learn')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
                    <div className="w-1 h-3 rounded-full bg-white/50"></div>
                </div>
            </div>
        </section>
    )
}
