# Atelier magique — conception et réalisation

But : permettre à un enfant de dessiner, colorier des modèles, placer et redimensionner des stickers, ajouter des paillettes animées, sauvegarder et reprendre son dessin.
Conception approuvée par l’utilisateur ; réalisation complète explicitement demandée. Exécution dans ce nouveau dossier isolé.

Architecture : React et Vite, canvas 960 × 640 pour le dessin raster, stickers et effets conservés en objets indépendants. Le même moteur dessine l’aperçu et les exports. Tout le dessin reste dans le navigateur ; aucun serveur de données. Export GIF de 24 images sur 2,4 secondes, PNG pleine résolution. Encodage GIF avec gifenc dans un worker.

- [x] Moteur : remplissage contigu, historique, validation de sauvegarde. Tests des frontières, annuler/refaire et données invalides.
- [x] Atelier : dessin tactile/souris, gomme, palette, 3 modèles à colorier, stickers déplaçables/redimensionnables, étoiles/cœurs/paillettes. Interface responsive française.
- [x] Sauvegarde locale automatique après chaque action, récupération au démarrage, erreur de quota visible. Nouveau dessin confirmé et annulable.
- [x] Export : rendu identique, PNG et GIF animé, progression, résultat téléchargeable. Décodage indépendant du GIF et comparaison des images.
- [x] Vérification navigateur : traits, remplissage, stickers, animations, annuler, reprise, export et vue mobile ; build de production ; publication privée et remise du code source.

Points à vérifier : frontières anticrénelées, coordonnées après redimensionnement écran, interruption du pointeur, stockage indisponible/corrompu, GIF contenant des images différentes et restant utilisable pendant l’encodage.

Vérification : tests unitaires et parcours Chromium réussis ; GIF décodé indépendamment (24 images, scintillements, boucle infinie), PNG, reprise, coloriage et vue mobile. Relecture indépendante : accueil superposé après reprise/annulation corrigé et couvert par un test.
