import React, { useState, FormEvent } from "react";
import ImageCard from "./ImageCard";

type ImageItem = {
  id: string;
  src: string;
  legenda: string;
};

export default function App() {
  const [images, setImages] = useState<ImageItem[]>([
   
  ]);

  const [url, setUrl] = useState("");
  const [legenda, setLegenda] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  function gerarId() {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }

  function validarUrl(possivelUrl: string) {
    try {
      const u = new URL(possivelUrl);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErro(null);

    const srcTrim = url.trim();
    const legendaTrim = legenda.trim();

    if (!srcTrim || !legendaTrim) {
      setErro("Preencha URL e legenda.");
      return;
    }
    if (!validarUrl(srcTrim)) {
      setErro("URL inválida — use http:// ou https://");
      return;
    }

    const novo: ImageItem = {
      id: gerarId(),
      src: srcTrim,
      legenda: legendaTrim,
    };

    setImages((prev) => [novo, ...prev]);
    setUrl("");
    setLegenda("");
  }

  function remover(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  return (
    <div style={{ padding: 24, fontFamily: "Inter, system-ui, sans-serif" }}>
      <h1>Galeria de Imagens</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          placeholder="URL da imagem (https://...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ flex: 1, minWidth: 240, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <input
          placeholder="Legenda"
          value={legenda}
          onChange={(e) => setLegenda(e.target.value)}
          style={{ width: 200, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "8px 12px", borderRadius: 6 }}>Adicionar</button>
        {erro && <div style={{ color: "crimson", width: "100%" }}>{erro}</div>}
      </form>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 12
      }}>
        {images.length === 0 && <p>Nenhuma imagem ainda — adicione uma usando o formulário acima.</p>}

        {images.map(({ id, src, legenda }) => (
          <div key={id} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <ImageCard src={src} legenda={legenda} />
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => remover(id)} style={{ padding: "6px 8px", borderRadius: 6 }}>
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
