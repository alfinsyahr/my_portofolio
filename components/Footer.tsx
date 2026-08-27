import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; 2026 Alfin Syahrin</p>
        <div className="flex items-center gap-2">
          <span>Designed &amp; Built using Next.js</span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-ink hover:text-accent transition duration-300 ease-smooth"
            aria-label="Github"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
