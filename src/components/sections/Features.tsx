import { useTranslation } from 'react-i18next'
import { FileText, Package, Users, UserCheck, ShoppingCart } from 'lucide-react'

const features = [
    { icon: FileText, gradient: 'gradient-primary', key: 'einvoice' },
    { icon: Package, gradient: 'gradient-secondary', key: 'stock' },
    { icon: Users, gradient: 'gradient-accent', key: 'supplier' },
    { icon: UserCheck, gradient: 'gradient-hero', key: 'client' },
    { icon: ShoppingCart, gradient: 'gradient-primary', key: 'product' },
]

export function Features() {
    const { t } = useTranslation()

    return (
        <section id="features" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient-primary">
                        {t('features.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <div
                                key={feature.key}
                                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover-lift hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-16 h-16 rounded-xl ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">
                                    {t(`features.${feature.key}.title`)}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {t(`features.${feature.key}.description`)}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
