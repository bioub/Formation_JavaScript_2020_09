<?php

// Créer et appeler une fonction qui affiche un nombre
// aléatoire compris en 0 et 100 avec la fonction
// var_dump :
function afficheEntierAlea()
{
    $nbAlea = mt_rand(0, 100);
    var_dump($nbAlea);
}

afficheEntierAlea();

// Créer une fonction qui reçoit en entrée
// un prénom et nom et qui affiche le nom complet
// avec var_dump
function afficheNomComplet($prenom, $nom)
{
    var_dump("$prenom $nom");
}

afficheNomComplet('Romain', 'Bohdanowicz');
afficheNomComplet('Jean', 'Dupont');

// Créer une fonction qui retourne vrai ou faux
// vrai si un nombre passé en entrée est un multiple de 10
// faux sinon
function estMultiple10($nb)
{
    return $nb % 10 === 0;
}

if (estMultiple10(20)) {
    var_dump('20 est un multiple de 10');
}

// Créer une fonction qui retourne la somme
// de tous les éléments d'un tableau
function sumArray($array)
{
    return array_sum($array);
}

var_dump(sumArray([1, 2, 3, 4])); // 10

// Créer une fonction qui retourne les valeurs min et max
// d'un tableau
function getMinMaxFromArray($array)
{
    $min = min($array);
    $max = max($array);

    return ['min' => $min, 'max' => $max];
}

var_dump(getMinMaxFromArray([1, 2, 8, 20, 0]));
