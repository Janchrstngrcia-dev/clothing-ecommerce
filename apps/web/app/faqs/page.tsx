"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { PremiumFooter } from "@/components/premium-footer"
import { Plus, Minus, MapPin, ShieldCheck, Truck, CreditCard } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    category: "2026 New Production",
    questions: [
      {
        q: "What defines the 2026 Collection's 'New Production' standard?",
        a: "Our 2026 initiative focuses on 'Slow Luxury.' Every piece now incorporates sustainable Filipino elements, such as hand-woven abaca linings and upcycled mother-of-pearl accents, ensuring a carbon-neutral footprint from Florence to Manila."
      },
      {
        q: "How do I verify the authenticity of my 2026 Maison piece?",
        a: "All 2026 items are embedded with a secure NFC thread. Simply tap your smartphone to the interior label to view your Digital Certificate of Authenticity and the artisan's journey."
      }
    ]
  },
  {
    category: "Logistics & Shipping",
    questions: [
      {
        q: "What are the delivery timelines for Provincial Philippines?",
        a: "We offer White-Glove delivery. Metro Manila orders arrive within 24 hours. For Cebu, Davao, and other provincial hubs, we partner with specialized luxury couriers to ensure delivery within 3–5 business days."
      },
      {
        q: "Do you offer 'Reserve & Try' in-store?",
        a: "Yes. Clients in Makati (Greenbelt) and BGC can reserve pieces online for a private viewing session at our physical ateliers."
      }
    ]
  },
  {
    category: "Payments & Security",
    questions: [
      {
        q: "Which local payment methods are accepted?",
        a: "We fully support GCash, Maya, and QRph. For high-tier purchases, we also offer 0% interest installment plans through our 2026 banking partners."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-serif text-5xl lg:text-7xl mb-6 text-white">Support & FAQ</h1>
          <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Navigating the 2026 New Production cycle. Our concierge team is here to assist with your journey across the archipelago.
          </p>
        </motion.div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((group, idx) => (
            <div key={idx} className="mb-16">
              <h2 className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 border-b pb-4">
                {group.category}
              </h2>
              <div className="space-y-4">
                {group.questions.map((faq, fIdx) => (
                  <FAQItem key={fIdx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Grid */}
      <section className="bg-muted py-24 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <MapPin className="h-6 w-6 mx-auto mb-4 text-primary" />
            <h3 className="font-serif text-xl mb-2">Visit Ateliers</h3>
            <p className="text-sm text-muted-foreground">Greenbelt 5, Makati<br/>Central Square, BGC</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="h-6 w-6 mx-auto mb-4 text-primary" />
            <h3 className="font-serif text-xl mb-2">24/7 Concierge</h3>
            <p className="text-sm text-muted-foreground">Expert assistance via<br/>WhatsApp or Apple Business Chat</p>
          </div>
          <div className="text-center">
            <Truck className="h-6 w-6 mx-auto mb-4 text-primary" />
            <h3 className="font-serif text-xl mb-2">Island Shipping</h3>
            <p className="text-sm text-muted-foreground">Secure, insured transit<br/>to all 7,641 islands</p>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-border/50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="font-serif text-lg pr-8">{question}</span>
        {isOpen ? <Minus className="h-4 w-4 shrink-0" /> : <Plus className="h-4 w-4 shrink-0" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pb-8 text-muted-foreground leading-relaxed text-sm md:text-base"
        >
          {answer}
        </motion.div>
      )}
    </div>
  )
}