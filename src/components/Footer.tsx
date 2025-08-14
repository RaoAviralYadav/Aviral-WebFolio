"use client";

export default function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-sm border-t border-white/10 py-6 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">
        <span>© {new Date().getFullYear()} Aviral Yadav</span>
        <div className="space-x-4">
          <a href="https://github.com/RaoAviralYadav" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aviral-yadav-bb30a032a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/vrishni_aviral/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:aviralyadav501@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
