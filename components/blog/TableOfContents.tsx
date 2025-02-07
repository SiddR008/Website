import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4'))
      .map((element) => ({
        id: element.id,
        text: element.textContent || '',
        level: Number(element.tagName.charAt(1))
      }));
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0% -35% 0%' }
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <motion.li
            key={heading.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ marginLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block py-1 text-sm transition-colors ${
                activeId === heading.id
                  ? 'text-purple-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              {heading.text}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
} 