const cv = {
    nom: "Antoine EGO",
    titre: "Développeur Web & Web Mobile",

    contact: {
        telephone: "06 02 78 11 11",
        email: "antoineego@gmail.com",
        ville: "Mulhouse (68)",
        permis: "Permis B"
    },

    profil: "Actuellement en formation de Développeur Web et Web Mobile, je recherche une immersion professionnelle en ESN afin de mettre en pratique mes compétences, développer mon expérience sur des projets concrets et découvrir le travail en équipe.",

    formations: [
        {
            date: "2026 (en cours)",
            diplome: "Formation qualifiante DWWM",
            lieu: "CRM Mulhouse"
        },
        {
            date: "2026",
            diplome: "Formation SIMPLON - Apple Foundation Program",
            lieu: "Marseille"
        },
        {
            date: "2025",
            diplome: "Préqualification en Développement Informatique",
            lieu: "Centre de Réadaptation de Mulhouse"
        },
        {
            date: "2023-2024",
            diplome: "Réorientation professionnelle",
            lieu: "UGECAM Briançon"
        },
        {
            date: "2017-2018",
            diplome: "BTS MUC (1ère année)",
            lieu: "Lycée Joliot-Curie"
        },
        {
            date: "2016",
            diplome: "Bac STMG",
            lieu: "Lycée Marie Madeleine Fourcade"
        }
    ],

    competences: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "Python",
        "Java",
        "Swift"
    ],

    projets: [
        "Création d'une dizaine de sites vitrines",
        "Création de sites e-commerce",
        "Mise en place de l'expérience utilisateur"
    ],

    experiences: [
        {
            date: "2026",
            poste: "Télévendeur",
            entreprise: "Bati Conseil",
            details: "Démarchage téléphonique pour la vente de produits de rénovation."
        },
        {
            date: "2024",
            poste: "Immersions en informatique",
            entreprise: "Kincy & France Travail DSI",
            details: "Observation des métiers de développeur full-stack et testeur logiciel."
        },
        {
            date: "2022-2024",
            poste: "Employé polyvalent",
            entreprise: "Amazon, Super U, Fromagerie",
            details: "Logistique, contrôle marchandises, vente et fabrication."
        },
        {
            date: "2020-2021",
            poste: "Téléconseiller",
            entreprise: "CPAM Meurthe-et-Moselle",
            details: "Prévention COVID et gestion des appels."
        },
        {
            date: "2018-2020",
            poste: "Agent d'entretien / Production",
            entreprise: "Mairies & Industrie automobile",
            details: "Espaces verts, entretien et production."
        }
    ],

    loisirs: [
        "Voyages en road trip",
        "Découverte de nouvelles cultures",
        "Architecture et paysages"
    ]
};

const app = document.getElementById("cv");

app.innerHTML = `
    <!-- En-tête -->
    <header>
        <h1>${cv.nom}</h1>
        <div class="titre">${cv.titre}</div>
        <div class="contact-info">
            📞 ${cv.contact.telephone} <span>|</span> 
            ✉️ <a href="mailto:${cv.contact.email}">${cv.contact.email}</a><br>
            📍 ${cv.contact.ville} <span>•</span> ${cv.contact.permis}
        </div>
    </header>

    <!-- Profil -->
    <section>
        <h2>Profil</h2>
        <p>${cv.profil}</p>
    </section>

    <!-- Formations -->
    <section>
        <h2>Formations</h2>
        ${cv.formations.map(f => `
            <div class="item">
                <div class="item-header">
                    <strong>${f.diplome}</strong>
                    <span class="date">${f.date}</span>
                </div>
                <div class="lieu">${f.lieu}</div>
            </div>
        `).join("")}
    </section>

    <!-- Réalisations Web -->
    <section>
        <h2>Réalisations Web</h2>
        <ul>
            ${cv.projets.map(p => `<li>${p}</li>`).join("")}
        </ul>
    </section>

    <!-- Compétences -->
    <section>
        <h2>Compétences</h2>
        <ul class="competences-list">
            ${cv.competences.map(c => `<li>${c}</li>`).join("")}
        </ul>
    </section>

    <!-- Expériences professionnelles -->
    <section>
        <h2>Expériences professionnelles</h2>
        ${cv.experiences.map(e => `
            <div class="item">
                <div class="item-header">
                    <strong>${e.poste}</strong> — <span class="entreprise">${e.entreprise}</span>
                    <span class="date">${e.date}</span>
                </div>
                <p>${e.details}</p>
            </div>
        `).join("")}
    </section>

    <!-- Loisirs -->
    <section>
        <h2>Loisirs</h2>
        <ul>
            ${cv.loisirs.map(l => `<li>${l}</li>`).join("")}
        </ul>
    </section>
`;