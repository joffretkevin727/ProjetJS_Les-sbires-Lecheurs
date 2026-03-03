-- ============================================
-- data.sql — Données d'exemples
-- ============================================

USE champ_commerce;

-- INSERT champions

INSERT INTO champions (name, difficulte, description, price, stock, reduction, devise, genre, image1, image2, image3)
VALUES (
    'Caitlyn',
    'Faible',
    'Caitlyn est la meilleure chasseuse de primes de Piltover, connue pour son sens de la justice inflexible et sa précision redoutable au fusil de précision. Née dans une famille aisée, elle a choisi de défendre l ordre plutôt que de profiter de ses privilèges.',
    880,
    75,
    0,
    'RP',
    'Féminin',
    '/assets/img/caitlyn_1.png',
    '/assets/img/caitlyn_2.png',
    '/assets/img/caitlyn_3.png'
);

-- INSERT roles

INSERT INTO roles (nom) VALUES ('Tireur');

-- INSERT champion_roles

INSERT INTO champion_roles (champion_id, role_id)
VALUES (
    (SELECT id FROM champions WHERE name = 'Caitlyn'),
    (SELECT id FROM roles WHERE nom = 'Tireur')
);


-- INSERT skins

INSERT INTO skins (champion_id, nom, prix) VALUES
    ((SELECT id FROM champions WHERE name = 'Caitlyn'), 'Skin de base', 0),
    ((SELECT id FROM champions WHERE name = 'Caitlyn'), 'Arcane Caitlyn', 1350),
    ((SELECT id FROM champions WHERE name = 'Caitlyn'), 'Pulsefire Caitlyn', 1820);

-- INSERT chromas

INSERT INTO chromas (skin_id, nom, prix) VALUES
    ((SELECT id FROM skins WHERE nom = 'Arcane Caitlyn'), 'Ruby', 290),
    ((SELECT id FROM skins WHERE nom = 'Arcane Caitlyn'), 'Sapphire', 290),
    ((SELECT id FROM skins WHERE nom = 'Arcane Caitlyn'), 'Emerald', 290);

-- INSERT icon_avatars

INSERT INTO icon_avatars (champion_id, nom, prix) VALUES
    ((SELECT id FROM champions WHERE name = 'Caitlyn'), 'Icône Caitlyn Classique', 250),
    ((SELECT id FROM champions WHERE name = 'Caitlyn'), 'Icône Caitlyn Prestige', 250),
    ((SELECT id FROM champions WHERE name = 'Caitlyn'), 'Icône Caitlyn Arcane', 250);