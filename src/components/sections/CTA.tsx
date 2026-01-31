import { useTranslation } from 'react-i18next'
import { Sparkles } from 'lucide-react'

export function CTA() {
    const { t } = useTranslation()

    return (
        <section id="cta" className="section-padding bg-transparent relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto container-padding relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass mb-8 animate-fade-in">
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span className="font-medium">Limited Time Offer</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
                        {t('cta.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up">
                        {t('cta.subtitle')}
                    </p>

                    <button className="group px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-scale-in">
                        {t('cta.button')}
                        <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
                            →
                        </span>
                    </button>

                    <p className="mt-6 text-sm text-white/60">
                        No credit card required • Start in 2 minutes • Cancel anytime
                    </p>
                </div>
            </div>
        </section>
    )
}
