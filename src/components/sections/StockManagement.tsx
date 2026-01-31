import { useTranslation } from 'react-i18next'
import { BarChart3, Bell, Building2, FileSpreadsheet } from 'lucide-react'

export function StockManagement() {
    const { t } = useTranslation()

    const features = [
        { icon: BarChart3, key: 'feature1' },
        { icon: Bell, key: 'feature2' },
        { icon: Building2, key: 'feature3' },
        { icon: FileSpreadsheet, key: 'feature4' },
    ]

    return (
        <section id="stock" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 animate-slide-in-left">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-secondary blur-3xl opacity-20 rounded-3xl"></div>
                            <div className="relative glass-dark p-8 rounded-3xl">
                                <div className="space-y-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                                            <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center">
                                                <BarChart3 className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-secondary rounded-full"
                                                        style={{ width: `${Math.random() * 40 + 60}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 animate-slide-in-right">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient-secondary">
                            {t('stock_section.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            {t('stock_section.subtitle')}
                        </p>
                        <div className="space-y-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div
                                        key={feature.key}
                                        className="flex items-start gap-4 group"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg mb-1">{t(`stock_section.${feature.key}`)}</h3>
                                        </div>
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
