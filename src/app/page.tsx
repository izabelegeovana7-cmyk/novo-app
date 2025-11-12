"use client"

import { Button } from "@/components/ui/button"
import { Apple, Play, CheckCircle2, Dumbbell, Target, TrendingUp, Users, Star, Shield, CreditCard, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Pessoa treinando"
            fill
            className="object-cover opacity-40 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/60 to-[#0B0B0B]" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-8">
            {/* Logo/Brand */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-4 rounded-2xl">
                <Dumbbell className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Transforme seu corpo.<br />
              <span className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] bg-clip-text text-transparent">
                Eleve sua mente.
              </span><br />
              Tudo começa com o Flittly.
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
              Treinos personalizados, progresso real e uma rotina que se adapta a você.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#FF7B10] hover:to-[#FF9C10] text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[#FF6B00]/50 transition-all duration-300 hover:scale-105">
                <Apple className="w-6 h-6 mr-2" />
                Baixar na App Store
              </Button>
              <Button className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#FF7B10] hover:to-[#FF9C10] text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-[#FF6B00]/50 transition-all duration-300 hover:scale-105">
                <Play className="w-6 h-6 mr-2" />
                Baixar no Google Play
              </Button>
            </div>

            <div className="pt-4">
              <a 
                href="https://invoice.infinitepay.io/plans/infinit-flittly/1ejDBEEkN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white hover:bg-gray-100 text-[#0B0B0B] font-bold text-lg px-12 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105">
                  Assinar por R$14,90/mês
                </Button>
              </a>
            </div>

            {/* App Mockup */}
            <div className="pt-12">
              <div className="relative w-full max-w-sm mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=800&fit=crop"
                  alt="Mockup do app Flittly"
                  width={400}
                  height={800}
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefício 1 */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#0B0B0B] hover:bg-[#252525] transition-all duration-300 hover:scale-105">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-4 rounded-2xl">
                  <Dumbbell className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Treinos Personalizados</h3>
              <p className="text-gray-400">Planos sob medida para o seu objetivo.</p>
            </div>

            {/* Benefício 2 */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#0B0B0B] hover:bg-[#252525] transition-all duration-300 hover:scale-105">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-4 rounded-2xl">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Resultados Reais</h3>
              <p className="text-gray-400">Acompanhe evolução com gráficos e métricas.</p>
            </div>

            {/* Benefício 3 */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#0B0B0B] hover:bg-[#252525] transition-all duration-300 hover:scale-105">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-4 rounded-2xl">
                  <Target className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Disciplina e Motivação</h3>
              <p className="text-gray-400">Desafios e lembretes inteligentes.</p>
            </div>

            {/* Benefício 4 */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#0B0B0B] hover:bg-[#252525] transition-all duration-300 hover:scale-105">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-4 rounded-2xl">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Comunidade Flittly</h3>
              <p className="text-gray-400">Inspire-se e compartilhe conquistas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-400">Simples, rápido e eficaz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Passo 1 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Escolha seu objetivo</h3>
              <p className="text-gray-400">Ganhar massa, perder peso, definir ou condicionar.</p>
            </div>

            {/* Passo 2 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Siga os treinos personalizados</h3>
              <p className="text-gray-400">Planos adaptados ao seu nível e rotina.</p>
            </div>

            {/* Passo 3 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">Veja sua transformação acontecer</h3>
              <p className="text-gray-400">Resultados reais em semanas.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://invoice.infinitepay.io/plans/infinit-flittly/1ejDBEEkN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] hover:from-[#FF7B10] hover:to-[#FF9C10] text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-[#FF6B00]/50 transition-all duration-300 hover:scale-105">
                Comece hoje mesmo — e sinta a diferença em 7 dias!
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0B0B0B] mb-4">O que dizem nossos usuários</h2>
            <div className="flex items-center justify-center gap-2 text-[#FF6B00] mb-2">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <p className="text-xl text-gray-600">+50.000 usuários ativos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "Em 2 meses com o Flittly, perdi 6kg e ganhei confiança. Nunca imaginei que treinar pudesse ser tão motivador!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div>
                  <p className="font-bold text-[#0B0B0B]">Rafa</p>
                  <p className="text-sm text-gray-600">29 anos</p>
                </div>
              </div>
            </div>

            {/* Depoimento 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2 text-[#FF6B00] mb-4">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                "A melhor experiência de treino que já tive. Os treinos são desafiadores mas alcançáveis. Recomendo!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div>
                  <p className="font-bold text-[#0B0B0B]">Lucas</p>
                  <p className="text-sm text-gray-600">41 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços - APENAS PLANO PRO */}
      <section className="py-20 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Plano Flittly PRO</h2>
            <p className="text-xl text-gray-400">Acesso completo a todos os recursos</p>
          </div>

          <div className="max-w-md mx-auto">
            {/* Plano PRO (Único) */}
            <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <div className="bg-white text-[#FF6B00] px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  MAIS POPULAR
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Flittly PRO</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">R$14,90</span>
                  <span className="text-white/80 text-xl">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Acesso completo a todos os treinos</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Vídeos demonstrativos em HD</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Relatórios de evolução e métricas</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Comunidade exclusiva Flittly</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">Suporte via chat</span>
                </li>
              </ul>
              
              <a 
                href="https://invoice.infinitepay.io/plans/infinit-flittly/1ejDBEEkN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-white hover:bg-gray-100 text-[#FF6B00] font-bold text-lg py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Quero começar agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-4 rounded-2xl">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Satisfação garantida ou seu dinheiro de volta em até 7 dias
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Experimente sem riscos. Se não gostar, devolvemos 100% do seu investimento.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center gap-2 text-gray-300">
              <CreditCard className="w-6 h-6 text-[#FF6B00]" />
              <span>Pix</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CreditCard className="w-6 h-6 text-[#FF6B00]" />
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CreditCard className="w-6 h-6 text-[#FF6B00]" />
              <span>Google Pay</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <CreditCard className="w-6 h-6 text-[#FF6B00]" />
              <span>Apple Pay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0B0B] py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Slogan */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-3 rounded-xl">
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Flittly</span>
              </div>
              <p className="text-gray-400 text-sm">
                Seu corpo em movimento, sua mente em evolução.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>

            {/* Download */}
            <div>
              <h3 className="text-white font-bold mb-4">Baixe o App</h3>
              <div className="space-y-3">
                <Button className="w-full bg-white hover:bg-gray-100 text-[#0B0B0B] font-semibold justify-start">
                  <Apple className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button className="w-full bg-white hover:bg-gray-100 text-[#0B0B0B] font-semibold justify-start">
                  <Play className="w-5 h-5 mr-2" />
                  Google Play
                </Button>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-white font-bold mb-4">Redes Sociais</h3>
              <div className="flex gap-3">
                <a href="#" className="bg-[#1A1A1A] hover:bg-[#FF6B00] p-3 rounded-full transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-[#1A1A1A] hover:bg-[#FF6B00] p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#1A1A1A] hover:bg-[#FF6B00] p-3 rounded-full transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Flittly. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
