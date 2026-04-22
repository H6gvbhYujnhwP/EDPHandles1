/*
Design reminder for this file: Neo-Atelier Italian Editorial.
Keep the COSMA EXPRESS RANGE page dark, composed, and premium.
Use broad storytelling sections, restrained metallic accents, and the same refined gated-download quality established on the TELA and Walldrobe pages.
*/
import { ArrowRight, Boxes, CheckCircle2, Download, Layers3, PackageCheck, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import EnquiryFormSection from "@/components/site/EnquiryFormSection";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { Button } from "@/components/ui/button";
import { companyProfile } from "@/lib/edpSiteContent";

const catalogueDownloadAction = "https://formspree.io/f/mgorzben";
const catalogueDownloadFile = "/catalogues/cosma-express-range-2024.pdf";
const catalogueDownloadName = "COSMA EXPRESS RANGE Catalogue";

type DownloadState = "idle" | "submitting" | "success" | "error";

type HighlightItem = {
  title: string;
  text: string;
  icon: typeof Sparkles;
};

type FamilyItem = {
  title: string;
  description: string;
};

const expressHighlights: HighlightItem[] = [
  {
    title: "Ready in Stock",
    text:
      "Cosma Express is curated for distribution with products held ready in stock, helping projects move faster without losing the design quality expected from the brand.",
    icon: PackageCheck,
  },
  {
    title: "Small-Batch Friendly",
    text:
      "The collection is designed to be purchased in small lots or even as individual pieces, making it practical for agile interiors, sampling, and selective project requirements.",
    icon: Boxes,
  },
  {
    title: "Made-to-Measure Options",
    text:
      "The range includes integrated systems available in standard dimensions as well as 3 metre bars with separate caps, supporting tailored compositions when required.",
    icon: Layers3,
  },
  {
    title: "Refined Finishes",
    text:
      "Across the collection, Cosma pairs distribution readiness with carefully resolved finishes, from brushed black and cast-iron tones to cleaner metallic expressions.",
    icon: CheckCircle2,
  },
];

const expressFamilies: FamilyItem[] = [
  {
    title: "Modular Integrated",
    description:
      "Integrated aluminium profiles with zamak end caps designed for custom lengths and flexible made-to-measure door applications.",
  },
  {
    title: "Integrated & Bridge",
    description:
      "A broad stocked selection of integrated and bridge handles that balance practical availability with clean architectural forms.",
  },
  {
    title: "Closed Grip & Knobs",
    description:
      "Compact, versatile options that bring Cosma detailing into smaller-scale cabinetry and complementary furniture applications.",
  },
  {
    title: "Leather & Classical Style",
    description:
      "Express-range options that extend the collection beyond contemporary minimalism into warmer tactile and more decorative directions.",
  },
  {
    title: "Systems & Furnishing Accessories",
    description:
      "The catalogue also includes selected systems and furnishing accessories such as Interna, Elite, Flag, Erre8 Plus, System 16, Aura, Eos, Use it, Ferè, and Filò.",
  },
];

function startCatalogueDownload() {
  const link = document.createElement("a");
  link.href = catalogueDownloadFile;
  link.download = "COSMA-Express-Range-2024.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function CosmaExpressRange() {
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
    formData.append("source_page", "COSMA EXPRESS RANGE");
    formData.append("request_type", "Catalogue Download");
    formData.append("catalogue_name", catalogueDownloadName);
    formData.append("catalogue_file", "cosma-express-range-2024.pdf");
    formData.append(
      "message",
      `${trimmedName} requested the ${catalogueDownloadName}. Please follow up if needed.`
    );
    formData.append("_subject", "EDP catalogue download — COSMA EXPRESS RANGE");

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
      setDownloadMessage("Thank you — your COSMA Express catalogue download has started");
      setDownloadName("");
      setDownloadEmail("");
    } catch (error) {
      console.error("COSMA Express catalogue download submission failed", error);
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
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">COSMA EXPRESS RANGE</p>
              <h1 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-6xl font-light leading-[0.92] tracking-[-0.04em] text-[#f5efe5] sm:text-7xl">
                Stocked Cosma collections designed for faster specification.
              </h1>
              <p className="mt-8 max-w-xl font-[Manrope] text-base leading-8 text-[#b5a893] sm:text-lg">
                Cosma Express brings together a distribution-focused selection of handles, knobs, and furnishing accessories that are ready in stock and available in small batches or individual pieces. It is a practical route into Cosma quality for projects that need agility without compromising finish, form, or design credibility.
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
                  Download COSMA Express Catalogue
                </Button>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="absolute -inset-6 hidden border border-[#b08d57]/20 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#12100e] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.5)]">
                <img
                  src="/images/cosma-express/cosma-express-hero.jpg"
                  alt="COSMA Express premium stocked handle selection shown in a dark editorial close-up"
                  className="h-[28rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[36rem]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Collection Focus</p>
              <h2 className="mt-5 max-w-[10ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                A practical route into Cosma design quality.
              </h2>
            </div>
            <div className="space-y-6 font-[Manrope] text-base leading-8 text-[#b6a893]">
              <p>
                The catalogue describes Cosma Express as a selection developed specifically for distribution, with items held ready in stock and available to buy in smaller quantities. That makes the range especially useful for agile furniture programs, boutique interiors, sampling, refits, and projects that need access to refined hardware without waiting for fully bespoke lead times.
              </p>
              <p>
                Alongside stocked bridge and integrated handles, the document also highlights modular systems supplied in standard dimensions or in longer bars with separate caps. This gives designers and makers a balanced offer: faster availability where speed matters, plus the option to customise selected solutions when the project requires more precise door lengths or tailored detailing.
              </p>
            </div>
          </div>
        </section>

        <section className="py-6 pb-24 sm:pb-28">
          <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {expressHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a66b]/30 bg-[#c6a66b]/10 text-[#efdfc2]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-[Cormorant_Garamond] text-3xl font-light text-[#f3eadb]">{item.title}</h3>
                  <p className="mt-3 font-[Manrope] text-sm leading-7 text-[#b7aa97]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#13110f] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.42)]">
                <img
                  src="/images/cosma-express/cosma-express-bridge.jpg"
                  alt="Polished COSMA Express bridge handle shown as an isolated catalogue product image"
                  className="h-[24rem] w-full rounded-[1.4rem] object-cover object-center sm:h-[30rem]"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Range Overview</p>
              <h2 className="mt-5 font-[Cormorant_Garamond] text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                Handle families and furnishing systems held within the express programme.
              </h2>
              <div className="mt-8 space-y-5">
                {expressFamilies.map((family) => (
                  <article key={family.title} className="border-b border-white/8 pb-5 last:border-b-0 last:pb-0">
                    <h3 className="font-[Cormorant_Garamond] text-3xl font-light text-[#f3eadb]">{family.title}</h3>
                    <p className="mt-2 font-[Manrope] text-sm leading-7 text-[#b8aa96]">{family.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="container grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 sm:p-10">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Why Express Works</p>
              <h2 className="mt-5 font-[Cormorant_Garamond] text-5xl font-light leading-[0.98] tracking-[-0.04em] text-[#f4ebdf] sm:text-6xl">
                Distribution speed without losing the premium Cosma language.
              </h2>
              <div className="mt-8 space-y-6 font-[Manrope] text-base leading-8 text-[#b7a996]">
                <p>
                  The company profile in the catalogue reinforces why the express offer matters. Since 1955, Cosma has combined research, creativity, production capability, and collaboration with designers and manufacturers to deliver a wide range of hardware solutions across contemporary and classical tastes.
                </p>
                <p>
                  That larger manufacturing and design expertise sits behind the express collection. So even when products are stocked for quicker purchase, they still belong to a broader culture of technical development, careful finishing, and furniture-focused product design.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12100f] p-3">
                <img
                  src="/images/cosma-express/cosma-express-rounded.jpg"
                  alt="Rounded brushed COSMA Express handle presented as a clean isolated product visual"
                  className="h-72 w-full rounded-[1.25rem] object-cover object-center"
                />
              </div>
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#12100f] p-3 sm:translate-y-10">
                <img
                  src="/images/cosma-express/cosma-express-angular.jpg"
                  alt="Angular dark COSMA Express handle shown in a clean isolated product composition"
                  className="h-72 w-full rounded-[1.25rem] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03] py-24 sm:py-28">
          <div className="container grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <p className="font-[Manrope] text-xs uppercase tracking-[0.34em] text-[#a78e68]">Catalogue Access</p>
              <h2 className="mt-5 font-[Cormorant_Garamond] text-5xl font-light leading-[0.97] tracking-[-0.04em] text-[#f5eee3] sm:text-6xl">
                Download the full COSMA Express catalogue.
              </h2>
              <p className="mt-6 font-[Manrope] text-base leading-8 text-[#b7aa96] sm:text-lg">
                Request the full 2024 COSMA Express catalogue to review stocked families, finishes, modular formats, and furnishing accessories in more detail.
              </p>
            </div>
            <Button
              type="button"
              onClick={openDownloadModal}
              className="w-full rounded-none border border-[#d7be92]/45 bg-[#f5ecdf] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.22em] text-[#16120f] transition hover:bg-[#dfcfb0] sm:w-auto"
            >
              <Download className="mr-3 h-4 w-4" />
              Download COSMA Express Catalogue
            </Button>
          </div>
        </section>

        <EnquiryFormSection
          pageName="COSMA EXPRESS RANGE"
          eyebrow="Speak with EDP"
          title="Specify COSMA Express for your next project."
          intro="Whether you need stocked hardware quickly or want guidance on the right family for a wider interior scheme, EDP can help you review the express collection and suitable applications."
        />
      </main>

      <SiteFooter />

      {downloadModalOpen ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl border border-white/14 bg-[#100e0d] p-8 text-[#f5ede1] shadow-[0_40px_120px_rgba(0,0,0,0.65)] sm:p-10">
            <button
              type="button"
              aria-label="Close catalogue download"
              onClick={closeDownloadModal}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/12 bg-white/4 text-[#f1e2c7] transition hover:border-white/25 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            {downloadState === "success" ? (
              <div className="max-w-2xl pr-10">
                <p className="font-[Manrope] text-xs uppercase tracking-[0.32em] text-[#a9906e]">Catalogue Download</p>
                <h3 className="mt-5 font-[Cormorant_Garamond] text-5xl font-light leading-[0.95] text-[#f7efe4] sm:text-6xl">
                  Thank you.
                </h3>
                <p className="mt-6 font-[Manrope] text-base leading-8 text-[#beaf98] sm:text-lg">{downloadMessage}</p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button
                    type="button"
                    onClick={closeDownloadModal}
                    className="rounded-none border border-[#d7be92]/35 bg-[#f5ecdf] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#e1cfac]"
                  >
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <p className="font-[Manrope] text-xs uppercase tracking-[0.32em] text-[#a9906e]">Catalogue Download</p>
                <h3 className="mt-5 max-w-[12ch] font-[Cormorant_Garamond] text-5xl font-light leading-[0.94] text-[#f7efe4] sm:text-6xl">
                  Download the COSMA Express catalogue.
                </h3>
                <p className="mt-6 max-w-2xl font-[Manrope] text-base leading-8 text-[#beaf98] sm:text-lg">
                  Enter your name and email address to receive the COSMA Express catalogue download. EDP will also be notified that this specific catalogue has been requested.
                </p>

                <form className="mt-10 space-y-6" onSubmit={handleCatalogueRequest}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#aa916f]">Name</span>
                      <input
                        type="text"
                        name="name"
                        value={downloadName}
                        onChange={(event) => setDownloadName(event.target.value)}
                        placeholder="Your full name"
                        className="mt-3 h-14 w-full border border-white/12 bg-[#0f0d0c] px-4 font-[Manrope] text-sm text-[#f5efe5] outline-none transition placeholder:text-[#706454] focus:border-[#c6a66b]/55"
                        autoComplete="name"
                        disabled={downloadState === "submitting"}
                      />
                    </label>

                    <label className="block">
                      <span className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#aa916f]">Email Address</span>
                      <input
                        type="email"
                        name="email"
                        value={downloadEmail}
                        onChange={(event) => setDownloadEmail(event.target.value)}
                        placeholder="you@example.com"
                        className="mt-3 h-14 w-full border border-white/12 bg-[#0f0d0c] px-4 font-[Manrope] text-sm text-[#f5efe5] outline-none transition placeholder:text-[#706454] focus:border-[#c6a66b]/55"
                        autoComplete="email"
                        disabled={downloadState === "submitting"}
                      />
                    </label>
                  </div>

                  <div className="border border-white/10 bg-white/[0.035] p-5 sm:p-6">
                    <p className="font-[Manrope] text-xs uppercase tracking-[0.28em] text-[#aa916f]">Catalogue</p>
                    <h4 className="mt-3 font-[Cormorant_Garamond] text-4xl font-light text-[#f5ecdf]">COSMA EXPRESS RANGE</h4>
                    <p className="mt-3 max-w-2xl font-[Manrope] text-sm leading-7 text-[#b8aa95]">
                      This request sends EDP your name, your email address, and the catalogue reference before the download starts.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <p className="max-w-2xl font-[Manrope] text-sm leading-7 text-[#a99c88]">
                      By downloading, you agree that EDP may follow up regarding this catalogue request.
                    </p>

                    {downloadState === "error" && downloadMessage ? (
                      <p className="font-[Manrope] text-sm leading-7 text-[#ffb39e]">{downloadMessage}</p>
                    ) : null}

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                      <Button
                        type="button"
                        onClick={closeDownloadModal}
                        variant="outline"
                        className="rounded-none border-white/12 px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#ead9bb] hover:bg-white/8"
                        disabled={downloadState === "submitting"}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="rounded-none border border-[#d7be92]/30 bg-[#f5ecdf] px-6 py-6 font-[Manrope] text-xs font-semibold uppercase tracking-[0.2em] text-[#15110e] transition hover:bg-[#deccaa]"
                        disabled={downloadState === "submitting"}
                      >
                        {downloadState === "submitting" ? "Starting download..." : "Download COSMA Express Catalogue"}
                      </Button>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
