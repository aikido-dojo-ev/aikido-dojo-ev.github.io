<svelte:head>
  <title>Mitglied werden - Aikido Dojo Boberg</title>
  <meta
    name="description"
    content="Werde Mitglied im Aikido Dojo Boberg e.V. und trainiere traditionelles Aikido in Hamburg."
  />
</svelte:head>

<div class="container">
  <h1>Mitglied werden</h1>

  <section class="intro">
    <p>
      Interessierst du dich für Aikido und möchtest Teil unserer Dojo-Gemeinschaft werden? 
      Wir freuen uns über neue Mitglieder jeden Alters und jeder Erfahrungsstufe!
    </p>
  </section>

  <section class="benefits">
    <h2>Vorteile einer Mitgliedschaft</h2>
    <ul>
      <li>Regelmäßiges Training unter erfahrener Anleitung</li>
      <li>Zugang zu allen Trainingszeiten</li>
      <li>Teil einer aktiven Aikido-Gemeinschaft</li>
      <li>Möglichkeit zur Teilnahme an Lehrgängen und Prüfungen</li>
      <li>Versicherungsschutz während des Trainings</li>
    </ul>
  </section>

  <section class="process">
    <h2>So wirst du Mitglied</h2>
    <div class="steps">
      <div class="step">
        <h3>1. Probetraining</h3>
        <p>
          Besuche uns gerne zu einem unverbindlichen Probetraining, um unser Dojo 
          und unsere Trainingsweise kennenzulernen.
        </p>
      </div>
      <div class="step">
        <h3>2. Beitrittserklärung</h3>
        <p>
          Lade die Beitrittserklärung herunter, fülle sie aus und bringe sie zum 
          Training mit oder sende sie uns per E-Mail.
        </p>
      </div>
      <div class="step">
        <h3>3. Willkommen im Dojo!</h3>
        <p>
          Nach Eingang deiner Beitrittserklärung kannst du direkt mit dem 
          regelmäßigen Training beginnen.
        </p>
      </div>
    </div>
  </section>

  <section class="form-download">
    <h2>Beitrittserklärung</h2>
    <p>
      Lade hier die Beitrittserklärung für den Aikido Dojo Boberg e.V. herunter:
    </p>
    <div class="download-button-container">
      <a
        href="/docs/aikido_beitrittserklaerung.pdf"
        download
        class="download-btn"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Beitrittserklärung herunterladen (PDF)
      </a>
    </div>
    <div class="pdf-viewer">
      <iframe
        src="/docs/aikido_beitrittserklaerung.pdf"
        title="Beitrittserklärung Aikido Dojo Boberg e.V."
      ></iframe>
    </div>
  </section>

  <section class="contact-info">
    <h2>Fragen?</h2>
    <p>
      Bei Fragen zur Mitgliedschaft oder zum Training kannst du uns gerne 
      direkt beim Training ansprechen oder über unsere 
      <a href="https://www.instagram.com/aikido_dojo_boberg/" target="_blank" rel="noopener noreferrer">
        Instagram-Seite
      </a> 
      kontaktieren.
    </p>
  </section>
</div>

<style>
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #212121;
  }

  h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    color: #212121;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #ab0b0b;
  }

  section {
    margin-bottom: 3rem;
  }

  .intro p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #333;
  }

  .benefits ul {
    list-style: none;
    padding: 0;
  }

  .benefits li {
    padding: 0.75rem 0;
    padding-left: 2rem;
    position: relative;
    line-height: 1.6;
  }

  .benefits li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #ab0b0b;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .step {
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 8px;
    border-top: 4px solid #ab0b0b;
  }

  .step p {
    line-height: 1.6;
    color: #555;
  }

  .form-download {
    background: #fcfcfc;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  }

  .download-button-container {
    margin: 2rem 0;
    text-align: center;
  }

  .download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: #ab0b0b;
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: background 0.2s, transform 0.2s;
  }

  .download-btn:hover {
    background: #8a0909;
    transform: translateY(-2px);
  }

  .pdf-viewer {
    margin-top: 2rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }

  .pdf-viewer iframe {
    width: 100%;
    height: 600px;
    border: none;
  }

  .contact-info {
    background: #f5f5f5;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid #ab0b0b;
  }

  .contact-info p {
    line-height: 1.6;
    margin: 0;
  }

  .contact-info a {
    color: #ab0b0b;
    text-decoration: none;
    font-weight: 600;
  }

  .contact-info a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .steps {
      grid-template-columns: 1fr;
    }

    .pdf-viewer iframe {
      height: 400px;
    }
  }
</style>
