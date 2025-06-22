<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Candidature;

use App\typeEnum\StatutC;
class CandidatureFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $c1 = new Candidature();
        $c1->setEntreprise("Capgemini")
            ->setPoste("Ingénieure/Ingénieur système Linux")
            ->setStatut(StatutC::AP)
            ->setLienOffre("https://www.capgemini.com/jobs/f4LSWZcBaMNyexKOmIE9/263102-fr_FR/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
            ->setAdresse("12 Rue Emile Zola, Orléans")
            ->setNotes("Je postulerai quand j'aurai rédiger ma lettre")
            ->setDate(new \DateTime('2025-06-11'));
        $manager->persist($c1);

        $c2 = new Candidature();
        $c2->setEntreprise("Tereos")
            ->setPoste("Développeur de Solutions It industrielles")
            ->setStatut(StatutC::EV)
            ->setLienOffre("https://tereos.csod.com/ux/ats/careersite/1/home/requisition/3042?c=tereos&lang=fr-FR")
            ->setAdresse("Route de Paris, Artenay")
            ->setNotes("J'attends une réponse mais c'est pas la porte à côté...")
            ->setDate(new \DateTime('2025-06-16'));
        $manager->persist($c2);

        $c3 = new Candidature();
        $c3->setEntreprise("Sopra Steria")
            ->setPoste("Développeuse / Développeur Full Stack")
            ->setStatut(StatutC::EV)
            ->setLienOffre("https://www.soprasteria.com/fr/carrieres/offres/fullstack")
            ->setAdresse("20 Rue Ampère, Tours")
            ->setNotes("Candidature envoyée le jour même de la publication")
            ->setDate(new \DateTime('2025-06-10'));
        $manager->persist($c3);

        $c4 = new Candidature();
        $c4->setEntreprise("Thales")
            ->setPoste("Ingénieur Cybersécurité")
            ->setStatut(StatutC::EN)
            ->setLienOffre("https://www.thalesgroup.com/fr/carrieres/offres/cybersec")
            ->setAdresse("1 Avenue Augustin Fresnel, Vélizy-Villacoublay")
            ->setNotes("Entretien prévu le 20 juin")
            ->setDate(new \DateTime('2025-06-14'));
        $manager->persist($c4);

        $c5 = new Candidature();
        $c5->setEntreprise("Orange Business")
            ->setPoste("Développeur backend Java")
            ->setStatut(StatutC::SR)
            ->setLienOffre("https://orange.jobs/java-backend")
            ->setAdresse("3 Avenue du Jura, Châtillon")
            ->setNotes("Aucune réponse après relance")
            ->setDate(new \DateTime('2025-06-05'));
        $manager->persist($c5);

        $c6 = new Candidature();
        $c6->setEntreprise("Dassault Systèmes")
            ->setPoste("Software Engineer C++")
            ->setStatut(StatutC::AP)
            ->setLienOffre("https://careers.3ds.com/software-cpp")
            ->setAdresse("10 Rue Marcel Dassault, Vélizy")
            ->setNotes("À postuler après mise à jour du CV")
            ->setDate(new \DateTime('2025-06-18'));
        $manager->persist($c6);

        $c7 = new Candidature();
        $c7->setEntreprise("Airbus")
            ->setPoste("DevOps Engineer")
            ->setStatut(StatutC::EV)
            ->setLienOffre("https://jobs.airbus.com/devops")
            ->setAdresse("316 Route de Bayonne, Toulouse")
            ->setNotes("Profil retenu pour short-list")
            ->setDate(new \DateTime('2025-06-15'));
        $manager->persist($c7);

        $c8 = new Candidature();
        $c8->setEntreprise("Renault Group")
            ->setPoste("Data Analyst")
            ->setStatut(StatutC::SR)
            ->setLienOffre("https://jobs.renault.com/data-analyst")
            ->setAdresse("13 Quai Alphonse Le Gallo, Boulogne-Billancourt")
            ->setNotes("Toujours pas de nouvelles après deux semaines")
            ->setDate(new \DateTime('2025-06-01'));
        $manager->persist($c8);

        $c9 = new Candidature();
        $c9->setEntreprise("OVHcloud")
            ->setPoste("Ingénieur réseau")
            ->setStatut(StatutC::AP)
            ->setLienOffre("https://careers.ovh.com/network")
            ->setAdresse("2 Rue Kellermann, Roubaix")
            ->setNotes("À postuler si entretien Ubisoft ne donne rien")
            ->setDate(new \DateTime('2025-06-17'));
        $manager->persist($c9);

        $c10 = new Candidature();
        $c10->setEntreprise("CEA")
            ->setPoste("Développeur Python scientifique")
            ->setStatut(StatutC::EV)
            ->setLienOffre("https://www.cea.fr/carrieres/python-dev")
            ->setAdresse("91191 Gif-sur-Yvette")
            ->setNotes("Profil intéressant, à relancer si pas de réponse")
            ->setDate(new \DateTime('2025-06-13'));
        $manager->persist($c10);

        $c11 = new Candidature();
        $c11->setEntreprise("Microsoft France")
            ->setPoste("Cloud Solution Architect")
            ->setStatut(StatutC::RF)
            ->setLienOffre("https://careers.microsoft.com/archi-cloud")
            ->setAdresse("39 Quai du Président Roosevelt, Issy-les-Moulineaux")
            ->setNotes("Reçu un refus automatique")
            ->setDate(new \DateTime('2025-06-03'));
        $manager->persist($c11);

        $c12 = new Candidature();
        $c12->setEntreprise("Ubisoft")
            ->setPoste("Game Tools Developer")
            ->setStatut(StatutC::AC)
            ->setLienOffre("https://www.ubisoft.com/fr/jobs/game-tools")
            ->setAdresse("28 Rue Armand Carrel, Montreuil")
            ->setNotes("Acceptée mais salaire en discussion")
            ->setDate(new \DateTime('2025-06-12'));
        $manager->persist($c12);

        $manager->flush();
    }
}
