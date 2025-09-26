# 🌥️ RTELCloud

**RTELCloud** est une plateforme cloud scolaire destinée à la filière **Réseaux et Télécommunications (RTEL)**.  
Elle permet aux étudiants et enseignants de **stocker, organiser, partager et consulter** facilement leurs cours, travaux pratiques et documents pédagogiques via une interface web moderne.


![Last Commit](https://img.shields.io/github/last-commit/yannArmelGALLIE/RTELCloud?style=for-the-badge&logoColor=white)

![Languages Count](https://img.shields.io/github/languages/count/yannArmelGALLIE/RTELCloud?style=for-the-badge&logoColor=white)


---

## ✨ Description
**RTELCloud** vise à simplifier l’accès aux ressources pédagogiques.  
Plutôt que de s’échanger des cours via email ou clé USB, les utilisateurs peuvent :
- Mettre en ligne des fichiers (PDF, PPT, vidéos, images…)
- Les organiser par matière ou par type (cours, TP, examens…)
- Les consulter en ligne ou les télécharger
- Collaborer facilement entre étudiants et enseignants

---

## 🚀 Fonctionnalités
✅ **Gestion des utilisateurs**  
- Rôles (enseignants / étudiants)  
- Connexion sécurisée (JWT ou OAuth2)  

✅ **Gestion des documents**  
- Upload et téléchargement de fichiers  
- Aperçu intégré (PDF, images, PPT)  
- Organisation par dossiers et tags  

✅ **Recherche avancée**  
- Trouver des cours par titre, matière ou auteur  

✅ **Tableau de bord**  
- Vue des derniers fichiers ajoutés  
- Statistiques d’utilisation  

✅ **Sécurité et sauvegarde**  
- Connexion HTTPS (SSL/TLS)  
- Contrôle d’accès basé sur les rôles  
- Sauvegarde régulière des données  

---

## 🚀 Technologies utilisées

<p>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
  <img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=java&logoColor=white" />
  <img alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" />
  <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="MongoDB" src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white" />
</p>

## 🏗️ Architecture du projet

- **Frontend** : React → interface utilisateur responsive et moderne  
- **Backend** : Java (Spring Boot) → logique métier, API REST, sécurité  
- **Base de données** : MongoDB  → utilisateurs et métadonnées  
- **Stockage** : fichiers stockés localement

---

## ⚙️ Installation et exécution

### 🟩 Prérequis
- [Node.js](https://nodejs.org/) ≥ 18.x  
- [Java JDK](https://adoptium.net/) ≥ 17  
- [Maven](https://maven.apache.org/) ≥ 3.9  
- [MongoDB](https://www.mongodb.com/) ≥ 6.x  
- Un IDE (IntelliJ, VS Code ou Eclipse)

---

### 🔽 Cloner le projet
```
git clone https://github.com/votre-nom-utilisateur/RTELCloud.git
cd RTELCloud
```

### ⚙️ Lancer le backend (Spring Boot)
```
cd backend
mvn clean install
mvn spring-boot:run
```

### 🌐 Lancer le frontend (React)
```
cd frontend
npm install
npm start

```
## 🗂️ Structure des dossiers
```
RTELCloud/
├── backend/                 # API Java Spring Boot
│   ├── src/main/java/...
│   └── resources/
│
├── web/                # Application React
│   ├── public/
│   └── src/
│
├── docs/                    # Documentation technique
└── README.md
```

## 👨‍💻 Auteur

RTELCloud est développé par : 
Koffi Yann-Armel GALLIE – [github](https://github.com/yannArmelGALLIE/)


