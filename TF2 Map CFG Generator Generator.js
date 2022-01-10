//list of map names
//obtained by webscraping https://wiki.teamfortress.com/wiki/List_of_maps with the console
//last update: 2022-01-10 (YYYY-MM-DD)
let map_names = ["ctf_2fort","ctf_2fort_invasion","ctf_doublecross","ctf_doublecross_snowy","ctf_landfall","ctf_sawmill","ctf_snowfall_final","ctf_turbine","ctf_well","cp_5gorge","cp_badlands","cp_coldfront","cp_fastlane","cp_foundry","cp_freight_final1","cp_granary","cp_gullywash_final1","cp_metalworks","cp_powerhouse","cp_process_final","cp_sunshine_event","cp_snakewater_final1","cp_sunshine","cp_vanguard","cp_well","cp_yukon_final","cp_altitude","cp_dustbowl","cp_ambush_event","cp_egypt_final","cp_gorge","cp_gorge_event","cp_gravelpit","cp_junction_final","cp_manor_event","cp_mercenarypark","cp_mossrock","cp_mountainlab","cp_snowplow","cp_steel","cp_degrootkeep","cp_standin_final","tc_hydro","pl_badwater","pl_barnblitz","pl_bloodwater","pl_borneo","pl_breadspace","pl_fifthcurve_event","pl_cactuscanyon","pl_chilly","pl_enclosure_final","pl_frontier_final","pl_goldrush","pl_rumble_event","pl_hasslecastle","pl_millstone_event","pl_hoodoo_final","pl_pier","pl_coal_event","pl_precipice_event_final","pl_snowycoast","pl_swiftwater_final1","pl_terror_event","pl_thundermountain","pl_upward","pl_wutville_event","plr_bananabay","plr_hightower_event","plr_hightower","plr_nightfall_final","plr_pipeline","arena_badlands","arena_byre","arena_granary","arena_lumberyard_event","arena_lumberyard","arena_nucleus","arena_offblast_final","arena_ravine","arena_sawmill","arena_watchtower","arena_well","koth_badlands","koth_brazil","koth_cascade","koth_bagel_event","koth_viaduct_event","koth_lakeside_event","koth_harvest_final","koth_harvest_event","koth_highpass","koth_king","koth_lakeside_final","koth_slaughter_event","koth_lazarus","koth_los_muertos","koth_maple_ridge_event","koth_megalo","koth_undergrove_event","koth_moonshine_event","koth_nucleus","koth_probed","koth_sawmill","koth_synthetic_event","koth_slasher","koth_suijin","koth_viaduct","sd_doomsday_event","sd_doomsday","tr_dustbowl","tr_target","itemtest","cp_cloak","mvm_bigrock","mvm_coaltown","mvm_decoy","mvm_example","mvm_ghost_town","mvm_mannhattan","mvm_mannworks","mvm_rottenburg","rd_asteroid","ctf_foundry","ctf_gorge","ctf_hellfire","ctf_thundermountain","pass_brickyard","pass_district","pass_timbertown","pd_cursed_cove_event","pd_farmageddon","pd_monster_bash","pd_pit_of_death_event","pd_snowville_event","pd_watergate"];

//generate cfg file names
//example: "mapname" => "mapname.cfg"
let map_cfg_names = map_names.map(map_name => map_name + ".cfg");

//result .bat after generation
//comes included with header
let result = `@echo off
cd C:\\Program Files (x86)\\Steam\\steamapps\\common\\Team Fortress 2\\tf\\cfg
title TF2 Map CFG Generator
color 04
echo /------------------------WARNING----------------------\\
echo \\ This adds a LOT of files to your tf/maps directory! /
echo / Also it gets overwrites existing map.cfg files!     \\
echo \\ (It only targets those ${map_names.length} that come with the game) /
echo / Close this terminal unless you are sure of this!    \\
echo \\-----------------------------------------------------/
pause
color 0a
echo Starting...
echo //put your reset script here > mapreset.cfg`;

map_cfg_names.forEach(cfg_file_name => {
	result += "\necho exec mapreset.cfg > " + cfg_file_name;
});

result += "\necho Finished! Added " + map_names.length + " map.cfg's!\necho open up mapreset.cfg and start writing!\npause";

//console.log(result);
require('fs').writeFileSync('TF2 Map CFG Generator.bat', result);
