import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companyProfile } from "@/lib/edpSiteContent";

type EnquiryFormSectionProps = {
  pageName: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  className?: string;
};

const formAction = "https://formspree.io/f/mgorzben";

export default function EnquiryFormSection({
  pageName,
  eyebrow = "Project Enquiry",
  title = "Start your enquiry with EDP.",
  intro = "Use the form below to discuss product selection, stockholding, finishes, technical questions, or project support. Messages are sent directly to the EDP mailbox for follow-up.",
  className = "",
}: EnquiryFormSectionProps) {
  return (
    <section id="enquiry-form" className={`border-t border-white/8 py-24 sm:py-28 ${className}`.trim()}>
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:p-12">
          <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">{eyebrow}</p>
          <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl leading-[0.96] font-light tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
            {title}
          </h2>
          <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#bbaf9c]">{intro}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 bg-[#13100e] p-5">
              <div className="flex items-center gap-3 text-[#dbc39f]">
                <Mail className="h-5 w-5" />
                <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Mailbox</p>
              </div>
              <p className="mt-4 font-[Cormorant_Garamond] text-3xl text-[#f5eee4]">Direct Enquiry</p>
              <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">kevin@mail.edphandles.com</p>
            </div>
            <div className="border border-white/10 bg-[#13100e] p-5">
              <div className="flex items-center gap-3 text-[#dbc39f]">
                <PhoneCall className="h-5 w-5" />
                <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Call EDP</p>
              </div>
              <p className="mt-4 font-[Cormorant_Garamond] text-3xl text-[#f5eee4]">Trade Support</p>
              <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">{companyProfile.phoneLabel}</p>
            </div>
          </div>
        </div>

        <div className="border border-white/10 bg-[#12100e] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#a78e68]">Contact Us</p>
            <h3 className="mt-4 font-[Cormorant_Garamond] text-4xl font-light tracking-[-0.03em] text-[#f5eee4] sm:text-5xl">
              Enquiry Form
            </h3>
          </div>

          <form action={formAction} method="POST" className="grid gap-5">
            <input type="hidden" name="source_page" value={pageName} />
            <input type="hidden" name="mailbox" value="kevin@mail.edphandles.com" />
            <input type="hidden" name="_subject" value={`EDP website enquiry — ${pageName}`} />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Your name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="min-h-14 rounded-none border border-white/10 bg-white/[0.03] px-4 font-[Manrope] text-sm text-[#f5eee2] outline-none transition placeholder:text-[#7f725e] focus:border-[#c6a66b]/60"
                  placeholder="Name"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Your email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="min-h-14 rounded-none border border-white/10 bg-white/[0.03] px-4 font-[Manrope] text-sm text-[#f5eee2] outline-none transition placeholder:text-[#7f725e] focus:border-[#c6a66b]/60"
                  placeholder="Email address"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Company</span>
                <input
                  type="text"
                  name="company"
                  className="min-h-14 rounded-none border border-white/10 bg-white/[0.03] px-4 font-[Manrope] text-sm text-[#f5eee2] outline-none transition placeholder:text-[#7f725e] focus:border-[#c6a66b]/60"
                  placeholder="Company name"
                />
              </label>

              <label className="grid gap-2">
                <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Trade or consumer</span>
                <select
                  name="customer_type"
                  defaultValue=""
                  required
                  className="min-h-14 rounded-none border border-white/10 bg-[#12100e] px-4 font-[Manrope] text-sm text-[#f5eee2] outline-none transition focus:border-[#c6a66b]/60"
                >
                  <option value="" disabled>
                    Select type
                  </option>
                  <option value="Trade">Trade</option>
                  <option value="Consumer">Consumer</option>
                </select>
              </label>
            </div>

            <label className="grid gap-2">
              <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Project focus</span>
              <select
                name="project_focus"
                defaultValue=""
                className="min-h-14 rounded-none border border-white/10 bg-[#12100e] px-4 font-[Manrope] text-sm text-[#f5eee2] outline-none transition focus:border-[#c6a66b]/60"
              >
                <option value="" disabled>
                  Select focus
                </option>
                <option value="Handles">Handles</option>
                <option value="Internal Fittings">Internal Fittings</option>
                <option value="Trade Support">Trade Support</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Message</span>
              <textarea
                name="message"
                required
                rows={7}
                className="rounded-none border border-white/10 bg-white/[0.03] px-4 py-4 font-[Manrope] text-sm leading-7 text-[#f5eee2] outline-none transition placeholder:text-[#7f725e] focus:border-[#c6a66b]/60"
                placeholder="Tell us about the product, finish, project type, quantity, or support you need."
              />
            </label>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl font-[Manrope] text-sm leading-7 text-[#9f937f]">
                Messages from this form are sent through Formspree and routed to the EDP enquiry mailbox.
              </p>
              <Button
                type="submit"
                className="group rounded-none border border-[#c6a66b]/40 bg-[#f6f0e6] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#d8c2a0]"
              >
                Send Enquiry
                <ArrowRight className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
