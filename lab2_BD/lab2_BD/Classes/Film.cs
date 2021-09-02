using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lab2_BD.Classes
{
    public class Film
    {
        public string Titre { get; set; }
        public string Directeur { get; set; }
        public string Auteur { get; set; }
        public int Date { get; set; }

        public Vedette[] Vedettes { get; set; }
        public string Description { get; set; }
        public string Budget { get; set; }
        public string FdsOpen { get; set; }
        public string Usa { get; set; }
        public string Mondial { get; set; }

    }
}
