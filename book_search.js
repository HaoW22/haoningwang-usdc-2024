/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    if (!Array.isArray(scannedTextObj) || scannedTextObj.length === 0) { // 0 books or wrong type
        return result; 
    }
    let found_content = null; // init var to store data 
    for (const book of scannedTextObj) { // Iterate through library/object
        if (Object.keys(book).length === 0) { // skip empty
            continue;
        }
        for (const bookData of book.Content) { // iterate through content of book
            if (bookData.Text.includes(searchTerm)) { // check if search term is in line of text
                found_content = {
                    "ISBN": book.ISBN, // add ISBN
                    "Page": bookData.Page, // add Page #
                    "Line": bookData.Line // add Line #
                };
                result.Results.push(found_content); // push found result to overall result
                break; 
            }
        }
    }
    return result; 
}

/** INPUTS
 * //////////////////////////////
 */
const input1 = [ // Input with No Books

]

const input2 = [ // Input with 1 Book and no content
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
        ]
    }
]

const input3 = "Hello USDC" // Wrong input type

const input4 = [ // Sample Text (use different inputs in Unit Test)
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            }
        ]
    }
]

const input6 = [ // Sample Multiple Books (use different inputs in Unit Test)
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum. Flag The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself Flag how he had managed to see, and"
            } 
        ]
    }
]

const input8 = [ // First Book Empty but second book has text; punctuation/special character
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {

            },
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own\' momentum. Flag The dark-"
            }
        ]
    }
]

const input10 = [ // Missing ISBN
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "Content": [
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            }
        ]
    }
]

const input11 = [ // Missing Page Number
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            }
        ]
    }
]

const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** OUTPUTS
 * /////////////////////////////
 */
const blank_the = { 
    "SearchTerm": "the",
    "Results": []
}

const output5 = { // Test 5, Test 8
    "SearchTerm": "simply",
    "Results": [
        { ISBN: "9780000528531", Page: 31, Line: 8 }
    ]
}

const output6 = { // Test 6
    "SearchTerm": "momentous",
    "Results": []
}

const output7 = { // Test 7
    "SearchTerm": "Flag",
    "Results": [
        { ISBN: "9780000528531", Page: 31, Line: 8 },
        { ISBN: "9780000528531", Page: 31, Line: 10 }
    ]
}

const output9 = { // Test 9
    "SearchTerm": "dark-",
    "Results": [
        { ISBN: "9780000528531", Page: 31, Line: 8 }
    ]
}

const output10 = { // Test 10
    "SearchTerm": "and",
    "Results": [
        { ISBN: undefined, Page: 31, Line: 8 }
    ]
}

const output11 = { // Test 11
    "SearchTerm": "and",
    "Results": [
        { ISBN: "9780000528531", Page: undefined, Line: 8 }
    ]
}

const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/* Haoning Unit Tests */
const test1 = findSearchTermInBooks("the", input1);
if (JSON.stringify(test1) === JSON.stringify(blank_the)) {
    console.log("PASS: Test 1 Haoning");
} else {
    console.log("PASS: Test 1 Haoning");
    console.log("Expected: ", blank_the);
    console.log("Recieved: ", test1);
}

const test2 = findSearchTermInBooks("the", input2);
if (JSON.stringify(test2) === JSON.stringify(blank_the)) {
    console.log("PASS: Test 2 Haoning");
} else {
    console.log("PASS: Test 2 Haoning");
    console.log("Expected: ", blank_the);
    console.log("Recieved: ", test2);
}

const test3 = findSearchTermInBooks("the", input3);
if (JSON.stringify(test3) === JSON.stringify(blank_the)) {
    console.log("PASS: Test 3 Haoning");
} else {
    console.log("PASS: Test 3 Haoning");
    console.log("Expected: ", blank_the);
    console.log("Recieved: ", test3);
}

const test4 = findSearchTermInBooks("the", input4);
if (JSON.stringify(test4) === JSON.stringify(blank_the)) {
    console.log("PASS: Test 4 Haoning");
} else {
    console.log("PASS: Test 4 Haoning");
    console.log("Expected: ", blank_the);
    console.log("Recieved: ", test4);
}

const test5 = findSearchTermInBooks("simply", input4);
if (JSON.stringify(test5) === JSON.stringify(output5)) {
    console.log("PASS: Test 5 Haoning");
} else {
    console.log("PASS: Test 5 Haoning");
    console.log("Expected: ", output5);
    console.log("Recieved: ", test5);
}

const test6 = findSearchTermInBooks("momentous", input6);
if (JSON.stringify(test6) === JSON.stringify(output6)) {
    console.log("PASS: Test 6 Haoning");
} else {
    console.log("PASS: Test 6 Haoning");
    console.log("Expected: ", output6);
    console.log("Recieved: ", test6);
}

const test7 = findSearchTermInBooks("Flag", input6);
if (JSON.stringify(test7) === JSON.stringify(output7)) {
    console.log("PASS: Test 7 Haoning");
} else {
    console.log("PASS: Test 7 Haoning");
    console.log("Expected: ", output7);
    console.log("Recieved: ", test7);
}

const test8 = findSearchTermInBooks("simply", input8);
if (JSON.stringify(test8) === JSON.stringify(output5)) {
    console.log("PASS: Test 8 Haoning");
} else {
    console.log("PASS: Test 8 Haoning");
    console.log("Expected: ", output5);
    console.log("Recieved: ", test8);
}

const test9 = findSearchTermInBooks("dark-", input8);
if (JSON.stringify(test9) === JSON.stringify(output9)) {
    console.log("PASS: Test 9 Haoning");
} else {
    console.log("PASS: Test 9 Haoning");
    console.log("Expected: ", output9);
    console.log("Recieved: ", test9);
}

const test10 = findSearchTermInBooks("and", input10);
if (JSON.stringify(test10) === JSON.stringify(output10)) {
    console.log("PASS: Test 10 Haoning");
} else {
    console.log("PASS: Test 10 Haoning");
    console.log("Expected: ", output10);
    console.log("Recieved: ", test10);
}

const test11 = findSearchTermInBooks("and", input11);
if (JSON.stringify(test11) === JSON.stringify(output11)) {
    console.log("PASS: Test 11 Haoning");
} else {
    console.log("PASS: Test 11 Haoning");
    console.log("Expected: ", output11);
    console.log("Recieved: ", test11);
}