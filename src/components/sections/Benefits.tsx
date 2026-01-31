import { useTranslation } from 'react-i18next'
import { Clock, TrendingDown, Shield, Headphones } from 'lucide-react'

export function Benefits() {
    const { t } = useTranslation()

    const benefits = [
        { icon: Clock, key: 'save_time', gradient: 'gradient-primary' },
        { icon: TrendingDown, key: 'reduce_cost', gradient: 'gradient-secondary' },
        { icon: Shield, key: 'compliance', gradient: 'gradient-accent' },
        { icon: Headphones, key: 'support', gradient: 'gradient-hero' },
    ]

    return (
        <section id="benefits" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary">
                        {t('benefits.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('benefits.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <div
                                key={benefit.key}
                                className="text-center p-8 rounded-2xl border border-border hover:border-primary/50 hover-lift hover:shadow-xl transition-all duration-300 animate-scale-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-20 h-20 rounded-2xl ${benefit.gradient} flex items-center justify-center mx-auto mb-6 animate-float`}>
                                    <Icon className="w-10 h-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{t(`benefits.${benefit.key}`)}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
