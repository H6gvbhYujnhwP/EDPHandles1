/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Keep the TELA page dark, architectural, and premium.
Use full-width storytelling, refined typography, and restrained gold accents.
The download flow must feel identical in quality to the Walldrobe modal, with a clean success state after submission.
*/
import { ArrowRight, CheckCircle2, Download, Layers3, ShieldCheck, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { companyProfile } from "@/lib/edpSiteContent";

const catalogueDownloadAction = "https://formspree.io/f/mgorzben";
const catalogueDownloadFile = "/catalogues/tela-glass-doors-systems.pdf";
const catalogueDownloadName = "TELA Glass Doors Systems Catalogue";

type DownloadState = "idle" | "submitting" | "success" | "error";

type HighlightItem = {
  title: string;
  text: string;
  icon: typeof Sparkles;
};

type ComponentItem = {
  name: string;
  description: string;
};

const telaHighlights: HighlightItem[] = [
  {
    title: "Soft Edges",
    text:
      "A refined profile geometry designed to create visual and tactile softness, giving glass-door compositions a calm, high-end character.",
    icon: Sparkles,
  },
  {
    title: "Easy Assembly",
    text:
      "The frame assembles simply by bringing the four aluminium profiles together with the dedicated corner pieces, supporting efficient fabrication without compromising precision.",
    icon: CheckCircle2,
  },
  {
    title: "Made-to-Measure Modularity",
    text:
      "Because the system is processed from bar lengths, TELA supports custom dimensions and flexible design responses across wardrobes, kitchens, and fitted furniture.",
    icon: Layers3,
  },
  {
    title: "Recyclable Construction",
    text:
      "The system is designed for straightforward disassembly, helping with component replacement, correct material separation, and aluminium recycling.",
    icon: ShieldCheck,
  },
];

const telaComponents: ComponentItem[] = [
  {
    name: "Frame Profile",
    description:
      "The aluminium frame profile forms the main structure of the door and is designed to receive a 4mm glass or panel insert.",
  },
  {
    name: "Handle Profile",
    description:
      "A dedicated profile integrates the handle into the frame and makes opening and closing feel effortless and architecturally clean.",
  },
  {
    name: "Angle Brackets RH/LH",
    description:
      "Zamak angle brackets provide solidity, soften the corner transitions, and include the seating for the hinge where required.",
  },
  {
    name: "Handle End Caps",
    description:
      "End caps complete the handle profile when it is cut in finish, keeping the door composition resolved and production-ready.",
  },
  {
    name: "Buffers & 4mm Gasket",
    description:
      "PVC buffers help create a quieter closing action, while the dedicated gasket supports the 4mm glass insert specification.",
  },
];

function startCatalogueDownload() {
  const link = document.createElement("a");
  link.href = catalogueDownloadFile;
  link.download = "TELA-Glass-Doors-Systems.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function TelaGlassDoorsSystems() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [downloadName, setDownloadName] = useState("");
  const [downloadEmail, setDownloadEmail] = useState("");
  const [downloadState, setDownloadState] = useState<DownloadState>("idle");
  const [downloadMessage, setDownloadMessage] = useState("");

  useEffect(() => {
    if (!downloadModalOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && downloadState !== "submitting") {
        setDownloadModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [downloadModalOpen, downloadState]);

  function openDownloadModal() {
    setDownloadMessage("");
    setDownloadState("idle");
    setDownloadModalOpen(true);
  }

  function closeDownloadModal() {
    if (downloadState === "submitting") {
      return;
    }

    setDownloadModalOpen(false);
  }

  async function handleCatalogueRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = downloadName.trim();
    const trimmedEmail = downloadEmail.trim();

    if (!trimmedName || !trimmedEmail) {
      setDownloadState("error");
      setDownloadMessage("Please enter your name and email address before downloading the catalogue.");
      return;
    }

    setDownloadState("submitting");
    setDownloadMessage("");

    const formData = new FormData();
    formData.append("name", trimmedName);
    formData.append("email", trimmedEmail);
    formData.append("_replyto", trimmedEmail);
    formData.append("source_page", "TELA Glass Doors Systems");
    formData.append("request_type", "Catalogue Download");
    formData.append("catalogue_name", catalogueDownloadName);
    formData.append("catalogue_file", "tela-glass-doors-systems.pdf");
    formData.append(
      "message",
      `${trimmedName} requested the ${catalogueDownloadName}. Please follow up if needed.`
    );
    formData.append("_subject", "EDP catalogue download — TELA Glass Doors Systems");

    try {
      const response = await fetch(catalogueDownloadAction, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Catalogue request failed with status ${response.status}`);
      }

      startCatalogueDownload();
      setDownloadState("success");
      setDownloadMessage("Thank you — your TELA catalogue download has started");
      setDownloadName("");
      setDownloadEmail("");
    } catch (error) {
      console.error("TELA catalogue download submission failed", error);
      setDownloadState("error");
      setDownloadMessage(
        "Sorry, there was a problem sending your details. Please try again or contact EDP directly."
      );
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#090807]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_25%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.05),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_34%)]" />

      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/8 py-20 sm:py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1fr_1.02fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">
                TELA Glass Doors Systems
              </p>
              <h1 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-6xl font-light leading-[0.92] tracking-[-0.04em] text-[#f5efe5] sm:text-7xl">
                Aluminium-framed glass doors for refined furniture architecture.
              </h1>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                TELA is a versatile, made-to-measure system designed for elegant kitchen, living, and fitted-furniture
                compositions. Built from precision aluminium profiles and dedicated corner components, it brings together
                clean visual lines, practical assembly, and a premium contemporary feel.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="group w-full rounded-none border border-[#d7be92]/45 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#f2e6d1] transition hover:border-[#d7be92] hover:bg-[#d7be92]/10 sm:w-auto"
                >
                  <a href="/contact">
                    Discuss a Project
                    <ArrowRight className="ml-3 h-4 w-4 transition duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  type="button"
                  onClick={openDownloadModal}
                  className="w-full rounded-none border border-white/14 bg-white/6 px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/12 sm:w-auto"
                >
                  Download TELA Catalogue
                </Button>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-6 hidden border border-[#b08d57]/20 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100e] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/tela/tela-hero.jpg"
                  alt="TELA aluminium-framed glass doors integrated into a premium kitchen composition"
                  className="h-[28rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[36rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">System Description</p>
              <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                Built around precision profiles and crafted assembly.
              </h2>
            </div>
            <div className="space-y-6 font-[Manrope] text-base leading-8 text-[#aa9b85]">
              <p>
                The TELA system is composed of two aluminium profiles, one of which can integrate the handle profile,
                together with four zamak corners that give the frame stability and softer edge definition. The structure
                is designed to accept a 4mm glass or panel insert, making it suitable for contemporary door compositions
                that demand both sharp detailing and practical flexibility.
              </p>
              <p>
                Because the profiles are processed from bar lengths, the system lends itself to made-to-measure working,
                helping artisans, manufacturers, and distributors build tailored solutions with reliable consistency.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02] py-24 sm:py-28">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Highlights</p>
                <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                  Four reasons TELA fits premium modern interiors.
                </h2>
              </div>
              <p className="max-w-2xl font-[Manrope] text-base leading-8 text-[#a89983] lg:justify-self-end">
                The catalogue positions TELA as a modern, refined, and highly adaptable system. These characteristics
                translate especially well into design-led projects where appearance, build quality, and specification
                flexibility all matter.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {telaHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border border-white/10 bg-[#12100e] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#b08d57]/40"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b08d57]/30 bg-[#b08d57]/10 text-[#f0dfbf]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 font-[Cormorant_Garamond] text-3xl leading-none text-[#f5eee2]">
                      {item.title}
                    </h3>
                    <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
              <img
                src="/images/tela/tela-detail.jpg"
                alt="Close-up of the TELA handle profile integrated into a dark-framed glass door"
                className="h-[32rem] w-full rounded-[1.5rem] object-cover object-center"
              />
            </div>
            <div>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Components</p>
              <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                A system designed from the frame outward.
              </h2>
              <div className="mt-10 grid gap-4">
                {telaComponents.map((item) => (
                  <article
                    key={item.name}
                    className="border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-[#b08d57]/35"
                  >
                    <h3 className="font-[Cormorant_Garamond] text-3xl text-[#f5eee2]">{item.name}</h3>
                    <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#a89983]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <EnquiryFormSection
          pageName="TELA Glass Doors Systems"
          eyebrow="TELA Enquiry"
          title="Discuss framed glass-door systems for your next project."
          intro="Use the form to discuss TELA sizing, glass-door configurations, finish coordination, and specification support for kitchens, wardrobes, and fitted furniture."
        />

        <section className="border-t border-white/8 py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-8 sm:p-10 lg:p-14">
              <img
                src="/images/tela/tela-lifestyle.jpg"
                alt="TELA glass-door modules used in a warm residential shelving composition"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,8,7,0.94),rgba(10,8,7,0.78)_55%,rgba(10,8,7,0.9))]" />
              <div className="relative max-w-2xl">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Applications</p>
                <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                  A refined solution for elegant and minimalist interiors.
                </h2>
                <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                  The extracted catalogue copy positions TELA as a versatile and modern answer for any environment,
                  especially where designers want lightweight visual framing, clean opening lines, and a configurable
                  system that can be adapted to bespoke furniture compositions.
                </p>
                <p className="mt-6 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                  EDP supports design studios, joinery businesses, and specification-led projects with practical product
                  guidance, UK market support, and access to premium Cosma systems through a dependable trade-focused
                  service structure.
                </p>
              </div>
            </div>

            <div className="flex h-full flex-col justify-between border border-white/10 bg-[#12100e] p-8 sm:p-10">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Download</p>
                <h2 className="mt-5 font-[Cormorant_Garamond] text-4xl font-light leading-tight tracking-[-0.03em] text-[#f5eee2] sm:text-5xl">
                  Request the TELA catalogue for design and specification use.
                </h2>
                <p className="mt-6 font-[Manrope] text-base leading-8 text-[#a89983]">
                  Download the TELA Glass Doors Systems catalogue to review the concept, system description, highlights,
                  and product references behind the collection.
                </p>
              </div>
              <div className="mt-10 space-y-8">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                  <img
                    src="/images/tela/tela-architectural.jpg"
                    alt="Tall illuminated TELA-framed glass doors used in a contemporary architectural interior"
                    className="h-64 w-full object-cover object-center"
                  />
                </div>
                <Button
                  type="button"
                  onClick={openDownloadModal}
                  className="w-full rounded-none border border-[#d7be92]/45 bg-[#f6f0e6] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#15110e] transition hover:bg-[#d8c2a0]"
                >
                  <Download className="mr-3 h-4 w-4" />
                  Download TELA Catalogue
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      {downloadModalOpen ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl border border-white/12 bg-[#100e0c] p-8 shadow-[0_32px_140px_rgba(0,0,0,0.62)] sm:p-10 lg:p-12">
            <button
              type="button"
              onClick={closeDownloadModal}
              aria-label="Close TELA catalogue download modal"
              className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center border border-white/12 bg-white/5 text-[#efe2cb] transition hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            {downloadState === "success" ? (
              <div className="max-w-2xl pr-10">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Catalogue Download</p>
                <h3 className="mt-5 font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5efe5] sm:text-6xl">
                  Your TELA download is underway.
                </h3>
                <p className="mt-6 max-w-xl font-[Manrope] text-base leading-8 text-[#c7b9a0]">{downloadMessage}</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    type="button"
                    onClick={closeDownloadModal}
                    className="rounded-none border border-[#d7be92]/45 bg-[#f6f0e6] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#15110e] transition hover:bg-[#d8c2a0]"
                  >
                    Close
                  </Button>
                  <Button
                    type="button"
                    onClick={startCatalogueDownload}
                    className="rounded-none border border-white/14 bg-white/6 px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/12"
                  >
                    Download Again
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCatalogueRequest} className="space-y-8">
                <div className="max-w-2xl pr-10">
                  <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Catalogue Download</p>
                  <h3 className="mt-5 font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5efe5] sm:text-6xl">
                    Download the TELA catalogue.
                  </h3>
                  <p className="mt-6 max-w-xl font-[Manrope] text-base leading-8 text-[#c7b9a0]">
                    Enter your name and email address to receive the TELA catalogue download. EDP will also be notified
                    that this specific catalogue has been requested.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#9f8866]">Name</span>
                    <input
                      type="text"
                      value={downloadName}
                      onChange={(event) => setDownloadName(event.target.value)}
                      placeholder="Your full name"
                      autoComplete="name"
                      className="mt-3 h-14 w-full border border-white/12 bg-transparent px-4 font-[Manrope] text-sm text-[#f4ecde] outline-none transition placeholder:text-[#756a59] focus:border-[#c8ab74]"
                    />
                  </label>
                  <label className="block">
                    <span className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#9f8866]">Email Address</span>
                    <input
                      type="email"
                      value={downloadEmail}
                      onChange={(event) => setDownloadEmail(event.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="mt-3 h-14 w-full border border-white/12 bg-transparent px-4 font-[Manrope] text-sm text-[#f4ecde] outline-none transition placeholder:text-[#756a59] focus:border-[#c8ab74]"
                    />
                  </label>
                </div>

                <div className="border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#9f8866]">Catalogue</p>
                  <h4 className="mt-3 font-[Cormorant_Garamond] text-4xl leading-none text-[#f5eee2]">
                    TELA Glass Doors Systems
                  </h4>
                  <p className="mt-4 max-w-2xl font-[Manrope] text-sm leading-7 text-[#a89983]">
                    This request sends EDP your name, your email address, and the catalogue reference before the
                    download starts.
                  </p>
                </div>

                {downloadMessage ? (
                  <p
                    className={`font-[Manrope] text-sm leading-7 ${
                      downloadState === "error" ? "text-[#f0b7b7]" : "text-[#c7b9a0]"
                    }`}
                  >
                    {downloadMessage}
                  </p>
                ) : (
                  <p className="font-[Manrope] text-sm leading-7 text-[#8f836f]">
                    By downloading, you agree that EDP may store your details in order to respond to this catalogue
                    request.
                  </p>
                )}

                <div className="flex flex-col justify-end gap-4 border-t border-white/10 pt-6 sm:flex-row">
                  <Button
                    type="button"
                    onClick={closeDownloadModal}
                    className="rounded-none border border-white/12 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#efe2cb] transition hover:bg-white/8"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={downloadState === "submitting"}
                    className="rounded-none border border-[#d7be92]/45 bg-[#f6f0e6] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#15110e] transition hover:bg-[#d8c2a0] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {downloadState === "submitting" ? "Sending Request..." : "Download TELA Catalogue"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
