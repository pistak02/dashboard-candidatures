<?php

namespace App\Controller;

use App\typeEnum\StatutC;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class StatutController {
    #[Route('/api/statuts', name: 'app_statut')]
    public function __invoke(): JsonResponse
    {
        $statuts = [];
        foreach (StatutC::cases() as $case) {
            $statuts[] = [
                'code' => $case->name,
                'label' => $case->value
            ];
        }
        return new JsonResponse($statuts);
    }
}
