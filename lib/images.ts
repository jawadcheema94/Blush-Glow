export function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMG = {
  heroBride: unsplash("photo-1587271315307-eaebc181c749", 1400),
  heroBride2: unsplash("photo-1617633150878-7df1d12a9a57", 1200),
  heroBride3: unsplash("photo-1610276347233-2ab70fc71da8", 1000),
  salonInterior1: unsplash("photo-1533008093099-e2681382639a", 1600),
  salonInterior2: unsplash("photo-1540567592819-88185873775d", 1600),
  salonInterior3: unsplash("photo-1746723378067-83a345ff3160", 1600),
  salonInterior4: unsplash("photo-1636990490461-b98d2302b9fb", 1600),

  bridalMakeup: [
    unsplash("photo-1512496015851-a90fb38ba796", 1400),
    unsplash("photo-1610047614301-13c63f00c032", 1400),
    unsplash("photo-1610173827043-9db50e0d8ef9", 1400),
    unsplash("photo-1631549424057-403e75d68e2f", 1400),
  ],
  partyMakeup: [
    unsplash("photo-1709477542149-f4e0e21d590b", 1400),
    unsplash("photo-1596205521983-9c372fb3d4f1", 1400),
    unsplash("photo-1611826585949-b0ccabd2c1a4", 1400),
    unsplash("photo-1594647210801-5124307f3d51", 1400),
  ],
  facialSkincare: [
    unsplash("photo-1570172619644-dfd03ed5d881", 1400),
    unsplash("photo-1643684391140-c5056cfd3436", 1400),
    unsplash("photo-1616394584738-fc6e612e71b9", 1400),
    unsplash("photo-1731514771613-991a02407132", 1400),
  ],
  hairStyling: [
    unsplash("photo-1774660810744-fd0fbbf99765", 1400),
    unsplash("photo-1774660810811-fc81a515311d", 1400),
    unsplash("photo-1786515441626-06606e9e4744", 1400),
    unsplash("photo-1650897343655-6299fa3eaa3c", 1400),
  ],
  hairCutting: [
    unsplash("photo-1634449571010-02389ed0f9b0", 1400),
    unsplash("photo-1580618672591-eb180b1a973f", 1400),
    unsplash("photo-1560869713-7d0a29430803", 1400),
    unsplash("photo-1554519934-e32b1629d9ee", 1400),
  ],
  hairColour: [
    unsplash("photo-1617391654484-2894196c2cc9", 1400),
    unsplash("photo-1658322558683-2524c9b62d04", 1400),
    unsplash("photo-1605980625982-b128a7e7fde2", 1400),
    unsplash("photo-1680670500665-22e480bcb0fa", 1400),
  ],
  mehndiArt: [
    unsplash("photo-1732118400647-a81e3b37be87", 1400),
    unsplash("photo-1623217509141-6f735087b50c", 1400),
    unsplash("photo-1629332791128-58f00882964d", 1400),
    unsplash("photo-1599671229994-bc8fd4df731c", 1400),
  ],

  avatars: [
    unsplash("photo-1758600587815-b654d1405e83", 300),
    unsplash("photo-1759840278361-f1adc75529a1", 300),
    unsplash("photo-1771507213365-c6047b40e2e1", 300),
    unsplash("photo-1761125135357-99cbe52a6271", 300),
    unsplash("photo-1763393234091-c6d676f8355a", 300),
  ],
};
