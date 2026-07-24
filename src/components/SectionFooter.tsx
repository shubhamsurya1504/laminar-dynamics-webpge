type SectionFooterProps = {
  domainsLine: string;
  className?: string;
};

export default function SectionFooter({ domainsLine, className = "" }: SectionFooterProps) {
  return (
    <div className={`relative z-10 mt-8 py-3 text-center ${className}`}>
      <p className="text-sm font-medium uppercase tracking-widest text-white/70">
        {domainsLine}
      </p>
    </div>
  );
}
