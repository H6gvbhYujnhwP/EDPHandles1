import { ArrowRight, Download, PhoneCall, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { companyProfile, internalFittings } from "@/lib/edpSiteContent";

const catalogueDownloadAction = "https://formspree.io/f/mgorzben";
const catalogueDownloadFile = "/catalogues/walldrobe-catalogue.pdf";
const catalogueDownloadName = "Walldrobe Catalogue";

type DownloadState = "idle" | "submitting" | "success" | "error";

function startCatalogueDownload() {
  const link = document.createElement("a");
  link.href = catalogueDownloadFile;
  link.download = "Walldrobe-Catalogue.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function InternalFittings() {
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
    formData.append("source_page", "Walldrobe Internal Fittings");
    formData.append("request_type", "Catalogue Download");
    formData.append("catalogue_name", catalogueDownloadName);
    formData.append("catalogue_file", "walldrobe-catalogue.pdf");
    formData.append(
      "message",
      `${trimmedName} requested the ${catalogueDownloadName}. Please follow up if needed.`
    );
    formData.append("_subject", "EDP catalogue download — Walldrobe Catalogue");

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
      setDownloadMessage("Thank you — your Walldrobe catalogue download has started");
      setDownloadName("");
      setDownloadEmail("");
    } catch (error) {
      console.error("Walldrobe catalogue download submission failed", error);
      setDownloadState("error");
      setDownloadMessage(
        "Sorry, there was a problem sending your details. Please try again or contact EDP directly."
      );
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#b08d57]/30 selection:text-white">
      <div className="fixed inset-0 -z-20 bg-[#0a0908]" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(176,141,87,0.12),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_35%)]" />

      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/8 py-20 sm:py-24 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Internal Fittings</p>
              <h1 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-6xl font-light leading-[0.92] tracking-[-0.04em] text-[#f5efe5] sm:text-7xl">
                Modular interiors for refined wardrobe design.
              </h1>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                Built around the Cosma MIRA system, the Internal Fittings collection brings together
                hanging rails, shelf frames, drawers, pull-out solutions, and tailored accessories for
                premium wardrobe interiors.
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
                  Download Walldrobe Catalogue
                </Button>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-6 hidden border border-[#b08d57]/20 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100e] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/internal-fittings-mira-hero.jpg"
                  alt="Wardrobe interior featuring the Cosma MIRA modular storage system"
                  className="h-[28rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[36rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <EnquiryFormSection
          pageName="Internal Fittings"
          eyebrow="Internal Fittings Enquiry"
          title="Discuss MIRA, rails, drawers, and wardrobe internals."
          intro="Use the form to discuss internal fittings selection, layout requirements, finish coordination, and specification support for wardrobe and furniture projects."
        />

        <section className="py-24 sm:py-28">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">MIRA Product Groups</p>
                <h2 className="mt-5 max-w-[11ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                  A complete interior system with premium detailing.
                </h2>
              </div>
              <p className="max-w-2xl font-[Manrope] text-base leading-8 text-[#a89983] lg:justify-self-end">
                From clean aluminium structures to accessory-led organisation, each element is designed to
                work as part of a cohesive internal-fittings offer for bespoke residential and trade-led
                projects.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {internalFittings.map((item, index) => (
                <article
                  key={item.name}
                  className={`group relative overflow-hidden border border-white/10 bg-[#12100e] transition duration-500 hover:-translate-y-1 hover:border-[#b08d57]/40 ${
                    index % 4 === 0 ? "xl:mt-10" : index % 4 === 2 ? "xl:-mt-10" : ""
                  }`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="border-t border-white/10 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-[Cormorant_Garamond] text-3xl leading-none text-[#f5eee2]">
                        {item.name}
                      </h3>
                      <span className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#88755d]">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#181411] p-8 sm:p-10 lg:p-14">
              <img
                src="/images/internal-fittings/hanging-rails-correct.jpg"
                alt="Close-up of wardrobe hanging rail installation"
                className="absolute inset-0 h-full w-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,8,7,0.94),rgba(10,8,7,0.78)_55%,rgba(10,8,7,0.9))]" />
              <div className="relative max-w-2xl">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Specification Support</p>
                <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee4] sm:text-6xl">
                  Designed for premium interior projects across the UK.
                </h2>
                <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#c0b19a]">
                  {companyProfile.tradeLead}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    type="button"
                    onClick={openDownloadModal}
                    className="w-full rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5] sm:w-auto"
                  >
                    <Download className="mr-3 h-4 w-4" />
                    Download Walldrobe Catalogue
                  </Button>
                  <Button
                    asChild
                    className="w-full rounded-none border border-white/14 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto"
                  >
                    <a href="/contact">Contact EDP</a>
                  </Button>
                </div>
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.26em] text-[#8d7960]">Why EDP</p>
                <h3 className="mt-4 font-[Cormorant_Garamond] text-4xl font-light text-[#f5eee4]">
                  UK stockholding and practical technical guidance.
                </h3>
                <p className="mt-4 font-[Manrope] text-sm leading-7 text-[#a89983]">
                  Product guidance, finish alignment, and dependable support for wardrobe projects,
                  furniture manufacturing, and premium residential fit-outs.
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#b08d57]/30 bg-[#b08d57]/8 text-[#dbc39f]">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-[Manrope] text-xs uppercase tracking-[0.24em] text-[#8d7960]">Advice</p>
                    <p className="mt-1 font-[Manrope] text-sm text-[#f5eee2]">
                      {companyProfile.phoneLabel} for technical and trade enquiries.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />

      {downloadModalOpen ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm">
          <div className="w-full max-w-2xl border border-white/12 bg-[#110f0d] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)] sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.3em] text-[#a78e68]">Catalogue Download</p>
                <h2 className="mt-4 font-[Cormorant_Garamond] text-4xl font-light leading-none text-[#f5eee4] sm:text-5xl">
                  Download the Walldrobe catalogue.
                </h2>
                <p className="mt-5 max-w-lg font-[Manrope] text-sm leading-7 text-[#b7a893] sm:text-base">
                  Enter your name and email address to receive the Walldrobe catalogue download. EDP will
                  also be notified that this specific catalogue has been requested.
                </p>
              </div>
              <button
                type="button"
                aria-label="Close catalogue download dialog"
                onClick={closeDownloadModal}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 text-[#f5eee4] transition hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {downloadState === "success" ? (
              <div className="mt-8 border border-[#d7be92]/20 bg-white/[0.03] p-8 sm:p-10">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.3em] text-[#a78e68]">Download started</p>
                <h3 className="mt-4 font-[Cormorant_Garamond] text-4xl font-light leading-none text-[#f5eee4] sm:text-5xl">
                  Thank you.
                </h3>
                <p role="status" aria-live="polite" className="mt-5 max-w-xl font-[Manrope] text-base leading-8 text-[#d7c29b]">
                  {downloadMessage}
                </p>
                <p className="mt-4 max-w-xl font-[Manrope] text-sm leading-7 text-[#a89983]">
                  If the file does not open automatically, you can close this window and click the download button again.
                </p>
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    onClick={closeDownloadModal}
                    className="rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5]"
                  >
                    Done
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleCatalogueRequest} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Name</span>
                    <input
                      type="text"
                      value={downloadName}
                      onChange={(event) => setDownloadName(event.target.value)}
                      placeholder="Your full name"
                      className="w-full border border-white/12 bg-[#0d0b0a] px-4 py-4 font-[Manrope] text-sm text-[#f5eee4] outline-none transition placeholder:text-[#706353] focus:border-[#b08d57]"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Email address</span>
                    <input
                      type="email"
                      value={downloadEmail}
                      onChange={(event) => setDownloadEmail(event.target.value)}
                      placeholder="you@example.com"
                      className="w-full border border-white/12 bg-[#0d0b0a] px-4 py-4 font-[Manrope] text-sm text-[#f5eee4] outline-none transition placeholder:text-[#706353] focus:border-[#b08d57]"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="border border-white/10 bg-white/[0.03] px-5 py-4">
                  <p className="font-[Manrope] text-xs uppercase tracking-[0.22em] text-[#8d7960]">Catalogue</p>
                  <p className="mt-2 font-[Cormorant_Garamond] text-3xl font-light text-[#f5eee4]">
                    {catalogueDownloadName}
                  </p>
                  <p className="mt-2 font-[Manrope] text-sm leading-7 text-[#a89983]">
                    This request sends EDP your name, your email address, and the catalogue reference before
                    the download starts.
                  </p>
                </div>

                {downloadMessage ? (
                  <p
                    role="status"
                    aria-live="polite"
                    className="font-[Manrope] text-sm leading-7 text-[#d99883]"
                  >
                    {downloadMessage}
                  </p>
                ) : null}

                <div className="border-t border-white/10 pt-6">
                  <p className="max-w-full font-[Manrope] text-sm leading-7 text-[#8f826f]">
                    By downloading, you agree that EDP may follow up regarding this catalogue request.
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closeDownloadModal}
                      className="rounded-none border border-white/12 bg-transparent px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10 sm:w-auto"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={downloadState === "submitting"}
                      className="rounded-none border border-[#d7be92]/45 bg-[#f5efe5] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#ddc7a5] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {downloadState === "submitting" ? "Preparing Download..." : "Download Walldrobe Catalogue"}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
