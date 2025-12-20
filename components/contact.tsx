"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle, XCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "munizzvr@gmail.com",
    href: "mailto:munizzvr@gmail.com",
  },
  {
    icon: Phone,
    label: "(11) 91409-8185",
    href: "tel:+5511914098185",
  },
  {
    icon: Instagram,
    label: "@victor_munizdv",
    href: "https://instagram.com/victor_munizdv",
  },
  {
    icon: MapPin,
    label: "São Paulo, Brasil",
    href: null,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const API_KEY = "md_GGNgwcSGfin7PPWwKHVC32iXIJMfWI9d"
  const API_URL = "https://xmxztyhaixpotceolrze.supabase.co/functions/v1/send-email"
  const RECIPIENT_EMAIL = "munizzvr@gmail.com"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const emailBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #9333ea; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="margin: 0;">Nova Mensagem do Portfólio</h2>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px;">
            <p style="margin: 0 0 15px 0;"><strong>Nome:</strong> ${formData.name}</p>
            <p style="margin: 0 0 15px 0;"><strong>Email:</strong> ${formData.email}</p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e5e5;">
              <p style="margin: 0 0 10px 0;"><strong>Mensagem:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
            </div>
          </div>
          <div style="margin-top: 20px; text-align: center; color: #666; font-size: 12px;">
            <p style="margin: 0;">Esta mensagem foi enviada através do formulário de contato do portfólio.</p>
          </div>
        </div>
      `

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: RECIPIENT_EMAIL,
          subject: `Nova Mensagem de ${formData.name} - Portfólio`,
          body: emailBody,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || `Erro ${response.status}: ${response.statusText}`)
      }

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        throw new Error(data.message || "Erro ao enviar mensagem")
      }
    } catch (error) {
      console.error("Erro ao enviar email:", error)
      setSubmitStatus("error")
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente pelo email."
      )
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="px-4 py-16 md:px-6 md:py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          <motion.div
            className="space-y-3 md:space-y-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 md:gap-3">
              <span className="text-purple-400 text-xl md:text-2xl">✦</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">Entre em Contato</h2>
            </div>
            <p className="text-lg md:text-xl text-white/60">Vamos Conversar</p>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto text-pretty">
              Pronto para transformar suas ideias em realidade digital? Entre em contato.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:bg-white/10 group"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                          <info.icon className="h-5 w-5 text-purple-400" />
                        </div>
                        <span className="text-sm md:text-base text-white/80 group-hover:text-purple-400 transition-colors">
                          {info.label}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="p-2 rounded-lg bg-purple-500/20">
                          <info.icon className="h-5 w-5 text-purple-400" />
                        </div>
                        <span className="text-sm md:text-base text-white/80">{info.label}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-400/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-400/50"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-400/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Enviado com Sucesso!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                {/* Success Message */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 flex items-center gap-2"
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm">
                        Mensagem enviada com sucesso! Entrarei em contato em breve.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Error Message */}
                <AnimatePresence>
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300 flex items-start gap-2"
                    >
                      <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm font-semibold mb-1">Erro ao enviar mensagem</p>
                        <p className="text-xs text-red-300/80">{errorMessage}</p>
                        <p className="text-xs text-red-300/60 mt-2">
                          Você também pode entrar em contato diretamente pelo email:{" "}
                          <a href="mailto:munizzvr@gmail.com" className="underline hover:text-red-200">
                            munizzvr@gmail.com
                          </a>
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};
