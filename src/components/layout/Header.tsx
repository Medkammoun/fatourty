import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { ThemeToggle } from '../ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
    const { t } = useTranslation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { key: 'home', href: '#hero' },
        { key: 'features', href: '#features' },
        { key: 'einvoice', href: '#einvoice' },
        { key: 'stock', href: '#stock' },
        { key: 'suppliers', href: '#suppliers' },
        { key: 'clients', href: '#clients' },
        { key: 'products', href: '#products' },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="container mx-auto container-padding">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#hero" className="text-xl font-bold text-gradient-primary">
                            Invoice<span className="text-white">Pro</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <button
                                key={item.key}
                                onClick={() => scrollToSection(item.href)}
                                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
                            >
                                {t(`nav.${item.key}`)}
                            </button>
                        ))}
                    </nav>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <LanguageSwitcher />
                        <button
                            onClick={() => scrollToSection('#cta')}
                            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-primary text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            {t('hero.cta_demo')}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="md:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.key}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-left text-sm font-medium text-white/80 hover:text-white transition-colors duration-200"
                                >
                                    {t(`nav.${item.key}`)}
                                </button>
                            ))}
                            <button
                                onClick={() => scrollToSection('#cta')}
                                className="mt-2 px-6 py-2 rounded-lg bg-gradient-primary text-white font-medium text-center"
                            >
                                {t('hero.cta_demo')}
                            </button>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
