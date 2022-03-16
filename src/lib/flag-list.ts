import france from "../assets/flags/france.jpg";
import germany from "../assets/flags/germany.jpg";
import australia from "../assets/flags/australia.jpg";
import franceTN from "../assets/flags/thumbnails/france_tn.jpg";
import germanyTN from "../assets/flags/thumbnails/germany_tn.jpg";
import australiaTN from "../assets/flags/thumbnails/australia_tn.jpg";

const FLAG_LIST = [
  { name: "France", continent: "europe", src: france, thumb: franceTN },
  { name: "Germany", continent: "europe", src: germany, thumb: germanyTN },
  {
    name: "Australia",
    continent: "oceania",
    src: australia,
    thumb: australiaTN,
  },
];

export default FLAG_LIST;
