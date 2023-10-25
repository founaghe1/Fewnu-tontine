
# La Documentation de fewnu tontine
Fewnu tontine est une application web progressive qui permet de gérer des tontines .

## Installation
    cloner le project
        ```bash
            cd fewnu-tontine
            npm install 
            npm run start
        ```
## structure du project

### Cote Frontend
#### Partie Utilisateur
        1-	Page de connexion
        2-	Page d’ajouter des cotisations
        3-	List des cotisations
        4-	Page de modification de profil
        5-	List des tontines

#### Partie Administration
        1-	Page d’inscription des membres
        2-	Page de création de tontine
        3-	Page ajout membre
        4-	Page List des membres
        5-	Page Cotisation
        6-	Page List des cotisations
        7-	Page List des tontines
        8-	Historique des cotisations
        9-	Statistique des cotisations
        10-	Top progression

### Cote Backend

#### Partie utilisateur
        •	S'authentifier;
        •	Se rappeler son code utilisateur;
        •	Se rappeler son mot de passe.
        •	Voir la List des tontines 
        •	Faire des cotisations
        •	Voir la List de ces cotisations
        •	Pouvoir modifier son profil 

#### Partie admin
        •	Ajouter, modifier, archiver des membres
        •	Lister des membres
        •	Ajouter des tontines
        •	Voir Access sur les tontines
        •	Voir les cotisations des membres de chaque tontine
        •	Voir historique des cotisations


## Technologie utilise

**Client:** Pwa Reactjs

**Server:** Node, Express, mongoDB


## Deployment

le deploiment se fait sur la branch master qui est un deploiment continue sur vercel

```bash
  git add 
  git commit -m
  git push 

```


