import { useTranslation } from 'react-i18next'
import { Database, TrendingUp, MessageSquare, PackageCheck } from 'lucide-react'

export function SupplierManagement() {
    const { t } = useTranslation()

    const features = [
        { icon: Database, key: 'feature1' },
        { icon: PackageCheck, key: 'feature2' },
        { icon: TrendingUp, key: 'feature3' },
        { icon: MessageSquare, key: 'feature4' },
    ]

    return (
        <section id="suppliers" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            {t('supplier_section.title')}
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            {t('supplier_section.subtitle')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div
                                        key={feature.key}
                                        className="text-center p-6 rounded-xl glass hover:bg-white/20 hover-lift transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="font-semibold">{t(`supplier_section.${feature.key}`)}</h3>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-accent blur-3xl opacity-20 rounded-3xl"></div>
                            <div className="relative glass p-8 rounded-3xl">
                                <div className="grid grid-cols-2 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="p-6 bg-white/10 rounded-xl text-center">
                                            <div className="text-3xl font-bold mb-2">{Math.floor(Math.random() * 50 + 20)}</div>
                                            <div className="text-sm text-white/60">Suppliers</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
