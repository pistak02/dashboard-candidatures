
import Title from './../components/layout/Title/Title';

function About(){
    return (
        <div className='content'>
            <Title>À propos</Title>
            <div className='content-about'>
                <div>
                    <p>J'ai développé cette app pour perfectionner mes compétences en React et Symfony, 
                        tout en répondant à un besoin réel que j'avais : celui de pouvoir gérer mes candidatures.
                        J'ai volontairement omis l'authentification pour faciliter aux potentiels la possibilté de
                        tester mon app (je l'ai déjà mise en place avec Symfony ou Django sur d'autres projets académiques.)
                    </p>
                    <p>
                        Je suis étudiant en master informatique à l'Université d'Orléans, et donc à la recherche d'une alternance en développement informatique/systèmes d'informations 
                        en région Centre à partir de septembre 2025 pour une durée de 24 mois.
                    </p>
                </div>
                <div className="stack">
                    <span className="data-stack">Frontend : React</span>
                    <span className="data-stack">Backend : Symfony API</span>
                    <span className="data-stack">BDD : MySQL</span>
                </div>
                <div className='github'>
                    Code source
                    <div className="logo-git">
                        <a href='https://github.com/pistak02/dashboard-candidatures' target='_blank' rel='noreferrer'>
                            <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='content-bot'>
                    <p>
                        Version 1.0 - Juin 2025
                    </p>
                    <p>
                        Ce site ne collecte aucune donnée personnelle. Il est proposé à titre de démonstration.
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;