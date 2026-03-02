import React from "react";

const MainBarberia: React.FC = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        background: "linear-gradient(135deg, #3b2416 0%, #5a341d 40%, #c97a36 100%)",
        color: "#fdf5e6",
        padding: "3rem 1.5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          backgroundColor: "rgba(20, 10, 5, 0.92)",
          borderRadius: "18px",
          boxShadow: "0 18px 40px rgba(0, 0, 0, 0.6)",
          padding: "2.5rem",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
          gap: "2.5rem",
        }}
      >
        {/* Columna izquierda: texto principal */}
        <section>
          <p
            style={{
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              fontSize: "0.8rem",
              color: "#f0c27b",
              marginBottom: "0.75rem",
            }}
          >
            Barbería tradicional
          </p>

          <h1
            style={{
              fontSize: "2.8rem",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Estilo clásico,
            <br />
            detalles modernos.
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#f7e1c3",
              maxWidth: "32rem",
              marginBottom: "2rem",
            }}
          >
            Cortes de cabello y barba con precisión, en un ambiente cálido de cuero, madera y café.
            Reservá tu turno y salí con un look que hable por vos.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "0.85rem 1.8rem",
                borderRadius: "999px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.95rem",
                background:
                  "linear-gradient(135deg, #f08a24 0%, #c96b1f 40%, #f2b544 100%)",
                color: "#2b1608",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.45)",
              }}
            >
              Reservar turno
            </button>

            <button
              style={{
                padding: "0.85rem 1.8rem",
                borderRadius: "999px",
                border: "1px solid #f0c27b",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "0.95rem",
                backgroundColor: "transparent",
                color: "#f0c27b",
              }}
            >
              Ver servicios
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#f0c27b",
                  marginBottom: "0.25rem",
                }}
              >
                Horarios
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                Lun a Sáb · 10:00 a 20:00
                <br />
                Domingos con turno previo
              </p>
            </div>

            <div
              style={{
                width: "1px",
                height: "3rem",
                background:
                  "linear-gradient(to bottom, transparent, #f0c27b, transparent)",
              }}
            />

            <div>
              <p
                style={{
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#f0c27b",
                  marginBottom: "0.25rem",
                }}
              >
                Ubicación
              </p>
              <p style={{ fontSize: "0.95rem" }}>
                Av. Principal 1234
                <br />
                Barrio Centro
              </p>
            </div>
          </div>
        </section>

        {/* Columna derecha: galería de imágenes */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "1rem",
            alignContent: "center",
          }}
        >
          <figure
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(240, 194, 123, 0.35)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg"
              alt="Corte de cabello clásico"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: "0.75rem",
                bottom: "0.75rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fdf5e6",
              }}
            >
              Corte clásico
            </figcaption>
          </figure>

          <figure
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(240, 194, 123, 0.35)",
              transform: "translateY(1.5rem)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/3998420/pexels-photo-3998420.jpeg"
              alt="Perfilado de barba"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: "0.75rem",
                bottom: "0.75rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fdf5e6",
              }}
            >
              Barba & contornos
            </figcaption>
          </figure>

          <figure
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(240, 194, 123, 0.35)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/3998425/pexels-photo-3998425.jpeg"
              alt="Corte moderno con degradado"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: "0.75rem",
                bottom: "0.75rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fdf5e6",
              }}
            >
              Degradado moderno
            </figcaption>
          </figure>

          <figure
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              border: "1px solid rgba(240, 194, 123, 0.35)",
              transform: "translateY(-1.5rem)",
            }}
          >
            <img
              src="https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg"
              alt="Detalle de barba y navaja"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <figcaption
              style={{
                position: "absolute",
                left: "0.75rem",
                bottom: "0.75rem",
                padding: "0.35rem 0.7rem",
                borderRadius: "999px",
                fontSize: "0.75rem",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fdf5e6",
              }}
            >
              Navaja & detalle
            </figcaption>
          </figure>
        </section>
      </div>
    </main>
  );
};

export default MainBarberia;