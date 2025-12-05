const baseWorlds = [
  // 1 — Keith (Googol Globe 1/HZ)
  {
    id: 1,
    name: "Googol Globe 1/HZ",
    gi: "keithdtaylorsr1@gmail.com",
    status: "active",
    note: "Primary architect globe and Memphis DC anchor.",
    url: "https://www.google.com/maps/d/u/0/edit?mid=1C3KB_iiNrTCZIFGGZblwJwUyIWn66iA&usp=sharing"
  },

  // 2 — QRFCodeVeterans (Googol Globe 2/HZ)
  {
    id: 2,
    name: "Googol Globe 2/HZ",
    gi: "qrfcodeveterans@gmail.com",
    status: "active",
    note: "QRF Veterans operational globe for digital corridor deployment.",
    url: "https://www.google.com/maps/d/u/4/edit?mid=1-0hzlDqdjnbGTLPvbIf7WHHX2yF4owk&usp=sharing"
  },

  // Jason Summerfall — future General & Globes Keeper
  {
    id: 3,
    name: "Summerfall Core Globe A",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "Core futurist theater layout.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1oi58AQYieNZZN5mjh0IjNfx-u9K_nSs&usp=sharing"
  },
  {
    id: 4,
    name: "Summerfall Core Globe B",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "Secondary core grid for long-range motion.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1SLe7j44A3avlF3HIbLdMFFsuqmDcImk&usp=sharing"
  },
  {
    id: 5,
    name: "Summerfall Core Globe C",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "Extended perimeter and staging corridors.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1gFDyz0YofUPX4unNFOaoB1tNBYgPstg&usp=sharing"
  },
  {
    id: 6,
    name: "Summerfall Core Globe D",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "High-altitude globe for macro-view planning.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1POvNXR-46CR7qju1OnWYkK80n5BFxwE&usp=sharing"
  },
  {
    id: 7,
    name: "Ultradian 0630 Globe",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "Best focus window at 0630 — tactical start-of-day world.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1YvKVpFKPNIfOminh8D-wmJEwOtvXulg&usp=sharing"
  },
  {
    id: 8,
    name: "Ultradian 0930 Globe",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "Mid-morning rhythm alignment at 0930.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1AepqoocnHY-H-Yjmdb03fZ3wVNFINm8&usp=sharing"
  },
  {
    id: 9,
    name: "Closed-Loop Motion Theater",
    gi: "jasonsummerfall@gmail.com",
    status: "active",
    note: "First digital closed-loop theater based on Motion Proof.",
    url: "https://www.google.com/maps/d/u/1/edit?mid=1AepqoocnHY-H-Yjmdb03fZ3wVNFINm8&usp=sharing"
  },

  // ttthefisherman3560
  {
    id: 10,
    name: "Fisherman World",
    gi: "ttthefisherman3560@gmail.com",
    status: "active",
    note: "Operational fishing corridors and economic waterways.",
    url: "https://www.google.com/maps/d/u/6/edit?mid=17Gm3dDAMvQVSCG_GyYsgpAo56qbNu6Q&usp=sharing"
  },

  // theflightlinehq@gmail.com
  {
    id: 11,
    name: "FlightLine HQ Globe",
    gi: "theflightlinehq@gmail.com",
    status: "active",
    note: "Central HQ globe for global FlightLine operations.",
    url: "https://www.google.com/maps/d/u/5/edit?mid=14Sl2Gec79x4JjCCqQY4BTaA15FZ8XLI&usp=sharing"
  },

  // taylor@theflightlinehq.com — main architect set
  {
    id: 12,
    name: "Taylor Architect Globe A",
    gi: "taylor@theflightlinehq.com",
    status: "active",
    note: "Primary architect layout for corridor series.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1-C0P_0hPp10uK93rRLYennnIPbh3jsg&usp=sharing"
  },
  {
    id: 13,
    name: "Taylor Architect Globe B",
    gi: "taylor@theflightlinehq.com",
    status: "active",
    note: "Expansion grid for regional towers.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=19vsp4qXpTEHHFDBoaZgMuNltN1GMq5U&usp=sharing"
  },
  {
    id: 14,
    name: "Taylor Architect Globe C",
    gi: "taylor@theflightlinehq.com",
    status: "active",
    note: "Sub-corridor optimization and routing lanes.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1t8ZEVu1kYLnk3Ol1MfOdE40CDfUaDVk&usp=sharing"
  },
  {
    id: 15,
    name: "Taylor Architect Globe D",
    gi: "taylor@theflightlinehq.com",
    status: "active",
    note: "Specialized tower alignments.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=19JLNnlN-lVyidq1LHFQeo7dpsahOqR8&usp=sharing"
  },
  {
    id: 16,
    name: "Taylor Architect Globe E",
    gi: "taylor@theflightlinehq.com",
    status: "active",
    note: "Supporting grid for future DSX channels.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1bE4dNqjg3EiZo3BiHkCnqqAdnlqH6dI&usp=sharing"
  },

  // Flight Crew Officers — Clear Sky classified
  {
    id: 17,
    name: "Clear Sky 17th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 17th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1XsB5Ybr7KWnycxmqxCh_4QKtCTSKC-4&usp=sharing"
  },
  {
    id: 18,
    name: "Clear Sky 16th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 16th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1pU9Y9LSNA5_DFw4LctEmxToifS7g6Gs&usp=sharing"
  },
  {
    id: 19,
    name: "Clear Sky 15th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 15th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1kwEeLdWVYaM4NffLN9D35IW7SiwyPe0&usp=sharing"
  },
  {
    id: 20,
    name: "Clear Sky 14th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 14th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1mkdDitX0Z6Iz1QCeKi4CANe0nPiv2bQ&usp=sharing"
  },
  {
    id: 21,
    name: "Clear Sky 13th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 13th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=15FCIOqwu4S5r6WdIuTekObies8NQGtc&usp=sharing"
  },
  {
    id: 22,
    name: "Clear Sky 12th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 12th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1CzNpIrq6rjScKUTPtA7ER0PeT8xNGyo&usp=sharing"
  },
  {
    id: 23,
    name: "Clear Sky 11th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 11th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1XRXb5QiVeeVBQ-pcQx5-kDjPQYvwsxY&usp=sharing"
  },
  {
    id: 24,
    name: "Clear Sky 10th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 10th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1W8_0nV6f9-WOjiamAoReiE7Qqhh9Q4k&usp=sharing"
  },
  {
    id: 25,
    name: "Clear Sky 9th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 9th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1rHxTWz36OGMh7roPyGss89hSjAwpE4c&usp=sharing"
  },
  {
    id: 26,
    name: "Clear Sky 8th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 8th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1wXnbgmHGQ_7i73iv1xvtjX0EVHa13dc&usp=sharing"
  },
  {
    id: 27,
    name: "Clear Sky 7th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 7th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1razlgvLBp-0EiP_clkeJE9DNhbwl0AQ&usp=sharing"
  },
  {
    id: 28,
    name: "Clear Sky 6th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 6th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1dsfWw7k1xzNhqEZv16x1de6vhsyJLZw&usp=sharing"
  },
  {
    id: 29,
    name: "Clear Sky 5th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 5th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1uUiAQSg3kpr-qXjxO5wNGT0fYhGr_wI&usp=sharing"
  },
  {
    id: 30,
    name: "Clear Sky 4th",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 4th.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1INdHNGPkoewrL5teWpZH2CTp0XQUqCs&usp=sharing"
  },
  {
    id: 31,
    name: "Clear Sky 3rd",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 3rd.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1ibPLOmvyhyHzvrR2Af9QbZObM-14cj4&usp=sharing"
  },
  {
    id: 32,
    name: "Clear Sky 2nd",
    gi: "Clear Sky Flight Crew",
    status: "secret",
    note: "Flight Crew Officer sector — 2nd.",
    url: "https://www.google.com/maps/d/u/2/edit?mid=1SJ5wVoX6LX6y54c0kBcykh_a8-aDu4g&usp=sharing"
  }
];

