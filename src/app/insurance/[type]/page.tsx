// INSURANCE SERVICE PAGE
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insuranceServices, getInsuranceService } from '@/lib/data/insurance-compliance-database';
import { Breadcrumb } from '@/components/navigation/Breadcrumb';
import { CTASection, FAQSection } from '@/components/pseo';
interface PageProps { params: Promise<{ type: string }>; }
export async function generateStaticParams() { return insuranceServices.map((s) => ({ type: s.slug })); }
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getInsuranceService(resolvedParams.type);
  if (!service) return { title: 'Service Not Found' };
  return { title: service.name + ' | Hampstead Renovations', description: service.description, alternates: { canonical: 'https://hampsteadrenovations.co.uk/insurance/' + resolvedParams.type } };
}
export default async function InsurancePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = getInsuranceService(resolvedParams.type);
  if (!service) notFound();
  const breadcrumbs = [{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: service.shortName, href: '/insurance/' + resolvedParams.type, current: true }];
  return (<main className="min-h-screen">
    <section className="bg-gradient-to-br from-blue-800 to-slate-800 text-white py-16"><div className="container mx-auto px-4"><Breadcrumb items={breadcrumbs} className="mb-6 text-blue-200" /><h1 className="text-4xl font-bold mb-4">{service.name}</h1><p className="text-xl text-blue-100 mb-6">{service.description}</p><div className="mt-8 grid sm:grid-cols-3 gap-4"><div className="bg-white/10 p-3 rounded-lg"><span className="text-blue-200 text-sm">Timeframe</span><p className="text-white font-medium">{service.timeframe}</p></div><div className="bg-white/10 p-3 rounded-lg"><span className="text-blue-200 text-sm">Cost</span><p className="text-white font-medium">{service.typicalCost}</p></div></div></div></section>
    <section className="py-16 bg-white"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-8">When You Need {service.shortName}</h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{service.whenNeeded.map((s, i) => <div key={i} className="bg-slate-50 p-6 rounded-xl"><p className="text-slate-700">{s}</p></div>)}</div></div></section>
    <section className="py-16 bg-slate-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-8">Our Process</h2><div className="grid md:grid-cols-4 gap-6">{service.ourProcess.map((step, i) => <div key={i} className="bg-white rounded-xl p-6"><div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">{i + 1}</div><p className="text-slate-700">{step}</p></div>)}</div></div></section>
    <section className="py-16 bg-white"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold mb-6">Documentation We Provide</h2><ul className="grid md:grid-cols-2 gap-4">{service.documentsProvided.map((doc, i) => <li key={i} className="flex items-start gap-3"><span className="text-blue-500"></span><span className="text-slate-700">{doc}</span></li>)}</ul></div></section>
    <FAQSection faqs={service.faqs} title={service.shortName + ' FAQs'} />
    <section className="py-16 bg-white"><div className="container mx-auto px-4"><h2 className="text-2xl font-bold mb-6">Other Insurance Services</h2><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{insuranceServices.filter(s => s.slug !== resolvedParams.type).map(o => <Link key={o.slug} href={'/insurance/' + o.slug} className="bg-slate-50 rounded-lg p-4 hover:bg-blue-50"><h3 className="font-semibold text-slate-900 mb-1">{o.shortName}</h3><p className="text-slate-500 text-sm">{o.description.substring(0, 80)}...</p></Link>)}</div></div></section>
    <CTASection cta={{ headline: 'Need Help With an Insurance Claim?', subtext: 'We work directly with insurers to make the claims process smooth.', buttonText: 'Start Your Claim', phoneNumber: '020 8000 0000' }} />
  </main>);
}
