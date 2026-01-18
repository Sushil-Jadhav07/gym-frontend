function SectionTitle({ eyebrow, title, align = 'center', description }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-emerald-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm md:text-base text-slate-400">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle

