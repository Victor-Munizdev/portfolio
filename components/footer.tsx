export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="space-y-2">
            <p className="text-sm text-white">
              © {new Date().getFullYear()} Victor Muniz. Todos os direitos reservados.
            </p>
            <p className="text-xs text-white">Desenvolvendo soluções digitais que fazem a diferença</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
