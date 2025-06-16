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
        $candid = new Candidature();
        $candid->setEntreprise("Capgemini")
            ->setPoste("Ingénieure/Ingénieur système Linux")
            ->setStatut(StatutC::AP)
            ->setLienOffre("https://www.capgemini.com/jobs/f4LSWZcBaMNyexKOmIE9/263102-fr_FR/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
            ->setAdresse("12 Rue Emile Zola, Orléans")
            ->setNotes("Je postulerai quand j'aurai rédiger ma lettre")
            ->setDate(new \DateTime('2025-06-11'));

        $manager->persist($candid);

        $candid2 = new Candidature();
        $candid2->setEntreprise("Tereos")
            ->setPoste("Développeur de Solutions It industrielles")
            ->setStatut(StatutC::EV)
            ->setLienOffre("https://tereos.csod.com/ux/ats/careersite/1/home/requisition/3042?c=tereos&lang=fr-FR")
            ->setAdresse("Route de Paris, Artenay")
            ->setNotes("J'attends une réponse mais c'est pas la porte à côté...")
            ->setDate(new \DateTime('2025-06-16'));
        
        $manager->persist($candid2);

        $manager->flush();
    }
}
