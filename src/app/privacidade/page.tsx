import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE,
  SITE_URL,
} from "@/config/site";

export const metadata: Metadata = {
  title: `Política de Privacidade – ${SITE.name}`,
  description:
    "Como a Íntegra Odontologia trata seus dados pessoais, em conformidade com a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade/" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Quem é o controlador",
    body: [
      `O controlador dos dados pessoais tratados neste site é ${SITE.name}, clínica odontológica com sede em ${ADDRESS_LINE}, ${ADDRESS_CITY}.`,
      "Dúvidas sobre privacidade podem ser encaminhadas pelos canais de contato indicados no rodapé desta página.",
    ],
  },
  {
    title: "2. Que dados este site coleta",
    body: [
      "Este site é estático: não utiliza banco de dados, cookies de rastreamento, pixel de redes sociais ou ferramentas de analytics.",
      "O formulário de contato coleta apenas os campos que você preenche — nome, telefone, e-mail (opcional), tratamento de interesse e mensagem.",
      "Nenhum dado digitado no formulário é enviado a nossos servidores nem armazenado: ao enviar, o site abre o aplicativo WhatsApp no seu próprio dispositivo com a mensagem já preenchida. O conteúdo da conversa passa a ser tratado pelo WhatsApp.",
    ],
  },
  {
    title: "3. Como seus dados são usados",
    body: [
      "As informações são usadas exclusivamente para responder ao seu pedido de agendamento, esclarecer dúvidas sobre tratamentos e entrar em contato com você sobre a consulta.",
      "A base legal para o tratamento é o seu consentimento (art. 7º, I, da Lei 13.709/2018), manifestado ao preencher o formulário e iniciar a conversa.",
    ],
  },
  {
    title: "4. Compartilhamento e encarregado (DPO)",
    body: [
      "Os dados são compartilhados apenas com a plataforma WhatsApp (Meta Platforms), que processa a mensagem conforme a própria política de privacidade.",
      "Não vendemos, alugamos nem cedemos seus dados a terceiros para finalidades de marketing.",
      "O encarregado pelo tratamento de dados (DPO) pode ser contatado pelos mesmos canais de contato da clínica.",
    ],
  },
  {
    title: "5. Cookies e tecnologias semelhantes",
    body: [
      "Este site não instala cookies próprios de publicidade ou análise. O WhatsApp, ao ser aberto, aplica a sua própria política de cookies.",
    ],
  },
  {
    title: "6. Retenção",
    body: [
      "Como não armazenamos dados neste site, não há retenção por parte do site. As informações mantidas na conversa do WhatsApp seguem a política de retenção da plataforma e os prazos necessários ao atendimento e à documentação clínica.",
    ],
  },
  {
    title: "7. Seus direitos (art. 18 da LGPD)",
    body: [
      "Você pode solicitar confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou desatualizados, anonimização, portabilidade, eliminação dos dados desnecessários e revogação do consentimento.",
      "Basta se manifestar pelos canais de contato da clínica; responderemos dentro dos prazos legais.",
    ],
  },
  {
    title: "8. Segurança e menores",
    body: [
      "Adotamos medidas técnicas e organizacionais compatíveis com a natureza do serviço. Este site não é direcionado a crianças e adolescentes; solicitações de agendamento para menores devem ser feitas por responsável legal.",
    ],
  },
  {
    title: "9. Alterações nesta política",
    body: [
      "Esta política pode ser atualizada sempre que houver mudança nos serviços ou na legislação. A versão vigente é sempre esta página.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <main id="conteudo" className="bg-surface-alt min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-brand font-semibold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Voltar para o site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-2">
          Política de Privacidade
        </h1>
        <p className="text-sm text-muted mb-10">
          Última atualização: {new Date().toLocaleDateString("pt-BR")} · Em
          conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018).
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-ink mb-2">{s.title}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="text-sm text-body leading-relaxed mb-2">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl bg-white border border-rose-100 p-6">
          <h2 className="text-lg font-bold text-ink mb-2">
            Fale conosco sobre privacidade
          </h2>
          <p className="text-sm text-body">
            Para exercer seus direitos ou tirar dúvidas:
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-brand font-semibold hover:underline ml-1"
            >
              {PHONE_DISPLAY}
            </a>
            {" · "}
            <a
              href={`${SITE_URL}/#contato`}
              className="text-brand font-semibold hover:underline"
            >
              formulário de contato
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-muted mt-8">
          Ao usar este site você concorda com os termos aqui descritos.
        </p>
      </div>
    </main>
  );
}
