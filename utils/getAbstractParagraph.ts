export default function getAbstractParagraph(abstractStr : string) {
    const jsonAbstractObj = JSON.parse(abstractStr);
    var words = new Array(Object.keys(jsonAbstractObj)
        .reduce((max, key) => Math.max(max, ...jsonAbstractObj[key]), 0) + 1).fill("");
    
    for (var key in jsonAbstractObj) {
        var positions = jsonAbstractObj[key];
        for (var i = 0; i < positions.length; i++) {
            words[positions[i]] = key;
        }
    }
    var abstract = words.join(" ");
    abstract = abstract.replace(/ \. /g, ". ")
        .replace(/ , /g, ", ").replace(/ \( /g, " (").replace(/ \) /g, ") ");
    
    return abstract;
}