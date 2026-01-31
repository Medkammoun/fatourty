import { useTranslation } from 'react-i18next'
import { Check, Shield, FileCheck, Archive } from 'lucide-react'

export function EInvoiceOverview() {
    const { t } = useTranslation()

    const benefits = [
        { icon: Check, key: 'benefit1' },
        { icon: Shield, key: 'benefit2' },
        { icon: FileCheck, key: 'benefit3' },
        { icon: Archive, key: 'benefit4' },
    ]

    return (
        <section id="einvoice" className="section-padding bg-transparent">
            <div className="container mx-auto container-padding">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-slide-in-left">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            {t('einvoice_section.title')}
                        </h2>
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                            {t('einvoice_section.subtitle')}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <div
                                        key={benefit.key}
                                        className="flex items-center gap-3 p-4 rounded-lg glass hover:bg-white/20 transition-all duration-300"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">{t(`einvoice_section.${benefit.key}`)}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="animate-slide-in-right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-20 rounded-3xl"></div>
                            <div className="relative glass p-8 rounded-3xl">
                                <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-2xl flex items-center justify-center">
                                    <FileCheck className="w-24 h-24 text-white/60" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
