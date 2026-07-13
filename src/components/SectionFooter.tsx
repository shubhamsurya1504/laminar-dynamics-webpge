type SectionFooterProps = {
  domainsLine: string;
};

export default function SectionFooter({ domainsLine }: SectionFooterProps) {
  return (
    <div className="relative z-10 mt-10 py-4 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-white/70">
        {domainsLine}
      </p>
    </div>
  );
}
