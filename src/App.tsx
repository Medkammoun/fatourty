import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { EInvoiceOverview } from './components/sections/EInvoiceOverview'
import { StockManagement } from './components/sections/StockManagement'
import { SupplierManagement } from './components/sections/SupplierManagement'
import { ClientManagement } from './components/sections/ClientManagement'
import { ProductManagement } from './components/sections/ProductManagement'
import { Benefits } from './components/sections/Benefits'
import { CTA } from './components/sections/CTA'
import { GlobalBackground } from './components/three/GlobalBackground'

function App() {
  return (
    <div className="min-h-screen relative">
      <GlobalBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <EInvoiceOverview />
        <StockManagement />
        <SupplierManagement />
        <ClientManagement />
        <ProductManagement />
        <Benefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
