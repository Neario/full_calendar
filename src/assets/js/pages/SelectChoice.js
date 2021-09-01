import ChoicesJs from "choices.js";

const select = new ChoicesJs('select', {
	        removeItems: false,
            searchEnabled: true,
            position: 'bottom',
            removeItemButton: false,
            searchChoices: true,
            searchPlaceholderValue: 'Rechercher',
            itemSelectText: "",
            noResultsText: "Aucune company trouvée",
            shouldSort: false,
});
select.unhighlightAll()