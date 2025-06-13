<?php

namespace App\typeEnum;

enum StatutC: string {
    case AP = 'À postuler';
    case EV = 'Envoyée';
    case EN = 'Entretien';
    case RF = 'Refusée';
    case SR = 'Sans réponse';
    case AC = 'Acceptée';
    case AB = 'Abandonnée'; 
}