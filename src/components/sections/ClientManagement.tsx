import { useTranslation } from 'react-i18next'
import { Users, History, Target, Link } from 'lucide-react'

export function ClientManagement() {
    const { t } = useTranslation()

    const features = [
        { icon: Users, key: 'feature1' },
        { icon: History, key: 'feature2' },
        { icon: Target, key: 'feature3' },
        { icon: Link, key: 'feature4' },
    ]

    return (
        <section id="clients" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 animate-slide-in-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-hero blur-3xl opacity-20 rounded-3xl"></div>
                            <div className="relative glass-dark p-8 rounded-3xl">
                                <div className="aspect-video bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-2xl flex items-center justify-center">
                                    <Users className="w-24 h-24 text-white/60" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 animate-slide-in-right">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-primary">
                            {t('client_section.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {t('client_section.subtitle')}
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div
                                        key={feature.key}
                                        className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover-lift transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="font-semibold text-lg">{t(`client_section.${feature.key}`)}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
