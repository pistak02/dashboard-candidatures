<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Candidature;

class CandidatureFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $candid = new Candidature();
        $candid->setEntreprise("Capgemini")
            ->setPoste("Ingénieure/Ingénieur système Linux")
            ->setStatut("À postuler")
            ->setLienOffre("https://www.capgemini.com/jobs/f4LSWZcBaMNyexKOmIE9/263102-fr_FR/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic")
            ->setAdresse("12 Rue Emile Zola, Orléans")
            ->setNotes("Je postulerai quand j'aurai rédiger ma lettre")
            ->setDate(new \DateTime('2025-06-11'));

        $manager->persist($candid);
        

        $manager->flush();
    }
}
