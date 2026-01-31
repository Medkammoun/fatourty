import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'
import { getDirection } from '@/lib/utils'
import { useEffect } from 'react'

interface Language {
    code: string
    name: string
    flag: string
}

const languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇹🇳' },
]

export function LanguageSwitcher() {
    const { i18n } = useTranslation()

    useEffect(() => {
        // Update document direction when language changes
        const direction = getDirection(i18n.language)
        document.documentElement.dir = direction
        document.documentElement.lang = i18n.language
    }, [i18n.language])

    const changeLanguage = (langCode: string) => {
        i18n.changeLanguage(langCode)
    }

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

    return (
        <div className="relative group">
            <button
                className="flex items-center gap-2 px-3 py-2 rounded-lg glass hover:bg-white/20 transition-all duration-300"
                aria-label="Change language"
            >
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage.flag}</span>
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 glass-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => changeLanguage(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${i18n.language === lang.code
                                    ? 'bg-white/20 text-white'
                                    : 'hover:bg-white/10 text-white/80 hover:text-white'
                                }`}
                        >
                            <span className="text-xl">{lang.flag}</span>
                            <span className="text-sm font-medium">{lang.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
