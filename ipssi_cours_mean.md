------------------------------------------------------
# What is Node.js
------------------------------------------------------

    + check node version `node -v`
    + check npm version `npm -v`
    + check nvm `https://github.com/creationix/nvm` Node version manager

    + NODE R.E.P.L. (Read Eval Print Loop)
    . Une boucle R.E.P.L. est un environnement simple , interactive de programmation informatique qui prend des entrées mono-utilisateur (par exemple expressions simples ) , les évalue , et renvoie le résultat à l'utilisateur.
    .Un programme écrit dans un environnement REPL est exécutée par morceaux .

    + Node.js correspond à du Javascript sur server
    + check http://electron.atom.io/: Atom (IDE de github) utilise Electron. C'est un Builder en Cross Plateform. Cela permet d'avoir une fenêtre de navigateur sans navigateur.

    + Node.js est de plus en plus populaire comme plateforme serveur, elle est utilisée par Groupon, SAP, LinkedIn, Microsoft, Yahoo!, Walmart, Rakuten et PayPal.
    . Développeur : Ryan Lienhart Dahl et les développeurs de Node.js (https://github.com/nodejs/node-v0.x-archive/blob/master/AUTHORS)
    . Site web Node.js `https://nodejs.org/en/`
    . Écrit en : C++, JavaScript

    + NODE.JS
    . A JavaScript runtime environment running Google Chrome’s V8 engine
    . Designed for high concurrency
    . Evented, Non Blocking I/O
    . CommonJs module system

    . Node.js est une plateforme logicielle libre et événementielle en JavaScript orientée vers les applications réseau qui doivent pouvoir monter en charge. Elle utilise la machine virtuelle V8 et implémente sous licence MIT les spécifications CommonJS. Node.js contient une bibliothèque de serveur HTTP intégrée, ce qui rend possible de faire tourner un serveur web sans avoir besoin d'un logiciel externe comme Apache ou Lighttpd, et permettant de mieux contrôler la façon dont le serveur web fonctionne.

    + Sync VS ASync
    . Le synchronisme désigne le caractère de ce qui se passe en même temps, à la même vitesse. L'adjectif synchrone définit deux processus qui se déroulent de manière synchronisée. Il s'oppose à asynchrone.
    . Synchrone: https://fr.wikipedia.org/wiki/Synchronisme
    . Une méthode est synchrone si elle attend une réponse avant de retourner la sienne !
    . Quand on rentre une URL on attends une réponse c'est synchrone

    . L’asynchronisme désigne le caractère de ce qui ne se passe pas à la même vitesse, que ce soit dans le temps ou dans la vitesse proprement dite, par opposition à un phénomène synchrone.
    .Asynchrone: https://fr.wikipedia.org/wiki/Asynchronisme
    . Une méthode est asynchrone si elle est lancée en parallèle de l'exécution du programme !
    . Une requête Ajax est asynchrone, toutefois, le processus Ajax est un process synchrone

    + Apache VS Nginx
    . Apache = One Thread Connection
    . Nginx = EVENT LOOPS

    + NPM
    . Gestionnaire de paquets pour Node.JS
    . Depuis la version 0.6.3 npm fait partie de l'environement Node et est donc automatiquement installé

    + Express framework JS 

    + Middlewares : Anything that is in between the raw request and the intended route is a Middleware. Invoked in the order they are added to the Middleware stack

    
------------------------------------------------------
# How Javascript on the server is different from Javascript on the client (Node.js & MongoDB)
------------------------------------------------------
    + MongoDB (from "humongous") is an open-source document database, and the leading NoSQL database. Written in C++
    . Type : Base de données orientée documents
    . MongoDB est un système de gestion de base de données orientée documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données.

    + Mongo DB is NOSQL (Not Only SQL)
    . MongoDB uses BSON as the data storage and network transfer format for "documents"
    . Bson:
        - Fast scan-ability
        - Easy manipulation
        - Additional data types
    . SAMPLE BSON:
        x = {
              "_id": ObjectId("4dcd3ebc9278000000005158"),
              "d": ISODate("2011-05-13T14:22:46.777Z"),
              "b": BinData(0, ""),
              "c": "aa",
              "n": 3,
              "e": [],
              "n2": NumberLong(33)
            }

    + MongoDB
    . list db `show dbs`
    . create db `use '<name>'`
    . create collection `db.createCollection('<name>')`
    . show wich current DB is used `db`
    . `show collections` in order to show actual collections

    + Mongo & Node
    . install mongojs


------------------------------------------------------
# How Node's evented I/O works
------------------------------------------------------


------------------------------------------------------
# Event Loops
------------------------------------------------------


------------------------------------------------------
# NPM, what is it & how to use it
------------------------------------------------------
