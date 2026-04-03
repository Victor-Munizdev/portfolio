export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-[linear-gradient(180deg,#f2e9e2_0%,#efe5dc_100%)]">
      <div className="flex flex-col items-center gap-4 text-[#111111]">
        <div className="loading-spin h-12 w-12 rounded-full border-4 border-black/10 border-t-[#ff5a1f]" />
        <p className="text-sm uppercase tracking-[0.35em] text-black/55">Carregando</p>
      </div>
    </div>
  )
}
