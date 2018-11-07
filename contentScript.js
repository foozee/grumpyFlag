var flagMap = {"🇦🇩":"Andorra","🇦🇪":"United Arab Emirates","🇦🇫":"Afghanistan","🇦🇬":"Antigua & Barbuda","🇦🇮":"Anguilla","🇦🇱":"Albania","🇦🇲":"Armenia","🇦🇴":"Angola","🇦🇶":"Antarctica","🇦🇷":"Argentina","🇦🇸":"American Samoa","🇦🇹":"Austria","🇦🇺":"Australia","🇦🇼":"Aruba","🇦🇽":"Åland Islands","🇦🇿":"Azerbaijan","🇧🇦":"Bosnia & Herzegovina","🇧🇧":"Barbados","🇧🇩":"Bangladesh","🇧🇪":"Belgium","🇧🇫":"Burkina Faso","🇧🇬":"Bulgaria","🇧🇭":"Bahrain","🇧🇮":"Burundi","🇧🇯":"Benin","🇧🇱":"St. Barthélemy","🇧🇲":"Bermuda","🇧🇳":"Brunei","🇧🇴":"Bolivia","🇧🇶":"Caribbean Netherlands","🇧🇷":"Brazil","🇧🇸":"Bahamas","🇧🇹":"Bhutan","🇧🇼":"Botswana","🇧🇾":"Belarus","🇧🇿":"Belize","🇨🇦":"Canada","🇨🇨":"Cocos (Keeling) Islands","🇨🇩":"Congo - Kinshasa","🇨🇫":"Central African Republic","🇨🇬":"Congo - Brazzaville","🇨🇭":"Switzerland","🇨🇮":"Côte d’Ivoire","🇨🇰":"Cook Islands","🇨🇱":"Chile","🇨🇲":"Cameroon","🇨🇳":"China","🇨🇴":"Colombia","🇨🇷":"Costa Rica","🇨🇺":"Cuba","🇨🇻":"Cape Verde","🇨🇼":"Curaçao","🇨🇽":"Christmas Island","🇨🇾":"Cyprus","🇨🇿":"Czech Republic","🇩🇪":"Germany","🇩🇯":"Djibouti","🇩🇰":"Denmark","🇩🇲":"Dominica","🇩🇴":"Dominican Republic","🇩🇿":"Algeria","🇪🇨":"Ecuador","🇪🇪":"Estonia","🇪🇬":"Egypt","🇪🇭":"Western Sahara","🇪🇷":"Eritrea","🇪🇸":"Spain","🇪🇹":"Ethiopia","🇪🇺":"European Union","🇫🇮":"Finland","🇫🇯":"Fiji","🇫🇰":"Falkland Islands","🇫🇲":"Micronesia","🇫🇴":"Faroe Islands","🇫🇷":"France","🇬🇦":"Gabon","🇬🇧":"United Kingdom","🇬🇩":"Grenada","🇬🇪":"Georgia","🇬🇫":"French Guiana","🇬🇬":"Guernsey","🇬🇭":"Ghana","🇬🇮":"Gibraltar","🇬🇱":"Greenland","🇬🇲":"Gambia","🇬🇳":"Guinea","🇬🇵":"Guadeloupe","🇬🇶":"Equatorial Guinea","🇬🇷":"Greece","🇬🇸":"South Georgia & South Sandwich Islands","🇬🇹":"Guatemala","🇬🇺":"Guam","🇬🇼":"Guinea-Bissau","🇬🇾":"Guyana","🇭🇰":"Hong Kong SAR China","🇭🇳":"Honduras","🇭🇷":"Croatia","🇭🇹":"Haiti","🇭🇺":"Hungary","🇮🇨":"Canary Islands","🇮🇩":"Indonesia","🇮🇪":"Ireland","🇮🇱":"Israel","🇮🇲":"Isle of Man","🇮🇳":"India","🇮🇴":"British Indian Ocean Territory","🇮🇶":"Iraq","🇮🇷":"Iran","🇮🇸":"Iceland","🇮🇹":"Italy","🇯🇪":"Jersey","🇯🇲":"Jamaica","🇯🇴":"Jordan","🇯🇵":"Japan","🇰🇪":"Kenya","🇰🇬":"Kyrgyzstan","🇰🇭":"Cambodia","🇰🇮":"Kiribati","🇰🇲":"Comoros","🇰🇳":"St. Kitts & Nevis","🇰🇵":"North Korea","🇰🇷":"South Korea","🇰🇼":"Kuwait","🇰🇾":"Cayman Islands","🇰🇿":"Kazakhstan","🇱🇦":"Laos","🇱🇧":"Lebanon","🇱🇨":"St. Lucia","🇱🇮":"Liechtenstein","🇱🇰":"Sri Lanka","🇱🇷":"Liberia","🇱🇸":"Lesotho","🇱🇹":"Lithuania","🇱🇺":"Luxembourg","🇱🇻":"Latvia","🇱🇾":"Libya","🇲🇦":"Morocco","🇲🇨":"Monaco","🇲🇩":"Moldova","🇲🇪":"Montenegro","🇲🇬":"Madagascar","🇲🇭":"Marshall Islands","🇲🇰":"Macedonia","🇲🇱":"Mali","🇲🇲":"Myanmar (Burma)","🇲🇳":"Mongolia","🇲🇴":"Macau SAR China","🇲🇵":"Northern Mariana Islands","🇲🇶":"Martinique","🇲🇷":"Mauritania","🇲🇸":"Montserrat","🇲🇹":"Malta","🇲🇺":"Mauritius","🇲🇻":"Maldives","🇲🇼":"Malawi","🇲🇽":"Mexico","🇲🇾":"Malaysia","🇲🇿":"Mozambique","🇳🇦":"Namibia","🇳🇨":"New Caledonia","🇳🇪":"Niger","🇳🇫":"Norfolk Island","🇳🇬":"Nigeria","🇳🇮":"Nicaragua","🇳🇱":"Netherlands","🇳🇴":"Norway","🇳🇵":"Nepal","🇳🇷":"Nauru","🇳🇺":"Niue","🇳🇿":"New Zealand","🇴🇲":"Oman","🇵🇦":"Panama","🇵🇪":"Peru","🇵🇫":"French Polynesia","🇵🇬":"Papua New Guinea","🇵🇭":"Philippines","🇵🇰":"Pakistan","🇵🇱":"Poland","🇵🇲":"St. Pierre & Miquelon","🇵🇳":"Pitcairn Islands","🇵🇷":"Puerto Rico","🇵🇸":"Palestinian Territories","🇵🇹":"Portugal","🇵🇼":"Palau","🇵🇾":"Paraguay","🇶🇦":"Qatar","🇷🇪":"Réunion","🇷🇴":"Romania","🇷🇸":"Serbia","🇷🇺":"Russia","🇷🇼":"Rwanda","🇸🇦":"Saudi Arabia","🇸🇧":"Solomon Islands","🇸🇨":"Seychelles","🇸🇩":"Sudan","🇸🇪":"Sweden","🇸🇬":"Singapore","🇸🇭":"St. Helena","🇸🇮":"Slovenia","🇸🇰":"Slovakia","🇸🇱":"Sierra Leone","🇸🇲":"San Marino","🇸🇳":"Senegal","🇸🇴":"Somalia","🇸🇷":"Suriname","🇸🇸":"South Sudan","🇸🇹":"São Tomé & Príncipe","🇸🇻":"El Salvador","🇸🇽":"Sint Maarten","🇸🇾":"Syria","🇸🇿":"Swaziland","🇹🇨":"Turks & Caicos Islands","🇹🇩":"Chad","🇹🇫":"French Southern Territories","🇹🇬":"Togo","🇹🇭":"Thailand","🇹🇯":"Tajikistan","🇹🇰":"Tokelau","🇹🇱":"Timor-Leste","🇹🇲":"Turkmenistan","🇹🇳":"Tunisia","🇹🇴":"Tonga","🇹🇷":"Turkey","🇹🇹":"Trinidad & Tobago","🇹🇻":"Tuvalu","🇹🇼":"Taiwan","🇹🇿":"Tanzania","🇺🇦":"Ukraine","🇺🇬":"Uganda","🇺🇸":"United States","🇺🇾":"Uruguay","🇺🇿":"Uzbekistan","🇻🇦":"Vatican City","🇻🇨":"St. Vincent & Grenadines","🇻🇪":"Venezuela","🇻🇬":"British Virgin Islands","🇻🇮":"U.S. Virgin Islands","🇻🇳":"Vietnam","🇻🇺":"Vanuatu","🇼🇫":"Wallis & Futuna","🇼🇸":"Samoa","🇽🇰":"Kosovo","🇾🇪":"Yemen","🇾🇹":"Mayotte","🇿🇦":"South Africa","🇿🇲":"Zambia","🇿🇼":"Zimbabwe","🎌":"crossed flags","🏁":"chequered flag","🏳️":"white flag","🏳️‍🌈":"rainbow flag","🏴":"black flag","🚩":"triangular flag"}



var contentArea = document.getElementById('contentArea');

var config = { attributes: false, childList: true, subtree: true };
var callback = function(mutationsList) {
    document.querySelectorAll('._6qdm').forEach(function (node) {
        let emoji = node.textContent.trim();
        if (flagMap.hasOwnProperty(emoji)) {
            node.title =  flagMap[emoji];
        }
    });
};

var observer = new MutationObserver(callback);
observer.observe(contentArea, config);