// Fill remaining slots up to 100 as Coming Soon plates
for (let i = baseWorlds.length + 1; i <= 100; i++) {
  baseWorlds.push({
    id: i,
    name: `Reserved World #${String(i).padStart(3, "0")}`,
    gi: "Unassigned Architect",
    status: "inactive",
    note: "Reserved plate for future globe architect.",
    url: ""
  });
}

const grid = document.getElementById("planetGrid");

function renderWorld(world) {
  const tile = document.createElement("div");
  tile.className = `planet-tile ${world.status}`;

  let statusLabel = "";
  if (world.status === "active") statusLabel = "Active Globe";
  else if (world.status === "secret") statusLabel = "Clear Sky";
  else statusLabel = "Coming Soon";

  tile.innerHTML = `
    <div class="planet-header-row">
      <div class="planet-id">WORLD ${String(world.id).padStart(3, "0")}</div>
      <div class="status-pill status-${world.status}">
        ${statusLabel}
      </div>
    </div>
    <h2 class="planet-name">${world.name}</h2>
    <div class="planet-gi">GI: ${world.gi}</div>
    <div class="planet-note">${world.note}</div>
  `;

  tile.onclick = () => {
    if (world.status === "active" && world.url) {
      window.location.href =
        "frames/frame-active.html?url=" + encodeURIComponent(world.url);
    } else if (world.status === "secret") {
      window.location.href = "frames/frame-secret.html";
    } else {
      window.location.href = "frames/frame-inactive.html";
    }
  };

  grid.appendChild(tile);
}

baseWorlds.forEach(renderWorld);
