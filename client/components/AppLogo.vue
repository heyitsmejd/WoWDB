<template>
  <div class="header-container">
    <nav class="navbar" role="navigation" aria-label="dropdown navigation">
      <div class="navbar-item">
        Database: 
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="/items">
          Items
        </a>

        <div class="navbar-dropdown">
          <a href="/weapons/">
            <li class="navbar-item"> 
                Weapons
              
              <ul>
                  <a href="/weapons/1h">
                    <li class="navbar-item category">
                      One-handed
                    </li>
                  </a>
              </ul>
            </li>
          </a>
          <li>
            <a class="navbar-item">
              Armor
            </a>
          </li>
          <a class="navbar-item">
            Containers
          </a>
          <a class="navbar-item">
            Consumables
          </a>
          <a class="navbar-item">
            Trade Goods
          </a>
          <a class="navbar-item">
            Projectiles
          </a>
          <a class="navbar-item">
            Quivers
          </a>
          <a class="navbar-item">
            Recipes
          </a>
          <a class="navbar-item">
            Misc
          </a>
          <a class="navbar-item">
            Quest
          </a>
          <a class="navbar-item">
            Keys
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Item Sets
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Druid
          </a>
          <a class="navbar-item">
            Hunter
          </a>
          <a class="navbar-item">
            Mage
          </a>
          <a class="navbar-item">
            Paladin
          </a>
          <a class="navbar-item">
            Priest
          </a>
          <a class="navbar-item">
            Rogue
          </a>
          <a class="navbar-item">
            Shaman
          </a>
          <a class="navbar-item">
            Warlock
          </a>
          <a class="navbar-item">
            Warrior
          </a>
          <a class="navbar-item">
            Uncategorized
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          NPCs
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Beasts
          </a>
          <a class="navbar-item">
            Critters
          </a>
          <a class="navbar-item">
            Demons
          </a>
          <a class="navbar-item">
            Dragonkin
          </a>
          <a class="navbar-item">
            Elementals
          </a>
          <a class="navbar-item">
            Giants
          </a>
          <a class="navbar-item">
            Humanoids
          </a>
          <a class="navbar-item">
            Mechanicals
          </a>
          <a class="navbar-item">
            Undead
          </a>
          <a class="navbar-item">
            Uncategorized
          </a>
        </div>
      
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Quests
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item navbar-side-link" >
            Eastern Kingdoms
            <span>
              
            </span>
          </a>
          <a class="navbar-item">
            Kalimdor
          </a>
          <a class="navbar-item">
            Dungeons
          </a>
          <a class="navbar-item">
            Raids
          </a>
          <a class="navbar-item">
            Classes
          </a>
          <a class="navbar-item">
            Professions
          </a>
          <a class="navbar-item">
            Battlegrounds
          </a>
          <a class="navbar-item">
            World Events
          </a>
          <a class="navbar-item">
            Misc
          </a>
          <a class="navbar-item">
            Uncategorized
          </a>
          <a class="navbar-item">
            Keys
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Zones
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item navbar-side-link" >
            Eastern Kingdoms
            <span>
              
            </span>
          </a>
          <a class="navbar-item">
            Kalimdor
          </a>
          <a class="navbar-item">
            Battlegrounds
          </a>
          <a class="navbar-item">
            Dungeons
          </a>
          <a class="navbar-item">
            Raids
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Spells
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item navbar-side-link" >
            Class Skills
            <span>
              
            </span>
          </a>
          <a class="navbar-item">
            Talents
          </a>
          <a class="navbar-item">
            Racials
          </a>
          <a class="navbar-item">
            Professions
          </a>
          <a class="navbar-item">
            Secondary Skills
          </a>
          <a class="navbar-item">
            Armor Proficiencies
          </a>
          <a class="navbar-item">
            Languages
          </a>
          <a class="navbar-item">
            Weapon Skills
          </a>
          <a class="navbar-item">
            Uncategorized
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Objects
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item navbar-side-link" >
            Books
            <span>
              
            </span>
          </a>
          <a class="navbar-item">
            Containers
          </a>
          <a class="navbar-item">
            Footlockers
          </a>
          <a class="navbar-item">
            Herbs
          </a>
          <a class="navbar-item">
            Mineral Veins
          </a>
          <a class="navbar-item">
            Quest
          </a>
          <a class="navbar-item">
            Uncategorized
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Factions
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item navbar-side-link" >
            Alliance
            <span>
              
            </span>
          </a>
          <a class="navbar-item">
            Horde
          </a>
          <a class="navbar-item">
            Neutral
          </a>
          <a class="navbar-item">
            PvP
          </a>
          <a class="navbar-item">
            Other
          </a>
        </div>
      </div>
      <div class="navbar-item navbar-end p-r-0">
              <div class="control has-icons-right">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-small is-right">
            <i class="fas fa-search"></i>
          </span>
        </div>
        </div>
    </nav>
  </div>
</template>
