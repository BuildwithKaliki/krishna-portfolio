export default function Nav() {
  const links = [
    ['about', 'about'],
    ['metrics', 'impact'],
    ['projects', 'projects'],
    ['architecture', 'architecture'],
    ['skills', 'skills'],
    ['experience', 'experience'],
    ['interview', 'how-i-work'],
  ];
  return (
    <header className="sticky top-0 z-10 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <div className="max-w-5xl px-4 py-3 mx-auto flex items-center gap-4 text-sm">
        <span className="font-bold text-term-green">~/krishna<span className="text-gray-200">@devops</span></span>
        <nav className="flex gap-3 overflow-x-auto text-term-dim">
          {links.map(([href, label]) => (
            <a key={href} href={`#${href}`} className="hover:text-term-blue whitespace-nowrap">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
