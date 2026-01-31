import { useTranslation } from 'react-i18next'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export function Footer() {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background/80 backdrop-blur-md border-t border-border/50">
            <div className="container mx-auto container-padding section-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-gradient-primary mb-4">
                            Invoice<span className="text-white">Pro</span>
                        </div>
                        <p className="text-white/60 mb-4 max-w-md">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">{t('features.title')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#einvoice" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('nav.einvoice')}
                                </a>
                            </li>
                            <li>
                                <a href="#stock" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('nav.stock')}
                                </a>
                            </li>
                            <li>
                                <a href="#suppliers" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('nav.suppliers')}
                                </a>
                            </li>
                            <li>
                                <a href="#clients" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('nav.clients')}
                                </a>
                            </li>
                            <li>
                                <a href="#products" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('nav.products')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">{t('footer.about')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('footer.about')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('nav.contact')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('footer.privacy')}
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                                    {t('footer.terms')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-white/60 text-sm">
                        © {currentYear} InvoicePro. {t('footer.copyright')}.
                    </p>
                </div>
            </div>
        </footer>
    )
}
