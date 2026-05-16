import { createElement } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ClipboardList, Sparkles, Wrench } from "lucide-react";
import Footer from "../components/Footer";
import { getServiceBySlug } from "../data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-gray-950 text-white pt-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Service not found</h1>
          <p className="text-gray-400 mb-8">The service you are looking for is not available.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <main className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
        <section className="relative pt-32 pb-20 px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-24 left-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply blur-3xl opacity-15"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply blur-3xl opacity-15"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.gradient} p-4 flex items-center justify-center mb-6`}>
                  <Icon className="text-white w-full h-full" />
                </div>

                <p className="text-cyan-400 font-semibold mb-3">Patrex Media Service</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{service.title}</h1>
                <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">{service.overview}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-600 font-semibold hover:shadow-xl transition-all"
                  >
                    Start This Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <div className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/20 bg-white/5 font-bold text-emerald-400">
                    Starting {service.price}
                  </div>
                </div>
              </div>

              <div
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                <img src={service.image} alt={service.title} className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-white/15 text-white px-3 py-1 rounded-full border border-white/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
            <InfoPanel icon={Wrench} title="Tools We Use" items={service.tools} gradient={service.gradient} />
            <InfoPanel icon={Sparkles} title="Used For Website" items={service.websiteUse} gradient={service.gradient} />
            <InfoPanel icon={ClipboardList} title="Deliverables" items={service.deliverables} gradient={service.gradient} />
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                How We <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Work</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                A clear process so you know what we are creating, which tools we are using, and how it supports your website.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${service.gradient} flex items-center justify-center font-bold mb-5`}>
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function InfoPanel({ icon: Icon, title, items, gradient }) {
  const icon = createElement(Icon, { className: "text-white w-full h-full" });

  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 p-7"
    >
      <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} p-3 flex items-center justify-center mb-5`}>
        {icon}
      </div>
      <h2 className="text-xl font-bold mb-5">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-gray-300">
            <Check className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
            <span className="text-sm leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
