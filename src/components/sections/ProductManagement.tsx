import { useTranslation } from 'react-i18next'
import { ShoppingCart, DollarSign, Layers, Share2 } from 'lucide-react'

export function ProductManagement() {
    const { t } = useTranslation()

    const features = [
        { icon: ShoppingCart, key: 'feature1' },
        { icon: DollarSign, key: 'feature2' },
        { icon: Layers, key: 'feature3' },
        { icon: Share2, key: 'feature4' },
    ]

    return (
        <section id="products" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            {t('product_section.title')}
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            {t('product_section.subtitle')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <div
                                        key={feature.key}
                                        className="flex items-center gap-3 p-4 rounded-lg glass hover:bg-white/20 transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">{t(`product_section.${feature.key}`)}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
                            <div className="relative glass p-8 rounded-3xl">
                                <div className="grid grid-cols-3 gap-4">
                                    {[...Array(6)].map((_, i) => (
                                        <div key={i} className="aspect-square bg-white/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-white/20 transition-all duration-300 hover-lift">
                                            <ShoppingCart className="w-8 h-8 mb-2 text-white/60" />
                                            <div className="text-xs text-white/40">Product {i + 1}</div>
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
