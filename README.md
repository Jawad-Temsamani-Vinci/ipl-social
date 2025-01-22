# IPL Social

**Nom:** Temsamani  
**Prénom:** Jawad  
**Email:** jawad.temsamani@student.vinci.be  
**URL GitHub:** https://github.com/Jawad-Temsamani-Vinci/ipl-social

## Description du projet
Le projet sert à verifier que son mot de passe est bien conforme.

## Explication du code
Le code contient une fonction de validation de mot de passe qui vérifie les critères suivants :
1. Le mot de passe doit contenir au moins 8 caractères.
2. Le mot de passe doit contenir au moins un caractère spécial.
3. Le mot de passe doit contenir au moins un chiffre.
4. Le mot de passe ne doit pas contenir la chaîne de caractères "IPL" (quelle que soit la casse).

Les tests unitaires pour cette fonction sont écrits en utilisant Jasmine et se trouvent dans le fichier `spec/passwordChecker.spec.js`.

## Exécution des tests
Pour exécuter les tests, utilisez la commande suivante dans votre terminal :
```bash
npm run test
```

## Informations supplémentaires
- Assurez-vous d'avoir Node.js et npm installés sur votre machine.
- Pour installer les dépendances, exécutez `npm install` dans le répertoire du projet.
- Ce projet utilise GitHub Actions pour l'intégration continue, ce qui permet d'exécuter automatiquement les tests à chaque fois que du code est poussé dans le dépôt.
