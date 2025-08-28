import dynamic from "next/dynamic";

const TemplatesPage = dynamic(() => import("@/components/resources/ResourcePages").then(m => m.TemplatesPage), {
  ssr: false,
  loading: () => <div className="p-8">Loading templates…</div>,
});

export default function TemplatesPageRoute() {
  return <TemplatesPage />;
}
