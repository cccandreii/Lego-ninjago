export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="absolute inset-0 bg-[hsl(220,20%,5%)]" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="font-[family-name:var(--font-cinzel)] text-2xl sm:text-3xl text-foreground mb-4 text-glow">
          {"\"Ninja never quit.\""}
        </p>
        <div className="w-12 h-px bg-[#d4af37]/40 mx-auto mb-6" />
        <p className="text-muted-foreground text-sm mb-2">
          An English project by a lifelong Ninjago fan.
        </p>
        <p className="text-muted-foreground/50 text-xs">
          {"Lego Ninjago is a trademark of the LEGO Group. This site is a non-commercial school project made with love."}
        </p>

        {/* Element dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {["#ef4444", "#3b82f6", "#a3a3a3", "#67e8f9", "#4ade80", "#06b6d4"].map(
            (color) => (
              <div
                key={color}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            )
          )}
        </div>
      </div>
    </footer>
  )
}
