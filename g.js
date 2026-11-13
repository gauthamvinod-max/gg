// Complete Periodic Table & Chemical Lab Mod for Sandboxels
// Adds all missing Periodic Table elements (1-118) + key laboratory reagents & reactions

(function() {
    // 1. Complete Periodic Table Data: [symbol, fullName, atomicNumber, state, color, density, meltTemp, boilTemp, categoryGroup]
    // Existing vanilla elements are automatically skipped or enhanced so nothing breaks!
    const periodicTable = [
        ["H", "hydrogen", 1, "gas", "#d4f1f9", 0.09, -259, -253, "nonmetal"],
        ["He", "helium", 2, "gas", "#ffe4e1", 0.18, -272, -269, "noble"],
        ["Li", "lithium", 3, "solid", "#c0c5ce", 534, 180, 1342, "alkali"],
        ["Be", "beryllium", 4, "solid", "#98a898", 1850, 1287, 2469, "alkaline"],
        ["B", "boron", 5, "powder", "#4b4444", 2340, 2076, 3927, "metalloid"],
        ["C", "carbon", 6, "powder", "#262626", 2267, 3550, 4827, "nonmetal"],
        ["N", "nitrogen", 7, "gas", "#c9e2ff", 1.25, -210, -196, "nonmetal"],
        ["O", "oxygen", 8, "gas", "#a6d8ff", 1.43, -218, -183, "nonmetal"],
        ["F", "fluorine", 9, "gas", "#e6ff99", 1.70, -220, -188, "halogen"],
        ["Ne", "neon", 10, "gas", "#ff6b6b", 0.90, -249, -246, "noble"],
        ["Na", "sodium", 11, "solid", "#d1d5db", 968, 98, 883, "alkali"],
        ["Mg", "magnesium", 12, "solid", "#e5e7eb", 1738, 650, 1091, "alkaline"],
        ["Al", "aluminum", 13, "solid", "#cfd4dc", 2700, 660, 2470, "post_transition"],
        ["Si", "silicon", 14, "solid", "#5c6470", 2330, 1414, 3265, "metalloid"],
        ["P", "phosphorus", 15, "powder", "#b83b3b", 1823, 44, 280, "nonmetal"],
        ["S", "sulfur", 16, "powder", "#facc15", 2070, 115, 445, "nonmetal"],
        ["Cl", "chlorine", 17, "gas", "#bef264", 3.21, -101, -34, "halogen"],
        ["Ar", "argon", 18, "gas", "#d8b4fe", 1.78, -189, -186, "noble"],
        ["K", "potassium", 19, "solid", "#cbd5e1", 862, 63, 759, "alkali"],
        ["Ca", "calcium", 20, "solid", "#f3f4f6", 1550, 842, 1484, "alkaline"],
        ["Sc", "scandium", 21, "solid", "#d6d3d1", 2985, 1541, 2836, "transition"],
        ["Ti", "titanium", 22, "solid", "#9ca3af", 4506, 1668, 3287, "transition"],
        ["V", "vanadium", 23, "solid", "#78716c", 6110, 1910, 3407, "transition"],
        ["Cr", "chromium", 24, "solid", "#e2e8f0", 7150, 1907, 2671, "transition"],
        ["Mn", "manganese", 25, "solid", "#a8a29e", 7210, 1246, 2061, "transition"],
        ["Fe", "iron", 26, "solid", "#6b7280", 7874, 1538, 2862, "transition"],
        ["Co", "cobalt", 27, "solid", "#4f6d9a", 8900, 1495, 2927, "transition"],
        ["Ni", "nickel", 28, "solid", "#b5b8b1", 8908, 1455, 2913, "transition"],
        ["Cu", "copper", 29, "solid", "#d97736", 8960, 1085, 2562, "transition"],
        ["Zn", "zinc", 30, "solid", "#94a3b8", 7140, 420, 907, "transition"],
        ["Ga", "gallium", 31, "solid", "#cbd5e1", 5910, 30, 2400, "post_transition"],
        ["Ge", "germanium", 32, "solid", "#64748b", 5323, 938, 2833, "metalloid"],
        ["As", "arsenic", 33, "powder", "#475569", 5727, 817, 614, "metalloid"],
        ["Se", "selenium", 34, "powder", "#52525b", 4810, 221, 685, "nonmetal"],
        ["Br", "bromine", 35, "liquid", "#7f1d1d", 3102, -7, 59, "halogen"],
        ["Kr", "krypton", 36, "gas", "#e9d5ff", 3.75, -157, -153, "noble"],
        ["Rb", "rubidium", 37, "solid", "#cbd5e1", 1532, 39, 688, "alkali"],
        ["Sr", "strontium", 38, "solid", "#e7e5e4", 2640, 777, 1377, "alkaline"],
        ["Y", "yttrium", 39, "solid", "#d4d4d8", 4472, 1526, 3336, "transition"],
        ["Zr", "zirconium", 40, "solid", "#a1a1aa", 6520, 1855, 4409, "transition"],
        ["Nb", "niobium", 41, "solid", "#71717a", 8570, 2477, 4744, "transition"],
        ["Mo", "molybdenum", 42, "solid", "#52525b", 10280, 2623, 4639, "transition"],
        ["Tc", "technetium", 43, "solid", "#6ee7b7", 11500, 2157, 4265, "radioactive"],
        ["Ru", "ruthenium", 44, "solid", "#9ca3af", 12450, 2334, 4150, "transition"],
        ["Rh", "rhodium", 45, "solid", "#e5e7eb", 12410, 1964, 3695, "transition"],
        ["Pd", "palladium", 46, "solid", "#d1d5db", 12023, 1555, 2963, "transition"],
        ["Ag", "silver", 47, "solid", "#f1f5f9", 10490, 962, 2162, "transition"],
        ["Cd", "cadmium", 48, "solid", "#94a3b8", 8650, 321, 767, "transition"],
        ["In", "indium", 49, "solid", "#cbd5e1", 7310, 157, 2072, "post_transition"],
        ["Sn", "tin", 50, "solid", "#9ca3af", 7265, 232, 2602, "post_transition"],
        ["Sb", "antimony", 51, "solid", "#64748b", 6697, 631, 1587, "metalloid"],
        ["Te", "tellurium", 52, "solid", "#78716c", 6240, 450, 988, "metalloid"],
        ["I", "iodine", 53, "solid", "#3b0764", 4933, 114, 184, "halogen"],
        ["Xe", "xenon", 54, "gas", "#c4b5fd", 5.89, -112, -108, "noble"],
        ["Cs", "cesium", 55, "solid", "#fde047", 1930, 28, 671, "alkali"],
        ["Ba", "barium", 56, "solid", "#d6d3d1", 3510, 727, 1845, "alkaline"],
        ["La", "lanthanum", 57, "solid", "#cbd5e1", 6162, 920, 3464, "lanthanide"],
        ["Ce", "cerium", 58, "solid", "#9ca3af", 6770, 795, 3443, "lanthanide"],
        ["Pr", "praseodymium", 59, "solid", "#a7f3d0", 6773, 935, 3520, "lanthanide"],
        ["Nd", "neodymium", 60, "solid", "#c4b5fd", 7010, 1024, 3074, "lanthanide"],
        ["Pm", "promethium", 61, "solid", "#34d399", 7260, 1042, 3000, "radioactive"],
        ["Sm", "samarium", 62, "solid", "#d1d5db", 7520, 1072, 1794, "lanthanide"],
        ["Eu", "europium", 63, "solid", "#e5e7eb", 5244, 826, 1529, "lanthanide"],
        ["Gd", "gadolinium", 64, "solid", "#cbd5e1", 7900, 1312, 3273, "lanthanide"],
        ["Tb", "terbium", 65, "solid", "#94a3b8", 8230, 1356, 3230, "lanthanide"],
        ["Dy", "dysprosium", 66, "solid", "#a1a1aa", 8540, 1407, 2567, "lanthanide"],
        ["Ho", "holmium", 67, "solid", "#d4d4d8", 8790, 1461, 2720, "lanthanide"],
        ["Er", "erbium", 68, "solid", "#fbcfe8", 9066, 1529, 2868, "lanthanide"],
        ["Tm", "thulium", 69, "solid", "#cbd5e1", 9320, 1545, 1950, "lanthanide"],
        ["Yb", "ytterbium", 70, "solid", "#e2e8f0", 6900, 824, 1196, "lanthanide"],
        ["Lu", "lutetium", 71, "solid", "#9ca3af", 9841, 1652, 3402, "lanthanide"],
        ["Hf", "hafnium", 72, "solid", "#64748b", 13310, 2233, 4603, "transition"],
        ["Ta", "tantalum", 73, "solid", "#475569", 16690, 3017, 5458, "transition"],
        ["W", "tungsten", 74, "solid", "#334155", 19250, 3422, 5930, "transition"],
        ["Re", "rhenium", 75, "solid", "#94a3b8", 21020, 3186, 5596, "transition"],
        ["Os", "osmium", 76, "solid", "#1e3a8a", 22590, 3033, 5012, "transition"],
        ["Ir", "iridium", 77, "solid", "#e2e8f0", 22560, 2446, 4428, "transition"],
        ["Pt", "platinum", 78, "solid", "#f8fafc", 21450, 1768, 3825, "transition"],
        ["Au", "gold", 79, "solid", "#fbbf24", 19300, 1064, 2856, "transition"],
        ["Hg", "mercury", 80, "liquid", "#cbd5e1", 13534, -39, 357, "transition"],
        ["Tl", "thallium", 81, "solid", "#64748b", 11850, 304, 1473, "post_transition"],
        ["Pb", "lead", 82, "solid", "#3f3f46", 11340, 327, 1749, "post_transition"],
        ["Bi", "bismuth", 83, "solid", "#f472b6", 9780, 271, 1564, "post_transition"],
        ["Po", "polonium", 84, "solid", "#4ade80", 9196, 254, 962, "radioactive"],
        ["At", "astatine", 85, "solid", "#22c55e", 7000, 302, 337, "radioactive"],
        ["Rn", "radon", 86, "gas", "#86efac", 9.73, -71, -62, "radioactive"],
        ["Fr", "francium", 87, "solid", "#a3e635", 2480, 27, 677, "radioactive"],
        ["Ra", "radium", 88, "solid", "#4ade80", 5500, 700, 1737, "radioactive"],
        ["Ac", "actinium", 89, "solid", "#34d399", 10070, 1050, 3200, "radioactive"],
        ["Th", "thorium", 90, "solid", "#52525b", 11724, 1750, 4788, "radioactive"],
        ["Pa", "protactinium", 91, "solid", "#6ee7b7", 15370, 1568, 4027, "radioactive"],
        ["U", "uranium", 92, "solid", "#16a34a", 19100, 1132, 4131, "radioactive"],
        ["Np", "neptunium", 93, "solid", "#15803d", 20450, 644, 3902, "radioactive"],
        ["Pu", "plutonium", 94, "solid", "#22c55e", 19816, 639, 3228, "radioactive"],
        ["Am", "americium", 95, "solid", "#4ade80", 12000, 1176, 2607, "radioactive"],
        ["Cm", "curium", 96, "solid", "#86efac", 13510, 1340, 3110, "radioactive"],
        ["Bk", "berkelium", 97, "solid", "#34d399", 14780, 986, 2627, "radioactive"],
        ["Cf", "californium", 98, "solid", "#10b981", 15100, 900, 1470, "radioactive"],
        ["Es", "einsteinium", 99, "solid", "#6ee7b7", 8840, 860, 996, "radioactive"],
        ["Fm", "fermium", 100, "solid", "#a7f3d0", 9700, 1527, 2500, "radioactive"],
        ["Md", "mendelevium", 101, "solid", "#34d399", 10300, 827, 2000, "radioactive"],
        ["No", "nobelium", 102, "solid", "#10b981", 9900, 827, 2000, "radioactive"],
        ["Lr", "lawrencium", 103, "solid", "#059669", 15600, 1627, 2500, "radioactive"],
        ["Rf", "rutherfordium", 104, "solid", "#2dd4bf", 23200, 2100, 5500, "superheavy"],
        ["Db", "dubnium", 105, "solid", "#14b8a6", 29300, 2500, 5500, "superheavy"],
        ["Sg", "seaborgium", 106, "solid", "#0d9488", 35000, 2800, 5500, "superheavy"],
        ["Bh", "bohrium", 107, "solid", "#0f766e", 37100, 2800, 5500, "superheavy"],
        ["Hs", "hassium", 108, "solid", "#06b6d4", 40700, 2800, 5500, "superheavy"],
        ["Mt", "meitnerium", 109, "solid", "#0891b2", 37400, 2800, 5500, "superheavy"],
        ["Ds", "darmstadtium", 110, "solid", "#0284c7", 34800, 2800, 5500, "superheavy"],
        ["Rg", "roentgenium", 111, "solid", "#2563eb", 28700, 2800, 5500, "superheavy"],
        ["Cn", "copernicium", 112, "liquid", "#3b82f6", 14000, 10, 67, "superheavy"],
        ["Nh", "nihonium", 113, "solid", "#6366f1", 16000, 430, 1100, "superheavy"],
        ["Fl", "flerovium", 114, "gas", "#8b5cf6", 9928, -73, -60, "superheavy"],
        ["Mc", "moscovium", 115, "solid", "#a855f7", 13500, 400, 1100, "superheavy"],
        ["Lv", "livermorium", 116, "solid", "#d946ef", 12900, 400, 800, "superheavy"],
        ["Ts", "tennessine", 117, "solid", "#ec4899", 7200, 400, 610, "superheavy"],
        ["Og", "oganesson", 118, "solid", "#f43f5e", 7000, 52, 177, "superheavy"]
    ];

    const stateToBehavior = {
        solid: behaviors.WALL,
        powder: behaviors.POWDER,
        liquid: behaviors.LIQUID,
        gas: behaviors.GAS
    };

    // 2. Register all missing elements into the "chemistry" category
    periodicTable.forEach(([sym, name, z, state, color, density, melt, boil, group]) => {
        if (!elements[name]) {
            const isMetal = ["alkali", "alkaline", "transition", "post_transition", "lanthanide", "radioactive", "superheavy"].includes(group);
            const molName = "molten_" + name;
            const gasName = name + "_gas";

            // Create molten & gas phases if needed
            if (state === "solid" || state === "powder") {
                elements[molName] = {
                    color: color,
                    behavior: behaviors.LIQUID,
                    category: "states",
                    state: "liquid",
                    density: density * 0.9,
                    temp: melt + 20,
                    tempLow: melt,
                    stateLow: name,
                    tempHigh: boil,
                    stateHigh: gasName,
                    conduct: isMetal ? 0.8 : 0.1,
                    hidden: true
                };
            }
            if (state !== "gas") {
                elements[gasName] = {
                    color: color,
                    behavior: behaviors.GAS,
                    category: "states",
                    state: "gas",
                    density: Math.max(0.5, density * 0.001),
                    temp: boil + 20,
                    tempLow: boil,
                    stateLow: state === "liquid" ? name : molName,
                    hidden: true
                };
            }

            // Base element definition
            const elDef = {
                color: color,
                behavior: stateToBehavior[state],
                category: "chemistry",
                state: state,
                density: density,
                conduct: isMetal ? 0.85 : 0.05,
                hardness: state === "solid" ? (isMetal ? 0.75 : 0.4) : 0.1,
                desc: `Element #${z} (${sym}) - ${group.replace("_", " ")}`,
                reactions: {}
            };

            if (state === "solid" || state === "powder") {
                elDef.tempHigh = melt;
                elDef.stateHigh = molName;
            } else if (state === "liquid") {
                elDef.tempHigh = boil;
                elDef.stateHigh = gasName;
                elDef.tempLow = melt;
                elDef.stateLow = "frozen_" + name;
                elements["frozen_" + name] = {
                    color: color,
                    behavior: behaviors.WALL,
                    category: "states",
                    state: "solid",
                    density: density * 1.05,
                    temp: melt - 10,
                    tempHigh: melt,
                    stateHigh: name,
                    hidden: true
                };
            } else if (state === "gas") {
                elDef.tempLow = boil;
                elDef.stateLow = "liquid_" + name;
                elements["liquid_" + name] = {
                    color: color,
                    behavior: behaviors.LIQUID,
                    category: "states",
                    state: "liquid",
                    density: 1000,
                    temp: boil - 10,
                    tempHigh: boil,
                    stateHigh: name,
                    hidden: true
                };
            }

            // Group-specific chemical behaviors
            if (group === "alkali") {
                // Alkali metals explode violently in water!
                elDef.reactions.water = { elem1: "explosion", elem2: "hydrogen", tempMin: -50 };
                elDef.reactions.salt_water = { elem1: "explosion", elem2: "hydrogen" };
                elDef.burn = 80;
                elDef.burnTime = 40;
                elDef.burnInto = "smoke";
            } else if (group === "alkaline") {
                // Alkaline earth metals fizz in water and burn bright white
                elDef.reactions.water = { elem2: "hydrogen", chance: 0.15 };
                elDef.burn = 50;
                elDef.burnTime = 120;
                elDef.fireColor = "#ffffff";
            } else if (group === "halogen") {
                // Halogens react with alkali metals to form salt and poison life
                elDef.reactions.sodium = { elem1: "salt", elem2: "salt" };
                elDef.reactions.potassium = { elem1: "salt", elem2: "salt" };
                elDef.reactions.head = { elem2: "cancer", chance: 0.2 };
                elDef.reactions.body = { elem2: "cancer", chance: 0.2 };
            } else if (group === "radioactive" || group === "superheavy") {
                // Radioactivity: heats up, emits radiation, and decays into lead/radon
                const decayTarget = group === "superheavy" ? "uranium" : "lead";
                const decayChance = group === "superheavy" ? 0.05 : 0.001;
                elDef.tick = function(pixel) {
                    pixel.temp += (group === "superheavy" ? 5 : 0.3);
                    if (Math.random() < 0.05) {
                        for (let coords of adjacentCoords) {
                            let x = pixel.x + coords[0];
                            let y = pixel.y + coords[1];
                            if (isEmpty(x, y)) {
                                createPixel("radiation", x, y);
                                break;
                            }
                        }
                    }
                    if (Math.random() < decayChance) {
                        changePixel(pixel, decayTarget);
                    }
                };
            }

            elements[name] = elDef;
        }
    });

    // 3. Add Essential Laboratory Chemicals & Compounds
    elements.sulfuric_acid = {
        color: ["#d9f99d", "#bef264"],
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1840,
        tempHigh: 337,
        stateHigh: "sulfur_dioxide",
        desc: "H2SO4 - Strong dehydrating mineral acid.",
        reactions: {
            water: { elem1: "acid", elem2: "acid", temp1: 45, temp2: 45 },
            sugar: { elem1: "carbon", elem2: "steam", temp1: 80 },
            iron: { elem1: "hydrogen", elem2: "rust", chance: 0.2 },
            zinc: { elem1: "hydrogen", elem2: null, chance: 0.3 },
            copper: { elem1: "sulfur_dioxide", elem2: null, chance: 0.1 },
            limestone: { elem1: "carbon_dioxide", elem2: "gypsum", chance: 0.3 }
        }
    };

    elements.hydrochloric_acid = {
        color: ["#ecfccb", "#e2e8f0"],
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1180,
        tempHigh: 110,
        stateHigh: "chlorine",
        desc: "HCl - Dissolves reactive metals into chlorides and Hydrogen.",
        reactions: {
            sodium_hydroxide: { elem1: "salt_water", elem2: "salt_water", temp1: 35 },
            zinc: { elem1: "hydrogen", elem2: null, chance: 0.35 },
            magnesium: { elem1: "hydrogen", elem2: null, chance: 0.45 },
            aluminum: { elem1: "hydrogen", elem2: null, chance: 0.25 },
            iron: { elem1: "hydrogen", elem2: null, chance: 0.15 },
            ammonia: { elem1: "smoke", elem2: "smoke" }
        }
    };

    elements.nitric_acid = {
        color: ["#fef08a", "#fde047"],
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1510,
        tempHigh: 83,
        stateHigh: "nitrogen_dioxide",
        desc: "HNO3 - Strong oxidizing acid; mix with HCl for Aqua Regia.",
        reactions: {
            hydrochloric_acid: { elem1: "aqua_regia", elem2: "aqua_regia" },
            copper: { elem1: "nitrogen_dioxide", elem2: null, chance: 0.3 },
            silver: { elem1: "nitrogen_dioxide", elem2: null, chance: 0.25 }
        }
    };

    elements.aqua_regia = {
        color: ["#f97316", "#ea580c"],
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1350,
        desc: "Royal Water (HNO3 + 3 HCl) - Capable of dissolving Gold and Platinum!",
        reactions: {
            gold: { elem1: "nitrogen_dioxide", elem2: null, chance: 0.25 },
            platinum: { elem1: "nitrogen_dioxide", elem2: null, chance: 0.2 },
            palladium: { elem1: "nitrogen_dioxide", elem2: null, chance: 0.25 }
        }
    };

    elements.sodium_hydroxide = {
        color: ["#f8fafc", "#e2e8f0"],
        behavior: behaviors.POWDER,
        category: "chemistry",
        state: "solid",
        density: 2130,
        tempHigh: 318,
        stateHigh: "molten_sodium_hydroxide",
        desc: "NaOH (Lye) - Strong base that neutralizes acids and dissolves organic matter.",
        reactions: {
            water: { elem1: "lye_solution", elem2: "lye_solution", temp1: 40 },
            acid: { elem1: "salt_water", elem2: "salt_water", temp1: 35 },
            sulfuric_acid: { elem1: "salt_water", elem2: "salt_water", temp1: 50 },
            fat: { elem1: "soap", elem2: "soap" },
            oil: { elem1: "soap", elem2: "soap", chance: 0.2 }
        }
    };

    elements.lye_solution = {
        color: "#e0f2fe",
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1200,
        desc: "Aqueous Sodium Hydroxide solution.",
        reactions: {
            acid: { elem1: "salt_water", elem2: "salt_water" },
            hydrochloric_acid: { elem1: "salt_water", elem2: "salt_water" },
            aluminum: { elem1: "hydrogen", elem2: null, chance: 0.2 }
        }
    };

    elements.hydrogen_peroxide = {
        color: "#dbeafe",
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1450,
        tempHigh: 150,
        stateHigh: "oxygen",
        desc: "H2O2 - Decomposes violently into Oxygen and Steam with catalysts.",
        reactions: {
            potassium: { elem1: "foam", elem2: "oxygen", temp1: 90 },
            manganese: { elem1: "foam", elem2: "manganese", temp1: 70 },
            blood: { elem1: "foam", elem2: "oxygen" },
            yeast: { elem1: "foam", elem2: "oxygen", temp1: 60 }
        }
    };

    elements.ammonia = {
        color: "#e0e7ff",
        behavior: behaviors.GAS,
        category: "chemistry",
        state: "gas",
        density: 0.73,
        tempLow: -33,
        stateLow: "liquid_ammonia",
        desc: "NH3 - Pungent alkaline gas.",
        reactions: {
            chlorine: { elem1: "nitrogen", elem2: "hydrochloric_acid", chance: 0.2 }
        }
    };

    elements.sulfur_dioxide = {
        color: "#fef9c3",
        behavior: behaviors.GAS,
        category: "chemistry",
        state: "gas",
        density: 2.63,
        desc: "SO2 - Combines with Oxygen and Water to form Sulfuric Acid.",
        reactions: {
            water: { elem1: "sulfuric_acid", elem2: "sulfuric_acid", chance: 0.1 },
            hydrogen_peroxide: { elem1: "sulfuric_acid", elem2: "sulfuric_acid" }
        }
    };

    elements.nitrogen_dioxide = {
        color: "#9a3412",
        behavior: behaviors.GAS,
        category: "chemistry",
        state: "gas",
        density: 2.05,
        desc: "NO2 - Toxic reddish-brown gas; dissolves in water to form Nitric Acid.",
        reactions: {
            water: { elem1: "nitric_acid", elem2: "nitric_acid", chance: 0.2 }
        }
    };

    elements.thermite = {
        color: ["#7f1d1d", "#9ca3af"],
        behavior: behaviors.POWDER,
        category: "chemistry",
        state: "solid",
        density: 4200,
        tempHigh: 1200,
        stateHigh: "molten_iron",
        burn: 100,
        burnTime: 80,
        burnInto: "molten_iron",
        fireColor: "#ffffff",
        desc: "Iron Oxide + Aluminum powder. Ignites at 1200°C to produce molten iron!"
    };

    elements.phenolphthalein = {
        color: "#f8fafc",
        behavior: behaviors.LIQUID,
        category: "chemistry",
        state: "liquid",
        density: 1000,
        desc: "pH Indicator - Turns bright magenta in bases, stays clear in acids.",
        reactions: {
            sodium_hydroxide: { color1: "#ec4899" },
            lye_solution: { color1: "#ec4899" },
            ammonia: { color1: "#ec4899" },
            acid: { color1: "#f8fafc" },
            hydrochloric_acid: { color1: "#f8fafc" },
            sulfuric_acid: { color1: "#f8fafc" }
        }
    };

    // 4. Add classic chemistry reactions to existing vanilla elements
    if (elements.iron && elements.aluminum) {
        elements.iron.reactions = elements.iron.reactions || {};
        elements.iron.reactions.aluminum = { elem1: "thermite", elem2: "thermite", tempMin: 200, chance: 0.05 };
    }
    if (elements.hydrogen && elements.oxygen) {
        elements.hydrogen.reactions = elements.hydrogen.reactions || {};
        elements.hydrogen.reactions.oxygen = { elem1: "steam", elem2: "explosion", tempMin: 500 };
    }
    if (elements.hydrogen && elements.chlorine) {
        elements.hydrogen.reactions = elements.hydrogen.reactions || {};
        elements.hydrogen.reactions.chlorine = { elem1: "hydrochloric_acid", elem2: "hydrochloric_acid", tempMin: 150 };
    }
    if (elements.nitrogen && elements.hydrogen) {
        elements.nitrogen.reactions = elements.nitrogen.reactions || {};
        elements.nitrogen.reactions.hydrogen = { elem1: "ammonia", elem2: "ammonia", tempMin: 400, chance: 0.1 };
    }

    console.log("Loaded Periodic Chemistry Mod: All 118 elements & lab compounds ready!");
})();