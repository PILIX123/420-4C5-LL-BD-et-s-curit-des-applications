using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using lab2_BD.Classes;
using Microsoft.Extensions.Logging;

namespace lab2_BD.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmsController : ControllerBase
    {
        [HttpGet("{NomFilm}")]
        public Film Get(string NomFilm, bool JusteVedette, int MaxVedette =3)
        { 
            Film FightClub = new Film {
                Titre = "Fight Club",
                Directeur = "David Fincher",
                Auteur = "Chuck Palahnuik",
                Date = 1999,
                Vedettes = new Vedette[] {
                    new Vedette { Nom = "Brad Pitt", Personnage = "Tyler Durden", Age = 57 },
                    new Vedette { Nom = "Edward Norton", Personnage = "The Narrator", Age = 52 },
                    new Vedette { Nom = "Meat Loaf", Personnage = "Robert 'Bob' Paulsen", Age = 73 }
                },
                Description = "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
                Budget = "63 000 000",
                FdsOpen = "11 035 485",
                Usa = "37 030 102",
                Mondial = "101 209 702"
            };
            Film Minions = new Film
            {
                Titre = "Les Minions",
                Directeur = "Kyle Balda, Pierre Coffin",
                Auteur = "Brian Lynch",
                Date = 2015,
                Vedettes = new Vedette[]
                {
                    new Vedette{Nom= "Sandra Bullock", Personnage = "Scarket Overkill (voix)", Age = 66 },
                    new Vedette{Nom = "Jon Ham", Personnage = "Herb Overkil (voix)", Age = 50 },
                    new Vedette{Nom = "Michael Keaton", Personnage = "Walter Nelson (voix)", Age = 69}
                },
                Description = "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
                Budget = "74 000 000",
                FdsOpen = "115 718 405",
                Usa = "336 045 770",
                Mondial = "1 159 444 662"
            };
            Film Jours = new Film
            {
                Titre = "365 Jours",
                Directeur = "Barbara Bialowas, Tomasz Mandes",
                Auteur = "Tomasz Mandes",
                Date = 2020,
                Vedettes = new Vedette[]
                {
                    new Vedette{Nom = "Anna Maria Sieklucka", Personnage = "Laura", Age = 29 },
                    new Vedette{Nom = "Michele Morrone", Personnage = "Massimo", Age = 30 },
                    new Vedette{Nom = "Bronislaw Wroclaski", Personnage = "Mario", Age = 69}
                },
                Description = "Massimo is a member of the Sicilian Mafia family and Laura is a sales director. She does not expect that on a trip to Sicily trying to save her relationship, Massimo will kidnap her and give her 365 days to fall in love with him.",
                Budget = "Inconnu",
                FdsOpen = "Inconnu",
                Usa = "Inconnu",
                Mondial = "9 458 590"
            };
            Film[] films = new Film[] { FightClub, Minions, Jours };
            Film choisi = new Film();
            Vedette[] vchoisi = new Vedette[] { };
            foreach (Film film in films)
            {
                if (film.Titre == NomFilm)
                {
                    choisi = film;
                }
            }
            if (JusteVedette)
            {
                vchoisi = choisi.Vedettes;
                choisi = new Film();
                choisi.Titre = NomFilm;
                choisi.Vedettes = vchoisi;
            }
            if(MaxVedette > -1 && MaxVedette!=3)
            {
                vchoisi = choisi.Vedettes;
                choisi.Vedettes = new Vedette[0];
                if(MaxVedette == 2)
                {
                    choisi.Vedettes = new Vedette[] { vchoisi[0], vchoisi[1] };
                }
                else if(MaxVedette == 0)
                {
                    choisi.Vedettes = new Vedette[] {};
                }
                else
                {
                    choisi.Vedettes = new Vedette[] { vchoisi[0] };
                }
            }
            return choisi;
        }
    }
}