(function () {
"use strict";
angular.module("currencyExchange")

    .service("currenciesApi", function(){
        this.get = function(){

            return {
                    "USD": {
                        "symbol": "$",
                        "name": "American dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "USD"
                    },
                    "CAD": {
                        "symbol": "$",
                        "name": "Canadian dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CAD"
                    },
                    "EUR": {
                        "symbol": "€",
                        "name": "Euro",
                        "symbol_native": "€",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "EUR"
                    },
                    "AED": {
                        "symbol": "د.إ",
                        "name": "United Arab Emirates Dirham",
                        "symbol_native": "د.إ",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "AED"
                    },
                    "AFN": {
                        "symbol": "؋",
                        "name": "Afghan Afghani",
                        "symbol_native": "؋",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "AFN"
                    },
                    "ALL": {
                        "symbol": "L",
                        "name": "Albanian Lek",
                        "symbol_native": "L",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ALL"
                    },
                    "AMD": {
                        "symbol": "AMD",
                        "name": "Armenian Dram",
                        "symbol_native": "AMD",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "AMD"
                    },
                    "ARS": {
                        "symbol": "$",
                        "name": "Argentine Peso",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ARS"
                    },
                    "AUD": {
                        "symbol": "$",
                        "name": "Australian Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "AUD"
                    },
                    "AZN": {
                        "symbol": "AZN",
                        "name": "Azerbaijani manat",
                        "symbol_native": "AZN",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "AZN"
                    },
                    "BAM": {
                        "symbol": "КМ",
                        "name": "Bosnia and Herzegovina Convertible Mark",
                        "symbol_native": "KM",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BAM"
                    },
                    "BDT": {
                        "symbol": "৳",
                        "name": "Bangladeshi Taka",
                        "symbol_native": "৳",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BDT"
                    },
                    "BGN": {
                        "symbol": "лв",
                        "name": "Bulgarian Lev",
                        "symbol_native": "лв",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BGN"
                    },
                    "BHD": {
                        "symbol": ".د.ب",
                        "name": "Bahraini Dinar",
                        "symbol_native": ".د.ب",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "BHD"
                    },
                    "BIF": {
                        "symbol": "Fr",
                        "name": "Burundian Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "BIF"
                    },
                    "BND": {
                        "symbol": "$",
                        "name": "Brunei Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BND"
                    },
                    "BOB": {
                        "symbol": "Bs.",
                        "name": "Bolivian Boliviano",
                        "symbol_native": "Bs.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BOB"
                    },
                    "BRL": {
                        "symbol": "R$",
                        "name": "Brazilian Real",
                        "symbol_native": "R$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BRL"
                    },
                    "BWP": {
                        "symbol": "P",
                        "name": "Botswana Pula",
                        "symbol_native": "P",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BWP"
                    },
                    "BYR": {
                        "symbol": "Br",
                        "name": "Belarusian Ruble",
                        "symbol_native": "Br",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "BYR"
                    },
                    "BZD": {
                        "symbol": "$",
                        "name": "Belize Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BZD"
                    },
                    "CDF": {
                        "symbol": "Fr",
                        "name": "Congolese Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CDF"
                    },
                    "CHF": {
                        "symbol": "Fr",
                        "name": "Swiss Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 2,
                        "rounding": 0.05,
                        "code": "CHF"
                    },
                    "CLP": {
                        "symbol": "$",
                        "name": "Chilean Peso",
                        "symbol_native": "$",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "CLP"
                    },
                    "CNY": {
                        "symbol": "¥",
                        "name": "Chinese Yuan",
                        "symbol_native": "¥",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CNY"
                    },
                    "COP": {
                        "symbol": "$",
                        "name": "Colombian Peso",
                        "symbol_native": "$",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "COP"
                    },
                    "CRC": {
                        "symbol": "₡",
                        "name": "Costa Rican Colón",
                        "symbol_native": "₡",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "CRC"
                    },
                    "CVE": {
                        "symbol": "Esc",
                        "name": "Cape Verdean Escudo",
                        "symbol_native": "Esc",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CVE"
                    },
                    "CZK": {
                        "symbol": "Kč",
                        "name": "Czech Koruna",
                        "symbol_native": "Kč",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CZK"
                    },
                    "DJF": {
                        "symbol": "Fr",
                        "name": "Djiboutian Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "DJF"
                    },
                    "DKK": {
                        "symbol": "kr",
                        "name": "Danish Krone",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "DKK"
                    },
                    "DOP": {
                        "symbol": "$",
                        "name": "Dominican Peso",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "DOP"
                    },
                    "DZD": {
                        "symbol": "د.ج",
                        "name": "Algerian Dinar",
                        "symbol_native": "د.ج",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "DZD"
                    },
                    "EGP": {
                        "symbol": "ج.م",
                        "name": "Egyptian Pound",
                        "symbol_native": "ج.م",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "EGP"
                    },
                    "ERN": {
                        "symbol": "Nfk",
                        "name": "Eritrean nakfa",
                        "symbol_native": "Nfk",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ERN"
                    },
                    "ETB": {
                        "symbol": "Br",
                        "name": "Ethiopian birr",
                        "symbol_native": "Br",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ETB"
                    },
                    "GBP": {
                        "symbol": "£",
                        "name": "British Pound",
                        "symbol_native": "£",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GBP"
                    },
                    "GEL": {
                        "symbol": "GEL",
                        "name": "Georgian Lari",
                        "symbol_native": "GEL",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GEL"
                    },
                    "GHS": {
                        "symbol": "₵",
                        "name": "Ghanaian Cedi",
                        "symbol_native": "₵",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GHS"
                    },
                    "GNF": {
                        "symbol": "Fr",
                        "name": "Guinean Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "GNF"
                    },
                    "GTQ": {
                        "symbol": "Q",
                        "name": "Guatemalan Quetzal",
                        "symbol_native": "Q",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GTQ"
                    },
                    "HKD": {
                        "symbol": "$",
                        "name": "Hong Kong Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "HKD"
                    },
                    "HNL": {
                        "symbol": "L",
                        "name": "Honduran Lempira",
                        "symbol_native": "L",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "HNL"
                    },
                    "HRK": {
                        "symbol": "kn",
                        "name": "Croatian Kuna",
                        "symbol_native": "kn",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "HRK"
                    },
                    "HUF": {
                        "symbol": "Ft",
                        "name": "Hungarian Forint",
                        "symbol_native": "Ft",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "HUF"
                    },
                    "IDR": {
                        "symbol": "Rp",
                        "name": "Indonesian Rupiah",
                        "symbol_native": "Rp",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "IDR"
                    },
                    "ILS": {
                        "symbol": "₪",
                        "name": "Israeli New Shekel",
                        "symbol_native": "₪",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ILS"
                    },
                    "INR": {
                        "symbol": "₹",
                        "name": "Indian Rupee",
                        "symbol_native": "₹",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "INR"
                    },
                    "IQD": {
                        "symbol": "ع.د",
                        "name": "Iraqi Dinar",
                        "symbol_native": "ع.د",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "IQD"
                    },
                    "IRR": {
                        "symbol": "﷼",
                        "name": "Iranian Rial",
                        "symbol_native": "﷼",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "IRR"
                    },
                    "ISK": {
                        "symbol": "kr",
                        "name": "Icelandic Króna",
                        "symbol_native": "kr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ISK"
                    },
                    "JMD": {
                        "symbol": "J$",
                        "name": "Jamaican Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "JMD"
                    },
                    "JOD": {
                        "symbol": "د.ا",
                        "name": "Jordanian Dinar",
                        "symbol_native": "د.ا",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "JOD"
                    },
                    "JPY": {
                        "symbol": "¥",
                        "name": "Japanese Yen",
                        "symbol_native": "￥",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "JPY"
                    },
                    "KES": {
                        "symbol": "Sh",
                        "name": "Kenyan Shilling",
                        "symbol_native": "Sh",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "KES"
                    },
                    "KHR": {
                        "symbol": "៛",
                        "name": "Cambodian Riel",
                        "symbol_native": "៛",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "KHR"
                    },
                    "KMF": {
                        "symbol": "Fr",
                        "name": "Comorian Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "KMF"
                    },
                    "KRW": {
                        "symbol": "₩",
                        "name": "South Korean Won",
                        "symbol_native": "₩",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "KRW"
                    },
                    "KWD": {
                        "symbol": "د.ك",
                        "name": "Kuwaiti Dinar",
                        "symbol_native": "د.ك",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "KWD"
                    },
                    "KZT": {
                        "symbol": "KZT",
                        "name": "Kazakhstani Tenge",
                        "symbol_native": "KZT",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "KZT"
                    },
                    "LBP": {
                        "symbol": "ل.ل",
                        "name": "Lebanese Pound",
                        "symbol_native": "ل.ل",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "LBP"
                    },
                    "LKR": {
                        "symbol": "Rs",
                        "name": "Sri Lankan Rupee",
                        "symbol_native": "Rs",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "LKR"
                    },
                    "LYD": {
                        "symbol": "ل.د",
                        "name": "Libyan Dinar",
                        "symbol_native": "ل.د",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "LYD"
                    },
                    "MAD": {
                        "symbol": "د.م.",
                        "name": "Moroccan Dirham",
                        "symbol_native": "د.م.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MAD"
                    },
                    "MDL": {
                        "symbol": "L",
                        "name": "Moldovan Leu",
                        "symbol_native": "L",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MDL"
                    },
                    "MGA": {
                        "symbol": "Ar",
                        "name": "Malagasy ariary",
                        "symbol_native": "Ar",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "MGA"
                    },
                    "MKD": {
                        "symbol": "ден",
                        "name": "Macedonian Denar",
                        "symbol_native": "ден",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MKD"
                    },
                    "MMK": {
                        "symbol": "Ks",
                        "name": "Burmese Kyat",
                        "symbol_native": "Ks",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "MMK"
                    },
                    "MOP": {
                        "symbol": "P",
                        "name": "Macanese pataca",
                        "symbol_native": "P",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MOP"
                    },
                    "MUR": {
                        "symbol": "₨",
                        "name": "Mauritian Rupee",
                        "symbol_native": "₨",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "MUR"
                    },
                    "MXN": {
                        "symbol": "MX$",
                        "name": "Mexican peso",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MXN"
                    },
                    "MYR": {
                        "symbol": "RM",
                        "name": "Malaysian Ringgit",
                        "symbol_native": "RM",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MYR"
                    },
                    "MZN": {
                        "symbol": "MT",
                        "name": "Mozambican Metical",
                        "symbol_native": "MT",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MZN"
                    },
                    "NAD": {
                        "symbol": "$",
                        "name": "Namibian Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NAD"
                    },
                    "NGN": {
                        "symbol": "₦",
                        "name": "Nigerian naira",
                        "symbol_native": "₦",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NGN"
                    },
                    "NIO": {
                        "symbol": "C$",
                        "name": "Nicaraguan Córdoba",
                        "symbol_native": "C$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NIO"
                    },
                    "NOK": {
                        "symbol": "kr",
                        "name": "Norwegian Krone",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NOK"
                    },
                    "NPR": {
                        "symbol": "₨",
                        "name": "Nepalese rupee",
                        "symbol_native": "₨",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NPR"
                    },
                    "NZD": {
                        "symbol": "NZ$",
                        "name": "New Zealand dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NZD"
                    },
                    "OMR": {
                        "symbol": "ر.ع.",
                        "name": "Omani rial",
                        "symbol_native": "ر.ع.",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "OMR"
                    },
                    "PAB": {
                        "symbol": "B/.",
                        "name": "Panamanian balboa",
                        "symbol_native": "B/.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PAB"
                    },
                    "PEN": {
                        "symbol": "S/.",
                        "name": "Peruvian Sol",
                        "symbol_native": "S/.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PEN"
                    },
                    "PHP": {
                        "symbol": "₱",
                        "name": "Philippine peso",
                        "symbol_native": "₱",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PHP"
                    },
                    "PKR": {
                        "symbol": "₨",
                        "name": "Pakistani Rupee",
                        "symbol_native": "₨",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "PKR"
                    },
                    "PLN": {
                        "symbol": "zł",
                        "name": "Polish złoty",
                        "symbol_native": "zł",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PLN"
                    },
                    "PYG": {
                        "symbol": "₲",
                        "name": "Paraguayan guaraní",
                        "symbol_native": "₲",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "PYG"
                    },
                    "QAR": {
                        "symbol": "ر.ق",
                        "name": "Qatari riyal",
                        "symbol_native": "ر.ق",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "QAR"
                    },
                    "RON": {
                        "symbol": "lei",
                        "name": "Romanian Leu",
                        "symbol_native": "lei",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "RON"
                    },
                    "RSD": {
                        "symbol": "дин.",
                        "name": "Serbian Dinar",
                        "symbol_native": "дин.",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "RSD"
                    },
                    "RUB": {
                        "symbol": "RUB",
                        "name": "Russian Ruble",
                        "symbol_native": "RUB",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "RUB"
                    },
                    "RWF": {
                        "symbol": "Fr",
                        "name": "Rwandan Franc",
                        "symbol_native": "Fr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "RWF"
                    },
                    "SAR": {
                        "symbol": "ر.س",
                        "name": "Saudi Riyal",
                        "symbol_native": "ر.س",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SAR"
                    },
                    "SDG": {
                        "symbol": "ج.س.",
                        "name": "Sudanese Pound",
                        "symbol_native": "ج.س.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SDG"
                    },
                    "SEK": {
                        "symbol": "kr",
                        "name": "Swedish Krona",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SEK"
                    },
                    "SGD": {
                        "symbol": "$",
                        "name": "Singapore Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SGD"
                    },
                    "SOS": {
                        "symbol": "Sh",
                        "name": "Somali Shilling",
                        "symbol_native": "Sh",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "SOS"
                    },
                    "SYP": {
                        "symbol": "£",
                        "name": "Syrian pound",
                        "symbol_native": "£",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "SYP"
                    },
                    "THB": {
                        "symbol": "฿",
                        "name": "Thai Baht",
                        "symbol_native": "฿",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "THB"
                    },
                    "TND": {
                        "symbol": "د.ت",
                        "name": "Tunisian dinar",
                        "symbol_native": "د.ت",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "TND"
                    },
                    "TOP": {
                        "symbol": "T$",
                        "name": "Tongan Paʻanga",
                        "symbol_native": "T$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TOP"
                    },
                    "TRY": {
                        "symbol": "TL",
                        "name": "Turkish Lira",
                        "symbol_native": "TL",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TRY"
                    },
                    "TTD": {
                        "symbol": "$",
                        "name": "Trinidad and Tobago Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TTD"
                    },
                    "TWD": {
                        "symbol": "$",
                        "name": "New Taiwan Dollar",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TWD"
                    },
                    "TZS": {
                        "symbol": "Sh",
                        "name": "Tanzanian Shilling",
                        "symbol_native": "Sh",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "TZS"
                    },
                    "UAH": {
                        "symbol": "₴",
                        "name": "Ukrainian hryvnia",
                        "symbol_native": "₴",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "UAH"
                    },
                    "UGX": {
                        "symbol": "Sh",
                        "name": "Ugandan Shilling",
                        "symbol_native": "Sh",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "UGX"
                    },
                    "UYU": {
                        "symbol": "$",
                        "name": "Uruguayan Peso",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "UYU"
                    },
                    "UZS": {
                        "symbol": "UZS",
                        "name": "Uzbekistani som",
                        "symbol_native": "UZS",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "UZS"
                    },
                    "VEF": {
                        "symbol": "Bs",
                        "name": "Venezuelan bolívar",
                        "symbol_native": "Bs",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "VEF"
                    },
                    "VND": {
                        "symbol": "₫",
                        "name": "Vietnamese dong",
                        "symbol_native": "₫",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "VND"
                    },
                    "YER": {
                        "symbol": "﷼",
                        "name": "Yemeni Rial",
                        "symbol_native": "﷼",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "YER"
                    },
                    "ZAR": {
                        "symbol": "Rs",
                        "name": "South African Rand",
                        "symbol_native": "Rs",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ZAR"
                    },
                    "ZMK": {
                        "symbol": "ZK",
                        "name": "Zambian Kwacha",
                        "symbol_native": "ZK",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ZMK"
                    },
                    "ZMW": {
                        "symbol": "ZK",
                        "name": "Zambian Kwacha",
                        "symbol_native": "ZK",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ZMK"
                    }
                };

        };
    });
}());